import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Text, Title, Button, Headline, TextInput} from 'react-native-paper';

const Products = props => {
    return(
        <View style={styles.screen}>
        <Title style={{...styles.defaulttext}}>FOR EVERYONE</Title>
        <View style={styles.cardContainer}>
            <View style={styles.card}>
                <Image source={{uri:'https://files.coinswitch.co/public/images/nav3-trade.png'}} style={styles.imageIcon} resizeMode="contain" />
                <View>
                    <Title style={{...styles.defaulttext}}>Trade</Title>
                    <Text style={{color:'rgba(255,255,255,.65)'}}>Convert 300+ coins across exchanges</Text>
                </View>
            </View>
            <View style={styles.card}>
                <Image source={{uri:'https://files.coinswitch.co/public/images/nav3-trade.png'}} style={styles.imageIcon} resizeMode="contain" />
                <View>
                    <Title style={{...styles.defaulttext}}>Trade</Title>
                    <Text style={{color:'rgba(255,255,255,.65)'}}>Convert 300+ coins across exchanges</Text>
                </View>
            </View>
        </View>

        <Title style={{...styles.defaulttext}}>FOR BUSINESS</Title>
        <View style={styles.cardContainer}>
            <View style={styles.card}>
                <Image source={{uri:'https://files.coinswitch.co/public/images/nav3-trade.png'}} style={styles.imageIcon} resizeMode="contain" />
                <View>
                    <Title style={{...styles.defaulttext}}>Trade</Title>
                    <Text style={{color:'rgba(255,255,255,.65)'}}>Convert 300+ coins across exchanges</Text>
                </View>
            </View>
            <View style={styles.card}>
                <Image source={{uri:'https://files.coinswitch.co/public/images/nav3-trade.png'}} style={styles.imageIcon} resizeMode="contain" />
                <View>
                    <Title style={{...styles.defaulttext}}>Trade</Title>
                    <Text style={{color:'rgba(255,255,255,.65)'}}>Convert 300+ coins across exchanges</Text>
                </View>
            </View>
        </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:'#393a4c',
        width:'100%',
        alignItems:'flex-start',
        padding:10
    },
    defaulttext:{
        color:'#fff'
    },
    cardContainer:{
        width:'100%',
        justifyContent:'space-between',
        //marginVertical:20,
        padding:'5%'
    },
    card:{
        width:'100%',
        padding:10,
        height:100,
        backgroundColor:'rgba(255,255,255,.05)',
        borderRadius:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        marginVertical:10
    },
    imageIcon:{
        width:35,
        height:35
    }
});

export default Products;