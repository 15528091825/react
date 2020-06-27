import React, { Component } from 'react'
import {IP} from "../api/api"

export default class Houser extends Component {
    render() {
        let {item}=this.props
        return (
            <div className="lovelist"   key={item.id} >
                                             
                <img src={IP+item.imgs} className="imgs"/>
                <div className="main">
                    <div className="title">{item.name}</div>
                    <p>{item.area}{item.range}</p>
                    <p>{item.type}{item.point}平</p>
                </div>
                <div className="price">{item.price}/平</div>
             </div>
        )
    }
}
