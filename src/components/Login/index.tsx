import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Container } from "./styles";
import { Button } from "../Button";
import { CustomInput } from "../CustomInput";

import { ILoginFormFields, loginSchema } from "./schema";
import { apiExceptionHandler } from "../../utils/exception-handler";
import { loginAsync } from "../../services/auth.service";
import { useAppDispatch } from "../../store";
import { loginUser } from "../../store/auth/actions";

export const Login = () => {
  const { logo } = useContext(ThemeContext);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormFields>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      username: "string",
      password: "Teste@123",
    },
  });

  const handleLogin = async (data: any) => {
    try {
      const { data: apiResponse } = await loginAsync(
        data.username,
        data.password
      );

      dispatch(loginUser(apiResponse.data));
      localStorage.setItem("acessToken", apiResponse.data.accessToken);
    } catch (error) {
      apiExceptionHandler(error);
    }
  };

  return (
    <Container onSubmit={handleSubmit(handleLogin)}>
      <img src={logo} alt="pmBudget" />

      <CustomInput
        register={register("username")}
        errors={errors.username}
        placeholder="Usuário"
      />

      <CustomInput
        register={register("password")}
        errors={errors.password}
        placeholder="Senha"
        type="password"
      />

      <span>Esqueceu sua senha?</span>

      <Button>Entrar</Button>

      <p>
        Não tem uma conta? <span>Cadastre-se</span>
      </p>
    </Container>
  );
};
