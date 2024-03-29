import React from "react";
import { styles } from "./styles";
import { Category } from "../Category";
import { ScrollView } from "react-native";
import { categories } from "../../Utils/categories";

type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasCheckbox?: boolean;
};

export function CategorySelect({
  categorySelected,
  setCategory,
  hasCheckbox = false,
}: Props) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
          hasCheckBox={hasCheckbox}
        />
      ))}
    </ScrollView>
  );
}
