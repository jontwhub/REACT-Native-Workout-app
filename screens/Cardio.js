import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Intro3 from "../components/Intro3";

import Video from "react-native-video";

const img = {
  uri: "https://thumbs.dreamstime.com/z/jumping-jack-sport-exersice-silhouettes-woman-doing-exercise-workout-training-vector-illustration-jumping-jack-sport-exersice-119786219.jpg",
};
const img1 = {
  uri: "https://thumbs.dreamstime.com/z/butt-kicks-sport-exersice-silhouettes-woman-doing-exercise-workout-training-butt-kicks-sport-exersice-silhouettes-woman-119786156.jpg",
};
const img2 = {
  uri: "https://thumbs.dreamstime.com/z/mountain-climbers-sport-exersice-silhouettes-woman-doing-exercise-workout-training-vector-illustration-mountain-climbers-sport-134395967.jpg",
};
const img3 = {
  uri: "https://thumbs.dreamstime.com/z/lunges-sport-exersice-silhouettes-woman-doing-exercise-workout-training-lunges-sport-exersice-silhouettes-woman-doing-119786650.jpg",
};
const img5 = {
  uri: "https://thumbs.dreamstime.com/z/degree-twisting-jump-squats-sport-exersice-silhouettes-woman-doing-exercise-workout-training-degree-twisting-jump-squats-sport-134324172.jpg",
};

const Workouts = () => {
  return (
    <View style={styles.cont2}>
      <Intro3 />
      <View style={styles.cont3}>
        <View>
          <Image style={styles.smallImg} source={img} />
        </View>

        <View>
          <Text style={styles.description}>Jumping Jacks -- 30 Seconds</Text>
        </View>
      </View>

      <View style={styles.cont3}>
        <View>
          <Image style={styles.smallImg} source={img1} />
        </View>

        <View>
          <Text style={styles.description}> Butt Kicks -- 30 Seconds</Text>
        </View>
      </View>

      <View style={styles.cont3}>
        <View>
          <Image style={styles.smallImg} source={img2} />
        </View>

        <View>
          <Text style={styles.description}>Moutain Climbers -- 30 Seconds</Text>
        </View>
      </View>
      <View style={styles.cont3}>
        <View>
          <Image style={styles.smallImg} source={img3} />
        </View>

        <View>
          <Text style={styles.description}>Alternating Lunges -- 30 Seconds</Text>
        </View>
      </View>

      <View style={styles.cont3}>
        <View>
          <Image style={styles.smallImg} source={img5} />
        </View>

        <View>
          <Text style={styles.description}>Twisting Jumps -- 30 Seconds</Text>
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
