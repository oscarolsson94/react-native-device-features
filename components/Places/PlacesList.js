import { View, Text, FlatList } from "react-native";

export const PlacesList = ({ places }) => {
  return <FlatList data={places} />;
};
