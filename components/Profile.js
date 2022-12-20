import styled from "styled-components/native";
import Margin from "./Margin";

const Container = styled.View`
  flex-direction: row;
`;
const ProfileImage = styled.Image`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.size / 2}px;
`;
const TextContainer = styled.View`
  justify-content: center;
  margin-left: 10px;
`;
const NameText = styled.Text`
  font-size: ${(props) => (props.isMe ? 16 : 13)}px;
  font-weight: ${(props) => (props.isMe ? "bold" : "normal")};
`;
const IntroDuctionText = styled.Text`
  font-size: ${(props) => (props.isMe ? 12 : 10)}px;
  color: gray;
`;

export default ({ name, introduction, uri, isMe }) => {
  const size = isMe ? 50 : 40;
  return (
    <Container>
      <ProfileImage source={{ uri: uri }} size={size} />
      <TextContainer>
        <NameText isMe={isMe}>{name}</NameText>
        <Margin height={3} />
        {introduction ? (
          <IntroDuctionText isMe={isMe}>{introduction}</IntroDuctionText>
        ) : null}
      </TextContainer>
    </Container>
  );
};
