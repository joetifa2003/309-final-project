export const getApiUrl = () =>
  process.env.NODE_ENV === "production" ? "" : "http://localhost:2000";
