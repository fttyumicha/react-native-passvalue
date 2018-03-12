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

class OneView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refNum : 0,
        }
        //this._oneFunction = this._oneFunction.bind(this);
    }
    //2.使用ref进行传值(兄弟控件之间或者是用来单独的做局部刷新使用)
    _oneFunction = (number) => {
        this.setState({refNum:number})
    }
    render(){

        return(
            <View>
                <Text>{this.state.refNum}</Text>
                <Text>{this.props.textnum}</Text>
            </View>
        );
    }
}
export default class second extends Component {

    render() {
        //1.不同页面之间使用navigator进行正向传值  this.refs.OneView._oneFunction(7)   this.props.navigation.navigate('KZWebView',{url:"https://kouzi.pluosi.com/web/moneyhouse/index.html",title: "pluosi"})}
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => {this.refs.OneView._oneFunction(7)}}>
                    <Text style={{fontSize:16,color:'white'}}>我是home的二级页面</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonStyle,{marginTop:20}]} onPress={() => {this.props.navigation.navigate('KZWebView',{url:"https://kouzi.pluosi.com/web/moneyhouse/index.html",title: "pluosi"})}}>
                    <Text style={{fontSize:16,color:'white'}}>跳转到web页面</Text>
                </TouchableOpacity>
                {/*3.父子组件之间直接通过props来传值*/}
                <OneView ref="OneView" textnum="str"/>
                <Text>{params.datasource}</Text>
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