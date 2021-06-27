import React from "react";
import { styles } from "./styles";
import { Image } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

export function GuildIcon() {
  const uri =
    "https://gamerssuffice.com/wp-content/uploads/2019/11/How-to-add-bots-to-discord-500x405.jpg";
  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
}
