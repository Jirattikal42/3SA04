import React from 'react'
import { FlatList, View, Text, StyleSheet, ImageBackground } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({place, code, navigation}) => (
    
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather', { zipCode: code})
    }}>
        
        <View style={styles.zipItem}>
            <Text style={styles.zipPlace}>{place}</Text>
            <Text style={styles.zipCode}>{code}</Text>
        </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <ImageBackground source={require('../bgh.png')} style={styles.backdrop}>
            <View>
                <FlatList
                    data = {availableZipItems}
                    keyExtractor = {_keyExtractor}
                    renderItem={({item}) => <ZipItem {...item} navigation={navigation} />}
                />
                <StatusBar style="auto" />
            </View>
        </ImageBackground>    
    )
}

const styles = StyleSheet.create({
    zipItem: {
        backgroundColor: 'rgba(125,125,125,0.25)',
        borderRadius: 20,
        marginTop: 40,
        marginBottom: 30,
        padding: 10,
        justifyContent:'center'

    },
    zipPlace: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color:'#FFFFFF'
        
        
       
    },
    zipCode: {
        flex: 1,
        textAlign: 'center',
        
    },
    backdrop: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    }
})