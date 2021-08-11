import * as React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import formatMoney from '../../utils/formatMoney';
import firstUpper from '../../utils/firstUpper';
import Clipboard from '@react-native-community/clipboard';
import Colors from '../../styles/Colors';

const TransactionDetailScreen = ({ route, navigation }:any) => {
  const { transaction } = route.params;

  const handleCopyId = () => {
    Clipboard.setString(transaction.id);
    Alert.alert('copied');
  }
  
  const informationDetails = () =>{
    const bodyInfomartion = [
      {
        labelLeft: transaction.beneficiary_name,
        valueLeft: transaction.account_number,
        labelRight: 'nominal',
        valueRight: formatMoney(transaction.amount),
      },
      {
        labelLeft: 'berita transfer',
        valueLeft: transaction.remark,
        labelRight: 'kode unik',
        valueRight: transaction.unique_code,
      }
    ];
    return ( 
        <View>
            {
            bodyInfomartion.map((detail, index) => (
              <View key={index} style={[styles.row, styles.desc]}>
                <View>
                  <Text style={styles.lebelInfoStyle}>{ detail.labelLeft }</Text>
                  <Text>{ detail.valueLeft}</Text>
                </View>
                <View>
                  <Text style={styles.lebelInfoStyle}>{ detail.labelRight }</Text>
                  <Text>{ detail.valueRight }</Text>
                </View>
              </View>
            ))
          }
        </View>
      );
  }
  return (
    <View style={styles.container}>
      <View style={[styles.card, styles.row, { justifyContent:'flex-start'}]} >
        <Text style={{fontWeight: 'bold'}}>ID TRANSAKSI#{ transaction.id }</Text>
        <View style={{paddingHorizontal:2}}></View>
        <TouchableHighlight
          onPress={() => handleCopyId()}
        >
          <Icon
            name={'content-copy'}
            color={Colors.primaryOrange}
            size={20}
          />
        </TouchableHighlight>
      </View>
      <View style={[styles.separator, {backgroundColor: '#f6f6f6'}]} />
      <View style={[styles.row, styles.card]} >
        <Text style={{fontWeight:'bold'}}>DETAIL TRANSAKSI</Text>
        <TouchableHighlight onPress={() => navigation.goBack()}>
          <Text style={{color:Colors.primaryOrange, fontWeight:'bold'}}>Tutup</Text>
        </TouchableHighlight>
      </View>
      <View style={[styles.separator, {backgroundColor: '#e8e8e8'}]} />
      <View style={styles.card}>
        <Text style={{fontWeight:'bold', paddingBottom:10, fontSize:20}}>
          { firstUpper(transaction.sender_bank) }
          <View style={{paddingHorizontal:2}}></View>
          <Icon
            name={'arrow-right'}
            size={20}
          />
          <View style={{paddingHorizontal:2}}></View>
            { firstUpper(transaction.beneficiary_bank) }
        </Text>
        {
          informationDetails()
        }
      </View>
    </View>
  );
}
export default TransactionDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: Colors.primaryWhite,
  },
  card: {
    width: '100%',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  desc: {
    paddingVertical: 10,
  },
  separator: {
    height: 1,
    width: '100%',
  },
  lebelInfoStyle: {
    fontWeight:'bold', 
    textTransform: 'uppercase'
  }
});
