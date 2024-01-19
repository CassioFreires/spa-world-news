import { AuthContainer, Section, ErrorSpan } from "./AuthenticationStyled";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema } from "../../schemas/signin.schema";
import { signupSchema } from "../../schemas/signup.schema";

export default function Authentication() {

  const {
    register: registerSignin,
    handleSubmit: handleSubmitSignin,
    reset: resetSignin,
    formState: { errors: errorsSignin },
  } = useForm({resolver: zodResolver(signinSchema)});


  const {
    register: registerSubmitSignup, 
    handleSubmit: handleSubmitSignup,
    reset: resetSignup,
    formState: {errors: errorSignup}
  } = useForm({resolver: zodResolver(signupSchema)})

  const signin = (data) => {
    console.log(data);
  };

  const signup = (data) => {
    console.log(data);
  };

  return (
    <AuthContainer>
      <Section type={"signin"}>
        <h2>Entrar</h2>
        <form onSubmit={handleSubmitSignin(signin)}>
          <Input type={"email"} placeholder={"Digite seu email"} name={"email"} register={registerSignin("email")}/>
          {errorsSignin.email? <ErrorSpan>{errorsSignin.email.message}</ErrorSpan> : ""}

          <Input type={"password"} placeholder={"Digite sua senha"} name={"password"} register={registerSignin("password")}/>
          {errorsSignin.password? <ErrorSpan>{errorsSignin.password.message}</ErrorSpan> : ""}
          <Button type={"submit"} text={"Entrar"} />       
        </form>
      </Section>

      <Section type={"signup"}>
        <h2>Cadastrar</h2>
        <form onSubmit={handleSubmitSignup(signup)}>
          <Input type={"text"} placeholder={"Nome"} name={"name"} register={registerSubmitSignup('name')}/>
          {errorSignup.name? <ErrorSpan>{errorSignup.name.message}</ErrorSpan> : ""} 

          <Input type={"email"} placeholder={"Email"} name={"email"} register={registerSubmitSignup('email')}/>
          {errorSignup.email? <ErrorSpan>{errorSignup.email.message}</ErrorSpan> : ""} 

          <Input type={"password"} placeholder={"Senha"} name={"password"} register={registerSubmitSignup('password')}/>
          {errorSignup.password? <ErrorSpan>{errorSignup.password.message}</ErrorSpan> : ""} 

          <Input type={"password"} placeholder={"Confirma senha"} name={"confirmPassword"} register={registerSubmitSignup('confirmPassword')}/>
          {errorSignup.confirmPassword? <ErrorSpan>{errorSignup.confirmPassword.message}</ErrorSpan> : ""} 

          <Button type={"submit"} text={"Cadastrar"} />
        </form>
      </Section>
    </AuthContainer>
  );
}
