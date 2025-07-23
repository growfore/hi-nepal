import { getCookie } from '@/lib/cookie-handler';
import endpoints from '@/utils/endpoints';
import { get, patch, post, uploadFile } from '@/utils/request-helper';
import toast from 'react-hot-toast';

async function fetchData(endPoint: string) {
  let data: any = undefined;
  await get({
    endPoint: `${endpoints.API_URL}/${endPoint}`,
    success: (_, response) => {
      data = response.data;
    },
    token: (await getCookie('token')) || undefined,
    failure: (message) => {
      console.log(message);
    },
  });
  return data;
}
async function postAndPatch(endPoint: string, data: any, id?: string | number) {
  if (id) {
    await patch({
      endPoint: `${endpoints.API_URL}/${endPoint}/${id}`,
      success: (message, response) => {
        data = response.data;
        toast.success(message || 'Data updated successfully');
      },
      data,
      token: (await getCookie('token')) || undefined,
      failure: (message) => {
        toast.error(message || 'Something went wrong');
        data = undefined;
      },
    });
    return data;
  } else
    await post({
      endPoint: `${endpoints.API_URL}/${endPoint}`,
      success: (message, response) => {
        data = response.data;
        toast.success(message || 'Data updated successfully');
      },
      data,
      token: (await getCookie('token')) || undefined,
      failure: (message) => {
        toast.error(message || 'Something went wrong');
        data = undefined;
      },
    });
  return data;
}
async function uploadImage(img: File | string) {
  const formData = new FormData();

  formData.append('image', img);
  formData.append('folderName', 'blogs');
  let image = undefined;
  await uploadFile({
    endPoint: endpoints.UPLOAD,
    data: formData,
    token: await getCookie('token'),
    success: (_, response) => {
      image = response.imageUrl;
    },
    failure: (message) => {
      toast.error(message);
    },
  });
  return image;
}

export { fetchData, postAndPatch, uploadImage };
