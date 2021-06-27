import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight } from 'react-native';

const strengthImg = {uri: 'https://images.pexels.com/photos/3768722/pexels-photo-3768722.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'}


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
        width:380,
        height:260,
        marginTop:-120,
        marginBottom:25
    }
})
