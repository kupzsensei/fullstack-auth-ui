export const BASE_URL = "http://127.0.0.1:8000";

export const getUserAPI = async () => {
  const response = await fetch(`${BASE_URL}/api/auth/users/`);

  return await response.json();
};

export const requestOvertimAPI = async (data) => {
  const response = await fetch(`${BASE_URL}/api/overtime/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: data,
  });

  return await response.json();
};

export const getOTRequestAPI = async (data) => {
  const response = await fetch(`${BASE_URL}/api/overtime/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    // body: data,
  });

  return await response.json();
};
