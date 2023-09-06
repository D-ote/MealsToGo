import { styled } from "styled-components/native";
import { Card } from "react-native-paper";

export const RestarauntCard = styled(Card)`
  backgroundcolor: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const RestarauntCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
  backgroundcolor: ${(props) => props.theme.colors.brand.primary};
`;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;

export const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const SectionEnd = styled.View`
  flex-direction: row;
`;

export const Rating = styled.View`
  flex-direction: row;
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
