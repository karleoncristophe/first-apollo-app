export const localUser = JSON.parse(
  localStorage.getItem("@localUser") || "{}"
) || {
  id: "1",
  name: "name",
  email: "email@email.com",
};
export const token = localStorage.getItem("@token") || "";
