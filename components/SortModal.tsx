import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Colors from '../styles/Colors';

const GeneralModal = (options:any) => {
  const { isModal, items, onSelectSort, selectedSort, closeModal } = options;

  const listSort = (items:any[]) => {
    return (
      <View style={styles.cardSort} >
        {
          items.map((item, index) => (
            <TouchableOpacity key={index} style={styles.row} onPress={() => onSelectSort(item)}>
              <View style={styles.outerRadio}>
                {
                  selectedSort.value === item.value &&
                    <View style={styles.innerRadio}/>
                }
              </View>
              <Text >{ item.label }</Text>
            </TouchableOpacity>
          ))
        }
      </View>
    )
  }

  return (
    <Modal
      isVisible={isModal}
      onBackdropPress={closeModal}
    >
        {
          listSort(items)
        }
    </Modal>
  )
}
export default GeneralModal;

const styles = StyleSheet.create({ 
  cardSort: {
    backgroundColor: Colors.primaryWhite,
    borderRadius: 5,
    padding: 20
  },
  row: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  outerRadio: {
    marginRight: 10,
    height: 20,
    width: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.primaryOrange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerRadio: {
    height: 10,
    width: 10,
    borderRadius: 6,
    backgroundColor: Colors.primaryOrange,
  },
});