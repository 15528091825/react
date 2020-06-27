import React, { Component } from 'react'
import {connect} from "react-redux"
import {InputItem,Flex,WhiteSpace,Button,Icon,WingBlank} from "antd-mobile"
import "./chat.css"
 class Chat extends Component {
     constructor(){
         super();
         this.state={
             val:"hah",
             showbox1:"block",
             showbox2:"none",
         }
     }
    render() {
    
        return (
            <div style={{height:"100%",width:"100%"}}>
                <Flex className="middlebox" justify="center" style={{display:this.state.showbox1}}>
                    <img className="ico" src={require('../../../assets/imgs/setting1.png')}/>
                    <div>置业顾问:<label style={{color:"green",fontWeight:"bold"}}>张小妹</label></div>
                    <div>专业服务诚信做人诚心做事</div>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <button size="large" className="btn"  onClick={this.showchat.bind(this)}>我要聊天</button>

                </Flex>
                <div style={{display:this.state.showbox2,padding:"15px"}} className="chatnow">
                <WhiteSpace/>
                  <Flex justify="end"> <Icon type='cross-circle' onClick={this.closechat.bind(this)}  /></Flex> 
                   <div className="chartear">
                       <div  className="chartbox">
                            {
                                    this.props.text.map((item)=>{
                                    
                                        return <p style={{textAlign:item.type ? 'right' : 'left'}} key={item.msg}>{item.msg}</p>
                                    })
                                }
                       </div>
                      
                        <div className="chartsend">
                            <InputItem className="ipt"
                                placeholder="请输入信息"
                                onChange={(val)=> this.setState({val:val})}
                                clear
                                value={this.state.val}
                            
                             />
                        <button className="bbt" onClick={this.sendmsg.bind(this)}>发送</button>
                        </div>
                   </div>
                </div>
            </div>
        )
    }
    showchat(){
        this.setState({
            showbox1:"none",
            showbox2:"block",
        })
    }
    closechat(){
        this.setState({
            showbox1:"block",
            showbox2:"none",
        })
    }
    // 更改仓库
    sendmsg(){
       
        this.props.dispatch({
            type:"sendMsg",
            list:{type:1,msg:this.state.val}
        })
        this.setState({
            val:"",
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
