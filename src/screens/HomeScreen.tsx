import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-4">
        <Text className="text-2xl font-bold mt-4">TasteGen</Text>
        
        {/* Recent Recipes Section */}
        <View className="mt-6">
          <Text className="text-xl font-semibold mb-4">Recent Recipes</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {/* Placeholder for recipe cards */}
            <View className="w-64 h-40 bg-gray-100 rounded-lg mr-4 p-4">
              <Text className="font-medium">Recipe Title</Text>
            </View>
          </ScrollView>
        </View>

        {/* Quick Access Section */}
        <View className="mt-6">
          <Text className="text-xl font-semibold mb-4">Quick Access</Text>
          <View className="flex-row flex-wrap justify-between">
            <TouchableOpacity className="w-[48%] h-24 bg-gray-100 rounded-lg mb-4 p-4">
              <Text className="font-medium">Saved Recipes</Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-[48%] h-24 bg-gray-100 rounded-lg mb-4 p-4">
              <Text className="font-medium">Favorites</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}