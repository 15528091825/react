import React, { Component } from 'react'
import { TabBar } from "antd-mobile"
import Main from "./main/Main"
import Chat from "./chat/Chat"
import History from "./history/History"
import My from "./my/My"
export default class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'main',
          barlist: [
            {key: 'main',title: '首页', icon: 'icon_main.png', selectedIcon: 'icon_main_s.png' },
            {key: 'chat',title: '微聊', icon: 'icon_chat.png', selectedIcon: 'icon_chat_s.png' },
            {key: 'history',title: '足迹', icon: 'icon_history.png', selectedIcon: 'icon_history_s.png' },
            {key: 'my',title: '我的', icon: 'icon_my.png', selectedIcon: 'icon_my_s.png' }]
      
        };
      }
    render() {
        return (
            <div  style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
              
              <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
              
                >
                {
                    this.state.barlist.map(obj=> <TabBar.Item
                            title={obj.title}
                            key={obj.key}
                            icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${require('../../assets/imgs/' + obj.icon)}) center center /  21px 21px no-repeat` }}
                            />
                            }
                            selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${require('../../assets/imgs/'+obj.selectedIcon)}) center center /  21px 21px no-repeat` }}
                            />
                            }
                            selected={this.state.selectedTab === obj.key}
                          
                            onPress={() => {
                            this.setState({
                                selectedTab: obj.key,
                            });
                            }}
                            data-seed="logId"
                        >
                            {this.renderContent(obj.title)}
                        </TabBar.Item>
                        

                    )
                }
                   
                
                </TabBar>
            </div>
        )
    }
    renderContent(pageText) {
       switch (this.state.selectedTab){
           case 'main':return <Main  history={this.props.history}   />
           case 'chat':return <Chat />
           case 'history':return <History />
           case 'my':return <My  history={this.props.history}/>
       }
      }
}
