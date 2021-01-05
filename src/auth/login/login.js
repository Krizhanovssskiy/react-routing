import React, {useState} from "react";
import { connect } from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';
import { Redirect} from 'react-router-dom'
import {singIn} from '../service/actions'
import {getUser} from '../service/selectors'
import styles from './Login.module.css'

// console.log(styles , 'styles ')

const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 3,
    span: 16,
  },
};

const Login = (props) => {

  const [remember, setRemember] = useState(true);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onFinish = values => {
    console.log('Success:', values);
    props.singIn(values)
  };

  const onFinishFailed = errorInfo => {
    // console.log('Failed:', errorInfo);
  };

  const onChange = (e) => {
    if (e.target.name === 'password') {
      setPassword(e.target.value)
    } else if (e.target.name === 'userName') {
      setUserName(e.target.value)
    }
  }

  // console.log(userName, password, 'userName, password')
  if (props.user) {
    const url = props.location.state;
    return <Redirect to={'/'}/>
  }
  return (
      <div
          className={styles.login}
      >
        <Form
            {...layout}
            name="basic"
            // initialValues={remember}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
          <Form.Item
              label="Username"
              name="username"
              rules={[{required: true, message: 'Please input your username!'}]}
          >
            <Input name='userName' value={userName} onChange={onChange} />
          </Form.Item>

          <Form.Item
              label="Password"
              name="password"
              rules={[{required: true, message: 'Please input your password!'}]}
          >
            <Input.Password
                name='password'
                value={password}
                onChange={onChange}
            />
          </Form.Item>

          {/*<Form.Item {...tailLayout} name="remember" valuePropName="checked">*/}
          {/*  <Checkbox>Remember me</Checkbox>*/}
          {/*</Form.Item>*/}

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>

  );
}

const mapStateToProps = (state) => {
  console.log(state.authReducer, 'state')
  return{
    user: getUser(state),
  }
}

const mapDispatchToProps = {
  singIn,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
