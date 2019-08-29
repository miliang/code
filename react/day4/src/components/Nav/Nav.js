/**
 * Created by Administrator on 2018/4/12.
 */
import React from 'react'
import {Menu,Icon} from 'antd'
import {Link} from 'react-router-dom'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

export default class Nav extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      current : 'mail'
    }
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render(){
    return(
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
          <Menu.Item key="mail">
            <Link to={
              {pathname:"/ProductList"}
            }>
              <Icon type="mail" />产品罗列
            </Link>
          </Menu.Item>
          <Menu.Item key="app">
            <Link to={
              {pathname:"/Shopping"}
            }>
              <Icon type="appstore" />购物车
            </Link>

          </Menu.Item>
          <Menu.Item key="login">
            <Link to={
              {pathname:"/Login"}
            }>
              <Icon type="setting" />登录
            </Link>

          </Menu.Item>
        </Menu>
    )
  }
}
