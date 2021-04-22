import {func} from 'prop-types';
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

const SingIn = ({navigation}) => {
  const passwordRef = useRef();
  function hadleSubbimit() {}
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={() => handleSubmit}
          />
          <SubmitButton onPress={() => hadleSubbimit}>Acessar</SubmitButton>
        </Form>
        <SignLink onPress={() => navigation.navigate('SingUp')}>
          <SingInLinkText>Criar conta gratuita</SingInLinkText>
        </SignLink>
      </Container>
    </Background>
  );
};

export default SingIn;
