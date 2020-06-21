import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () =>
{
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    const filterResutlsByPrice = price => results.filter(result=> result.price === price);
    const costEffective =filterResutlsByPrice('$')
    const bitPricier = filterResutlsByPrice('$$');
    const bigSpender = filterResutlsByPrice('$$$');
    const lavish = filterResutlsByPrice('$$$$');
    return <>
            <SearchBar 
                term={term}
                onTermChange={setTerm}
                onTermSubmit={()=>{searchApi(term)}}  
            />
            <ScrollView>
                <ResultsList  results = {costEffective} title="Cost Effective" />
                <ResultsList  results ={bitPricier} title="Bit Pricier" />
                <ResultsList  results ={bigSpender} title="Big Spender" />
                <ResultsList  results ={lavish} title="Lavish" />
            </ScrollView>
        </>
        
};

const styles = StyleSheet.create({
    errorMsg:{
    }
});

export default SearchScreen;