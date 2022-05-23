// export const api_url = `http://192.168.1.11`;
export const api_url = `http://127.0.0.1:4000/api/v1`;

export const getReqOptions = (tk) => ({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const registerReqOptions = () => ({
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
