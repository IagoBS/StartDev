import React from 'react';
import {useSelector} from 'react-redux'
import { View, Text } from 'react-native';
import Routes from './routes';
export default function componentName() {
  const singed = useSelector(state => state.auth.singed);
  const Routes createRouter(singed);
  return (
   <Routes/> 
  );
}
