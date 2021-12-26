export const apiPath =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3500/api/v1"
    : "http://localhost:3500/api/v1";
