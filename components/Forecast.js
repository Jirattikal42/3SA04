import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Forecast(props) {
    return (
        <View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../location.png')} style={{ width: 30, height: 30}} /> 
                <Text style={textStyle.fotecastTextMedium}> {props.name}, {props.country}</Text>   
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Image source={{uri: props.icon }} style={{ width: 50, height: 50}} />
                <Text style={textStyle.fotecastTextLarge}>{props.main}</Text>
            </View>
            <Text style={textStyle.fotecastText}>{props.description}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Text style={textStyle.fotecastTextLarge}>{props.temp}</Text>
                    <Text style={{fontSize: 30, lineHeight: 50, color: 'white'}}> °C</Text>
                </View>
        </View>
    );
}

const textStyle = StyleSheet.create({
    fotecastTextLarge: {
        textAlignVertical: "center",
        textAlign: "center",
        fontSize: 30,
        height: 50,
        color: 'white'
    },
    fotecastTextMedium: {
        textAlignVertical: "center",
        textAlign: "center",
        fontSize: 35,
        height: 50,
        color: 'white'
    },
    fotecastText: {
        textAlignVertical: "center",
        textAlign: "center",
        fontSize: 18,
        height: 100,
        color: 'white'
    }
})