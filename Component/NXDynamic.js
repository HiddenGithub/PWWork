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

var NavigatorBar = require('../Component/NXNavigationBar') //NavigationBar

var Dynamic = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <NavigatorBar title='动态'  leftBtnName = 'r_news-0' rightBtnName = 'r_news-0' leftpress={()=>this.leftAction()} rightPress={()=>this.rightAction()}  />
                <Text style={styles.welcome}>
                    动态
                </Text>
            </View>
        );
    },
    leftAction(){
        alert('左');
    },
    rightAction(){
        alert('右');
    }
});


var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    }
});

module.exports = Dynamic;