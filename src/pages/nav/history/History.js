import React, { Component } from 'react'
import {connect} from "react-redux"
import {getList,IP} from "../../../api/api"
import Housitem from "../../../components/Houser"
// import './history.css'
 class History extends Component {
    render() {
        console.log("a",this.props.historypush)
        return (
            <div>
               <p style={{fontSize:'22px',textAlign:"center",marginTop:"30px"}}>历史足迹</p> 
                {
                    this.props.historypush.map((item)=>{
                             return   <Housitem item={item} key={item.id}></Housitem>
                    })
                }
            </div>
        )
    }
}
function filter(state){
    return{
        historypush:state.historypush
    }
    

}
export default connect(filter)(History)