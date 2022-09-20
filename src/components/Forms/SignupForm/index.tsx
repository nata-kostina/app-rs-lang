import React from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { RouteNames } from '../../../router';
import { SignupValues } from '../../../types/types';
import { rules } from '../../../utils/rules';
import '../styles.scss';

interface SignupFormProps {
  onFinish: (values: SignupValues) => void,
}

const SignupForm = ({ onFinish }: SignupFormProps) => {
  return (
    <Form
      name="signin"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        validateTrigger="onBlur"
        rules={[rules.required('Enter your name')]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        validateTrigger="onBlur"
        rules={[rules.required('Enter e-mail'), rules.isEmailCorrect()]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        validateTrigger="onBlur"
        rules={[rules.required('Enter password'), rules.isPasswordCorrect()]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Sign up
        </Button>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <span>Already have account? </span>
        <Link to={RouteNames.AUTHORIZATION}>
          Login
        </Link>
      </Form.Item>
    </Form>
  );
};

export default SignupForm;