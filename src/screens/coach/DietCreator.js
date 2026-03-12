import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function DietCreator() {
  const athletes = [
    { id: 1, name: 'Alex M.', active: true, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIh_GESSi6YDEGgx4phjNWPxCUmNU3Hhhj7VIwE4Gn30tDQ5bGyett5QsSNn_fXHgtYL4KLZU0X04ohNPnYwZP0JO11CTQzytTUnvVR9AgTdQRMWITPBR7mUcZ-ycpnt9-HtYzYyiwosyAHG51tWuYolrcnP1H9glOUeGYharD1hPi7cVI8Qd-tqzRz7QjbDchavweZxs67iSsWsbfy2PRZ3rkgd8J0iDJHNFLOIP7EJNnzwB3RNDsKUGj_GjzLRMZzZRwUMB6Yt4' },
    { id: 2, name: 'Elena R.', active: false, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzXjagaCeqFVSFDOR6MCgUt5DBZdeLnBVZ7MSNgJejp6wQMyP8dvVWMxejqDeoBNDhK3JbTLkwqXuuJbhPXMghZHGuVzFulo9OeSeo0TkkrXBlufsC7nR6mp5MAtWoPGwupPB3GLM8Xr9tOOL-E_9qHN77Qg8dSNc3O7fvhviAuTOLcPDIKSLh1LozIIolclM4LbMeE3glpFH2FX74QY7lUrVrlQM1R42mJWWTsnb8vLIEjdz_AGtQUj3osB3qfK8kc6PED8Eqv50' },
    { id: 3, name: 'Marc J.', active: false, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArV3f44ZRdd_vELjwScA6Kdr8LSSbiIWLE8mn-yjIlKyTh3IcPmI98wfVGxRCcHcZuPAxZSs3h0jsQT5HsWNd1d-VIPFeEgxwua-rxdrRHeIMBV7GiOStkIoH6UycHhNRsB6jgkEHOSZKtmfR6d88naNTFxIpxcgWJz3fk_FpU7Y_j_dk3GEGONRDi1mhoDIMNfma1w--r4bNvevNL7bTAFxrEzkAn8VKCHeJp0gZD3fLaW8WbbGl-wchcTdIVYJ_zM36_-9O3dOs' },
    { id: 4, name: 'Sara L.', active: false, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5GozxiRw665-YY6Wy1mPGHxLe5BjeT-nlDHKZr27ns6KMrXmAwICQaCu8YPu4xyG6kO7eSzU9sgUcfz3RuX1RQrE-aSWsdLRtCMuTyMbZbBVvJhs10U0uQ15lNuBxf0SBnDs9JeH38JXFtz3zenM5H6XprBRTrQ0MMCS-Pf8x3M3RZmOVLGXzKJp8e3FYM3pfgPfXQxZ8NdCyYO0H7uZPKu4kgR0XcuBYvFACRC_w00NixiScrFvI4IcaWdpY4JiUClog3yZDh2o' },
    { id: 5, name: 'Ivan K.', active: false, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8XJfsNr6Dxi685FfsW0G62dJi8z79l-BhO3hzQOJseaFNewSf3uYgmdXUK9DXnGKaWqwJmeLJDf4Zs-NRc4lHm9gr7_GshtHMpmlienMvE_vWeO178OGRwMMgGffQuTSp43QV-_FBPmjCLofnfJkAA33JOzK5sD1K5l8Gdc2Jlh4MXq3bF1wYP8uBIsKuKJWzB174dJ7-kHxyGdF4oY0u5NZip7VHdvFyE3bN4urokXrfkU7ULH4_WLS8Flpdzq9i2UFh2mwys9c' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-4 border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 z-10">
        <TouchableOpacity className="p-2 -ml-2 rounded-full">
          <MaterialIcons name="arrow-back" size={24} color="#334155" />
        </TouchableOpacity>
        <Text className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100">Crear Plan de Dieta</Text>
        <TouchableOpacity className="px-3 py-1 rounded-lg border border-primary/20">
          <Text className="text-primary font-semibold text-sm">Plantillas</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-4 py-6" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 150 }}>
        
        {/* Athlete Selection */}
        <View className="space-y-4 mb-8">
          <Text className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Asignar Atleta</Text>
          <View className="flex-row items-center bg-slate-100 dark:bg-slate-800 rounded-xl px-3 mb-4 h-12">
            <MaterialIcons name="search" size={20} color="#94a3b8" />
            <TextInput 
              className="flex-1 ml-2 text-sm text-slate-900 dark:text-slate-100" 
              placeholder="Buscar atleta..." 
              placeholderTextColor="#64748b" 
            />
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="h-24">
            <View className="flex-row gap-4">
              {athletes.map(athlete => (
                <TouchableOpacity key={athlete.id} className={`items-center gap-2 ${athlete.active ? '' : 'opacity-60'}`}>
                  <View className={`w-14 h-14 rounded-full p-0.5 ${athlete.active ? 'border-2 border-primary' : 'border border-slate-700'}`}>
                    <Image source={{ uri: athlete.image }} className="w-full h-full rounded-full" />
                  </View>
                  <Text className={`text-xs font-medium ${athlete.active ? 'text-primary' : 'text-slate-900 dark:text-slate-100'}`}>
                    {athlete.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Macros Target */}
        <View className="bg-slate-100 dark:bg-slate-800/50 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 mb-8">
          <View className="flex-row justify-between items-end mb-6">
            <View>
              <Text className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-1">Objetivo Diario</Text>
              <Text className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                3,659 <Text className="text-sm font-medium text-slate-400">kcal</Text>
              </Text>
            </View>
            <View className="bg-primary/20 px-2 py-1 rounded-md">
              <Text className="text-xs font-bold text-primary">BULKING</Text>
            </View>
          </View>

          <View className="space-y-4">
            {/* Protein */}
            <View className="mb-4">
              <View className="flex-row justify-between mb-1">
                <Text className="text-xs font-semibold text-slate-900 dark:text-slate-100">PROTEÍNA</Text>
                <Text className="text-xs font-semibold text-primary">158g</Text>
              </View>
              <View className="w-full h-1.5 bg-slate-300 dark:bg-slate-700 rounded-lg overflow-hidden flex-row">
                <View className="h-full bg-primary" style={{ width: '50%' }} />
              </View>
            </View>
            {/* Carbs */}
            <View className="mb-4">
              <View className="flex-row justify-between mb-1">
                <Text className="text-xs font-semibold text-slate-900 dark:text-slate-100">CARBOHIDRATOS</Text>
                <Text className="text-xs font-semibold text-primary">590g</Text>
              </View>
              <View className="w-full h-1.5 bg-slate-300 dark:bg-slate-700 rounded-lg overflow-hidden flex-row">
                <View className="h-full bg-primary" style={{ width: '80%' }} />
              </View>
            </View>
            {/* Fats */}
            <View className="mb-2">
              <View className="flex-row justify-between mb-1">
                <Text className="text-xs font-semibold text-slate-900 dark:text-slate-100">GRASAS</Text>
                <Text className="text-xs font-semibold text-primary">73g</Text>
              </View>
              <View className="w-full h-1.5 bg-slate-300 dark:bg-slate-700 rounded-lg overflow-hidden flex-row">
                <View className="h-full bg-primary" style={{ width: '45%' }} />
              </View>
            </View>
          </View>
        </View>

        {/* Meals Builder Section */}
        <View className="space-y-4 w-full">
          <View className="flex-row items-center justify-between mb-2">
            <Text className="text-sm font-semibold uppercase tracking-wider text-slate-500">Comidas (5)</Text>
            <TouchableOpacity className="flex-row items-center gap-1">
              <MaterialIcons name="add" size={16} color="#007fff" />
              <Text className="text-primary text-xs font-bold">Añadir Comida</Text>
            </TouchableOpacity>
          </View>

          {/* Meal 1 */}
          <View className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden mb-3">
            <View className="p-4 border-b border-slate-100 dark:border-slate-700/50 flex-row justify-between items-center">
              <View className="flex-row items-center gap-3">
                <MaterialIcons name="restaurant" size={20} color="#94a3b8" />
                <Text className="font-bold text-slate-900 dark:text-slate-100">Comida 1 (Desayuno)</Text>
              </View>
              <Text className="text-xs font-medium text-slate-400">08:00 AM</Text>
            </View>
            <View className="p-4 flex-row items-center justify-between">
              <View className="flex-row gap-4">
                <View className="items-center">
                  <Text className="text-[10px] text-slate-400 font-bold uppercase">kcal</Text>
                  <Text className="font-bold text-sm text-slate-900 dark:text-slate-100">740</Text>
                </View>
                <View className="items-center">
                  <Text className="text-[10px] text-slate-400 font-bold uppercase">P</Text>
                  <Text className="font-bold text-sm text-slate-900 dark:text-slate-100">42g</Text>
                </View>
                <View className="items-center">
                  <Text className="text-[10px] text-slate-400 font-bold uppercase">C</Text>
                  <Text className="font-bold text-sm text-slate-900 dark:text-slate-100">110g</Text>
                </View>
                <View className="items-center">
                  <Text className="text-[10px] text-slate-400 font-bold uppercase">F</Text>
                  <Text className="font-bold text-sm text-slate-900 dark:text-slate-100">12g</Text>
                </View>
              </View>
              <TouchableOpacity className="bg-primary px-4 py-2 rounded-lg">
                <Text className="text-white text-xs font-bold">Editar Alimentos</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Meal 2 */}
          <View className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden mb-3 opacity-90">
            <View className="p-4 border-b border-slate-100 dark:border-slate-700/50 flex-row justify-between items-center">
              <View className="flex-row items-center gap-3">
                <MaterialIcons name="lunch-dining" size={20} color="#94a3b8" />
                <Text className="font-bold text-slate-900 dark:text-slate-100">Comida 2 (Almuerzo)</Text>
              </View>
              <Text className="text-xs font-medium text-slate-400">11:30 AM</Text>
            </View>
            <View className="p-4 flex-row items-center justify-between">
              <View className="flex-row gap-4">
                <View className="items-center">
                  <Text className="text-[10px] text-slate-400 font-bold uppercase">kcal</Text>
                  <Text className="font-bold text-sm text-slate-900 dark:text-slate-100">620</Text>
                </View>
                <View className="items-center">
                  <Text className="text-[10px] text-slate-400 font-bold uppercase">P</Text>
                  <Text className="font-bold text-sm text-slate-900 dark:text-slate-100">30g</Text>
                </View>
                <View className="items-center">
                  <Text className="text-[10px] text-slate-400 font-bold uppercase">C</Text>
                  <Text className="font-bold text-sm text-slate-900 dark:text-slate-100">85g</Text>
                </View>
                <View className="items-center">
                  <Text className="text-[10px] text-slate-400 font-bold uppercase">F</Text>
                  <Text className="font-bold text-sm text-slate-900 dark:text-slate-100">18g</Text>
                </View>
              </View>
              <TouchableOpacity className="bg-primary/10 px-4 py-2 rounded-lg border border-primary/20">
                <Text className="text-primary text-xs font-bold">Editar Alimentos</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Meal 3 */}
          <View className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden mb-4 opacity-80">
            <View className="p-4 border-b border-slate-100 dark:border-slate-700/50 flex-row justify-between items-center">
              <View className="flex-row items-center gap-3">
                <MaterialIcons name="dinner-dining" size={20} color="#94a3b8" />
                <Text className="font-bold text-slate-900 dark:text-slate-100">Comida 3 (Pre-Workout)</Text>
              </View>
              <Text className="text-xs font-medium text-slate-400">03:00 PM</Text>
            </View>
            <View className="p-4 flex-row items-center justify-between">
              <View className="flex-row gap-4">
                <View className="items-center">
                  <Text className="text-[10px] text-slate-400 font-bold uppercase">kcal</Text>
                  <Text className="font-bold text-sm text-slate-900 dark:text-slate-100">810</Text>
                </View>
                <View className="items-center">
                  <Text className="text-[10px] text-slate-400 font-bold uppercase">P</Text>
                  <Text className="font-bold text-sm text-slate-900 dark:text-slate-100">25g</Text>
                </View>
                <View className="items-center">
                  <Text className="text-[10px] text-slate-400 font-bold uppercase">C</Text>
                  <Text className="font-bold text-sm text-slate-900 dark:text-slate-100">160g</Text>
                </View>
                <View className="items-center">
                  <Text className="text-[10px] text-slate-400 font-bold uppercase">F</Text>
                  <Text className="font-bold text-sm text-slate-900 dark:text-slate-100">8g</Text>
                </View>
              </View>
              <TouchableOpacity className="bg-primary/10 px-4 py-2 rounded-lg border border-primary/20">
                <Text className="text-primary text-xs font-bold">Editar Alimentos</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Summary Placeholder */}
          <View className="p-4 bg-slate-100/50 dark:bg-slate-800/30 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 items-center justify-center">
            <Text className="text-xs text-slate-500 font-medium">+ 2 comidas más configuradas</Text>
          </View>

        </View>

      </ScrollView>

      {/* Fixed Bottom Action Bar */}
      <View className="absolute bottom-4 left-0 right-0 px-4 pt-2 pb-4 bg-background-light/90 dark:bg-background-dark/90 justify-center">
        <TouchableOpacity className="w-full bg-primary py-4 rounded-xl shadow-lg items-center justify-center m-1">
          <Text className="text-white font-bold text-base">Guardar y Publicar Plan</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
