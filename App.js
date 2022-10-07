import React, { useState } from 'react';

import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'Rimu', key: '1' },
    { name: 'Zohra', key: '2' },
    { name: 'Fatema', key: '3' },
    { name: 'Fahad', key: '4' },
    { name: 'Shohag', key: '5' },
    { name: 'Rafi', key: '6' },
    { name: 'Ashik', key: '7' },
    { name: 'Tanisha', key: '8' },

  ]);
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name} {item.key}</Text>

        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'hotpink',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  }
});
