/**
 * Created by Jonson on 16/8/26.
 */

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
var {width,height} = Dimensions.get('window'); //屏宽

var SlideView = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.leftViewStyle}></View>
                <View style={styles.rightViewStyle}></View>
            </View>
        );
    }
});


var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    leftViewStyle:{
        flex: 1,
        width:width/4,
        height:height,
        backgroundColor:'black',
        opacity:0.1

    },
    rightViewStyle:{
        flex: 1,
        width:width*3/4,
        height:height,
        backgroundColor:'white'
    }
});

module.exports = SlideView;
