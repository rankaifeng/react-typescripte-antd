import React, { Component } from 'react';
import { UserLogin, createEmptyLogin } from '../model/Login';
import { Form, Icon, Input, Button } from 'antd';
import { isValidLogin } from '../api/login/login';
type Props = Readonly<{
  form: any;
}>;
interface State {
  loginInfo: UserLogin;
}
class Login extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loginInfo: createEmptyLogin(),
    };
  }
  handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('object');
    this.props.form.validateFields((err: boolean, values: UserLogin) => {
      if (!err) {
        if (isValidLogin(values)) {
          alert('登录成功');
        } else {
          alert('登录失败');
        }
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);
export default WrappedNormalLoginForm;
