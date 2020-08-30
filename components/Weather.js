import React, { useState, useEffect } from 'react';
import { Text, ImageBackground, StyleSheet, View } from 'react-native';
import Forecast from './Forecast';


export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0,
        name: 'city',
        country: 'country',
        iconId: 'iconid'
        
    }) 

    

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=77bcb05d23e5a0438614e633574003fc`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: (json.main.temp),
                        name: json.name,
                        country: json.sys.country,
                        icon: 'http://openweathermap.org/img/wn/'+json.weather[0].icon+'@2x.png' 
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])
       
    
    

    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <View style={styles.headline}>  
                <Text style={{textAlignVertical: "center",textAlign: "center", fontSize: 20, color: 'white'}}>Zip Code is {props.zipCode} </Text>    
                <Forecast {...forecastInfo} />
            </View> 
        </ImageBackground> 
    )
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width: '100%',
        height: '100%'
        
    },
    headline: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 0,
        justifyContent: 'space-evenly',
        width: '100%',
        height: '40%',
        backgroundColor: 'rgba(0,0,0,0.6)'
    }
});
   