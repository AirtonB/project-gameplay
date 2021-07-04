import React from "react";
import { Text, View, Image, Alert, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import IlustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";
import { useAuth } from "../../hooks/auth";
import { theme } from "../../global/theme";

export function SignIn() {
  const { loading, signIn } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error: any) {
      Alert.alert(error);
    }
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

          {loading ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : (
            <ButtonIcon onPress={handleSignIn} title="Entrar no discord" />
          )}
        </View>
      </View>
    </Background>
  );
}
