import React from 'react';
import {Input} from "./components/Input";
import {Container, Content, Wrapper} from "./styles";
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {Button} from "./components/Button";
import {IFormLogin, defaultValues} from "./types"

const schema = yup.object({
  email: yup.string().email("Email inválido").required("Campo obrigatório"),
  password: yup.string().min(6, "Senha inválida").required("Campo obrigatório"),
}).required();
type FormData = yup.InferType<typeof schema>;
function App() {

  const {
    control,
    formState: {errors, isValid},
  } = useForm <IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues: defaultValues,
    reValidateMode: "onChange"
  })

  console.log(isValid)
  return (
    <Container>
      <Content>
        <Wrapper>
          <Input control={control} name={"email"} placeholder={"email"} errorMessage={errors?.email?.message}/>
          <Input control={control} name={"password"} placeholder={"password"} type={"password"} errorMessage={errors?.password?.message}/>
          <Button value={"Fazer login"} disable={!isValid}/>
        </Wrapper>
      </Content>
    </Container>
  );
}

export default App;
