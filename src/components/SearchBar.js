import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar =({term, onTermChange, onTermSubmit}) =>
{
    
    return<View style={styles.bar}>
        <Feather name="search" style={styles.icon}/>
        <TextInput 
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={onTermChange}
        placeholder="Search"
        style={{flex: 1, fontSize: 18}}
        onEndEditing={onTermSubmit}
        />
    </View>
};

const styles = StyleSheet.create({
    bar:{
        backgroundColor: '#f4f4f4',
        borderWidth: 1,
        borderRadius: 10,
        height: 40 ,
        margin: 15,
        paddingHorizontal: 10,
        flexDirection: 'row'
    },
    icon:{
        alignSelf: 'center',
        marginRight: 10,
        fontSize: 25,
        
    }

});

export default SearchBar;