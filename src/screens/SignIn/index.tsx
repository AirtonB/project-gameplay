import React, { useState } from "react";
import { RectButton } from "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  StatusBar,
} from "react-native";
import { styles } from "./styles";
import IlustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";
import { useNavigation } from "@react-navigation/native";
import { Background } from "../../components/Background";

export function SignIn() {
  // const [text, setText] = useState('lorem');

  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate("Home");
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IlustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Connect and organize{`\n`}
            your {`\n`}
            gameplays!{`\n`}
          </Text>
          <Text style={styles.subtitle}>
            Community {`\n`}
            and more{`\n`}
            by: AirtonB{`\n`}
          </Text>

          <ButtonIcon onPress={handleSignIn} title="Entrar no discord" />
        </View>
      </View>
    </Background>
  );
}
