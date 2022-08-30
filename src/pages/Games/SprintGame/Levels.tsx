import { Card, Radio, RadioChangeEvent } from 'antd';
import React, { useState } from 'react';
import { useActions } from '../../../hooks/useActions';
import { GamePhase } from '../../../types/types';
import { useAppSelector } from './../../../hooks/useAppSelector';
import {generateRandomWords} from './utils';

const Levels = () => {
  const [value, setValue] = useState();
  const { setPhaseAction, setGameWordsAction, setWordsAction } = useActions();
  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    generateRandomWords({group: e.target.value, amount: 60, setWordsAction})
    .then((pairs) => {
      console.log('PAIRS', pairs);
      setGameWordsAction(pairs);
      setPhaseAction(GamePhase.STARTED);
    })
    .catch((error) => console.log(error));
  }; 
  return (
    <Card style={{margin: 'auto', width: '70%'}}>
      <p>Choose Level</p>
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={0}>Extra Easy</Radio>
        <Radio value={1} >Easy</Radio>
        <Radio value={2}>Medium</Radio>
        <Radio value={3}>Medium+</Radio>
        <Radio value={4}>Hard</Radio>
        <Radio value={5}>Extra Hard</Radio>
      </Radio.Group>
    </Card>
  );
};

export default Levels;