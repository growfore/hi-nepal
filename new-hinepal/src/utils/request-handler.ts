async function get(request: TRequest): Promise<void> {
  const { endPoint, token, params, success, failure, enableCaching, nextOptions } = request;

  let url = endPoint;
  if (params && Object.keys(params).length > 0) {
    const queryString = Object.keys(params)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
      )
      .join("&");
    url = `${endPoint}?${queryString}`;
  }

  try {
    const fetchOptions: any = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
      cache: enableCaching ? "force-cache" : "default",
    };
    if (nextOptions) fetchOptions.next = nextOptions;

    const response = await fetch(url, fetchOptions);

    let data: any;
    try {
      data = await response.json(); // try parse JSON
    } catch (jsonError) {
      // fallback to text if JSON fails
      const text = await response.text();
      data = { message: text || "Failed to parse JSON" };
    }

    if (!response.ok) {
      throw new Error(response.statusText || "error");
    }
    // const data = await response.json();

    if (response.ok) success(data?.message || "success", data);
  } catch (error: any) {
    failure(error || "error");
  }
}

async function post(request: TRequest): Promise<void> {
  const { endPoint, token, success, failure } = request;
  try {
    const response: TpostResponse = await fetch(endPoint, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
      body: JSON.stringify(request.data || {}),
    });
    const data = await response.json();
    if (!response.ok) {
      failure(data?.message || "error");
    }
    if (response.ok) success(data?.message || "success", data);
  } catch (error: any) {
    failure(error?.message || "error");
  }
}
async function patch(request: TRequest) {
  const { endPoint, token, success, failure } = request;
  try {
    const response: TpatchResponse = await fetch(endPoint, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "PATCH",
      body: JSON.stringify(request.data || {}),
    });
    const data = await response.json();
    if (!response.ok) {
      failure(data?.message || "error");
    }
    if (response.ok) success(data?.message || "success", data);
  } catch (error: any) {
    failure(error?.message || "error");
  }
}
async function del(request: TRequest): Promise<void> {
  const { endPoint, token, success, failure } = request;
  try {
    const response: TdeleteResponse = await fetch(endPoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "DELETE",
    });
    const data = await response.json();
    if (!response.ok) {
      failure(data?.message || "error");
    }
    if (response.ok) success(data?.message || "success", data);
  } catch (error: any) {
    failure(error?.message || "error");
  }
}

async function postWithFile(request: TRequest) {
  const { endPoint, token, success, failure } = request;
  try {
    const response: TpostWithFileResponse = await fetch(endPoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
      body: request.data,
    });
    const data = await response.json();
    if (!response.ok) {
      failure(data?.message || "error");
    }
    if (response.ok) success(data?.message || "success", data);
  } catch (error: any) {
    failure(error?.message || "error");
  }
}
async function patchWithFile(request: TRequest) {
  const { endPoint, token, success, failure } = request;
  try {
    const response: TpostWithFileResponse = await fetch(endPoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "PATCH",
      body: request.data,
    });
    const data = await response.json();
    if (!response.ok) {
      failure(data?.message || "error");
    }
    if (response.ok) success(data?.message || "success", data);
  } catch (error: any) {
    failure(error?.message || "error");
  }
}
export { get, post, patch, del, postWithFile, patchWithFile };

// types here
type TRequest = {
  endPoint: string;
  token?: string;
  params?: any;
  data?: any;
  enableCaching?: boolean;
  nextOptions?: any;
  success: (message: string, data: any) => void;
  failure: (message: string) => void;
};

type TpostResponse = any;
type TpatchResponse = any;
type TdeleteResponse = any;
type TpostWithFileResponse = any;
