import React, { Component } from 'react'
import {Button,Flex,InputItem,WhiteSpace ,WingBlank,Toast,Radio} from "antd-mobile"
import './reg.css'
import {getCode,regCheck} from "../../api/api"
export default class Reg extends Component {
    constructor(){
        super();
        this.state={
            tel:'',
            pwd:'',
            code:'',
            ccode:"",
            // 单选框选择
            checked:false,
            oldtel:'',
            oldpwd:'',
            errorreg:'none'
        }
    }
    render() {
        return (
            <div>
                <WingBlank size="lg">
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <InputItem
                        placeholder="请输入手机"
                        value={this.state.tel}
                        onChange={(val)=>this.setState({tel:val})}
                        onBlur={this.onBlurtel}
                    />
                    <InputItem
                        placeholder="请输入密码"
                        value={this.state.pwd}
                        onChange={(val)=>this.setState({pwd:val})}
                    />
                    <Flex justify="between" style={{background:"#ffffff"}}>
                        <InputItem
                            placeholder="请输入验证码"
                            value={this.state.code}
                            onChange={(val)=>this.setState({code:val})}
                        />
                        <button style={{fontSize:"14px",border:"none"}} onClick={this.getcode.bind(this)}>获取验证码</button>
                    </Flex>
                    
                     <Flex style={{ padding: '15px' }}>
                        <Flex.Item>
                            <Radio className="my-radio"  onChange={this.checkradio.bind(this)}></Radio>
                        </Flex.Item>
                      
                        <Flex.Item style={{ padding: '15px 0', color: '#888', flex: 'none' }}>
                        我同意《用户服务协议》及《隐私权政策》
                        </Flex.Item>
                       
                    </Flex>
                    <p style={{display:this.state.errorreg,color:"red"}}>注册失败</p>
                    <Button type="primary" onClick={this.register.bind(this)}>注册</Button>
                    <p style={{color:"#108EE9"}}>已有账号</p>
                </WingBlank>
            </div>
        )
    }
    // 验证手机号
    onBlurtel=()=>{
        
    }
    // 获取验证码
    async getcode(){
        let res=await getCode()
        if(res.data){
            this.setState({
                ccode:res.data
            })
        }else{
            Toast.fail('验证码错误');
        }
       
    }
    // 选中同意
    checkradio(e){
        this.setState({
            checked:e.target.checked
        })
   
    }

    // 点击注册
    async register(){
        var {checked,ccode,tel,pwd,code,oldpwd,oldtel}=this.state
        if(checked==false){
            Toast.fail('请勾选同意协议');
            return
        }
        console.log('code'+code)
        console.log("c"+ccode)
        if(!code || ccode!=code){
            Toast.fail('验证码错误');
            return
        }
         // 防抖截留
         if(tel==oldtel && pwd==oldpwd){
            return
        }
        this.setState({
            oldtel:tel,
            oldpwd:pwd
        })
      
        let res=await regCheck(tel,pwd)
        if(res.data=="ok"){
            this.props.history.push('/login')
        }else{
            this.setState({
                errorreg:"block"
            })
        }
        // console.log(res)
    }

}
