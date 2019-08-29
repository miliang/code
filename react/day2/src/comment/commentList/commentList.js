/**
 * Created by Administrator on 2018/4/10.
 */
import React from 'react'
import './commentList.css'
import Item from './../commentItem/commentItem'
// let commentArr = [
//   {id:1,autor:"张三",date:"三天前",content:"马上要就业了"},
//   {id:2,autor:"李四",date:"三天前",content:"马上要就业了"},
//   {id:3,autor:"王五",date:"三天前",content:"哈哈"},
//   {id:4,autor:"赵六",date:"三天前",content:"救不了"},
//   {id:5,autor:"李鑫",date:"三天前",content:"找工作怎么办"}
// ]
class CommentList extends React.Component{
  // 定义一个方法  从服务器获得数据
  constructor(props){
    super(props)
    // 初始化state
    console.log(this.props)
    // this.state.data = {data:this.props}
  }
  render(){
    console.log(this.props)
    let list = this.props.data.map( item => <Item key={item.id} date={item.date} author={item.author}>{item.content}</Item>)

    return(
        <div className="myList">
          <h2>我是list</h2>
          {/*{list}*/}
          {this.props.data.map((item,index,arr)=>{
            // console.log(item)
            // console.log(index)
            // console.log(arr)
          return (<Item key={item.id} date={item.date} author={item.author}>{item.content}</Item>)
        })}
        </div>
    )
  }
}
export default CommentList