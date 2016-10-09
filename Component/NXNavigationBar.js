import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity,
    Platform
} from 'react-native';

//Dimentsions
var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width; //屏宽

var NavigatorBar = React.createClass({
    getDefaultProps(){
        return{
            leftBtnName : '',
            title : '',
            rightBtnName : '',
        }
    },
    render() {
        return (
            <View style={styles.navOutViewStyle}>
                <TouchableOpacity onPress={()=>{alert('点了!')}} style={styles.leftViewStyle}>
                    <Image source={{uri: this.props.leftBtnName}} style={styles.navImageStyle}/>
                </TouchableOpacity>

                <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>{this.props.title}</Text>

                <TouchableOpacity onPress={()=>{alert('点了!')}} style={styles.rightViewStyle}>
                    <Image source={{uri: this.props.leftBtnName}} style={styles.navImageStyle}/>
                </TouchableOpacity>

            </View>
        );
    }
});


var styles = StyleSheet.create({
    navOutViewStyle:{
        height: Platform.OS == 'ios' ? 64 : 44,
        backgroundColor:'rgba(255,96,0,1.0)',

        // 设置主轴的方向
        flexDirection:'row',
        // 垂直居中 ---> 设置侧轴的对齐方式
        alignItems:'center',
        // 主轴方向居中
        justifyContent:'center'
    },
    leftViewStyle:{
        // 绝对定位
        position:'absolute',
        left:10,
        bottom:Platform.OS == 'ios' ? 15:13
    },
    navImageStyle:{
        width:Platform.OS == 'ios' ? 28: 24,
        height:Platform.OS == 'ios' ? 28: 24,
    },
    rightViewStyle:{
        // 绝对定位
        position:'absolute',
        right:10,
        bottom:Platform.OS == 'ios' ? 15:13
    },
    navImageStyle:{
        width:Platform.OS == 'ios' ? 28: 24,
        height:Platform.OS == 'ios' ? 28: 24,
    },
});

module.exports = NavigatorBar;