import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { theme } from "../../global/theme";
import { Fontisto } from "@expo/vector-icons";
import { Header } from "../../components/Header";
import BannerImg from "../../assets/banner.png";
import {
  Alert,
  ImageBackground,
  Linking,
  Platform,
  Share,
  Text,
  View,
} from "react-native";
import { api } from "../../services/api";
import { Load } from "../../components/Load";
import { useRoute } from "@react-navigation/native";
import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import { ButtonIcon } from "../../components/ButtonIcon";
import { ListDivider } from "../../components/ListDivider";
import { Member, MemberProps } from "../../components/Member";
import { AppointmentsProps } from "../../components/Appointment";
import { BorderlessButton, FlatList } from "react-native-gesture-handler";

type Params = {
  guildSelected: AppointmentsProps;
};

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
};
export function AppointmentDetails() {
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
  const [loading, setLoading] = useState(true);

  const route = useRoute();
  const { guildSelected } = route.params as Params;

  async function fetchGuildWidget() {
    try {
      const response = await api.get(
        `/guilds/${guildSelected.guild.id}/widget.json`
      );

      setWidget(response.data);
    } catch (error) {
      Alert.alert("Error: Widget configuration may be disabled on the server.");
    } finally {
      setLoading(false);
    }
  }

  function handleShareInvitation() {
    const message =
      Platform.OS === "ios"
        ? `Welcome to ${guildSelected.guild.name}`
        : widget.instant_invite;

    Share.share({
      message,
      url: widget?.instant_invite,
    });
  }

  function handleOpenGuild() {
    Linking.openURL(widget.instant_invite);
  }

  useEffect(() => {
    fetchGuildWidget();
  }, []);

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          guildSelected.guild.owner && (
            <BorderlessButton onPress={handleShareInvitation}>
              <Fontisto name="share" size={24} color={theme.colors.primary} />
            </BorderlessButton>
          )
        }
      />

      <ImageBackground style={styles.banner} source={BannerImg}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>{guildSelected.guild.name}</Text>
          <Text style={styles.subTitle}>{guildSelected.description}</Text>
        </View>
      </ImageBackground>

      {loading ? (
        <Load />
      ) : (
        <>
          <ListHeader
            title="Players"
            subTitle={`Total ${widget.members ? widget.members.length : 0}`}
          />
          <FlatList
            data={widget?.members}
            ItemSeparatorComponent={() => <ListDivider />}
            style={styles.members}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Member data={item} />}
          />
        </>
      )}

      {guildSelected.guild.owner && (
        <View style={styles.footer}>
          <ButtonIcon onPress={handleOpenGuild} title="Enter the match" />
        </View>
      )}
    </Background>
  );
}
