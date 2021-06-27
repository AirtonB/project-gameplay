import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { Avatar } from "../Avatar";
export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://github.com/airtonb.png" />

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Hello,</Text>

          <Text style={styles.username}>Leandro!</Text>
        </View>

        <Text style={styles.message}>It's time to win</Text>
      </View>
    </View>
  );
}
