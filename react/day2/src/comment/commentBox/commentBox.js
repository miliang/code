/**
 * Created by Administrator on 2018/4/10.
 */
import React from 'react'
import './commentBox.css'
import List from './../commentList/commentList'
import CommentForm from './../commentForm/commentForm'
class CommentBox extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      // data:[
      //   {id:1,author:"张三",date:"三天前",content:"马上要就业了"},
      //   {id:2,author:"李四",date:"三天前",content:"马上要就业了"},
      //   {id:3,author:"王五",date:"三天前",content:"哈哈"},
      //   {id:4,author:"赵六",date:"三天前",content:"救不了"},
      //   {id:5,author:"李鑫",date:"三天前",content:"找工作怎么办"}
      // ]
      data:[]
    }
  }
  componentDidMount(){
    fetch('/getdata.do',{
      method:'get'
    }).then(resp =>{
      return resp.json()
    }).then((data) =>{
      this.setState({data:data})
    })
  }

  myUpdate(obj){
    // 发起请求  当数据库操作成功{
    //
    // }
    let currentData = this.state.data
    currentData.push(obj)
    this.setState({
      data:currentData
    })
  }
  render(){
    // box组件需要list组件和form组件
    // console.log(this.state.data)
    return(
        <div className="myBox">
          <div>
            <h1>评论</h1>
          </div>
          <CommentForm onUpDate={this.myUpdate.bind(this)}/>
          {/*做出判断  如果有数据 渲染list组件*/}
          { this.state.data.length > 0 && this.state.data &&

           <List data={this.state.data}/>}

          {/*<List data={this.state.data}/>*/}
        </div>
    )
  }
}
export default CommentBox