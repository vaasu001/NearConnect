import React, { useState } from "react";
import { View, Text, Switch, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Stack = createStackNavigator();

const App = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer>
      <View className={`flex-1 ${isDarkMode ? "bg-black" : "bg-white"}`}>
        <View className="items-center justify-center py-4">
          <Text className={isDarkMode ? "text-white" : "text-black"}>
            Toggle Dark Mode
          </Text>
          <Switch
            value={isDarkMode}
            onValueChange={() => setDarkMode(!isDarkMode)}
          />
        </View>

        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default App;
