import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import formatMoney from "../../../utils/formatMoney";
import firstUpper from '../../../utils/firstUpper';
import formatDate from "../../../utils/formatDate";

const informationCard = () => {
  
  const title = (transaction) => {
     return ( <View style={styles.row}>
        <Text>{firstUpper(transaction.sender_bank)}</Text>
        <View style={{paddingHorizontal:2}}></View>
        <Icon
          name={'arrow-right'}
          size={20}
        />
        <View style={{paddingHorizontal:2}}></View>
        <Text>{firstUpper(transaction.beneficiary_bank)}</Text>
      </View>
    )
  }

  const transformAmountAndDate = (transaction) => {
    return (
      <View style={styles.row}>
        <Text>{formatMoney(transaction.amount)}</Text>
        <View style={{paddingHorizontal:2}}></View>
        <Icon
          name={'circle'}
          size={8}
        />
        <View style={{paddingHorizontal:2}}></View>
        <Text>{formatDate(transaction.created_at)}</Text>
      </View>
    )
  }

  const descriptions = (transaction) => {
    return [
      transaction.beneficiary_name.toUpperCase(),
      transformAmountAndDate(transaction)
    ]
  }

  return { title, descriptions }
}

export default informationCard;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
