import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: "#eaeaea",
    },
    title: {
      marginTop: 16,
      paddingVertical: 8,
      borderWidth: 2,
      borderColor: "#20232a",
      borderRadius: 10,
      backgroundColor: "#61dafb",
      color: "#20232a",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold",
    },
  });
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Mr.Toan</Text>
        <Text style={styles.title}>Here your content, profile and contact</Text>
      </View>
    </>
  );
}
