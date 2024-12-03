import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Nyan } from '../../assets';

const useStyles = makeStyles(theme => ({
  bg: {
    width: '100%',
  },
  nyan: {
    width: '2rem',
    height: '2rem',
    position: 'relative',
    animation: '$nyanEffect infinite 10s ease-in-out',
  },
  '@keyframes nyanEffect': {
    '0%': {
      transform: 'scaleX(1)',
      left: '0px',
    },
    '0.01%': {
      transform: 'scaleX(1)',
      left: '0px',
    },
    '49.99%': {
      transform: 'scaleX(1)',
      left: 'calc(100% - 2rem)',
    },
    '50%': {
      transform: 'scaleX(-1)',
      left: 'calc(100% - 2rem)',
    },
    '50.01%': {
      transform: 'scaleX(-1)',
      left: 'calc(100% - 2rem)',
    },
    '99.99%': {
      transform: 'scaleX(-1)',
      left: '0px',
    },
    '100%': {
      transform: 'scaleX(1)',
      left: '0px',
    },
  },
}));

export const NyanComponent = ({ ...props }) => {
  const classes = useStyles();

  return (
    <div className={classes.bg} {...props.bg}>
      <div className={classes.nyan} {...props.nyan}>
        <Nyan {...props} />
      </div>
    </div>
  );
};
