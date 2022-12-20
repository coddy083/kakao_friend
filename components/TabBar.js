import { View, TouchableOpacity, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getBottomSpace } from "react-native-iphone-x-helper";

const bottomSpace = getBottomSpace();

const TabButton = ({ onPress, iconName }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={{
        flex: 1,
        alignItems: "center",
        paddingBottom: bottomSpace,
        justifyContent: "center",
        paddingTop: Platform.OS === "ios" ? 10 : 0,
        marginVertical: Platform.OS === "android" ? 10 : 0,
      }}
    >
      <Ionicons name={iconName} size={24} />
    </TouchableOpacity>
  );
};

export default ({ selectedTabIdx, setSelectedTabIdx }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderTopWidth: 0.2,
        borderColor: "gray",
      }}
    >
      <TabButton
        onPress={() => setSelectedTabIdx(0)}
        iconName={selectedTabIdx === 0 ? "person" : "person-outline"}
      />
      <TabButton
        onPress={() => setSelectedTabIdx(1)}
        iconName={selectedTabIdx === 1 ? "chatbubble" : "chatbubble-outline"}
      />
      <TabButton
        onPress={() => setSelectedTabIdx(2)}
        iconName={selectedTabIdx === 2 ? "pricetag" : "pricetag-outline"}
      />
      <TabButton
        onPress={() => setSelectedTabIdx(3)}
        iconName={
          selectedTabIdx === 3
            ? "ios-ellipsis-horizontal-sharp"
            : "ios-ellipsis-horizontal-outline"
        }
      />
    </View>
  );
};
