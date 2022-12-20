import { FlatList, View } from "react-native";
import Margin from "./Margin";
import Profile from "./Profile";

const renderItem = ({ item }) => {
  return (
    <View>
      <Profile
        uri={item.uri}
        name={item.name}
        introduction={item.introduction}
        isMe={false}
      />
      <Margin height={10} />
    </View>
  );
};

export default ({ friendProfiles, isOpend }) => {
  return (
    <FlatList
      data={isOpend ? friendProfiles : []}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      // 첫번째 헤더를 고정시키기 위해 stickyHeaderIndices를 사용
      stickyHeaderIndices={[0]}
      // 헤더를 컴포넌트를 사용
      ListHeaderComponent={() => <Margin height={10} />}
      // 푸터를 컴포넌트를 사용
      ListFooterComponent={() => <Margin height={10} />}
    />
  );
};
