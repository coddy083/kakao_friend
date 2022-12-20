import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { myProfile, friendProfiles } from "./data/data";
import { useState } from "react";
import Header from "./components/Header";
import Margin from "./components/Margin";
import Profile from "./components/Profile";
import Division from "./components/Division";
import FriendList from "./components/FriendList";
import FriendSection from "./components/FriendSection";
import TabBar from "./components/TabBar";

export default function App() {
  const [isOpend, setIsOpend] = useState(true);
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  const onPress = () => {
    setIsOpend(!isOpend);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }} edges={["top", "right", "left"]}>
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
          <Header />
          <Margin height={10} />
          <Profile
            name={myProfile.name}
            introduction={myProfile.introduction}
            uri={myProfile.uri}
            isMe={true}
          />
          <Margin height={10} />
          <Division />
          <Margin height={10} />
          <FriendSection
            friendCount={friendProfiles.length}
            onPress={onPress}
            isOpend={isOpend}
          />
          <FriendList friendProfiles={friendProfiles} isOpend={isOpend} />
        </View>
        <TabBar
          selectedTabIdx={selectedTabIdx}
          setSelectedTabIdx={setSelectedTabIdx}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}