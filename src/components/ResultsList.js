import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import ResultsDetail from '../components/ResultsDetail';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation';


const ResultsList =({results, title, navigation})=>
{
    if(!results.length) return null;
    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={(result)=>{result.id}}
        renderItem={({item})=>{
                
                return <TouchableOpacity onPress={() => {navigation.navigate('ResultsShow', {id: item.id, name: item.name})}}>
                    <ResultsDetail result={item}/>
            </TouchableOpacity>
            }}
        />
        </View>
};

const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

export default withNavigation(ResultsList);