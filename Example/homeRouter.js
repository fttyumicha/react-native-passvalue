/**
 * Created by futiantian on 2018/3/2.
 */
import React from 'react';
import {StackNavigator} from 'react-navigation';
import home from './home'
import second from './second'
import KZWebView from './KZWebView'
const RootNavigator = StackNavigator({
    home: {
        screen: home
    },
    second: {
        screen:second
    },
    KZWebView: {
        screen:KZWebView
    }

});

export default RootNavigator;