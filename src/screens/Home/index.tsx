import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { FlatList } from "react-native-gesture-handler";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";

export function Home() {
  const [category, setCategory] = useState("");

  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Legendary",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "07/06/2021 às 23:00",
      description: "Today we gonna rocks!",
    },
    {
      id: "2",
      guild: {
        id: "1",
        name: "Legendary",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "06/27/2021 11:00PM",
      description: "Today we gonna rocks!",
    },
  ];
  function handleCategorySelect(categoryId: string) {
    return categoryId === category ? setCategory("") : setCategory(categoryId);
  }
  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <View>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
      </View>
      <View style={styles.content}>
        <ListHeader title="Scheduled matches" subTitle="Total 6" />

        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <ListDivider />}
          renderItem={({ item }) => (
            <Appointment data={item} style={styles.matches} />
          )}
        />
      </View>
    </View>
  );
}
