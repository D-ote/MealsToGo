import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screens/settings.screens";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";
import { Pressable } from "react-native";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="Settings"
        component={SettingsScreen}
      />
      <SettingsStack.Screen
        name="Favourites"
        options={{
          headerStyle: {
            backgroundColor: "#f8f8f8",
          },
          headerShadowVisible: false,
          // header: () => null,
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()} ml={-10}>
              <Ionicons
                name={
                  Platform.OS == "android"
                    ? "md-arrow-back-sharp"
                    : "md-chevron-back-sharp"
                }
                size={28}
                color="#000"
              />
            </Pressable>
          ),
        }}
        component={FavouritesScreen}
      />
    </SettingsStack.Navigator>
  );
};
