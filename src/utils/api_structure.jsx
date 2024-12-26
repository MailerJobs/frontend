// @ts-ignore
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

import { toast } from "react-toastify";

export const API_GET = async (url_post) => {
  const URL = BASE_URL + url_post;
  try {
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error("Network Responce was not ok");
    }
    const result = await res.json();
    const status = res.status;
    return { result, status };
  } catch (error) {
    console.error("Api Error: " + error.message);
  }
};

export const API_POST = async (url_post, body) => {
  const URL = BASE_URL + url_post;

  const res = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    throw new Error("Network Responce was not ok");
  }
  const result = await res.json();
  const status = res.status;
  // console.log(JSON.stringify(result));

  return { result, status };
  // return result
};

export const API_POST_AUTH = async (url_post, body, token) => {
  const URL = BASE_URL + url_post;

  const res = fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });
  if (!(await res).ok) {
    throw new Error("Network Responce was not ok");
  }
  const result = (await res).json();
  const status = (await res).status;
  return { result, status };
};

// export const API_POST_CITY = async (url, body) => {
//   const res = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(body),
//   });
//   if (!res.ok) {
//     throw new Error("Network Responce was not ok");
//   }
//   const result = await res.json();
//   const status = res.status;
//   // console.log(JSON.stringify(result));

//   return { result, status };
//   // return result
// };

export const API_POST_PIC = async (url_post, body) => {
  const URL = BASE_URL + url_post;
  try {
    const res = await fetch(URL, {
      method: "POST",
      body: body,
    });
    if (!res.ok) {
      throw new Error("Network Responce was not ok");
    }
    const result = await res.json();
    const status = res.status;

    return { result, status };
  } catch (error) {
    console.error("error: " + error.message);
  }
};

export const API_DELETE = async (url_post) => {
  const URL = BASE_URL + url_post;
  try {
    const res = await fetch(URL, {
      method: "DELETE",
    });
    const result = await res.json();
    const status = res.status;

    return { result, status };
  } catch (error) {
    console.error("Error: " + error.message);
  }
};

export const API_PATCH_AUTH = async (url_post, body, token) => {
  const URL = BASE_URL + url_post;

  const res = await fetch(URL, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
    credentials: 'include'
  });
  if (!res.ok) {
    throw new Error("Network Responce was not ok");
  }
  const result = await res.json();
  const status = res.status;
  return { result, status };
};

export const API_POST_APPLY = async (url_post, body) => {
  try {
    const URL = BASE_URL + url_post;

    const res = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const result = await res.json();
    if (res.status == 200) {
      toast.success("Job Applied", {
        position: "top-center",
        theme: "light",
        closeOnClick: true,
        pauseOnHover: true,
      });
    } else if (res.status == 409) {
      toast.warn("Job Already Applied", {
        position: "top-center",
        theme: "light",
        closeOnClick: true,
        pauseOnHover: true,
      });
    }

    return { result };
  } catch (error) {
    console.error("Error: " + error.message);
  }
};

export const API_POST_LOGIN = async (url_post, body) => {
  const URL = BASE_URL + url_post;

  const res = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    credentials: 'include'
  });
  if (!res.ok) {
    throw new Error("Network Responce was not ok");
  }
  const result = await res.json();
  const status = res.status;
  // console.log(JSON.stringify(result));

  return { result, status };
  // return result
};

export const API_POST_STUDENT = async (url_post, body) => {
  const URL = BASE_URL + url_post;

  const res = await fetch(URL, {
    method: "POST",
    body: body,
  });
  if (!res.ok) {
    throw new Error("Network Responce was not ok");
  }
  const result = await res.json();
  const status = res.status;
  // console.log(JSON.stringify(result));

  return { result, status };
  // return result
};
