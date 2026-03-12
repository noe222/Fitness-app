import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Svg, { Circle } from 'react-native-svg';

export default function Insights() {
  const [activeDateRange, setActiveDateRange] = useState('Last 30 Days');
  const dateRanges = ['Last 30 Days', 'Last 7 Days', 'Last Quarter'];

  // Mock data for Bar Chart (Form Completion)
  const formCompletionData = [
    { day: 'Mon', completion: 92 },
    { day: 'Tue', completion: 88 },
    { day: 'Wed', completion: 75 },
    { day: 'Thu', completion: 95 },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      {/* Header */}
      <View className="flex-row items-center justify-between p-4 bg-background-light/80 dark:bg-background-dark/80 border-b border-slate-200 dark:border-slate-800 z-10 w-full">
        <View className="flex-row items-center gap-3">
          <View className="w-10 h-10 rounded-lg bg-primary/10 items-center justify-center">
            <MaterialIcons name="analytics" size={24} color="#007fff" />
          </View>
          <Text className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Insights</Text>
        </View>
        <View className="flex-row items-center gap-2">
          <TouchableOpacity className="w-10 h-10 rounded-lg items-center justify-center flex-row hover:bg-slate-100 dark:hover:bg-slate-800">
            <MaterialIcons name="search" size={24} color="#64748b" />
          </TouchableOpacity>
          <TouchableOpacity className="w-10 h-10 rounded-lg items-center justify-center flex-row hover:bg-slate-100 dark:hover:bg-slate-800">
            <MaterialIcons name="notifications" size={24} color="#64748b" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Date Range Selector */}
      <View className="border-b border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark py-3 px-4 z-10">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row gap-3">
            {dateRanges.map(range => (
              <TouchableOpacity 
                key={range}
                onPress={() => setActiveDateRange(range)}
                className={`flex-row items-center justify-center h-9 px-4 rounded-lg ${activeDateRange === range ? 'bg-primary' : 'bg-slate-100 dark:bg-slate-800'}`}
              >
                <Text className={`text-sm font-medium ${activeDateRange === range ? 'text-white' : 'text-slate-600 dark:text-slate-400'}`}>
                  {range}
                </Text>
                {activeDateRange === range && (
                  <MaterialIcons name="calendar-today" size={16} color="white" className="ml-2" />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      <ScrollView className="flex-1 w-full" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="p-4 space-y-6">

          {/* Business KPIs Row */}
          <View className="flex-col md:flex-row gap-4 mb-6">
            <View className="flex-1 bg-white dark:bg-slate-900/50 p-5 rounded-xl border border-slate-200 dark:border-slate-800 flex-col gap-2 mb-4 md:mb-0">
              <View className="flex-row justify-between items-start">
                <Text className="text-slate-500 dark:text-slate-400 text-sm font-medium">Revenue Growth</Text>
                <View className="bg-emerald-500/10 px-2 py-1 rounded-full">
                  <Text className="text-emerald-500 text-xs font-bold">+12%</Text>
                </View>
              </View>
              <Text className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">$14.2k</Text>
              <Text className="text-slate-400 text-xs">vs last period</Text>
            </View>

            <View className="flex-1 bg-white dark:bg-slate-900/50 p-5 rounded-xl border border-slate-200 dark:border-slate-800 flex-col gap-2 mb-4 md:mb-0">
              <View className="flex-row justify-between items-start">
                <Text className="text-slate-500 dark:text-slate-400 text-sm font-medium">Active Athletes</Text>
                <View className="bg-emerald-500/10 px-2 py-1 rounded-full">
                  <Text className="text-emerald-500 text-xs font-bold">+5%</Text>
                </View>
              </View>
              <Text className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">98</Text>
              <Text className="text-slate-400 text-xs">Total registered</Text>
            </View>

            <View className="flex-1 bg-white dark:bg-slate-900/50 p-5 rounded-xl border border-slate-200 dark:border-slate-800 flex-col gap-2">
              <View className="flex-row justify-between items-start">
                <Text className="text-slate-500 dark:text-slate-400 text-sm font-medium">Retention Rate</Text>
                <View className="bg-rose-500/10 px-2 py-1 rounded-full">
                  <Text className="text-rose-500 text-xs font-bold">-2%</Text>
                </View>
              </View>
              <Text className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">94%</Text>
              <Text className="text-slate-400 text-xs">Rolling average</Text>
            </View>
          </View>

          {/* Performance Charts Section */}
          <View className="flex-col gap-6 mb-6">
            
            {/* Pseudo-Bar Chart: Total Volume */}
            <View className="bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
              <View className="flex-row items-center justify-between mb-6">
                <Text className="text-lg font-bold text-slate-900 dark:text-slate-100">Total Volume Lifted</Text>
                <TouchableOpacity>
                  <MaterialIcons name="more-vert" size={24} color="#94a3b8" />
                </TouchableOpacity>
              </View>
              <View className="h-48 flex-row items-end gap-2 pr-2">
                <View className="flex-1 h-[40%] bg-primary/20 rounded-t-sm" />
                <View className="flex-1 h-[55%] bg-primary/20 rounded-t-sm" />
                <View className="flex-1 h-[45%] bg-primary/20 rounded-t-sm" />
                <View className="flex-1 h-[70%] bg-primary/40 rounded-t-sm" />
                <View className="flex-1 h-[60%] bg-primary/40 rounded-t-sm" />
                <View className="flex-1 h-[85%] bg-primary/60 rounded-t-sm" />
                <View className="flex-1 h-[95%] bg-primary rounded-t-sm relative items-center justify-start">
                  <View className="absolute -top-7 bg-slate-800 px-2 py-0.5 rounded">
                    <Text className="text-white text-[10px]">28k</Text>
                  </View>
                </View>
              </View>
              <View className="flex-row justify-between mt-4">
                {['WK 1', 'WK 2', 'WK 3', 'WK 4', 'WK 5', 'WK 6', 'WK 7'].map((wk, i) => (
                  <Text key={i} className="text-[10px] text-slate-500 font-medium flex-1 text-center">{wk}</Text>
                ))}
              </View>
            </View>

            {/* Donut Chart & Engagement */}
            <View className="flex-col sm:flex-row gap-6">
              
              {/* Circular: Plan Compliance */}
              <View className="flex-1 bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 items-center justify-center flex-col sm:mb-0 mb-6">
                <Text className="text-sm font-bold w-full text-left text-slate-900 dark:text-slate-100 mb-4">Plan Compliance</Text>
                <View className="relative w-32 h-32 items-center justify-center">
                  <Svg width="100%" height="100%" viewBox="0 0 36 36" style={{ transform: [{ rotate: '-90deg' }] }}>
                    <Circle cx="18" cy="18" r="16" strokeWidth="3" fill="none" className="stroke-slate-100 dark:stroke-slate-800" />
                    <Circle cx="18" cy="18" r="16" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="85, 100" className="stroke-primary" />
                    <Circle cx="18" cy="18" r="16" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="15, 100" strokeDashoffset="-85" className="stroke-primary/30" />
                  </Svg>
                  <View className="absolute inset-0 flex-col items-center justify-center">
                    <Text className="text-2xl font-bold text-slate-900 dark:text-slate-100">85%</Text>
                    <Text className="text-[10px] text-slate-500 uppercase">Avg</Text>
                  </View>
                </View>
                <View className="mt-4 flex-row gap-4">
                  <View className="flex-row items-center gap-1.5">
                    <View className="w-2 h-2 rounded-full bg-primary" />
                    <Text className="text-[11px] text-slate-900 dark:text-slate-100">Workout</Text>
                  </View>
                  <View className="flex-row items-center gap-1.5">
                    <View className="w-2 h-2 rounded-full bg-primary/30" />
                    <Text className="text-[11px] text-slate-900 dark:text-slate-100">Diet</Text>
                  </View>
                </View>
              </View>

              {/* Bar Chart: Form Completion */}
              <View className="flex-1 bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex-col">
                <Text className="text-sm font-bold mb-4 text-slate-900 dark:text-slate-100">Form Completion</Text>
                <View className="flex-col gap-3">
                  {formCompletionData.map((data, i) => (
                    <View key={i} className="flex-col gap-1">
                      <View className="flex-row justify-between">
                        <Text className="text-[10px] font-medium text-slate-900 dark:text-slate-100">{data.day}</Text>
                        <Text className="text-[10px] font-medium text-slate-900 dark:text-slate-100">{data.completion}%</Text>
                      </View>
                      <View className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden flex-row">
                        <View className="bg-primary h-full" style={{ width: `${data.completion}%` }} />
                      </View>
                    </View>
                  ))}
                </View>
              </View>

            </View>
          </View>

          {/* Top Performers List */}
          <View className="mb-6 flex-col gap-4">
            <View className="flex-row items-center justify-between">
              <Text className="text-lg font-bold text-slate-900 dark:text-slate-100">Top Performers</Text>
              <TouchableOpacity>
                <Text className="text-primary text-sm font-semibold">View All</Text>
              </TouchableOpacity>
            </View>
            <View className="flex-col md:flex-row gap-4">
              
              <View className="flex-1 flex-row items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 mb-4 md:mb-0">
                <View className="flex-row items-center gap-3">
                  <View className="w-10 h-10 rounded-full bg-primary/20 overflow-hidden">
                    <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4YzN44mS7V-9CYdxIfz-cAgYW6LKFxOwHV1KVhnOu1WKMN2wA5vSPpTRs7thcWqymK6UGqB8EYNTdQRq8P8HnxCOoDl5p-l1AZHfmbTXrYqO2rNp8tlnlH0ZzfeFUoCDnXvj6POaTyg-s56A6SZwP5A6Bdrsr78iCCQzF6i3ToVTYobX7BQPHPxUWRniGn3xcCYtEIuOAFwXgW8m7Az_J8mV7BpUnmG4Bf1ldcmO5HT6-VIRF7JSHlo2BYn_FOzZdRdW7jI_z3D0' }} className="w-full h-full" />
                  </View>
                  <View>
                    <Text className="text-sm font-bold text-slate-900 dark:text-slate-100">Marcus Sterling</Text>
                    <Text className="text-xs text-slate-500">Powerlifting • 31 days streak</Text>
                  </View>
                </View>
                <View className="items-end">
                  <Text className="text-sm font-bold text-emerald-500">99%</Text>
                  <Text className="text-[10px] text-slate-500">Consistency</Text>
                </View>
              </View>

              <View className="flex-1 flex-row items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
                <View className="flex-row items-center gap-3">
                  <View className="w-10 h-10 rounded-full bg-primary/20 overflow-hidden">
                    <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUMat7GQPe5BpGx-3TTiSLEGylDk5JvDGEayh2upyGSMYitFWH2YPunBUhdjJExwdPlaS0iiiAKstWclhh0T5JnKxxarJfJ2A8dFqLE5niBxZkiX2xDOIZ1k5mpYHAeYe9wFyaHQW2sZ-m3Uikrm8YHtnR0_QsLLrU_R0dhpEMndj4AZ8_fFF8kMCmnk3YF5mrq300BJIkIL8gfwYe0xtY_4o6gthnvAjFNZDjTBeUcPjJgWtB9ZDnRTozweADTqSkSkXixwreuHs' }} className="w-full h-full" />
                  </View>
                  <View>
                    <Text className="text-sm font-bold text-slate-900 dark:text-slate-100">Sarah Chen</Text>
                    <Text className="text-xs text-slate-500">Bodybuilding • 28 days streak</Text>
                  </View>
                </View>
                <View className="items-end">
                  <Text className="text-sm font-bold text-emerald-500">98%</Text>
                  <Text className="text-[10px] text-slate-500">Consistency</Text>
                </View>
              </View>

            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
