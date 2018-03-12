/**
 * Created by futiantian on 2018/3/2.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class home extends Component {
    componentDidMount(){

    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => {this.props.navigation.navigate('second',{datasource: "我是第一个页面传来的数据"})}}>
                    <Text style={{fontSize:16,color:'white'}}>跳转到下一页面</Text>
                </TouchableOpacity>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    buttonStyle: {
        backgroundColor:'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:3,
        width:200,
        height:50,

    }
});

