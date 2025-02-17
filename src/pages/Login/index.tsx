import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Input from "../../components/Form/Input";
import Password from "../../components/Form/Password";
import { LoginContainer, LoginCard, LoginTitle, LoginButton } from "./styles";

const loginSchema = z.object({
  email: z.string().email("E-mail inválido").nonempty("E-mail obrigatório"),
  userPassword: z
    .string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .regex(/[A-Za-z]/, "A senha deve ter pelo menos uma letra")
    .regex(/[0-9]/, "A senha deve ter pelo menos um número")
    .regex(/[\W_]/, "A senha deve ter pelo menos um símbolo"),
});

type LoginForm = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginForm) => {
    console.log("Dados do formulário:", data);
  };

  return (
    <LoginContainer>
      <LoginCard>
        <LoginTitle>Entrar</LoginTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="E-mail"
            placeholder="Digite seu e-mail"
            type="email"
            error={errors.email?.message}
            {...register("email")}
          />
          <Password
            label="Senha"
            placeholder="Digite sua senha"
            error={errors.userPassword?.message}
            {...register("userPassword")}
          />
          <LoginButton type="submit">Acessar</LoginButton>
        </form>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
