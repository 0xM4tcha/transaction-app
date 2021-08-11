import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { GeneralCard } from '../../components/GeneralCard';
import getStatus from '../../utils/getStatus';
import SortModal from '../../components/SortModal';
import useTransactionList from './function/useTransactionList';
import listSort from './parts/listSort';
import handleSortList from './function/useSortList';
import handleFilterList from './function/useFilterList';
import InputSearchlist from '../../components/InputSearchList';
import informationCard from './parts/informationCard';

const TransactionListScreen = ({ navigation } : any) => {
  const [ isModalSort, setModalSort ] = useState(false);
  const [ selectedSort, setSelectedSort ] = useState({label:'URUTKAN', value:'sort'});
  const [ keyword, setKeyword ] = useState('');
  const { 
    isLoading,
    transactionList,
    setTransactionList, 
    getTransactionList
  } = useTransactionList(); 
  const { title, descriptions} = informationCard();

  const handleClickCard = (transaction:{}) => {
    navigation.navigate('Detail', { transaction });
  }

  const onSelectSort = (item:any) => {
    setSelectedSort(item);
    setTimeout(() => {
      handleSortList(transactionList, item);
      setModalSort(false);
    }, 200);
  }

  const handleInputFilter = (list:any, value:string) => {
    setKeyword(value);
    setTransactionList([]);
    if(value.length > 0) {
      const result = handleFilterList(list, value);
      setTransactionList(result);
      return;
    }
    getTransactionList();
  }

  return (
    <View style={styles.container}>
      <SortModal 
        isModal={isModalSort} 
        items={listSort} 
        onSelectSort={onSelectSort}
        selectedSort={selectedSort}
        closeModal={() => setModalSort(false)}
      />
      <ScrollView style={styles.wrapList}>
        <InputSearchlist
          keyword={keyword}
          items={transactionList}
          placeholder={'Cari nama, bank, atau nominal'}
          handleInputFilter={handleInputFilter}
          setModalSort={setModalSort}
          typeSort={selectedSort.label}
        />
        {
          !isLoading && transactionList.map((transaction:any, index:any) => (
            <View key={index} style={{padding:5}}>
              <GeneralCard
                title={title(transaction)}
                items={descriptions(transaction)}
                cardType={getStatus(transaction.status).card}
                buttonLabel={getStatus(transaction.status).label}
                onClick={() => handleClickCard(transaction)}
              />
            </View>
          ))
        }
      </ScrollView>
    </View>
  );
}
export default TransactionListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5,
    backgroundColor: '#f4faf8',
  },
  wrapList: {
    width: '100%',
  },
});
