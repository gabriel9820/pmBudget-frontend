import { useForm } from "react-hook-form";

import darkLogo from "../../assets/darkLogo.png";
import lightLogo from "../../assets/lightLogo.png";

import { Container } from "./styles";
import { Button } from "../Button";
import { CustomInput } from "../CustomInput";

export const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    //resolver: yupResolver(newTransactionSchema),
  });
  return (
    <Container>
      <img src={true ? darkLogo : lightLogo} alt="pmBudget" />

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
