import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import RestaurantScreen from "../../features/restaurants/screens/restaurant.screen";
import RestaurantDetail from "../../features/restaurants/screens/restaurantDetail.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      options={() => ({
        headerShown: false,
      })}
    >
      <RestaurantStack.Screen
        name="Restaurant"
        options={() => ({
          headerShown: false,
        })}
        component={RestaurantScreen}
      />

      <RestaurantStack.Screen
        name="RestaurantDetail"
        options={() => ({
          headerShown: false,
          presentation: "modal",
        })}
        component={RestaurantDetail}
      />
    </RestaurantStack.Navigator>
  );
};
