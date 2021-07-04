import React from "react";
import { View, Text, Alert } from "react-native";
import { styles } from "./styles";
import { Avatar } from "../Avatar";
import { useAuth } from "../../hooks/auth";
import { RectButton } from "react-native-gesture-handler";
export function Profile() {
  const { user, signOut } = useAuth();

  function handleSignOut() {
    Alert.alert("Logout", "Would you like to leave the match?", [
      {
        text: "No",
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => signOut(),
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <RectButton onPress={handleSignOut}>
        <Avatar urlImage={user.avatar} />
      </RectButton>

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Hello,</Text>

          <Text style={styles.username}>{user.firstname}!</Text>
        </View>

        <Text style={styles.message}>It's time to win</Text>
      </View>
    </View>
  );
}
