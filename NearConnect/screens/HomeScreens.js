import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-gray-100 items-center justify-center">
      <Text className="text-2xl font-bold">Welcome to NearConnect</Text>
      
      <Image
        source={require("../assets/user1.jpg")}
        className="w-32 h-32 rounded-full mt-4"
      />

      <TouchableOpacity 
        className="mt-6 bg-blue-500 px-6 py-3 rounded-full shadow-lg"
        onPress={() => navigation.navigate("Profile")}
      >
        <Text className="text-white text-lg">View Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
