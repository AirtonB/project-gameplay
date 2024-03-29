import React from "react";
import { View, Text, Image } from "react-native";
import { theme } from "../../global/theme";

import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";

type Props = {
  urlImage: string;
};
export function Avatar({ urlImage }: Props) {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      <Image source={{ uri: urlImage }} style={styles.avatar} />
    </LinearGradient>
  );
}
