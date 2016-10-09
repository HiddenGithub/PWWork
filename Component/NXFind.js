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

var Find = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <NavigatorBar title='发现'  leftBtnName = 'r_news-0' rightBtnName = 'r_news-0' leftpress={()=>this.leftAction()} rightPress={()=>this.rightAction()}  />
                <Text style={styles.welcome}>
                    发现
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

module.exports = Find;