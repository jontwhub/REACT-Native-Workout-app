import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableHighlight,
  StatusBar,
} from "react-native";

const image = {
  uri: "https://images.pexels.com/photos/3757374/pexels-photo-3757374.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
};
const image2 = {
  uri: "https://images.pexels.com/photos/2780762/pexels-photo-2780762.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
};
const image3 = {
  uri: "https://images.unsplash.com/photo-1565294124524-200bb738cdb7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=494",
};
const image4 = {
  uri: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
};
const image5 = {
  uri: "https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
};
const image0 = {
  uri: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
};
const imageHome = {
  uri: "https://images.pexels.com/photos/221247/pexels-photo-221247.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
};

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Workouts");
  };
  const pressHandler1 = () => {
    navigation.navigate("Strength");
  };
   const pressHandler2 = () => {
     navigation.navigate('Cardio')
   }
   const pressHandler3 = () => {
     navigation.navigate('Perfectbutt')
   }
   const pressHandler4 = () => {
     navigation.navigate('Yoga')
   }
   const pressHandler5 = () => {
     navigation.navigate('LandingScreen')
   }
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableHighlight onPress={pressHandler}>
          <ImageBackground style={styles.image} source={image}>
            <Text style={styles.title}>Core and Abs</Text>
          </ImageBackground>
        </TouchableHighlight>

        <TouchableHighlight onPress={pressHandler1}>
          <ImageBackground style={styles.image} source={image2}>
            <Text style={styles.title}>Strength Training</Text>
          </ImageBackground>
        </TouchableHighlight>

        <TouchableHighlight onPress={pressHandler2}>
          <ImageBackground style={styles.image} source={image4}>
            <Text style={styles.title}>Cardio </Text>
          </ImageBackground>
        </TouchableHighlight>

        <TouchableHighlight onPress={pressHandler3}>
          <ImageBackground style={styles.image} source={image3}>
            <Text style={styles.title}>Perfect Butt</Text>
          </ImageBackground>
        </TouchableHighlight>

        <TouchableHighlight onPress={pressHandler4}>
          <ImageBackground style={styles.image} source={image5}>
            <Text style={styles.title}>Yoga</Text>
          </ImageBackground>
        </TouchableHighlight>
        <TouchableHighlight onPress={pressHandler5}>
          <ImageBackground style={styles.image} source={imageHome}>
            <Text style={styles.title}>Landing Screen</Text>
          </ImageBackground>
        </TouchableHighlight>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 370,
    height: 250,
    marginBottom: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#f5f5f5",
    paddingTop: 180,
    alignSelf: "center",
  },
});
