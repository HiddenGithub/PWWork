import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Platform,   // 判断当前运行的系统
    Navigator
} from 'react-native';


/**-----导入外部的组件类------**/
import TabNavigator from 'react-native-tab-navigator';

var Dynamic = require('../Component/NXDynamic'); //动态
var Find = require('../Component/NXFind');  //发现
var Message = require('../Component/NXMessage');  //咨讯
var Mine = require('../Component/NXMine');  //我的


var Main = React.createClass({

    // 初始化函数(变量是可以改变的,充当状态机的角色)
    getInitialState(){
        return{
            selectedTab:'Dynamic' // 默认是第一个
        }
    },

    render() {
        return (
            <TabNavigator>
                {/*--动态--*/}
                {this.renderTabBarItem('动态', 'r_news-0', 'news','Dynamic', '动态', Dynamic)}
                {/*--发现--*/}
                {this.renderTabBarItem('发现', 'gfound_icon', 'found_ion','Find', '发现', Find)}
                {/*--相机--*/}
                {this.renderTabBarItem('咨讯', 'gnews_icon', 'news_icon','Message', '咨讯', Message)}
                {/*--我的--*/}
                {this.renderTabBarItem('我的', 'gwo_icon', 'r_geren-0','Mine', '我的', Mine)}
            </TabNavigator>
        );
    },

    // 每一个TabBarItem
    renderTabBarItem(title, iconName, selectedIconName, selectedTab, componentName, component, badgeText){
        return(
            <TabNavigator.Item
                title={title}  // 传递变量,一定要加{}
                renderIcon={() => <Image source={{uri: iconName}} style={styles.iconStyle}/>} // 图标
                renderSelectedIcon={() =><Image source={{uri: selectedIconName}} style={styles.iconStyle}/>}   // 选中的图标
                onPress={()=>{this.setState({selectedTab:selectedTab})}}
                selected={this.state.selectedTab === selectedTab}
                selectedTitleStyle={styles.selectedTitleStyle}
                badgeText = {badgeText}
            >
                <Navigator
                    initialRoute={{name:componentName,component:component}}
                    configureScene={()=>{
            return Navigator.SceneConfigs.PushFromRight;
        }}
                    renderScene={(route,navigator)=>{
            let Component = route.component;
            return <Component {...route.passProps} navigator={navigator}/>;
        }}
                />
            </TabNavigator.Item>
        )
    }
});


const styles = StyleSheet.create({
    iconStyle:{
        width: Platform.OS === 'ios' ? 30 : 25,
        height:Platform.OS === 'ios' ? 30 : 25
    },

    selectedTitleStyle:{
        color:'orange'
    }
});

// 输出组件类
module.exports = Main;
