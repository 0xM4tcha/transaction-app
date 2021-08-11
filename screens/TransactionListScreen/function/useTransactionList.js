import { useState, useEffect } from "react"
import axios from "axios";

const useTransactionList = () => {
  const [ isLoading, setLoading ] = useState(true); 
  const [ transactionList, setTransactionList ] = useState([]);

  const getTransactionList = async () => {
    setLoading(true)
    try {
      const {data} = await axios({
          method: 'GET',
          url: 'https://nextar.flip.id/frontend-test',
        })
        const objResult = data;
        var arrResult = Object.keys(objResult).map((key) => [Number(key), objResult[key]]).map((arr) => { return arr[1]});
        setTransactionList(arrResult);
    } catch (error) {
      setLoading(false)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getTransactionList();
  }, []);
  
  return { isLoading, transactionList, setTransactionList, getTransactionList };
}
export default useTransactionList;