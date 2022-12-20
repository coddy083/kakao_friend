import { View, Text } from "react-native";
import IconButton from "./IconButton";

export default () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>친구</Text>
      <View style={{ flexDirection: "row", paddingHorizontal: 6 }}>
        <IconButton name="search" />
        <IconButton name="person-add-outline" />
        <IconButton name="ios-musical-notes-outline" />
        <IconButton name="settings-outline" />
      </View>
    </View>
  );
};
