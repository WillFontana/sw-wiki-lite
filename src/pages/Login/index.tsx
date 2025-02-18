import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Input from "../../components/Form/Input";
import Password from "../../components/Form/Password";
import { LoginContainer, LoginCard, LoginTitle } from "./styles";
import { loginUser } from "../../services/authService";
import { useLocation, useNavigate } from "react-router-dom";
import SwitchAuthButton from "../../components/Buttons/SwitchAuthButton";
import Button from "../../components/Buttons/Button";

const loginSchema = z.object({
  email: z.string().email("Invalid email").nonempty("Email is required"),
  userPassword: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .regex(/[A-Za-z]/, "Password must contain at least one letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[\W_]/, "Password must contain at least one symbol"),
});

type LoginForm = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const prefilledEmail = location.state?.email || "";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: prefilledEmail,
    },
  });

  const onSubmit = (data: LoginForm) => {
    const response = loginUser(data.email, data.userPassword);

    if (response.success) {
      navigate("/");
    } else {
      alert(response.message);
    }
  };

  return (
    <LoginContainer>
      <LoginCard>
        <LoginTitle>Login</LoginTitle>
        <form style={{ marginTop: 20 }} onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="E-mail"
            placeholder="yourbestemail@mail.com"
            type="email"
            error={errors.email?.message}
            {...register("email")}
          />
          <Password
            style={{ marginTop: 20 }}
            label="Password"
            placeholder="Insert password"
            error={errors.userPassword?.message}
            {...register("userPassword")}
          />
          <Button type="submit">Acessar</Button>

          <SwitchAuthButton url="/register">Register</SwitchAuthButton>
        </form>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
