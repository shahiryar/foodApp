import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, StyleSheet, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';
import  MapView from 'react-native-maps';

const ResultsShowScreen = ({navigation}) => {
const [result, setResult] = useState(null);

const searchBussiness = async () => {
    const response = await yelp.get(`/${navigation.getParam('id')}`);
    setResult(response.data);
};
useEffect(()=>{searchBussiness()}, []);
if(!result) return null
return (<><View style={styles.container}>
    <Text style={styles.title}>{navigation.getParam('name')}</Text>
    <View>
        <FlatList
        data={result.photos}
        horizontal
        keyExtractor={({item})=>item}
        renderItem={({item})=>{
            return <Image source={{uri: item}} style={styles.image}/>
        }}
        />
    </View>
</View>
<View style={styles.mapContainer}>
    <MapView 
    initialRegion={{...result.coordinates, 
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421}}
        style={styles.map}
    >

        </MapView>
</View></>
)
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        height: 250
    },
    image:{
        width: 300, 
        height: 170,
        borderRadius: 30,
        margin: 15,
    },
    mapContainer:{
        borderRadius: 50,
        borderColor: 'red',
        height: 300,
        marginHorizontal: 15,
    },
    map:{        
        ...StyleSheet.absoluteFillObject
    },
    title : {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 15,
    }
});

export default ResultsShowScreen; 