import React from 'react';
import UserList from '../components/UserList/UserList';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

const MainScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <UserList />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainScreen;
