import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Intro5 from "../components/Intro5";

import Video from "react-native-video";

const img = {
  uri: "https://thumbs.dreamstime.com/z/woman-doing-yoga-exercises-stretching-female-character-isolated-flat-vector-illustration-woman-doing-yoga-exercises-215924286.jpg",
};
const img1 = {
  uri: "https://thumbs.dreamstime.com/z/happy-woman-doing-yoga-exercises-practicing-stretching-mat-studio-home-vector-illustration-216037046.jpg",
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
      <Intro5 />
      <View style={styles.cont3}>
        <View>
          <Image style={styles.smallImg} source={img} />
        </View>

        <View>
          <Text style={styles.description}>Hold the pose -- 30 Seconds</Text>
        </View>
      </View>

      <View style={styles.cont3}>
        <View>
          <Image style={styles.smallImg} source={img1} />
        </View>

        <View>
          <Text style={styles.description}> Hold each leg  -- 30 Seconds</Text>
        </View>
      </View>

      <View style={styles.cont3}>
        <View>
          <Image style={styles.smallImg} source={img2} />
        </View>

        <View>
          <Text style={styles.description}> Hold each leg  -- 30 Seconds</Text>
        </View>
      </View>
      <View style={styles.cont3}>
        <View>
          <Image style={styles.smallImg} source={img3} />
        </View>

        <View>
          <Text style={styles.description}> Hold the side  -- 30 Seconds</Text>
        </View>
      </View>

      <View style={styles.cont3}>
        <View>
          <Image style={styles.smallImg} source={img5} />
        </View>

        <View>
          <Text style={styles.description}>cool down -- 45 sec - 1 min</Text>
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
