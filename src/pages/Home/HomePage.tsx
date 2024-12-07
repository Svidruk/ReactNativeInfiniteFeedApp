import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Feed from '../../components/Feed';
import Profile from '../../components/Profile';
import {StyleSheet} from 'react-native';

const Tab = createMaterialTopTabNavigator();

const HomePage = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: styles.label,
        tabBarIndicatorStyle: styles.indicator,
        tabBarStyle: styles.tabBar,
      }}>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {backgroundColor: '#6345ba'},
  label: {fontSize: 14, color: '#fff'},
  indicator: {backgroundColor: '#fff', height: 3},
});

export default HomePage;
