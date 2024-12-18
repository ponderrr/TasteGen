import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function SavedRecipesScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-4">
        <Text className="text-2xl font-bold mt-4">Saved Recipes</Text>

        {/* Recipe List */}
        <View className="mt-6">
          {/* Placeholder for recipe cards */}
          <TouchableOpacity className="bg-gray-100 rounded-lg p-4 mb-4">
            <Text className="font-medium text-lg">Recipe Title</Text>
            <Text className="text-gray-600 mt-2">Short description of the recipe...</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}