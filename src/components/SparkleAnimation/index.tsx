import React from 'react';
import { motion } from 'framer-motion';
import './styles.scss';

const SparkleAnimation = () => {
  return (
    <>
      <motion.div
        className={'pattern-stars'}
        data-id='1'
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ repeat: Infinity, duration: 4, repeatType: 'mirror', delay: 1 }}
      />
      <motion.div
        className={'pattern-stars'}
        data-id='2'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 3, repeatType: 'mirror', delay: 2 }}
      />
      <motion.div
        className={'pattern-stars'}
        data-id='3'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: 'mirror', delay: 2 }}
      />
      <motion.div
        className={'pattern-stars'}
        data-id='4'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 5, repeatType: 'mirror', delay: 4 }}
      />
      <motion.div
        className={'pattern-stars'}
        data-id='5'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 5, repeatType: 'mirror', delay: 0.2 }}
      />
    </>
  );
};

export default SparkleAnimation;