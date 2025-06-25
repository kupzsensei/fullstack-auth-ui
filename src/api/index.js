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
  console.log("response only", response);
  return await response.json();
};

export const requesApprovalAPI = async (data) => {
  console.log("who are you ? ", data);
  const response = await fetch(`${BASE_URL}/api/request-approval/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
};
