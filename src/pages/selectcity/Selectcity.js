import React, { Component } from 'react'
import citylists from "../../json/city.json"
import BScroll from 'better-scroll'
import "./selectcity.css"
export default class Selectcity extends Component {
   
    render() {
        return (
            <div>
                <p style={{fontSize:'22px',textAlign:"center",marginTop:"30px"}}>城市搜索</p>
                <div id="wrapper" style={{height:"600px"}}>
                    <ul className="content" style={{height:"auto"}}>
                        <h3 style={{fontSize:'18px',height:"30px"}}>热门城市</h3>
                                <div className='hotcitybox'>
                                    {
                                        citylists.hotcity.map(city => <div className='hotcity' style={{height:"30px"}} key={city}>{city}</div>)
                                    }
                                </div>
                        <h3 style={{fontSize:'18px',height:"30px"}}>全部城市</h3>
                                <div className='citybox'>
                                    {
                                        citylists.allcity.map(citys => <div id={citys.title} key={citys.title}>{citys.title}
                                            <div>
                                                {
                                                    citys.lists.map(city => <div  style={{height:"30px"}} key={city}>{city} </div>)
                                                }
                                            </div>
                                        </div>)
                                        
                                    }
                                </div>
                               
                    </ul>
                </div>
                                    {/* 右边导航 */}
                 <div className="bannerbar">
                    {
                        citylists.allcity.map(citys => <div onClick={this.clickABC.bind(this,citys.title )} key={citys.title}>{citys.title}</div>)
                    }
                </div>
               
            </div>
        )
    }
    componentDidMount(){
            this.scroll = new BScroll('#wrapper',{
                // click:true
            })
    }
    // 左右联动
    clickABC(title){
       
        this.scroll.scrollToElement('#'+title,500)
    }
    componentWillUnmount() {
      
        this.scroll = () => { return }

    }
}
