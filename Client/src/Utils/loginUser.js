import { showError } from "./ToastBar";
const loginUser = async (userData) => {
  const response = await fetch("/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(userData),
  });

  const data = await response.json();
  if (!response.ok) {
      console.table(data);
      showError(data.message);
      throw new Error(data.message || "Login failed"); 
    }
  console.log("Logged In");

  return data;
};
export default loginUser;