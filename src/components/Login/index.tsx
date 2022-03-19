import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { useForm } from "react-hook-form";

import { Container } from "./styles";
import { Button } from "../Button";
import { CustomInput } from "../CustomInput";

export const Login = () => {
  const { logo } = useContext(ThemeContext);
  const {
    register,
    //handleSubmit,
    //reset,
    formState: { errors /*isSubmitSuccessful*/ },
  } = useForm({
    //resolver: yupResolver(newTransactionSchema),
  });
  return (
    <Container>
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
      />

      <span>Esqueceu sua senha?</span>

      <Button>Entrar</Button>

      <p>
        Não tem uma conta? <span>Cadastre-se</span>
      </p>
    </Container>
  );
};
