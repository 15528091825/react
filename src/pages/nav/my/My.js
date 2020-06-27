import React, { Component } from 'react'
import {Link} from "react-router-dom"
import { List,Flex,WingBlank} from 'antd-mobile';

import "./my.css"
const Item = List.Item;
export default class My extends Component {
    
    constructor(){
        super();
        this.state={
            linklist:[
                {id:1,money:0,icon:require('../../../assets/imgs/qb.png'),title:"钱包"},
                {id:2,money:0,icon:require('../../../assets/imgs/yh.png'),title:"优惠"},
                {id:3,money:0,icon:require('../../../assets/imgs/jf.png'),title:"积分"},
            ],
            list:[
                {icon:'jjf.png',name:"我的积分",src:""},
                {icon:'dy.png',name:"我的订阅",src:""},
                {icon:'rq.png',name:"微聊联系人",src:""},
                {icon:'jisuanqi.png',name:"房贷计算器",src:"",tip:'1'},
                {icon:'sc.png',name:"我的房子",src:""},
                {icon:'jl.png',name:"我的看房记录",src:"",tip:'1'},
                {icon:'wd.png',name:"我的问答",src:""},
                {icon:'ssz.png',name:"设置",src:"",tip:'1'},
                {icon:'yh.png',name:"意见反馈",src:""},
              
            ],
            islogin:"登录/注册"
        }
    }
    render() {
      
        return (
            <div className="my">
               <div className="topfrom">
                    <div className="info">
                        <img className="titleimg" src={require('../../../assets/imgs/setting1.png')}/>
                        <div className="linkitem">
                            <div className="loginreg" onClick={this.linktologin.bind(this)}>
                              {this.state.islogin}
                            </div>
                            <Link to="" style={{fontSize:"12px",marginTop:"5px"}}>可以与经纪人发起聊天</Link>
                        </div>
                        <img className="settingimg" src={require('../../../assets/imgs/setting2.png')}/>
                    </div>
                    <Flex className="choose" justify="around">
                        {
                            this.state.linklist.map((obj,i)=>{
                                return   <div className="chooseitem" key={i}>
                                            <div>{obj.money}</div>
                                            <div className="chooseitemdetil">
                                                <img src={obj.icon} className="icon"/>
                                                <label>{obj.title}</label>
                                            </div>
                                         </div>
                            })
                        }
                      
                        
                    </Flex>
               </div>

               <List className="lists" >
                {
                     this.state.list.map((obj,i)=>{
                       return <Item style={{borderBottom:"1px solid #f4f4f4"}} key={i}
                                className={obj.tip?"tip":''}
                                thumb={require('../../../assets/imgs/'+obj.icon)}
                                arrow="horizontal"
                                onClick={() => {console.log(obj.name)}}
                                >{obj.name}
                             </Item>
                     })
                }
                 
                 </List>
             
            </div>
        )
    }
    componentDidMount(){
        var username=localStorage.getItem('usename');
        // console.log(username)
        if(username){
            this.setState({
                islogin:username
            })
        }
    }
    // 登录切换
    linktologin(){
        var username=localStorage.getItem('usename');
        if(!username||username==null){
          this.props.history.push('/login')
        }
    }
}
