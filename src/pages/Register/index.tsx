import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Form/Input";
import Password from "../../components/Form/Password";
import { StyledRegisterContainer, StyledRegisterForm } from "./styles";
import { registerUser } from "../../services/authService";
import SwitchAuthButton from "../../components/Buttons/SwitchAuthButton";
import Button from "../../components/Buttons/Button";

const registerSchema = z
  .object({
    name: z.string().nonempty("Name is required"),
    email: z.string().email("Invalid email").nonempty("Email is required"),
    userPassword: z
      .string()
      .min(6, "Password must be at least 6 characters long"),
    confirmPassword: z.string().nonempty("Confirm Password is required"),
    birthDate: z.string().nonempty("Date of Birth is required"),
  })
  .refine((data) => data.userPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterForm = z.infer<typeof registerSchema>;

const Register: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterForm) => {
    const response = registerUser({
      name: data.name,
      email: data.email,
      password: data.userPassword,
      birthDate: data.birthDate,
    });

    if (response.success) {
      navigate("/login", { state: { email: data.email } });
    } else {
      alert(response.message);
    }
  };

  return (
    <StyledRegisterContainer>
      <StyledRegisterForm onSubmit={handleSubmit(onSubmit)}>
        <h2>Register</h2>

        <Input
          label="Full Name"
          {...register("name")}
          error={errors.name?.message}
        />
        <Input
          label="Email"
          {...register("email")}
          error={errors.email?.message}
        />
        <Password
          label="Password"
          {...register("userPassword")}
          error={errors.userPassword?.message}
        />
        <Password
          label="Confirm Password"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />
        <Input
          type="date"
          label="Date of Birth"
          {...register("birthDate")}
          error={errors.birthDate?.message}
        />

        <Button type="submit">Sign Up</Button>

        <SwitchAuthButton url="/login">Login</SwitchAuthButton>
      </StyledRegisterForm>
    </StyledRegisterContainer>
  );
};

export default Register;
