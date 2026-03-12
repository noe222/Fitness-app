import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Svg, { Path, Circle } from 'react-native-svg';

export default function AthleteDetail() {
  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      {/* Top Header */}
      <View className="flex-row items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 z-10">
        <TouchableOpacity className="p-1 -ml-1">
          <MaterialIcons name="arrow-back" size={24} color="#334155" />
        </TouchableOpacity>
        <Text className="text-lg font-bold text-slate-900 dark:text-slate-100 flex-1 text-center">Athlete Profile</Text>
        <TouchableOpacity className="p-1 -mr-1">
          <MaterialIcons name="more-vert" size={24} color="#334155" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        
        {/* Athlete Profile Card */}
        <View className="p-4">
          <View className="bg-slate-100 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <View className="flex-row items-center gap-4">
              <View className="w-20 h-20 rounded-full border-2 border-primary overflow-hidden">
                <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAp1el1on6OUAUBKZ1wBQnbOcZWM-5Nj6_vzecw9kANrqnZ_AGyMrjHy9oDjNPVd6CXohBMoVnaLk4yWMrglwd1eyjq9h0O3BoIBzk2lnqGzO6gqNifbUJqXnfD0kk3GomJGgsyqkNfRTDrFSSvUXWQS-9N4BS6uLl1TByggcyHr4JPvgKf24OMKEK7kBcjqIt_jXbFW0GKc5MYaGmo9GpIssS1fTFaNYA7V7HKykvLUJLTzUXzD5GzKk0FZi-eiCoj-NO48T4N6MM' }} className="w-full h-full" />
              </View>
              <View>
                <View className="flex-row items-center gap-2 mb-1">
                  <Text className="text-xl font-bold text-slate-900 dark:text-slate-100">Alex Moreno</Text>
                  <View className="bg-emerald-500/20 px-2 py-0.5 rounded-full">
                    <Text className="text-emerald-500 text-[10px] font-bold uppercase tracking-wider">Active</Text>
                  </View>
                </View>
                <Text className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Goal: Bulking Phase</Text>
                <View className="flex-row items-center gap-1">
                  <MaterialIcons name="event" size={14} color="#007fff" />
                  <Text className="text-primary text-xs font-semibold">Joined 6 months ago</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity className="flex-row items-center justify-center bg-primary h-10 px-4 rounded-lg mt-2 sm:mt-0">
              <MaterialIcons name="chat-bubble" size={18} color="white" className="mr-2" />
              <Text className="text-white text-sm font-bold ml-2">Message</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Quick Metrics Grid */}
        <View className="flex-row gap-3 px-4">
          <View className="flex-1 bg-slate-100 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <Text className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">Weight</Text>
            <View className="flex-row items-baseline">
              <Text className="text-xl font-bold text-slate-900 dark:text-slate-100">82</Text>
              <Text className="text-sm font-normal text-slate-900 dark:text-slate-100 ml-0.5">kg</Text>
            </View>
            <View className="flex-row items-center mt-1">
              <MaterialIcons name="trending-up" size={14} color="#10b981" />
              <Text className="text-emerald-500 text-[11px] font-bold ml-0.5">+0.5</Text>
            </View>
          </View>

          <View className="flex-1 bg-slate-100 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <Text className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">Goal</Text>
            <View className="flex-row items-baseline">
              <Text className="text-xl font-bold text-slate-900 dark:text-slate-100">85</Text>
              <Text className="text-sm font-normal text-slate-900 dark:text-slate-100 ml-0.5">kg</Text>
            </View>
            <View className="flex-row items-center mt-1">
              <MaterialIcons name="flag" size={14} color="#007fff" />
              <Text className="text-primary text-[11px] font-bold ml-0.5">3.0 left</Text>
            </View>
          </View>

          <View className="flex-1 bg-slate-100 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <Text className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">Adherence</Text>
            <View className="flex-row items-baseline">
              <Text className="text-xl font-bold text-slate-900 dark:text-slate-100">92</Text>
              <Text className="text-sm font-normal text-slate-900 dark:text-slate-100 ml-0.5">%</Text>
            </View>
            <View className="flex-row items-center mt-1">
              <MaterialIcons name="arrow-upward" size={14} color="#10b981" />
              <Text className="text-emerald-500 text-[11px] font-bold ml-0.5">+2%</Text>
            </View>
          </View>
        </View>

        {/* Progress Chart Section */}
        <View className="px-4 mt-6">
          <View className="flex-row items-center justify-between mb-3">
            <Text className="text-slate-900 dark:text-slate-100 font-bold">Weight Progress</Text>
            <Text className="text-xs text-primary font-bold">Last 30 Days</Text>
          </View>
          <View className="w-full h-48 bg-slate-100 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 p-4 flex-col justify-end relative overflow-hidden">
            <View className="absolute inset-0 items-center justify-center p-4">
              <Svg width="100%" height="80%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <Path d="M0,80 Q10,75 20,70 T40,72 T60,65 T80,55 T100,50" fill="none" stroke="#007fff" strokeWidth="2" />
                <Circle cx="100" cy="50" r="1.5" fill="#007fff" />
              </Svg>
            </View>
            <View className="flex-row justify-between w-full mt-auto">
              <Text className="text-[10px] text-slate-500 font-medium z-10">Oct 1</Text>
              <Text className="text-[10px] text-slate-500 font-medium z-10">Oct 15</Text>
              <Text className="text-[10px] text-slate-500 font-medium z-10">Oct 30</Text>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View className="flex-row gap-3 px-4 mt-6">
          <TouchableOpacity className="flex-1 items-center justify-center gap-2 p-4 rounded-xl bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
            <MaterialIcons name="fitness-center" size={24} color="#007fff" />
            <Text className="text-[11px] font-bold uppercase tracking-tighter text-slate-900 dark:text-slate-100">Edit Routine</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 items-center justify-center gap-2 p-4 rounded-xl bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
            <MaterialIcons name="restaurant" size={24} color="#007fff" />
            <Text className="text-[11px] font-bold uppercase tracking-tighter text-slate-900 dark:text-slate-100">Edit Diet</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 items-center justify-center gap-2 p-4 rounded-xl bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
            <MaterialIcons name="history-edu" size={24} color="#007fff" />
            <Text className="text-[11px] font-bold uppercase tracking-tighter text-slate-900 dark:text-slate-100">View Logs</Text>
          </TouchableOpacity>
        </View>

        {/* Coach Notes */}
        <View className="px-4 mt-8 mb-6">
          <View className="flex-row items-center gap-2 mb-3">
            <MaterialIcons name="notes" size={20} color="#007fff" />
            <Text className="text-slate-900 dark:text-slate-100 font-bold">Coach Notes</Text>
          </View>
          <View className="bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-1">
            <TextInput 
              multiline 
              numberOfLines={4} 
              className="w-full text-sm text-slate-700 dark:text-slate-300 px-3 py-2 text-left align-top placeholder:text-slate-500" 
              placeholder="Write private observations about Alex's progress..." 
            />
            <View className="flex-row justify-end p-2">
              <TouchableOpacity className="px-3 py-1 rounded hover:bg-primary/10">
                <Text className="text-[11px] font-bold text-primary uppercase tracking-widest">Save Notes</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text className="text-[10px] text-slate-500 mt-2 italic px-1">Last edited: Yesterday at 4:30 PM</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
