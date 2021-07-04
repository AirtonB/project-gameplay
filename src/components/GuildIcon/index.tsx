import React from "react";
import { styles } from "./styles";
import { Image, View } from "react-native";
import DiscordSvg from "../../assets/discord.svg";
const { CDN_IMAGE_ENV } = process.env;

type Props = {
  guildId: string;
  iconId: string | null;
};

export function GuildIcon({ guildId, iconId }: Props) {
  const uri = `${CDN_IMAGE_ENV}/icons/${guildId}/${iconId}.png`;

  return (
    <View style={styles.container}>
      {iconId ? (
        <Image source={{ uri }} style={styles.image} resizeMode="cover" />
      ) : (
        <DiscordSvg width={40} height={40} />
      )}
    </View>
  );
}
