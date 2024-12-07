import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../redux/slices/userSlice';
import {RootState} from '../redux/store';
import {User} from '../types/interfaces';
import getUserData from '../api/userService';
import CustomButton from './CustomButton';

const Profile = () => {
  const dispatch = useDispatch();
  const {email} = useSelector((state: RootState) => state.user);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loadUserData = async () => {
      const userId = 4;
      const userData = await getUserData(userId);
      if (userData) {
        setUser(userData);
      } else {
        console.error('Failed to load user data');
      }
    };

    loadUserData();
  }, []);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        {user?.avatar ? (
          <Image
            width={128}
            height={128}
            source={{uri: user?.avatar}}
            style={styles.avatar}
          />
        ) : (
          <ActivityIndicator size="large" color="#6200EE" />
        )}

        <Text style={styles.info}>Name: {user?.first_name}</Text>
        <Text style={styles.info}>Email: {email}</Text>
      </View>
      <CustomButton onPress={handleLogout} title={'Logout'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  profileContainer: {
    flex: 1,
    alignItems: 'center',
  },
  avatar: {width: 100, height: 100, borderRadius: 50, marginBottom: 32},
  info: {fontSize: 18, marginBottom: 10},
});

export default Profile;
