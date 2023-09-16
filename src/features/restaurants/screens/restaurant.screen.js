import { FlatList } from "react-native";
import React, { useContext, useState } from "react";
import { ActivityIndicator } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safeArea.components";
import { styled } from "styled-components/native";
import { RestaurantsContext } from "../../../services/restaurants/restaurant.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { Search } from "../components/search.component";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FavouritesBar } from "../../../components/favourites/favouritesBar.component";
import { FadeInView } from "../../../components/animations/fade.components";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loader = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoaderContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const RestaurantScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      {isLoading && (
        <LoaderContainer>
          <Loader size={50} animating={true} color={"blue"} />
        </LoaderContainer>
      )}

      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetail", { detail: item })
            }
          >
            <FadeInView>
              <RestaurantInfoCard restaurant={item} />
            </FadeInView>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

export default RestaurantScreen;
