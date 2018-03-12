/**
 * Created by futiantian on 2018/1/31.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Image, WebView, TouchableOpacity} from 'react-native';

class OneBackView extends Component{
    render() {
        if(this.props.nav.state.params.showCloseButton){
            return(
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>{this.props.nav.state.params.goBackPage()}}>
                        <Image style={{width:40,height:40,resizeMode:'center'}} source={require('./img/navgation_back.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{justifyContent:'center'}} onPress={()=>{this.props.nav.goBack()}}>
                        <Text style={{color:'white'}}>关闭</Text>
                    </TouchableOpacity>
                </View>
            );
        }else {
            return(
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>{this.props.nav.state.params.goBackPage()}}>
                        <Image style={{width:40,height:40,resizeMode:'center'}} source={require('./img/navgation_back.png')} />
                    </TouchableOpacity>
                </View>
            );
        }
    }
}

export default class KZWebView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url:'http://baidu.com',
            scalesPageToFit: true,
            backButtonEnabled:false,
        }
        this.nav = this.props.navigation;//导航
    }
    static navigationOptions = ({navigation,screenProps}) =>({
        title:navigation.state.params.title,
        headerTintColor:'#ffffff',
        headerStyle:{backgroundColor:'red'},
        headerLeft: <OneBackView nav={navigation}/>,
    });

    componentDidMount() {
        this.props.navigation.setParams({
            goBackPage: this._goBackPage
        });
    }

    _goBackPage = () => {
        if (this.state.backButtonEnabled){
            console.log('11111111111111111111');
            console.log(this.state.backButtonEnabled);
            this.refs.webView.goBack();
        }else {
            console.log('222222222222222222222');
            console.log(this.state.backButtonEnabled);
            this.nav.goBack();
        }
    }

    _onShouldStartLoadWithRequest = (event) => {
        return true;
    }

    _onNavigationStateChange=(event)=>{
        console.log('onNavigationStateChange:');
        console.log(event.canGoBack ); //打印出event中属性
        this.setState({
            backButtonEnabled:event.canGoBack,
        });
        if(event.title && event.title.length>0){
            this.props.navigation.setParams({title:event.title});
        }
        this.props.navigation.setParams({showCloseButton:event.canGoBack});

    }

    render() {
        //析构navigation传过来的参数
        const { params } = this.props.navigation.state;
        return (
            <View style={{flex:1,backgroundColor:'#ffffff'}}>
                <WebView ref="webView"
                         source={{uri: params.url}}
                         scalesPageToFit={this.state.scalesPageToFit}
                         startInLoadingState={true}
                         domStorageEnabled={true}
                         javaScriptEnabled={true}
                         onNavigationStateChange={this._onNavigationStateChange}
                />
            </View>
        );
    }

}
