import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button, Headline, TextInput} from 'react-native-paper';

const TrackOrders = props => {
    return(
        <View style={styles.screen}>
            <View style={styles.body}>
                <Headline style={{color:'#fff',fontSize:30}}>Track Order</Headline>
                <Text style={{fontSize:20, color:'rgba(255,255,255,.75)'}}>Enter your order id to track status of the order</Text>
                <TextInput style={{width:'80%', height:50, backgroundColor:'transparent'}} mode="flat" label="Enter Order Id" theme={{ colors: {primary:'#736df8', underlineColor:'#736df8', placeholder: '#736df8', text: '#736df8'}}} />
                <Button style={{alignSelf:'flex-end', backgroundColor:'#736df8', margin:10, marginRight:'10%'}} labelStyle={{color:'#fff'}}>TRACK</Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:'#393a4c',
        width:'100%',
        alignItems:'flex-start'
    },
    body:{
        alignItems:'center',
        justifyContent:'center',
        width:'90%',
        padding:10,
        height:300,
        marginTop:100,
        marginHorizontal:'5%',
        backgroundColor:'rgba(255,255,255,.05)'
    },
    defaultText:{
        color:'#fff'
    }
});

export default TrackOrders;