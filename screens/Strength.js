import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Intro from "../components/Intro";

import Video from "react-native-video";

const img = {
  uri: "https://thumbs.dreamstime.com/z/squat-sport-exersice-silhouettes-woman-doing-exercise-workout-training-squat-sport-exersice-silhouettes-woman-doing-exercise-119786597.jpg",
};
const img1 = {
  uri: "https://thumbs.dreamstime.com/z/wall-sit-sport-exersice-silhouettes-woman-doing-exercise-workout-training-vector-illustration-119785705.jpg",
};
const img2 = {
  uri: "https://thumbs.dreamstime.com/z/push-ups-sport-exersice-silhouettes-woman-doing-exercise-workout-training-push-ups-sport-exersice-silhouettes-woman-doing-134039186.jpg",
};
const img3 = {
  uri: "https://thumbs.dreamstime.com/z/chair-bench-triceps-dips-sport-exersice-silhouettes-woman-doing-exercise-workout-training-chair-bench-triceps-dips-sport-134714683.jpg",
};
const img5 = {
  uri: "https://thumbs.dreamstime.com/z/bear-crawls-sport-exersice-silhouettes-woman-doing-exercise-workout-training-vector-illustration-134039164.jpg",
};

const Workouts = () => {
  return (
    <View style={styles.cont2}>
      <Intro />
      <View style={styles.cont3}>
        <View>
          <Image style={styles.smallImg} source={img} />
        </View>

        <View>
          <Text style={styles.description}> Squats -- 30 Seconds</Text>
        </View>
      </View>

      <View style={styles.cont3}>
        <View>
          <Image style={styles.smallImg} source={img1} />
        </View>

        <View>
          <Text style={styles.description}> Wall Sits -- 30 Seconds</Text>
        </View>
      </View>

      <View style={styles.cont3}>
        <View>
          <Image style={styles.smallImg} source={img2} />
        </View>

        <View>
          <Text style={styles.description}>Push Ups -- 30 Seconds</Text>
        </View>
      </View>
      <View style={styles.cont3}>
        <View>
          <Image style={styles.smallImg} source={img3} />
        </View>

        <View>
          <Text style={styles.description}>Bench Dips -- 30 Seconds</Text>
        </View>
      </View>

      <View style={styles.cont3}>
        <View>
          <Image style={styles.smallImg} source={img5} />
        </View>

        <View>
          <Text style={styles.description}>Duck Walks -- 30 Seconds</Text>
        </View>
      </View>

      <Text style={styles.instruction}>Rest 45 sec and Reapeat 3X</Text>
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
    width: 50,
    height: 50,
    marginTop: -10,
    marginBottom: 25,
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
