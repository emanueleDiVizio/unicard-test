import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import useFetch from 'react-fetch-hook';

const UserItem = ({image, name, surname, email}) => {
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
  const {isLoading, data} = useFetch('https://reqres.in/api/users');

  return isLoading ? (
    <></>
  ) : (
    <FlatList
      data={data.data}
      renderItem={({item: {avatar, first_name, last_name, email}}) => (
        <UserItem
          image={avatar}
          name={first_name}
          surname={last_name}
          email={email}
        />
      )}
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
