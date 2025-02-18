export interface IUser {
  email: string;
  name: string;
  password: string;
  birthDate: string;
}

export const registerUser = (userData: {
  name: string;
  email: string;
  password: string;
  birthDate: string;
}) => {
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const userExists = users.some((user: IUser) => user.email === userData.email);
  if (userExists) {
    return { success: false, message: "Email already registered" };
  }

  users.push(userData);
  localStorage.setItem("users", JSON.stringify(users));

  return { success: true, message: "User registered successfully" };
};

export const loginUser = (email: string, password: string) => {
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const user = users.find(
    (user: IUser) => user.email === email && user.password === password
  );

  if (!user) {
    return { success: false, message: "Invalid email or password" };
  }

  const token = Math.random().toString(36).substring(2);
  localStorage.setItem("authToken", token);

  return { success: true, token };
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("authToken");
};

export const logoutUser = () => {
  localStorage.removeItem("authToken");
};
