import React, { Fragment } from "react";
import { LogBox, StatusBar } from "react-native";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Background } from "./src/components/Background";

import { Routes } from "./src/routes";
import { Profile } from "./src/components/Profile";
import { AuthProvider } from "./src/hooks/auth";
// import { SignIn } from './src/screens/signIn';

LogBox.ignoreLogs([
  "You are not currently signed in to Expo on your development machine.",
]);
export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Background>
  );
}
