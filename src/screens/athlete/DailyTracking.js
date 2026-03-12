import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function DailyTracking() {
  const [sleep, setSleep] = useState(8);
  const [stress, setStress] = useState(3);
  const [energy, setEnergy] = useState(9);
  
  const [training, setTraining] = useState('yes'); // 'yes' | 'rest' | null
  const [diet, setDiet] = useState('100'); // '100' | '90' | '80' | '<80' | null

  const days = [
    { day: 'Mon', date: '12', state: 'past' },
    { day: 'Tue', date: '13', state: 'past' },
    { day: 'Wed', date: '14', state: 'past' },
    { day: 'Today', date: '15', state: 'today' },
    { day: 'Fri', date: '16', state: 'future' },
    { day: 'Sat', date: '17', state: 'future' },
    { day: 'Sun', date: '18', state: 'future' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      {/* Header & Date Picker */}
      <View className="bg-background-light/80 dark:bg-background-dark/80 px-4 pt-4 pb-2 border-b border-slate-200 dark:border-slate-800 z-10 w-full">
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Daily Check-in</Text>
          <View className="bg-primary/10 px-3 py-1 rounded-full">
            <Text className="text-primary text-xs font-bold uppercase tracking-wider">Athlete Pro</Text>
          </View>
        </View>

        {/* Horizontal Swipeable Calendar */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="h-20">
          <View className="flex-row gap-3 items-center">
            {days.map((d, index) => {
              if (d.state === 'today') {
                return (
                  <View key={index} className="items-center min-w-[56px] p-3 rounded-xl bg-primary border-4 border-primary/20">
                    <Text className="text-[10px] font-bold uppercase text-white">{d.day}</Text>
                    <Text className="text-lg font-bold text-white">{d.date}</Text>
                  </View>
                );
              } else if (d.state === 'past') {
                return (
                  <View key={index} className="items-center min-w-[56px] p-2 rounded-xl border border-slate-200 dark:border-slate-800 opacity-50">
                    <Text className="text-[10px] font-bold uppercase text-slate-900 dark:text-slate-100">{d.day}</Text>
                    <Text className="text-lg font-bold text-slate-900 dark:text-slate-100">{d.date}</Text>
                  </View>
                );
              } else {
                return (
                  <View key={index} className="items-center min-w-[56px] p-2 rounded-xl border border-slate-200 dark:border-slate-800">
                    <Text className="text-[10px] font-bold uppercase text-slate-900 dark:text-slate-100">{d.day}</Text>
                    <Text className="text-lg font-bold text-slate-900 dark:text-slate-100">{d.date}</Text>
                  </View>
                );
              }
            })}
          </View>
        </ScrollView>
      </View>

      {/* Main Content */}
      <ScrollView className="flex-1 p-4 w-full" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        
        {/* Sleep Quality Slider */}
        <View className="mb-8">
          <View className="flex-row items-center justify-between mb-4">
            <View className="flex-row items-center gap-2">
              <MaterialIcons name="bedtime" size={20} color="#007fff" />
              <Text className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Sleep Quality</Text>
            </View>
            <Text className="text-primary font-bold text-lg">{sleep}/10</Text>
          </View>
          <View className="relative flex-col gap-4">
            {/* Visual Bar representation of slider */}
            <View className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg overflow-hidden flex-row">
              <View className="h-full bg-primary" style={{ width: `${(sleep/10)*100}%` }} />
            </View>
            <View className="flex-row justify-between w-full px-1">
              <Text className="text-2xl">😫</Text>
              <Text className="text-2xl">😐</Text>
              <Text className="text-2xl">😎</Text>
            </View>
          </View>
        </View>

        {/* Stress Level Slider */}
        <View className="mb-8">
          <View className="flex-row items-center justify-between mb-4">
            <View className="flex-row items-center gap-2">
              <MaterialIcons name="psychology" size={20} color="#007fff" />
              <Text className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Stress Level</Text>
            </View>
            <Text className="text-primary font-bold text-lg">{stress}/10</Text>
          </View>
          <View className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg overflow-hidden flex-row">
            <View className="h-full bg-primary" style={{ width: `${(stress/10)*100}%` }} />
          </View>
        </View>

        {/* Energy Level Slider */}
        <View className="mb-8">
          <View className="flex-row items-center justify-between mb-4">
            <View className="flex-row items-center gap-2">
              <MaterialIcons name="bolt" size={20} color="#007fff" />
              <Text className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Energy Level</Text>
            </View>
            <Text className="text-primary font-bold text-lg">{energy}/10</Text>
          </View>
          <View className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg overflow-hidden flex-row">
            <View className="h-full bg-primary" style={{ width: `${(energy/10)*100}%` }} />
          </View>
        </View>

        {/* Training Adherence */}
        <View className="mb-8">
          <View className="flex-row items-center gap-2 mb-4">
            <MaterialIcons name="fitness-center" size={20} color="#007fff" />
            <Text className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Did you train today?</Text>
          </View>
          <View className="flex-row gap-3">
            <TouchableOpacity 
              className={`flex-1 flex-row items-center justify-center gap-2 py-4 rounded-xl border-2 ${training === 'yes' ? 'border-primary bg-primary/10' : 'border-slate-200 dark:border-slate-800 bg-transparent'}`}
              onPress={() => setTraining('yes')}
            >
              <MaterialIcons name="check-circle" size={20} color={training === 'yes' ? '#007fff' : '#64748b'} />
              <Text className={`font-bold ${training === 'yes' ? 'text-primary' : 'text-slate-500 dark:text-slate-400'}`}>Yes, crushed it</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              className={`flex-1 flex-row items-center justify-center gap-2 py-4 rounded-xl border-2 ${training === 'rest' ? 'border-primary bg-primary/10' : 'border-slate-200 dark:border-slate-800 bg-transparent'}`}
              onPress={() => setTraining('rest')}
            >
              <MaterialIcons name="cancel" size={20} color={training === 'rest' ? '#007fff' : '#64748b'} />
              <Text className={`font-bold ${training === 'rest' ? 'text-primary' : 'text-slate-500 dark:text-slate-400'}`}>Rest Day</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Diet Adherence */}
        <View className="mb-8">
          <View className="flex-row items-center gap-2 mb-4">
            <MaterialIcons name="restaurant-menu" size={20} color="#007fff" />
            <Text className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Diet Adherence</Text>
          </View>
          <View className="flex-row flex-wrap gap-2">
            {[
              { id: '100', label: '100%' },
              { id: '90', label: '90%' },
              { id: '80', label: '80%' },
              { id: '<80', label: '< 80%' },
            ].map((option) => (
              <TouchableOpacity 
                key={option.id}
                onPress={() => setDiet(option.id)}
                className={`px-5 py-2 rounded-full border ${diet === option.id ? 'border-primary bg-primary' : 'border-slate-200 dark:border-slate-800 bg-transparent'}`}
              >
                <Text className={`text-sm font-bold ${diet === option.id ? 'text-white' : 'text-slate-900 dark:text-slate-100'}`}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Daily Notes */}
        <View className="mb-8">
          <View className="flex-row items-center gap-2 mb-4">
            <MaterialIcons name="edit-note" size={20} color="#007fff" />
            <Text className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Daily Notes</Text>
          </View>
          <TextInput 
            multiline 
            numberOfLines={4}
            className="w-full bg-slate-100 dark:bg-slate-900 border-none rounded-xl p-4 text-slate-900 dark:text-slate-100 text-left align-top placeholder:text-slate-400" 
            placeholder="How are you feeling today? Any aches, pains, or mental breakthroughs?" 
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity className="w-full bg-primary py-5 rounded-xl shadow-lg flex-row items-center justify-center gap-3 mb-6">
          <Text className="text-white font-extrabold text-base">SUBMIT DAILY CHECK-IN</Text>
          <MaterialIcons name="send" size={20} color="white" />
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}
