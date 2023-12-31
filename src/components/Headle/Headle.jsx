import PropTypes from 'prop-types';
import React from 'react';
import { HeadleDiv } from './Headle.styled';
export const Headle = ({ children }) => {
  return <HeadleDiv>{children}</HeadleDiv>;
};
Headle.propTypes = {
  children: PropTypes.any.isRequired,
};
