import React, { Component } from 'react'
import {connect} from "react-redux"
import {InputItem} from "antd-mobile"
 class Chat extends Component {
     constructor(){
         super();
         this.state={
             val:"hah"
         }
     }
    render() {
    
        return (
            <div>
                聊天
                <div>
                    {
                        this.props.text.map((item)=>{
                           
                            return <p style={{textAlign:item.type ? 'right' : 'left'}} key={item.msg}>{item.msg}</p>
                        })
                    }
                    <InputItem
                            placeholder="请输入用户名"
                            onChange={(val)=> this.setState({val:val})}
                            clear
                            value={this.state.val}
                           
                    />
                    <button onClick={this.sendmsg.bind(this)}>发送</button>
                </div>
            </div>
        )
    }
    sendmsg(){
        this.props.dispatch({
            type:"sendMsg",
            list:{type:1,msg:this.state.val}
        })
        console.log("触发")
    }
}
function filter(state){
    return {
        text:state.text
    }
}
export default connect(filter)(Chat)
