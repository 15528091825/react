import React, { Component } from 'react'
import { Flex,Carousel ,Grid,WhiteSpace,WingBlank} from 'antd-mobile';
import "./main.css"
import {getList,IP} from "../../../api/api"
// console.log()
//引入vue_redus
import  {connect} from "react-redux"
import Housitem from "../../../components/Houser"
var _maAMap=window.AMap
 class Main extends Component {
    constructor(){
        super();
        this.state={
            // 轮播图的数据
            datalist:[
                {id:1,img:require('../../../assets/imgs/1.jpg'),href:""},
                {id:2,img:require('../../../assets/imgs/2.jpg'),href:""},
                {id:3,img:require('../../../assets/imgs/3.jpg'),href:""}
            ],
            // banner的数据
            databanner:[
                { icon: require('../../../assets/imgs/hwfc.png'), text: '新房' },
                { icon: require('../../../assets/imgs/esf.png'), text: '二手房' },
                { icon: require('../../../assets/imgs/mf.png'), text: '租房' },
                { icon: require('../../../assets/imgs/sp.png'), text: '商铺写字楼' },
                { icon: require('../../../assets/imgs/wd.png'), text: '卖房' },
                { icon: require('../../../assets/imgs/xf.png'), text: '海外房产' },
                { icon: require('../../../assets/imgs/xq.png'), text: '小区房价' },
                { icon: require('../../../assets/imgs/zf.png'), text: '问答' }
            ],
            // 房产全百科
            databaike:[
                { icon: require('../../../assets/imgs/daikuan.png'), text: '我要贷款' },
                { icon: require('../../../assets/imgs/jisuanqi.png'), text: '房贷计算' },
                { icon: require('../../../assets/imgs/zhisihi.png'), text: '知识' },
                { icon: require('../../../assets/imgs/saoyisao.png'), text: '扫一扫' },
            ],
            // 猜你喜欢
            youlove:[],
            city:'定位中'
        }
    }
    async   componentDidMount(){
   

        //实例化城市查询类
        var citysearch = new window.AMap.CitySearch();
        var _this=this;
      
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    var citybounds = result.bounds;
                    // console.log(cityinfo)
                    //地图显示当前城市
                    _this.setState({
                        city:cityinfo
                    })
                }
            } else {
                // console.log(result.info)
            }
        })


        // 获取到猜你喜欢的列表
       let res= await getList()
        if(res.data){
            this.setState({
                youlove:res.data
            })
        }
           
            // console.log(this.state.youlove)
      
    
    }
    render() {
        return (
            <div>
              {/* 头部 */}
                <Flex justify="between" id="top">
                    <div className="citysearch"  onClick={this.citysearch.bind(this)}>{this.state.city}▼</div>
                    <div className="search" onClick={this.search.bind(this)}>
                        <img src={require('../../../assets/imgs/sear.png')}/>
                        <label>调好房，上源码房产APP</label>
                    </div>
                    <img onClick={this.searchmap.bind(this)} className="addresssearch" src={require('../../../assets/imgs/icon_map.png')}/>
                </Flex>
                {/* 轮播图 */}
                <Carousel
                 
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    >
                    {this.state.datalist.map(obj => (
                        <img
                            key={obj.id}
                            src={obj.img}
                          
                            alt=""
                            style={{ width: '100%', height: "160px",verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                      
                    ))}
                </Carousel>

                    {/* 图片导航 */}
                    <Grid data={this.state.databanner} hasLine={false} />
                    <WhiteSpace/>
                    <WhiteSpace/>
                    {/* 房产全百科 */}
                    <WingBlank style={{display:"flex",alignItems:"center"}}>
                        <div style={{color:'#57AFF8',fontWeight:"bold",marginRight:'10px'}}>房产全百科</div>
                        <div style={{fontSize:'12px'}}>专业的买房攻略</div>
                    </WingBlank>
                    <Grid data={this.state.databaike} hasLine={false} />
                    <WhiteSpace/>
                    <WhiteSpace/>
                    {/*猜你喜欢 */}
                        <WingBlank>
                        <p>猜你喜欢</p>
                        <div className="youlove">
                            {
                                this.state.youlove.map((item)=>{
                                    return    <div onClick={this.puthistory.bind(this,item)} key={item.id}>
                                             {/*引入公共组件 */}
                                             <Housitem  item={item} ></Housitem>
                                               
                                            </div>
                                })
                            }
                           
                        </div>
                    </WingBlank>
            </div>
        )
    }
    // 城市搜索
    citysearch(){
        // 接受Nav的history参数
        // console.log(this.props.history)
        this.props.history.push('/selectcity')
    }
    // 信息搜索
    search(){
        // 接受Nav的history参数
        this.props.history.push('/search')
    }
    searchmap(){
        this.props.history.push('/map')
    }
    // 加入足迹
    puthistory(obj){
        // 调取仓库,加入足迹
        this.props.dispatch({
            type:"puthistory",
            list:obj
        })

        // console.log(this.props.historypush)
    }
    // 解决等待异步数据渲染的时候,切换页面报错的问题
    componentWillUnmount(){
        this.setState(()=>{
            return
        })
    }
   
}
function filter(state){
    return{
        historypush:state.historypush
    }
}
export default connect(filter)(Main)
