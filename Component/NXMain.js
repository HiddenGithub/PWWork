/**
 * Created by Jonson on 16/8/26.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    NavigatorIOS
} from 'react-native';

var Home = require('../Component/NXDynamic');
var Find = require('../Component/NXFind');
var Information = require('../Component/NXInformation');
var Mine = require('../Component/NXMine');


var Main = React.createClass({


    // 初始化方法
    getInitialState(){
        return{
            // 设置选中标识
            selectedItem: 'home'  // 默认首页被选中
        }
    },


    render() {
        return (

            <TabBarIOS
                tintColor="red"
            >

                {/*动态*/}
                <TabBarIOS.Item
                    icon = {require('image!r_news-0')}
                    title = "动态"
                    selected={this.state.selectedItem == 'home'}
                    onPress={()=>{this.setState({selectedItem: 'home'})}}
                >
                    <NavigatorIOS
                        tintColor="red"
                        style={{flex:1}}
                        initialRoute = {
                          {
                            component: Home, // 具体的版块
                            title:'动态',
                            leftButtonIcon:require('image!class_icon'),
                            rightButtonIcon:require('image!add_icon')
                          }
                       }
                    />


                </TabBarIOS.Item>


                {/*发现*/}
                <TabBarIOS.Item
                    icon = {require('image!gfound_icon')}
                    title = "发现"
                    selected={this.state.selectedItem == 'find'}
                    onPress={()=>{this.setState({selectedItem: 'find'})}}
                >
                    <NavigatorIOS
                        tintColor="red"
                        style={{flex:1}}
                        initialRoute = {
                          {
                            component: Find, // 具体的版块
                            title:'发现',
                            leftButtonIcon:require('image!class_icon'),
                            rightButtonIcon:require('image!add_icon')
                          }
                       }
                    />
                </TabBarIOS.Item>



                {/*相机*/}
                <TabBarIOS.Item
                    icon = {require('image!w_xiangji-0')}
                    //title = "相机"
                >


                </TabBarIOS.Item>


                {/*资讯*/}
                <TabBarIOS.Item
                    icon = {require('image!gnews_icon')}
                    title = "资讯"
                    selected={this.state.selectedItem == 'information'}
                    onPress={()=>{this.setState({selectedItem: 'information'})}}
                >

                    <NavigatorIOS
                        tintColor="red"
                        style={{flex:1}}
                        initialRoute = {
                          {
                            component: Information, // 具体的版块
                            title:'资讯',
                            leftButtonIcon:require('image!class_icon'),
                            rightButtonIcon:require('image!add_icon')
                          }
                       }
                    />
                </TabBarIOS.Item>


                {/*我的*/}
                <TabBarIOS.Item
                    icon = {require('image!gwo_icon')}
                    title = "我的"
                    selected={this.state.selectedItem == 'mine'}
                    onPress={()=>{this.setState({selectedItem: 'mine'})}}
                >
                    <NavigatorIOS
                        tintColor="red"
                        style={{flex:1}}
                        initialRoute = {
                          {
                            component: Mine, // 具体的版块
                            title:'我的',
                            leftButtonIcon:require('image!class_icon'),
                            rightButtonIcon:require('image!add_icon')
                          }
                       }
                    />
                </TabBarIOS.Item>
            </TabBarIOS>



        );
    }
});

const styles = StyleSheet.create({

});

// 输出类
module.exports = Main;
