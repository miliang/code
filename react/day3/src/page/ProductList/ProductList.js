/**
 * Created by Administrator on 2018/4/12.
 */
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class ProductList extends Component {
  constructor(){
    super()
    this.state = {
      data:[
        {id: 1, productName: "产品1", time: "刚上架"},
        {id: 2, productName: "产品2", time: "三天前上架"},
        {id: 3, productName: "产品3", time: "昨天上架"}]
    }
  }
  render() {

    return (
        <div>
          <h1>产品罗列</h1>
          {this.state.data.map((item,index)=>{
            return (
            <div key={item.id}>
              <Link to={{pathname:"/Detail", query:{id:item.id, name:item.productName}}}>
                <h1>商品名称:{item.productName}</h1>
              </Link>
              <h2>商品时间:{item.time}</h2>
            </div>)
          })}
        </div>
    );
  }
}
export default ProductList;