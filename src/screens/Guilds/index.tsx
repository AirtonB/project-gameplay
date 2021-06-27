import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { styles } from "./styles";
import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
};
export function Guilds({ handleGuildSelect }: Props) {
  const guilds = [
    {
      id: "1",
      name: "Legendary",
      icon: "image.png",
      owner: true,
    },
    {
      id: "2",
      name: "Legendary2",
      icon: "image.png",
      owner: false,
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <ListDivider />}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
        renderItem={({ item }) => (
          <Guild onPress={() => handleGuildSelect(item)} data={item} />
        )}
      />
    </View>
  );
}
