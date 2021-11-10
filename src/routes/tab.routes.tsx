import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import colors from '../styles/colors';
import {PlantSelect} from '../pages/PlantSelect';
import {MyPlants} from '../pages/MyPlants';
import Icon from 'react-native-vector-icons/FontAwesome';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <AppTab.Navigator
      tabBarOptions={{
        activeTintColor: colors.green,
        inactiveTintColor: colors.heading,
        labelPosition: 'beside-icon',
        style: {paddingVertical: 20, height: 88},
      }}>
      <AppTab.Screen
        name="Nova Planta"
        component={PlantSelect}
        options={{
          tabBarIcon: ({color}) => <Icon size={16} color={color} name="plus" />,
        }}
      />

      <AppTab.Screen
        name="Minhas plantas"
        component={MyPlants}
        options={{
          tabBarIcon: ({color}) => (
            <Icon size={16} color={color} name="table" />
          ),
        }}
      />
    </AppTab.Navigator>
  );
};

export default AuthRoutes;
