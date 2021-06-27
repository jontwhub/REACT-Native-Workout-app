import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Intro2 from "../components/Intro2";

const img = {
  uri: "https://thumbs.dreamstime.com/z/seated-punches-sport-exersice-silhouettes-woman-doing-exercise-workout-training-seated-punches-sport-exersice-silhouettes-136314308.jpg",
};
const img1 = {
  uri: "https://thumbs.dreamstime.com/z/crab-toe-touches-sport-exersice-silhouettes-woman-doing-exercise-workout-training-crab-toe-touches-sport-exersice-silhouettes-134413139.jpg",
};
const img2 = {
  uri: "https://thumbs.dreamstime.com/z/reverse-crunches-sport-exersice-silhouettes-woman-doing-exercise-workout-training-reverse-crunches-sport-exersice-silhouettes-134613013.jpg",
};
const img3 = {
  uri: "https://thumbs.dreamstime.com/b/bicycles-elbow-to-cnee-crunches-cross-body-crunches-sport-exersice-silhouettes-woman-doing-exercise-workout-training-bicycles-134609234.jpg",
};
const img5 = {
  uri: "https://thumbs.dreamstime.com/z/push-ups-sport-exersice-silhouettes-woman-doing-exercise-workout-training-vector-illustration-119786360.jpg",
};

const Workouts = () => {
  return (
    <View style={styles.cont2}>
      <ScrollView>
      <Intro2 />
      <View style={styles.cont3}>
        <View>
          <Image style={styles.smallImg} source={img} />
        </View>

        <View>
          <Text style={styles.description}> Sit-Up Punches -- 30 Seconds</Text>
        </View>
      </View>

      <View style={styles.cont3}>
        <View>
          <Image style={styles.smallImg} source={img1} />
        </View>

        <View>
          <Text style={styles.description}>Crab Toe Touch -- 30 Seconds</Text>
        </View>
      </View>

      <View style={styles.cont3}>
        <View>
          <Image style={styles.smallImg} source={img2} />
        </View>

        <View>
          <Text style={styles.description}>Reverse Crunches -- 30 Seconds</Text>
        </View>
      </View>
      <View style={styles.cont3}>
        <View>
          <Image style={styles.smallImg} source={img3} />
        </View>

        <View>
          <Text style={styles.description}>Double Crunches -- 30 Seconds</Text>
        </View>
      </View>

      <View style={styles.cont3}>
        <View>
          <Image style={styles.smallImg} source={img5} />
        </View>

        <View>
          <Text style={styles.description}> Elbow Planks -- 30 Seconds</Text>
        </View>
      </View>

      <Text style={styles.instruction}>Rest 45 sec and Reapeat 3X</Text>
      </ScrollView>
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
