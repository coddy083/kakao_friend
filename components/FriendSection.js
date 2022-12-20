import { TouchableOpacity, View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default ({ friendCount, onPress, isOpend }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text style={{ color: "gray" }}>친구 {friendCount}</Text>
      <TouchableOpacity onPress={onPress}>
        <MaterialIcons
          name={isOpend ? "keyboard-arrow-up" : "keyboard-arrow-down"}
          size={24}
          color="lightgray"
        />
      </TouchableOpacity>
    </View>
  );
};
