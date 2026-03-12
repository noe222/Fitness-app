import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function RoutineCreator() {
  const athletes = [
    { id: 1, name: 'Alex M.', active: true, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3-hNiWc7fhzF8nbs2Nh-2WX5azP98OS1JkN2XEFp7lNO4e17p4Cjmw6hK46CLh9bopC4fiutcQROkgqYyoyarbLb6qne7Rq1SiJ1vRgT7M1fwqEk3CTTiuC06CVdhbsV694zYQWWN8OpkiW7yzZcci6kPqmE4IUX4O1MuWbVecGkxRIGaRBhi1U0WRQ_ZGvG9xO4c7KhNMe_ts08qzWeflEwjoA66IXbsw4I625mo2u3Q2cqGmCMbnQTc7sQ7cg5AiAs1-T5enh0' },
    { id: 2, name: 'Sarah J.', active: false, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvqLK4Imq_hT08VtMNmwjpS9LNEpew2vcseL5CFNyJUPow1eqS3L8iIS4twBhgOciuglcqI42Dxp5Vd-zFLA9m9V0X9aqtBU0RH3LQAXbVt5W4mKvM11VfNg4M8Efbdd9VLl1LfALkTr5QVQsWN0k8phXFPayCHic8MPv3UHLVOK4cl--itePR8mYsDvFwfOkIrV3KV_rbR5y7HhNQQzkyU29LpDkhNVtRBnxkPaxcmPfRmXOAFsSEMZWuf12IAtcRELLFLosQM4s' },
    { id: 3, name: 'Jordan K.', active: false, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjKfx5JhM3BaKWDSLHMQoU8WrqgqVrMG7AVcjW5OL-W8ObA1XzOmVX0430nUrs1DzQ2Mia5UB3kLCTeVparLYE1afH_HKMvstk8mZfwjChYtI087COafsd01LJN5ryGDxEaA6bsSr5Gx-a-uNkZWHNBxTY9SVgEzHYYPXUnRBq8bRfIPEFaznKUamwh2NZH2H6zXNuMQGvtBfBfB-Kif5djCGdRbuQuzdIQKepcn9bN591hNk8uxnnlW9L5AlCm9f2aiZEDH4Z5to' },
    { id: 4, name: 'Emma W.', active: false, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtdJXlwO8uWg4e1J-20dEosCiL_a7bId_GF5rvEWzfFqZbnN25LmTxvvHhEGmoKOFGBbqhbPzuhHJHe4sU-fuHL6uFo2XSZDhpo9TllAYCszFzrN_w5h99WX6wIBlr2vJwJGrOdpVgO_XJSiQh5rwAa7f2SF2I-m__01F-cksWnCYWhkpPTQ5CSJZNyZKE0FOmoogrrulS_zgufu6qm-PRLHzs50TboZrOFoorPn7gFxAP2M9r-9rKlDzOxjUEKJ2hf-jKbODJnEA' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-4 border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity className="p-2 rounded-lg -ml-2">
            <MaterialIcons name="arrow-back" size={24} color="#334155" />
          </TouchableOpacity>
          <Text className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Create New Routine</Text>
        </View>
        <TouchableOpacity>
          <Text className="text-primary font-semibold text-sm">Drafts</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 150 }}>
        
        {/* Athlete Selection */}
        <View className="p-4 space-y-4">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Assign to Athlete</Text>
            <TouchableOpacity>
              <Text className="text-primary text-xs font-medium">Select All</Text>
            </TouchableOpacity>
          </View>
          
          <View className="flex-row items-center bg-slate-200/50 dark:bg-slate-800/50 rounded-lg px-3 mb-4 h-10">
            <MaterialIcons name="search" size={20} color="#94a3b8" />
            <TextInput 
              className="flex-1 ml-2 text-sm text-slate-900 dark:text-slate-100" 
              placeholder="Search athletes..." 
              placeholderTextColor="#64748b" 
            />
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="h-24">
            <View className="flex-row gap-4">
              {athletes.map(athlete => (
                <TouchableOpacity key={athlete.id} className={`items-center gap-2 ${athlete.active ? '' : 'opacity-60'}`}>
                  <View className={`w-14 h-14 rounded-full p-0.5 ${athlete.active ? 'border-2 border-primary' : 'border border-slate-300 dark:border-slate-700'}`}>
                    <Image source={{ uri: athlete.image }} className="w-full h-full rounded-full" />
                  </View>
                  <Text className="text-xs font-medium text-slate-900 dark:text-slate-100">{athlete.name}</Text>
                </TouchableOpacity>
              ))}
              
              <TouchableOpacity className="items-center gap-2">
                <View className="w-14 h-14 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 items-center justify-center">
                  <MaterialIcons name="add" size={24} color="#94a3b8" />
                </View>
                <Text className="text-xs font-medium text-slate-900 dark:text-slate-100">More</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        {/* Routine Info */}
        <View className="p-4">
          <View className="flex-row gap-4">
            <View className="flex-1 space-y-1.5">
              <Text className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">Routine Name</Text>
              <TextInput 
                className="w-full bg-slate-100 dark:bg-slate-800 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-slate-100" 
                placeholder="e.g. Push Day A" 
                placeholderTextColor="#94a3b8" 
              />
            </View>
            <View className="flex-1 space-y-1.5">
              <Text className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">Phase / Cycle</Text>
              <TextInput 
                className="w-full bg-slate-100 dark:bg-slate-800 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-slate-100" 
                placeholder="e.g. Hypertrophy" 
                placeholderTextColor="#94a3b8" 
              />
            </View>
          </View>
        </View>

        {/* Exercise List */}
        <View className="p-4 space-y-6">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-lg font-bold text-slate-900 dark:text-slate-100">Exercises</Text>
            <TouchableOpacity className="flex-row items-center gap-1">
              <MaterialIcons name="filter-list" size={18} color="#007fff" />
              <Text className="text-xs font-semibold text-primary">Library</Text>
            </TouchableOpacity>
          </View>

          {/* Exercise Card 1 */}
          <View className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm mb-4">
            <View className="flex-row items-start justify-between mb-4">
              <View className="flex-row items-center gap-3 flex-1">
                <View className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDM7OMFB4FDy1eh6cbaefnHyxLyk7r1dedbY9U4DlL_us-niCm56phDebkR1bUxBikQZVZkUrS5Wfr3MrUX0pqLYuHtTrU6V5_UUlKostvxHzWFUCwFaN1w71gNiQl3q-ueZbuq7dxKF29tHEiC2hmVMDwI-IekQ3NL9db8apeltaLVkmq6nccy5JuJifBQDgHQTkpmK24g5tZjZn6HP5expm8JRIfIhg_h6aiHIKjSfoJrlWSGOQqPHi1wE-jQXm1TELpmRT3azvg' }} className="w-full h-full opacity-80" />
                </View>
                <View className="flex-1">
                  <Text className="font-bold text-slate-900 dark:text-slate-100">Barbell Bench Press</Text>
                  <Text className="text-xs text-slate-500">Chest, Triceps, Shoulders</Text>
                </View>
              </View>
              <TouchableOpacity className="p-1">
                <MaterialIcons name="delete" size={20} color="#94a3b8" />
              </TouchableOpacity>
            </View>
            
            <View className="flex-row gap-2">
              <View className="flex-1">
                <Text className="text-[10px] text-slate-500 font-bold uppercase text-center mb-1">Sets</Text>
                <TextInput className="w-full bg-slate-50 dark:bg-slate-800 rounded text-center text-sm py-2 font-bold text-slate-900 dark:text-slate-100" defaultValue="4" />
              </View>
              <View className="flex-1">
                <Text className="text-[10px] text-slate-500 font-bold uppercase text-center mb-1">Reps</Text>
                <TextInput className="w-full bg-slate-50 dark:bg-slate-800 rounded text-center text-sm py-2 font-bold text-slate-900 dark:text-slate-100" defaultValue="8-10" />
              </View>
              <View className="flex-1">
                <Text className="text-[10px] text-slate-500 font-bold uppercase text-center mb-1">RPE</Text>
                <TextInput className="w-full bg-slate-50 dark:bg-slate-800 rounded text-center text-sm py-2 font-bold text-slate-900 dark:text-slate-100" defaultValue="9" />
              </View>
              <View className="flex-1">
                <Text className="text-[10px] text-slate-500 font-bold uppercase text-center mb-1">Rest</Text>
                <TextInput className="w-full bg-slate-50 dark:bg-slate-800 rounded text-center text-sm py-2 font-bold text-slate-900 dark:text-slate-100" defaultValue="3m" />
              </View>
            </View>
          </View>

          {/* Exercise Card 2 */}
          <View className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm mb-6">
            <View className="flex-row items-start justify-between mb-4">
              <View className="flex-row items-center gap-3 flex-1">
                <View className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiHW99UXYHY9agrZGzTAjhGPPaUwzh8jcOEQQWH5l1yYQWAiYbNnXZZoxqAumhja2g-EZTchFs0wvGulQ0ZNPAqwhV35HBnbjtss79QJpflQMPXoj139kHj_7LmOtdUsf4xC2p_el9X0Q9rdBRXa7h3IWHziQ4bQOFzPIVTTiHXLMB5CtMwgDbTszSxzshRo5tG2ascl8flF1knbsLv5-vjxLtzKCmPS8pA_bmkDbI04JfIbxLGL7uXn58ia382ulnoABImHXAMh4' }} className="w-full h-full opacity-80" />
                </View>
                <View className="flex-1">
                  <Text className="font-bold text-slate-900 dark:text-slate-100">Dumbbell Shoulder Press</Text>
                  <Text className="text-xs text-slate-500">Shoulders, Triceps</Text>
                </View>
              </View>
              <TouchableOpacity className="p-1">
                <MaterialIcons name="delete" size={20} color="#94a3b8" />
              </TouchableOpacity>
            </View>
            
            <View className="flex-row gap-2">
              <View className="flex-1">
                <Text className="text-[10px] text-slate-500 font-bold uppercase text-center mb-1">Sets</Text>
                <TextInput className="w-full bg-slate-50 dark:bg-slate-800 rounded text-center text-sm py-2 font-bold text-slate-900 dark:text-slate-100" placeholder="-" placeholderTextColor="#94a3b8" />
              </View>
              <View className="flex-1">
                <Text className="text-[10px] text-slate-500 font-bold uppercase text-center mb-1">Reps</Text>
                <TextInput className="w-full bg-slate-50 dark:bg-slate-800 rounded text-center text-sm py-2 font-bold text-slate-900 dark:text-slate-100" placeholder="-" placeholderTextColor="#94a3b8" />
              </View>
              <View className="flex-1">
                <Text className="text-[10px] text-slate-500 font-bold uppercase text-center mb-1">RIR</Text>
                <TextInput className="w-full bg-slate-50 dark:bg-slate-800 rounded text-center text-sm py-2 font-bold text-slate-900 dark:text-slate-100" placeholder="-" placeholderTextColor="#94a3b8" />
              </View>
              <View className="flex-1">
                <Text className="text-[10px] text-slate-500 font-bold uppercase text-center mb-1">Rest</Text>
                <TextInput className="w-full bg-slate-50 dark:bg-slate-800 rounded text-center text-sm py-2 font-bold text-slate-900 dark:text-slate-100" placeholder="-" placeholderTextColor="#94a3b8" />
              </View>
            </View>
          </View>

          {/* Add Exercise Button */}
          <TouchableOpacity className="w-full py-4 border-2 border-dashed border-slate-300 dark:border-slate-800 rounded-xl flex-row items-center justify-center gap-2 mb-4">
            <MaterialIcons name="add-circle" size={24} color="#94a3b8" />
            <Text className="text-slate-500 dark:text-slate-400 font-medium">Add Exercise from Library</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

      {/* Fixed Bottom Action Bar */}
      <View className="absolute bottom-4 left-0 right-0 px-4 pt-2 pb-4 bg-background-light/90 dark:bg-background-dark/90 justify-center">
        <TouchableOpacity className="w-full bg-primary py-4 rounded-xl shadow-lg items-center justify-center m-1">
          <Text className="text-white font-bold text-base">Save & Publish Routine</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
