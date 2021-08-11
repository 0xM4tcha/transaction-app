import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Colors from '../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const InputSearchlist = ({keyword, items, placeholder, handleInputFilter, setModalSort, typeSort}) => {
  
  return (
    <View style={[styles.header, styles.row]} >
      <View style={styles.row}>
        <Icon
          name={'search'}
          color={'#aeaeae'}
          size={20}
        />
        <View style={{paddingHorizontal:3}}></View>
        <TextInput 
          style={styles.inputFilter}
          onChangeText={(value) => handleInputFilter(items, value)}
          value={keyword}
          placeholder={placeholder}
        />
      </View>
      <TouchableOpacity style={styles.row} onPress={() => setModalSort(true)}>
        <Text style={styles.sortLabel}>
          { typeSort }
        </Text>
        <View style={{paddingHorizontal:3}}></View>
        <Icon
          name={'expand-more'}
          color={Colors.primaryOrange}
          size={20}
        />
      </TouchableOpacity>
    </View>
  );
}
export default InputSearchlist;

const styles = StyleSheet.create({
  header: {
    width:'100%',
    backgroundColor: Colors.primaryWhite,
    paddingRight: 120,
    paddingVertical: 15,
    justifyContent: 'space-around'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputFilter: {
    width: '100%',
  },
  sortLabel: {
    fontWeight: 'bold',
    color: Colors.primaryOrange,
  },
});
