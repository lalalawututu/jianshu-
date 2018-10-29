import React, { PureComponent } from 'react';
import { 
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style';
import { connect } from 'react-redux';
import { actionCreators }from './store';
import { Redirect } from 'react-router-dom';

class Login extends PureComponent {

  componentDidMount() {

  }

  render() {
    const { login, loginStatus } = this.props;
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="账号" innerRef={(input) => {this.account = input}}/>
            <Input placeholder="密码" type='password' innerRef={(input) => {this.password = input}}/>
            <Button onClick={() => login(this.account, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to='/' />
    }  
  }
}

const mapStateToProps = (state) => {
  return {
    loginStatus: state.getIn(['login', 'login']),
  }
}

const mapDispatchToProps = (dispatch) => ({
  login(accountEle, passwordEle) {
    dispatch(actionCreators.login(accountEle, passwordEle))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);