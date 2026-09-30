import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MapPin, Pill, Calendar, UserCheck } from 'lucide-react-native';

import MapScreen from './src/screens/MapScreen';
import StockScanScreen from './src/screens/StockScanScreen';
import AppointmentsScreen from './src/screens/AppointmentsScreen';
import CarnetScreen from './src/screens/CarnetScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#059669',
            tabBarInactiveTintColor: '#64748B',
            tabBarStyle: {
              backgroundColor: '#FFFFFF',
              borderTopColor: '#E2E8F0',
              height: 60,
              paddingBottom: 8,
              paddingTop: 6
            },
            tabBarLabelStyle: {
              fontSize: 11,
              fontWeight: '700'
            }
          }}
        >
          <Tab.Screen
            name="MapTab"
            component={MapScreen}
            options={{
              tabBarLabel: 'Carte',
              tabBarIcon: ({ color, size }) => <MapPin size={size} color={color} />
            }}
          />
          <Tab.Screen
            name="StockTab"
            component={StockScanScreen}
            options={{
              tabBarLabel: 'Stocks',
              tabBarIcon: ({ color, size }) => <Pill size={size} color={color} />
            }}
          />
          <Tab.Screen
            name="RdvTab"
            component={AppointmentsScreen}
            options={{
              tabBarLabel: 'RDV Médical',
              tabBarIcon: ({ color, size }) => <Calendar size={size} color={color} />
            }}
          />
          <Tab.Screen
            name="CarnetTab"
            component={CarnetScreen}
            options={{
              tabBarLabel: 'Carnet',
              tabBarIcon: ({ color, size }) => <UserCheck size={size} color={color} />
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
