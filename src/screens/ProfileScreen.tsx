import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-4">
        <Text className="text-2xl font-bold mt-4">Profile</Text>

        {/* User Info Section */}
        <View className="mt-6 bg-gray-100 rounded-lg p-4">
          <Text className="font-medium text-lg">User Name</Text>
          <Text className="text-gray-600">user@email.com</Text>
        </View>

        {/* Allergies Section */}
        <View className="mt-6">
          <Text className="text-xl font-semibold mb-4">Allergies & Restrictions</Text>
          <TouchableOpacity className="bg-gray-100 rounded-lg p-4">
            <Text className="font-medium">Manage Allergies</Text>
          </TouchableOpacity>
        </View>

        {/* Preferences Section */}
        <View className="mt-6">
          <Text className="text-xl font-semibold mb-4">Preferences</Text>
          <TouchableOpacity className="bg-gray-100 rounded-lg p-4 mb-4">
            <Text className="font-medium">Dietary Preferences</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-gray-100 rounded-lg p-4">
            <Text className="font-medium">Measurement Units</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}