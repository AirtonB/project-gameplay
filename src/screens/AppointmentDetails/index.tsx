import React from "react";
import { styles } from "./styles";
import { theme } from "../../global/theme";
import { Fontisto } from "@expo/vector-icons";
import { Header } from "../../components/Header";
import BannerImg from "../../assets/banner.png";
import { Member } from "../../components/Member";
import { ListHeader } from "../../components/ListHeader";
import { Background } from "../../components/Background";
import { ButtonIcon } from "../../components/ButtonIcon";
import { ListDivider } from "../../components/ListDivider";
import { ImageBackground, Text, View } from "react-native";
import { BorderlessButton, FlatList } from "react-native-gesture-handler";
export function AppointmentDetails() {
  const members = [
    {
      id: "1",
      username: "Leandro",
      avatarUrl: "https://github.com/airtonb.png",
      status: "online",
    },
    {
      id: "2",
      username: "Airton",
      avatarUrl: "https://github.com/airtonb.png",
      status: "offline",
    },
  ];
  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />

      <ImageBackground style={styles.banner} source={BannerImg}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Legendary</Text>
          <Text style={styles.subTitle}>Today will be epic!</Text>
        </View>
      </ImageBackground>

      <ListHeader title="Players" subTitle="Total 18" />
      <FlatList
        data={members}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
}
