import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 引入全局的antd-mobile的样式
import 'antd-mobile/dist/antd-mobile.css';
import store from "../src/store/store"
import {Provider} from "react-redux"
// 引入数据容器Provider, 把Provider和store进行绑定
    //只要在Provider内,可以全局共享此store数据
ReactDOM.render(<Provider  store={ store }><App/></Provider>, document.getElementById('root'))
