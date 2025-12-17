import endpoints from '@/constant/endpoints';
import { getCookie } from '@/lib/cookie-handler';
import { get } from '@/utils/request-handler';

async function fetchData(endPoint: string) {
  let data: any = undefined;
  await get({
    endPoint: `${endpoints.API_BASE_URL}/${endPoint}`,
    success: (_, response) => {
      data = response.data;
    },
    enableCaching: true,
    token: (await getCookie('token')) || undefined,
    failure: (message) => {
      console.log(message);
    },
  });
  return data;
}

export { fetchData };