import React, { Component } from 'react'
import { Link } from "react-router-dom"
// 引入UI组件
import {Button,Flex,InputItem,WhiteSpace ,WingBlank,Toast,Icon,Modal} from "antd-mobile"
// 引入登录接口
import { loginapi } from "../../api/api"
// 引入样式
import './login.css'
export default class Login extends Component {
    constructor(){
        super();
        this.state={
            acc:'',
            pwd:'',
            hasErroracc: false,
            hasErrorpwd: false,
            oldacc:'',
            oldpwd:'',
            // 错误提示框
            errorshow:"none"
        }
    }
    render() {
        return (
            <div id="login">
                <Flex justify="center" className="imgbox">
                    <img className="logo" src={require('../../assets/imgs/logo.png')}/>
                </Flex>

                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <WingBlank size="lg">

                    <InputItem
                        placeholder="请输入用户名"
                        onChange={(val)=> this.setState({acc:val})}
                        clear
                        value={this.state.acc}
                        error={this.state.hasErroracc}
                   
                        onBlur={this.onBluracc}
                    >
                        <div style={{ backgroundImage: `url(${require('../../assets/imgs/icon_user.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <WhiteSpace/>
                    <InputItem
                        placeholder="请输入密码"
                        type="password"
                        clear
                        error={this.state.hasErrorpwd}
                      
                        value={this.state.pwd}
                        onChange={(val)=> this.setState({pwd:val})}
                        onBlur={this.onBlurpwd}
                      
                    >
                        <div style={{ backgroundImage: `url(${require('../../assets/imgs/icon_pwd.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <WhiteSpace/>
                    <p style={{display:this.state.errorshow,color:"red"}}>用户名或密码错误</p>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.login.bind(this)}>登录</Button>

                       <WhiteSpace/>
                    <Flex justify="between">
                        <Link to='/reg' style={{color:"#108EE9"}}>手机快速注册</Link>
                        <Link to='/reg' style={{color:"#108EE9"}}>忘记密码？</Link>
                    </Flex>
                </WingBlank>
                <Flex  justify="center" >
                            <p className="agreetitle"  onClick={this.showModal('modal1')}> 登录/注册即代表同意《源码房产用户协议》</p>
                </Flex>           
                      


                        {/* 模态框 */}
                         <Modal
                            visible={this.state.modal1}
                            transparent
                            maskClosable={false}
                            onClose={this.onClose('modal1')}
                            title="用户协议"
                            footer={[{ text: 'Ok', onPress: () => { console.log('ok'); this.onClose('modal1')(); } }]}
                        
                       
                            >
                            <div style={{ height: 300, overflow: 'scroll' }}>
                                用户须知,用户协议<br />
                                用户须知,用户协议<br />
                                用户须知,用户协议<br />
                                用户须知,用户协议<br />
                                用户须知,用户协议<br />
                                用户须知,用户协议<br />
                            </div>
                        </Modal>
               
            </div>
        )
    }


//    用户名的验证
      onBluracc = () => {
          var value=this.state.acc
       //用户名正则，4到16位（字母，数字，下划线，减号）
        var reg = /^[a-zA-Z0-9_-]{4,16}$/;
        if (!reg.test(value)) {
          this.setState({
            hasErroracc: true,
          });
          Toast.fail('请输入4到16位（字母，数字，下划线，减号）');
        } else {
          this.setState({
            hasErroracc: false,
          });
        }
       
      }
    //   密码的验证
      onBlurpwd = () => {
          var value=this.state.pwd
       //密码正则，4到16位（字母，数字，下划线，减号）
        var reg = /^[a-zA-Z0-9_-]{4,16}$/;
        if (!reg.test(value)) {
          this.setState({
            hasErrorpwd: true,
          });
          Toast.fail('请输入4到16位（字母，数字，下划线，减号）');
        } else {
          this.setState({
            hasErrorpwd: false,
          });
        }
       
      }


    //   模态框的现实和关闭
      showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
          [key]: true,
        });
      }
      onClose = key => () => {
        this.setState({
          [key]: false,
        });
      }



    //   登录
    login(){
        let {acc,pwd,oldacc,oldpwd}=this.state;
        // 防抖截留
        if(acc==oldacc && pwd==oldpwd){
            return
        }
        this.setState({
            oldacc:acc,
            oldpwd:pwd
        })
      
        loginapi(acc,pwd).then((res)=>{
              if(res.data=="ok"){
                //   把用户名放到本地
                localStorage.setItem('usename',acc)
                this.props.history.push('/')
              }else{
                // Toast.fail('用户名密码错误');
                this.setState({
                    errorshow:"block"
                })
              }
        })
      
    }
}
