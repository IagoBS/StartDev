import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Input from '../../components/Input';
import Background from '../../components/Background';
import {Container} from './styles';
import api from '../../services/api';
const Main = () => {
  const [paginates, setPaginate] = useState([]);
  useEffect(() => {
    async function loadProviders() {
      const response = await api.get('project');
      setPaginate(response.data);
    }
    loadProviders()
  }, []);
  return (
    <Background>
      <Container>
        <ProviderList data={provider => String(provider._id)} renderItem={({}) => (
          <Project>
            <Name>{provider.name}</Name>
            <Description>{provider.description}</Description>

          </Project>
        )}/>
 
                   </Container>
    </Background>
  );
};

export default Main;
