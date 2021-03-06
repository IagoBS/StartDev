import React from 'react';

import {View, ActivityIndicator, Text} from 'react-native';
import PropTypes from 'prop-types';
import {Container} from './styles';

const Button = ({children, loading, ...rest}) => {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
};
Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};
Button.defaultProps = {
  loading: false,
};
export default Button;
