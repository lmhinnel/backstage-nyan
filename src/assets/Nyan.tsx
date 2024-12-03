import React from 'react';
import nyan from './nyan.gif';

export const Nyan = ({ ...props }) => (
  <img src={props?.img ?? nyan} alt="nyan" width="100%" />
);

export default Nyan;
