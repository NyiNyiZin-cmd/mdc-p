import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const MyButton = ({title}:{title:string}) => {
  return (
    <Pressable
      onPress={() => {
        alert("I love You ❤️❤️❤️");
      }}
      style={styles.btn}
    >
      <Text style={styles.btnText}>{title}</Text>
    </Pressable>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#696969",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  btnText: {
    color: "white",
    fontSize: 20,
  },
});
