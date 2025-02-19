/**
 * Como não é utilizado nenhuma api para o cadastro e login, os dados são salvos localmente no localstorage apenas para mantermos os fluxos dos mesmos!
 */

export interface IUser {
  email: string;
  name: string;
  password: string;
  birthDate: string;
}

const getUsers = (): IUser[] => {
  return JSON.parse(localStorage.getItem("users") || "[]");
};

const saveUsers = (users: IUser[]) => {
  localStorage.setItem("users", JSON.stringify(users));
};

export const registerUser = (userData: IUser) => {
  const users = getUsers();

  if (users.some((user) => user.email === userData.email)) {
    return { success: false, message: "Email already registered" };
  }

  users.push(userData);
  saveUsers(users);

  return { success: true, message: "User registered successfully" };
};

export const loginUser = (email: string, password: string) => {
  const users = getUsers();
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!user) {
    return { success: false, message: "Invalid email or password" };
  }

  const token = generateToken();
  localStorage.setItem("authToken", token);

  return { success: true, token };
};

export const isAuthenticated = (): boolean =>
  !!localStorage.getItem("authToken");

export const logoutUser = () => {
  localStorage.removeItem("authToken");
};

const generateToken = (): string => {
  return `${Math.random().toString(36).substring(2)}-${Date.now()}`;
};
