import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";

export default ({ name }) => {
  return (
    <TouchableOpacity
      // hitSlop은 터치 영역을 확장시키는 속성
      hitSlop={{ top: 10, bottom: 10 }}
      style={{ paddingHorizontal: 5 }}
    >
      <Ionicons name={name} size={22} color="black" />
    </TouchableOpacity>
  );
};
