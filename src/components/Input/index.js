import React, {forwardRef} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, TtInput} from './styles';

const Input = ({styled, icon, ...rest}, ref) => {
  return (
    <Container style={styled}>
      {icon && <Icon name={icon} size={40} color="rgba(255, 255, 255, 0.4)" />}
      <TtInput {...rest} ref={ref}></TtInput>
    </Container>
  );
  Input.PropTypes = {
    icon: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  };
  Input.defaultProps = {
    icon: null,
    style: {},
  };
};

export default forwardRef(Input);
