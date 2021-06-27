import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight } from 'react-native';

const strengthImg = {uri: 'https://images.pexels.com/photos/2294353/pexels-photo-2294353.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'}


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
