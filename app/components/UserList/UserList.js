import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import useUserList from '../../hooks/useUserList';

const UserItem = ({user: {email, image, name, surname}}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>
          {name} {surname}
        </Text>
        <Text>{email}</Text>
      </View>
    </View>
  );
};

const UserList = () => {
  const {users, isLoading} = useUserList();

  return isLoading ? (
    <></>
  ) : (
    <FlatList
      data={users}
      renderItem={({item}) => <UserItem user={item} />}
      keyExtractor={({email}) => email}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 8,
  },
  image: {
    width: 100,
    height: 100,
  },
  textContainer: {
    marginLeft: 16,
    marginTop: 8,
  },
  name: {fontWeight: 'bold', fontSize: 16},
});

export default UserList;
