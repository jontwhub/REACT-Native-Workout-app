import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Intro5 from "../components/Intro5";

import Video from "react-native-video";

const img = {
  uri: "https://www.logolynx.com/images/logolynx/0a/0a9e8bf379659c9b36afb9c436c382ab.jpeg",
};
const img2 = {
  uri: "https://thumbs.dreamstime.com/z/happy-woman-doing-yoga-exercises-practicing-stretching-mat-studio-home-vector-illustration-216037054.jpg",
};
const img3 = {
  uri: "https://thumbs.dreamstime.com/z/happy-woman-doing-yoga-exercises-practicing-stretching-mat-yoga-studio-home-vector-illustration-happy-woman-doing-yoga-216037001.jpg",
};
const img5 = {
  uri: "https://thumbs.dreamstime.com/z/happy-woman-sitting-crossed-legs-room-apartment-practicing-yoga-enjoying-meditation-happy-woman-sitting-216037021.jpg",
};

const Workouts = () => {
  return (
    <View style={styles.cont2}>
      <Image 
      source={require('../assets/hurryup.jpg')}
      style={styles.smallImg1}
      />
      <Image 
      source={img}
      style={styles.smallImg}
      />
     
    </View>
  );
};

export default Workouts;

const styles = StyleSheet.create({
  cont2: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cont3: {
    flexDirection: "row",
    justifyContent: "space-between",
    minWidth: 320,
  },
  smallImg: {
    width: 250,
    height: 250,
    marginTop: -100,
    marginBottom: 25,
  },
  smallImg1: {
    width: 300,
    height: 250,
    marginTop: -100,
    marginBottom: 25,
    resizeMode:'contain',
    
  },
  description: {
    color: "#444444",
    fontSize: 22,
  },
  instruction: {
    color: "#ccc",
    fontSize: 22,
  },
});
