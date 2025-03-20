import 'react-native-gesture-handler';
import React from "react";
import { View, Text, TouchableOpacity, Image, TextInput, FlatList, StatusBar } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const HomeScreen = () => {
  const users = [
    { id: "1", name: "Aisha", distance: "500m away", image: require("./assets/user1.jpg") },
    { id: "2", name: "Rohan", distance: "700m away", image: require("./assets/user2.jpg") },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
      <StatusBar barStyle="dark-content" />
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>Nearby Connections</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ flexDirection: "row", marginBottom: 20, alignItems: "center" }}>
            <Image source={item.image} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }} />
            <View>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
              <Text style={{ color: "gray" }}>{item.distance}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const ProfileScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text style={{ fontSize: 22, fontWeight: "bold" }}>Your Profile</Text>
    <TouchableOpacity style={{ marginTop: 20, padding: 10, backgroundColor: "#007BFF", borderRadius: 10 }}>
      <Text style={{ color: "white", fontSize: 16 }}>Edit Profile</Text>
    </TouchableOpacity>
  </View>
);

const ChatScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text style={{ fontSize: 22, fontWeight: "bold" }}>Chats</Text>
  </View>
);

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = "ios-people";
            } else if (route.name === "Chats") {
              iconName = "chatbubbles";
            } else if (route.name === "Profile") {
              iconName = "person";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#007BFF",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Chats" component={ChatScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
