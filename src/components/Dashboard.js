import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import {
  Card,
  Paragraph,
  ActivityIndicator,
  Title,
  Caption,
} from "react-native-paper";
import AnimateNumber from "react-native-countup";
export default function Dashboard({
  data: { confirmed, deaths, recovered, lastUpdate },
}) {
  if (!confirmed)
    return (
      <View
        style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
      >
        <ActivityIndicator />
      </View>
    );
  return (
    <View style={styles.container}>
      <View>
        <Caption style={{ paddingBottom: 20 }}>
          {new Date(lastUpdate).toDateString()}
        </Caption>
      </View>

      <View style={{ flex: 1, flexDirection: "row", paddingVertical: 20 }}>
        <View style={styles.columns}>
          <Text style={styles.text}>
            <AnimateNumber
              initial={0}
              countBy={10}
              value={confirmed.value}
              timing="linear"
            />
          </Text>

          <AntDesign name="meh" size={24} style={styles.icons} color="blue" />
          <Text> Confirmed</Text>
        </View>
        <View style={styles.columns}>
          <Text style={styles.text}>
            <AnimateNumber
              initial={0}
              value={recovered.value}
              countBy={10}
              timing="linear"
            />
          </Text>
          <FontAwesome5
            name="briefcase-medical"
            size={24}
            style={styles.icons}
            color="green"
          />
          <Text> Recovered</Text>
        </View>
        <View style={styles.columns}>
          <Text style={styles.text}>
            <AnimateNumber
              initial={0}
              value={deaths.value}
              countBy={1}
              timing="linear"
            />
          </Text>
          <AntDesign
            name="closesquare"
            size={24}
            style={styles.icons}
            color="red"
          />
          <Text> Death</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  columns: {
    width: "40%",
    textAlign: "center",
    justifyContent: "center",
  },
  icons: {
    margin: "3%",
    alignContent: "center",
  },
});
