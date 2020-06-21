import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

const ResultsDetail = ({result})=>
{
    return<View style={styles.container}>
        <Image source={{uri: result.image_url}} style={styles.image}/>
        <Text style={styles.name}>{result.name}</Text>
        <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        <Text id='123 'style={styles.open}>It is open</Text> 
    </View>
};

const styles = StyleSheet.create({
    container:{
        marginLeft: 15
    },
    image:{
        width: 300, 
        height: 170,
        borderRadius: 30,
        marginBottom: 5,
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10
    },
    open:
    {
        display: 'none'
    }

});

export default ResultsDetail;