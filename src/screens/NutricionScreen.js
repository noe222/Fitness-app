import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function NutricionScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      {/* Contenido scrolleable */}
      <ScrollView className="flex-1 px-4 pt-6" contentContainerStyle={{ paddingBottom: 100 }}>
        
        {/* Cabecera */}
        <View className="flex-row items-center justify-between mb-6">
          <TouchableOpacity className="p-2 -ml-2">
            <MaterialIcons name="arrow-back" size={24} className="text-slate-800 dark:text-white" />
          </TouchableOpacity>
          <Text className="text-lg font-bold text-slate-800 dark:text-white">Planificación - Día 1</Text>
          <TouchableOpacity className="p-2 -mr-2">
            <MaterialIcons name="more-vert" size={24} className="text-slate-800 dark:text-white" />
          </TouchableOpacity>
        </View>

        {/* Tarjeta de Resumen Diario */}
        <View className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm mb-6 border border-slate-200 dark:border-slate-700">
          <View className="flex-row items-center gap-2 mb-4">
            <MaterialIcons name="restaurant" size={20} color="#007fff" />
            <Text className="font-bold text-slate-800 dark:text-white text-base">Resumen de Macros</Text>
          </View>
          
          <View className="flex-row justify-between">
            <View className="items-center">
              <Text className="text-2xl font-bold text-slate-800 dark:text-white">158g</Text>
              <Text className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">Proteínas</Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-slate-800 dark:text-white">590g</Text>
              <Text className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">Hidratos</Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-slate-800 dark:text-white">73g</Text>
              <Text className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">Grasas</Text>
            </View>
          </View>
        </View>

        {/* Tarjeta Comida 1 */}
        <View className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm mb-4 border border-slate-200 dark:border-slate-700">
          <View className="flex-row justify-between items-start mb-3">
            <View>
              <Text className="font-bold text-lg text-slate-800 dark:text-white">Comida 1</Text>
              <Text className="text-xs text-slate-500 mt-1">743 kcal • 36g Prot • 100g HC • 22g Grasas</Text>
            </View>
            <TouchableOpacity className="p-1">
              <MaterialIcons name="add-circle-outline" size={24} color="#007fff" />
            </TouchableOpacity>
          </View>
          
          {/* Lista de alimentos */}
          <View className="flex-row items-center justify-between py-3 border-b border-slate-100 dark:border-slate-700">
            <Text className="text-slate-700 dark:text-slate-300 text-sm">Avena en hojuelas</Text>
            <Text className="text-slate-500 font-medium text-sm">120g</Text>
          </View>
          <View className="flex-row items-center justify-between py-3 border-b border-slate-100 dark:border-slate-700">
            <Text className="text-slate-700 dark:text-slate-300 text-sm">Leche entera</Text>
            <Text className="text-slate-500 font-medium text-sm">300ml</Text>
          </View>
          <View className="flex-row items-center justify-between py-3">
            <Text className="text-slate-700 dark:text-slate-300 text-sm">Huevos camperos</Text>
            <Text className="text-slate-500 font-medium text-sm">2 uds</Text>
          </View>
        </View>

        {/* Indicador de comidas restantes */}
        <View className="py-4 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl items-center mt-2 mb-8">
          <Text className="text-slate-500 font-medium text-sm">+ 4 comidas más configuradas</Text>
        </View>

      </ScrollView>

      {/* Botón Flotante Inferior */}
      <View className="absolute bottom-0 left-0 right-0 bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 px-4 pt-4 pb-8">
        <TouchableOpacity className="w-full bg-primary py-4 rounded-xl items-center shadow-lg active:opacity-80">
          <Text className="text-white font-bold text-lg">Guardar y Publicar Plan</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}