import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Modal,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Background } from "../../components/Background";
import { CategorySelect } from "../../components/CategorySelect";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../global/theme";
import { GuildIcon } from "../../components/GuildIcon";
import { SmallInput } from "../../components/SmallInput";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { Guilds } from "../Guilds";
import { ModalView } from "../../components/ModalView";
import { GuildProps } from "../../components/Appointment";
export function AppointmentCreate() {
  const [category, setCategory] = useState("");
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  function handleOpenGuilds() {
    setOpenGuildsModal(true);
  }

  function handleGuildSelect(guildSelected: GuildProps) {
    setGuild(guildSelected);
    setOpenGuildsModal(false);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView>
        {/* <Background> */}
        <Header title="Set match" />
        <Text
          style={[
            styles.label,
            { marginLeft: 24, marginTop: 36, marginBottom: 18 },
          ]}
        >
          Category
        </Text>

        <CategorySelect
          hasCheckbox
          setCategory={setCategory}
          categorySelected={category}
        />

        <View style={styles.form}>
          <RectButton onPress={handleOpenGuilds}>
            <View style={styles.select}>
              {guild.icon ? <GuildIcon /> : <View style={styles.image} />}

              <View style={styles.selectBody}>
                <Text style={styles.label}>
                  {guild.name ? guild.name : "Select a server"}
                </Text>
              </View>
              <Feather
                name="chevron-right"
                color={theme.colors.heading}
                size={28}
              />
            </View>
          </RectButton>

          <View style={styles.field}>
            <View>
              <Text style={styles.label}> Day and Month</Text>
              <View style={styles.column}>
                <SmallInput maxLength={2} />
                <Text style={styles.divider}>
                  /<SmallInput maxLength={2} />
                  <SmallInput maxLength={2} />
                </Text>
                <SmallInput maxLength={2} />
              </View>
            </View>
            <View>
              <Text style={styles.label}> Hour and Min</Text>
              <View style={styles.column}>
                <SmallInput maxLength={2} />
                <Text style={styles.divider}>
                  :<SmallInput maxLength={2} />
                  <SmallInput maxLength={2} />
                </Text>
                <SmallInput maxLength={2} />
              </View>
            </View>
          </View>
          <View style={[styles.field, { marginBottom: 12 }]}>
            <Text style={styles.label}>Description</Text>
            <Text style={styles.charactersLimit}>Max 100 characters</Text>
          </View>
          <TextArea
            multiline
            maxLength={100}
            numberOfLines={5}
            autoCorrect={false}
          />
          <View style={styles.footer}>
            <Button title="Save" />
          </View>
        </View>
      </ScrollView>

      <ModalView visible={openGuildsModal}>
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}
