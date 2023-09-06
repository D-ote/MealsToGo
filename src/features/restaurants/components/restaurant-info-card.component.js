import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import isOpen from "../../../../assets/isOpen";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/text/text.component";

import {
  Address,
  Icon,
  Info,
  Rating,
  RestarauntCard,
  RestarauntCardCover,
  Section,
  SectionEnd,
} from "./restaurant-info-card-styles.component";

const RestaurantInfoCard = ({ restaurant = {} }) => {
  // const {
  //   name = "Alopenia",
  //   icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
  //   photos = [
  //     "https://images.squarespace-cdn.com/content/v1/58060e0ee3df2851adaeb51c/1679660500789-UI1EVZ9J9QIMHOJI0VNH/0K8A3532.jpg?format=1500w",
  //   ],
  //   address = "100 some street, here",
  //   isOpenNow = true,
  //   rating = 2.4,
  //   isClosedTemporarily = true,
  // } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(restaurant.rating)));

  return (
    <RestarauntCard elevation={5}>
      <RestarauntCardCover
        key={restaurant.name}
        source={{ uri: restaurant.photos[0] }}
      />
      <Info>
        <Text variant="label">{restaurant.name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {restaurant.isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {restaurant.isOpenNow && (
                <SvgXml xml={isOpen} width={20} height={20} />
              )}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: restaurant.icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{restaurant.address}</Address>
      </Info>
    </RestarauntCard>
  );
};

export default RestaurantInfoCard;
