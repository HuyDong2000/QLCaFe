import React , {Component}from "react";
import {View , TextInput , Text , TouchableOpacity , StyleSheet} from 'react-native'
export default class addTable extends Component{
    render(){
        return(
            <View style={{flex: 1 , backgroundColor : 'red',}}>
                <View style={{width: '90%',height:40 , flexDirection:'row'}}>
                    <Text>Ten ban : </Text>
                    <TextInput ></TextInput>
                </View>
            </View>
        )
    }
}