import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Dashboard from "./src/components/Dashboard";
import { fetchData } from "./src/api";
import { Appbar, Title } from "react-native-paper";
import Charts from "./src/components/Charts";

export default function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("nepal");
  useEffect(() => {
    (async () => {
      const dataFetch = await fetchData(country);
      setData(dataFetch);
    })();
  }, []);

  if (!data) {
    <Text>Loading</Text>;
  }
  return (
    <View style={styles.container}>
      <Title>Covid</Title>
      <Dashboard data={data} />
      {/* <Charts /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 38,
    backgroundColor: "white",
    paddingVertical: 100,
  },
});
