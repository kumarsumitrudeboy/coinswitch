import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Text, Title, Button} from 'react-native-paper';

const MyOrders = props => {
    return(
        <View style={styles.screen}>
            <Button icon="filter-variant" uppercase={false} labelStyle={{fontSize:15, color:'#fff'}} style={{backgroundColor:'rgba(0,0,0,.15)', marginTop:20, marginLeft:10, borderRadius:10}}>All Transactions</Button>
            <View style={styles.body}>
                <Image source={require('../assets/folder.png')} style={styles.image} resizeMode="contain" />
                <Title style={{fontSize:20, color:'#fff'}}>You don't have any orders.</Title>
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
        borderWidth:1,
        marginTop:50,
        marginHorizontal:'5%',
        borderColor:'rgba(255,255,255,.25)'
    },
    image:{
        width:150,
        height:150
    }
});

export default MyOrders;