export const API_GET = async (url) => {
  try {
    const res = await fetch(url, {
      headers: {
        ContentType: "application/json",
      },
    });
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

export const API_POST = async (url, body) => {
  const res = await fetch(url, {
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

export const API_POST_AUTH = async (url, body, token) => {
  const res = fetch(url, {
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
