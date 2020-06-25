import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import useFetch from 'react-fetch-hook';

const UserItem = ({image, name, surname, email}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
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
      renderItem={({item}) => (
        <UserItem
          image={item.avatar}
          name={item.first_name}
          surname={item.last_name}
          email={item.email}
        />
      )}
      keyExtractor={item => item.email}
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
  imageContainer: {},
  textContainer: {
    marginLeft: 16,
    marginTop: 8,
  },
  name: {fontWeight: 'bold', fontSize: 16},
});

export default UserList;
