import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function MacrosDietPlan() {
  const [expandedMeal, setExpandedMeal] = useState(1); // 1 is expanded default

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark pb-24">
      {/* Header Section */}
      <View className="bg-background-light/80 dark:bg-background-dark/80 p-4 border-b border-slate-200 dark:border-slate-800 z-10 w-full">
        
        <View className="flex-row items-center justify-between mb-6">
          <View className="flex-row items-center gap-3">
            <MaterialIcons name="arrow-back" size={24} color="#007fff" />
            <Text className="text-xl font-bold text-slate-900 dark:text-slate-100">Daily Nutrition</Text>
          </View>
          <View className="flex-row items-center gap-2 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            <MaterialIcons name="calendar-today" size={14} color="#007fff" />
            <Text className="text-sm font-semibold text-primary">Today</Text>
          </View>
        </View>

        {/* Macro Summary */}
        <View className="flex-col gap-4">
          <View className="flex-row items-center justify-between px-2">
            <View>
              <Text className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider font-bold">Total Energy</Text>
              <Text className="text-3xl font-black text-primary">
                3,250 <Text className="text-sm font-normal text-slate-400">kcal</Text>
              </Text>
            </View>
            <View className="w-12 h-12 rounded-full border-4 border-primary items-center justify-center">
              <Text className="text-[10px] font-bold text-slate-900 dark:text-slate-100">82%</Text>
            </View>
          </View>

          <View className="flex-row gap-3">
            {/* Protein */}
            <View className="flex-1 bg-slate-100 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
              <View className="flex-row justify-between items-end mb-2">
                <Text className="text-xs font-bold text-slate-400">P</Text>
                <Text className="text-sm font-bold text-slate-900 dark:text-slate-100">158g</Text>
              </View>
              <View className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden flex-row">
                <View className="bg-primary h-full rounded-full" style={{ width: '75%' }} />
              </View>
            </View>

            {/* Carbs */}
            <View className="flex-1 bg-slate-100 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
              <View className="flex-row justify-between items-end mb-2">
                <Text className="text-xs font-bold text-slate-400">C</Text>
                <Text className="text-sm font-bold text-slate-900 dark:text-slate-100">590g</Text>
              </View>
              <View className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden flex-row">
                <View className="bg-emerald-500 h-full rounded-full" style={{ width: '90%' }} />
              </View>
            </View>

            {/* Fats */}
            <View className="flex-1 bg-slate-100 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
              <View className="flex-row justify-between items-end mb-2">
                <Text className="text-xs font-bold text-slate-400">F</Text>
                <Text className="text-sm font-bold text-slate-900 dark:text-slate-100">73g</Text>
              </View>
              <View className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden flex-row">
                <View className="bg-yellow-500 h-full rounded-full" style={{ width: '60%' }} />
              </View>
            </View>
          </View>
        </View>

      </View>

      {/* Meal List */}
      <ScrollView className="flex-1 w-full p-4" showsVerticalScrollIndicator={false}>
        <View className="space-y-4 flex-col gap-4">
          
          {/* Meal 1: Detailed */}
          <TouchableOpacity 
            className="bg-white dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-primary/20 overflow-hidden shadow-sm flex-col"
            onPress={() => setExpandedMeal(expandedMeal === 1 ? null : 1)}
          >
            <View className="p-4 flex-row items-center justify-between border-b border-slate-100 dark:border-slate-700/50">
              <View className="flex-row items-center gap-3">
                <View className="p-2 bg-primary/10 rounded-lg">
                  <MaterialIcons name="breakfast-dining" size={24} color="#007fff" />
                </View>
                <View>
                  <Text className="font-bold text-slate-900 dark:text-slate-100">Meal 1: Breakfast</Text>
                  <Text className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">07:30 AM</Text>
                </View>
              </View>
              <View className="flex-row items-center gap-3">
                <Text className="text-sm font-bold text-slate-900 dark:text-slate-100">743 kcal</Text>
                <View className="w-6 h-6 border-2 border-primary rounded items-center justify-center bg-primary">
                  <MaterialIcons name="check" size={16} color="white" />
                </View>
              </View>
            </View>

            {expandedMeal === 1 && (
              <View className="p-4 bg-slate-50/50 dark:bg-slate-900/20 flex-col">
                <View className="flex-row gap-2 mb-4 justify-between">
                  <View className="flex-1 bg-background-light dark:bg-background-dark p-2 rounded-lg border border-slate-100 dark:border-slate-800 items-center">
                    <Text className="text-[10px] text-slate-500 uppercase font-bold">Prot</Text>
                    <Text className="font-bold text-primary mt-1">36g</Text>
                  </View>
                  <View className="flex-1 bg-background-light dark:bg-background-dark p-2 rounded-lg border border-slate-100 dark:border-slate-800 items-center">
                    <Text className="text-[10px] text-slate-500 uppercase font-bold">Carb</Text>
                    <Text className="font-bold text-emerald-500 mt-1">100g</Text>
                  </View>
                  <View className="flex-1 bg-background-light dark:bg-background-dark p-2 rounded-lg border border-slate-100 dark:border-slate-800 items-center">
                    <Text className="text-[10px] text-slate-500 uppercase font-bold">Fat</Text>
                    <Text className="font-bold text-yellow-500 mt-1">22g</Text>
                  </View>
                  <View className="flex-1 bg-background-light dark:bg-background-dark p-2 rounded-lg border border-slate-100 dark:border-slate-800 items-center">
                    <Text className="text-[10px] text-slate-500 uppercase font-bold">Fiber</Text>
                    <Text className="font-bold text-slate-400 mt-1">12g</Text>
                  </View>
                </View>

                <View className="flex-col gap-2">
                  <View className="flex-row justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-2">
                    <Text className="text-sm text-slate-600 dark:text-slate-300">Oatmeal with Blueberries</Text>
                    <Text className="text-sm font-medium text-slate-600 dark:text-slate-300">80g</Text>
                  </View>
                  <View className="flex-row justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-2">
                    <Text className="text-sm text-slate-600 dark:text-slate-300">Whey Protein Isolate</Text>
                    <Text className="text-sm font-medium text-slate-600 dark:text-slate-300">1 Scoop</Text>
                  </View>
                  <View className="flex-row justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-2">
                    <Text className="text-sm text-slate-600 dark:text-slate-300">Almond Butter</Text>
                    <Text className="text-sm font-medium text-slate-600 dark:text-slate-300">15g</Text>
                  </View>
                  <View className="flex-row justify-between items-center">
                    <Text className="text-sm text-slate-600 dark:text-slate-300">Greek Yogurt (Non-fat)</Text>
                    <Text className="text-sm font-medium text-slate-600 dark:text-slate-300">150g</Text>
                  </View>
                </View>
              </View>
            )}
          </TouchableOpacity>

          {/* Meal 2 */}
          <TouchableOpacity 
            className="bg-white dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm flex-col"
            onPress={() => setExpandedMeal(expandedMeal === 2 ? null : 2)}
          >
            <View className="p-4 flex-row items-center justify-between">
              <View className="flex-row items-center gap-3 opacity-60">
                <View className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <MaterialIcons name="lunch-dining" size={24} color="#64748b" />
                </View>
                <View>
                  <Text className="font-bold text-slate-900 dark:text-slate-100">Meal 2: Post-Workout</Text>
                  <Text className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">11:00 AM • 650 kcal</Text>
                </View>
              </View>
              <View className="w-6 h-6 border-2 border-slate-300 dark:border-slate-600 rounded pt-[0.4] items-center justify-center">
                 {/* check icon intentionally omitted to show uncompleted state */}
              </View>
            </View>
          </TouchableOpacity>

          {/* Meal 3 */}
          <TouchableOpacity 
            className="bg-white dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm flex-col"
            onPress={() => setExpandedMeal(expandedMeal === 3 ? null : 3)}
          >
            <View className="p-4 flex-row items-center justify-between">
              <View className="flex-row items-center gap-3 opacity-60">
                <View className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <MaterialIcons name="restaurant" size={24} color="#64748b" />
                </View>
                <View>
                  <Text className="font-bold text-slate-900 dark:text-slate-100">Meal 3: Lunch</Text>
                  <Text className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">02:30 PM • 820 kcal</Text>
                </View>
              </View>
              <View className="w-6 h-6 border-2 border-slate-300 dark:border-slate-600 rounded"></View>
            </View>
          </TouchableOpacity>

          {/* Meal 4 */}
          <View className="bg-white dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm flex-col">
            <View className="p-4 flex-row items-center justify-between">
              <View className="flex-row items-center gap-3 opacity-60">
                <View className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <MaterialIcons name="fastfood" size={24} color="#64748b" />
                </View>
                <View>
                  <Text className="font-bold text-slate-900 dark:text-slate-100">Meal 4: Snack</Text>
                  <Text className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">05:00 PM • 320 kcal</Text>
                </View>
              </View>
              <View className="w-6 h-6 border-2 border-slate-300 dark:border-slate-600 rounded"></View>
            </View>
          </View>

          {/* Meal 5 */}
          <View className="bg-white dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm flex-col mb-10">
            <View className="p-4 flex-row items-center justify-between">
              <View className="flex-row items-center gap-3 opacity-60">
                <View className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <MaterialIcons name="dinner-dining" size={24} color="#64748b" />
                </View>
                <View>
                  <Text className="font-bold text-slate-900 dark:text-slate-100">Meal 5: Dinner</Text>
                  <Text className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">08:00 PM • 717 kcal</Text>
                </View>
              </View>
              <View className="w-6 h-6 border-2 border-slate-300 dark:border-slate-600 rounded"></View>
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
