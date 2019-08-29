/**
 * Created by Administrator on 2018/4/12.
 */
import React, { Component } from 'react';
class Login extends Component {
  setLogin = ()=>{
    console.log(123)
    // 触发父组件的事件然后改变状态
    this.props.onSetLogin()
  }
  render() {
    return (
        <div>
          <h1>Login页面</h1>
          <button onClick={this.setLogin}>登录</button>
        </div>
    );
  }
}
export default Login;