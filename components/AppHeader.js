import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AppHeader = ({ navigation, title, prevName }) => {
  return (
    <View style={styles.root}>
      <View style={styles.left}>
        <MaterialCommunityIcons name="menu" size={30} />
      </View>
      <View style={styles.center}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.right}>
        {prevName &&
          <TouchableOpacity onPress={() => navigation.navigate(prevName)}>
            <View style={styles.back}>
              <MaterialCommunityIcons name="arrow-left-circle" size={30} />
              <Text style={styles.backText}>Back</Text>
            </View>
          </TouchableOpacity>
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    height: 50,
  },
  back: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backText: {
    fontWeight: 'bold',
  },
  left: {
    flex: 1,
    justifyContent: 'center',
  },
  center: {
    flex: 5,
    justifyContent: 'center',
  },
  right: {
    flex: 2,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AppHeader;
