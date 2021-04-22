import React, {useRef} from 'react';
import {View, Text, Image} from 'react-native';
import logo from '../../assets/logo.jpeg';
import Background from '../../components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SingInLinkText,
} from './styles';

const SingUp = ({navigation}) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  function hadleSubbimit() {}
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu nome completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            ref={emailRef}
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={hadleSubbimit}
          />
          <SubmitButton onPress={hadleSubbimit}>Acessar</SubmitButton>
        </Form>
        <SignLink onPress={() => navigation.navigate('Login')}>
          <SingInLinkText>Já possui uma conta?</SingInLinkText>
        </SignLink>
      </Container>
    </Background>
  );
};

export default SingUp;
