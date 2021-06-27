import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight } from 'react-native';

const strengthImg = {uri: 'https://images.pexels.com/photos/1300526/pexels-photo-1300526.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'}


const Intro = () => {
    return (
        <View>
            <Image 
            source={strengthImg}
            style={styles.strengthImg}
            />
        </View>
    )
}

export default Intro

const styles = StyleSheet.create({
    strengthImg:{
        width:370,
        height:260,
        marginBottom:25
    }
})
