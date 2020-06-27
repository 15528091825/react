import React, { Component } from 'react'
var _maAMap=window.AMap
export default class Map extends Component {
    render() {
        return (
            <div>
                <p style={{marginTop:"20px"}}>您所在的位置</p>
              <div id='container' style={{width:"100%",height:"500px",marginTop:"20px"}}></div>
                <div className="info">
                    <p id='status'></p>
                    <p id='result'></p>
                </div>
            </div>
        )
    }
    componentDidMount(){
        //初始化一个div为地图容器
    //     var map = new _maAMap.Map("container", {
    //         resizeEnable: true,
    //         center: [106.550464,29.563761],
    //         zoom: 13
    //     });
     
    //    //实例化城市查询类
    //    var citysearch = new _maAMap.CitySearch();
    //    var _this=this;
    //     //自动获取用户IP，返回当前城市
    //     citysearch.getLocalCity(function(status, result) {
    //         if (status === 'complete' && result.info === 'OK') {
    //             if (result && result.city && result.bounds) {
    //                 //定位成功
    //                 var cityinfo = result.city;
    //                 var citybounds = result.bounds;

    //                 _this.setState({
    //                     city: cityinfo
    //                 })

    //                 //当前城市经纬度具体信息
    //                 console.log(citybounds)
    //                 //地图显示当前城市
    //                 map.setBounds(citybounds);
    //             }
    //         } else {
    //             //定位失败
    //             console.log(result.info)
    //         }
    //     });

            //初始化地图对象，加载地图
    var map = new _maAMap.Map('container', {
        resizeEnable: true,
        zoom: 13
    });
    var options = {
        'showButton': true,//是否显示定位按钮
		'buttonPosition': 'LB',//定位按钮的位置
		/* LT LB RT RB */
		'buttonOffset': new _maAMap.Pixel(10, 20),//定位按钮距离对应角落的距离
		'showMarker': true,//是否显示定位点
		'markerOptions':{//自定义定位点样式，同Marker的Options
		  'offset': new _maAMap.Pixel(-18, -36),
		  'content':'<img src="https://a.amap.com/jsapi_demos/static/resource/img/user.png" style="width:36px;height:36px"/>'
		},
		'showCircle': true,//是否显示定位精度圈
		'circleOptions': {//定位精度圈的样式
			'strokeColor': '#0093FF',
			'noSelect': true,
			'strokeOpacity': 0.5,
			'strokeWeight': 1,
			'fillColor': '#02B0FF',
			'fillOpacity': 0.25
		}
    }
    _maAMap.plugin(["AMap.Geolocation"], function() {
        var geolocation = new _maAMap.Geolocation(options);
        map.addControl(geolocation);
        geolocation.getCurrentPosition()
    });

    }
}
