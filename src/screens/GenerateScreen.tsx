import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, ActivityIndicator} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function GenerateScreen() {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = () => {
    setIsLoading(true);
    // TODO: Implement recipe generation
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-4 py-6">
        <Text className="text-2xl font-bold mb-6">Generate Recipe</Text>
        
        <TextInput
          className="w-full p-4 bg-gray-100 rounded-lg mb-4"
          placeholder="Describe the recipe you want..."
          value={prompt}
          onChangeText={setPrompt}
          multiline
        />

        <TouchableOpacity 
          className="w-full bg-blue-600 rounded-lg p-4 items-center"
          onPress={handleGenerate}
          disabled={isLoading || !prompt.trim()}
        >
          {isLoading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text className="text-white font-semibold text-lg">Generate Recipe</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
