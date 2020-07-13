import React from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';
import{Text, Title, Headline, TextInput, Avatar, IconButton, Button, Modal, Portal, Provider, TouchableHighlight } from 'react-native-paper';
import { SvgUri } from 'react-native-svg';

const Home = () => {
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const [faqShow, faqHide] = React.useState({status:false,parent:-1, child:-1});
    const [currentTypedReplyFromUser, setCurrentTypedReplyFromUser] = React.useState('');
    const [chatsMessages, setChatMessages] = React.useState([]);

    const chatInitHandler = () => {
        showModal();
        if(chatsMessages.length<=0){
            setChatMessages(chatsMessages.concat({from:'bot', message:'Hey there, how can I help you?'}))
        }
    };

    const userReplyHandler = () => {
        if(currentTypedReplyFromUser!=''){
            setChatMessages(chatsMessages.concat({from:'user', message:currentTypedReplyFromUser}));
            setCurrentTypedReplyFromUser('');
        }
    };

    return(
        <View style={styles.screen}>
            <ScrollView>
            <View style={styles.beforeCard}>
                <Text style={styles.bannertext}>Crypto Trading</Text>
                <Text style={styles.bannertext}>Simplfied</Text>
                <Text style={styles.bannerSubheading}>Trade 300+ coins without creating an account on any exchange.</Text>
            </View>
            <View style={styles.card}>
                <Title style={styles.titleCard}>Send US Dollar</Title>
                <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between'}}>
                <TextInput style={{width:'70%', fontSize:30, fontWeight:'bold', height:60, backgroundColor:'#fff'}} theme={{ colors: { primary: '#fff',underlineColor:'rgba(0, 0, 0, 0.1)', placeholder: '#353b48', text: '#353b48'}}} />
                <View style={{height:60, width:'30%', backgroundColor:'#fff', justifyContent:'space-between', alignItems:'center', flexDirection:'row',borderLeftWidth:1, borderColor:'#bdbdbd'}}>
                    <Avatar.Icon icon="currency-usd" size={20} style={{backgroundColor:'green'}} />
                    <Text style={{fontSize:20, fontWeight:'bold', color:'#353b48'}}>USD</Text>
                    <Avatar.Icon icon="chevron-down" size={30} style={{backgroundColor:'transparent'}} color="#353b48" />
                </View>
                </View>
                <IconButton icon="diving-flippers" color="#fff" style={{alignSelf:'flex-end', margin:'2%'}} />
                <Title style={styles.titleCard}>Send US Dollar</Title>
                <View style={{flexDirection:'row', width:'100%', justifyContent:'center'}}>
                <TextInput style={{width:'70%', fontSize:30, fontWeight:'bold', height:60, backgroundColor:'#fff'}} theme={{ colors: { primary: '#fff',underlineColor:'rgba(0, 0, 0, 0.1)', placeholder: '#353b48', text: '#353b48'}}} />
                <View style={{height:60, width:'30%', backgroundColor:'#fff', justifyContent:'space-between', alignItems:'center', flexDirection:'row',borderLeftWidth:1, borderColor:'#bdbdbd'}}>
                    <Avatar.Icon icon="currency-usd" size={20} style={{backgroundColor:'green'}} />
                    <Text style={{fontSize:20, fontWeight:'bold', color:'#353b48'}}>USD</Text>
                    <Avatar.Icon icon="chevron-down" size={30} style={{backgroundColor:'transparent'}} color="#353b48" />
                </View>
                </View>
            </View>
            <Button color="#fff" style={{backgroundColor:'#736Df8', width:100, alignSelf:'center', height:40}} labelStyle={{fontSize:15}}>PROCEED</Button>
            <View style={{flexDirection:'row', justifyContent:'center', marginTop:2, marginBottom:20}}>
                <Text style={styles.bannerSubheading}>powered by</Text>
                <Text style={{...styles.bannerSubheading, color:'#fff'}}> Simplex</Text>
            </View>
            <View style={styles.offerings}>
                <View style={styles.offeringRow}>
                    <SvgUri
                        width="10%"
                        height="100%"
                        uri="https://files.coinswitch.co/public/images/landing_offer.svg"
                    />
                    <Title style={styles.offeringTitle}>Wildest Offering</Title>
                </View>
                <Text style={{...styles.bannerSubheading, paddingLeft:10}}>Buy, sell, trade over 300 cryptocurrencies, altcoins, tokens like Bitcoin (BTC), Ethereum (ETH), Ripple (XRP), Litecoin(LTC) etc. Check list of all cryptocurrencies we support with last 24 hours rankings, volume, market cap & supply details.</Text>
            </View>
            <View style={styles.offerings}>
                <View style={styles.offeringRow}>
                    <SvgUri
                        width="10%"
                        height="100%"
                        uri="https://files.coinswitch.co/public/images/landing_exchange.svg"
                    />
                    <Title style={styles.offeringTitle}>Interchangeability</Title>
                </View>
                <Text style={{...styles.bannerSubheading, paddingLeft:10}}>Exchange cryptocoins for 45000+ possible cryptocurrency pairs from all major exchanges.</Text>
            </View>
            <View style={styles.offerings}>
                <View style={styles.offeringRow}>
                    <SvgUri
                        width="10%"
                        height="100%"
                        uri="https://files.coinswitch.co/public/images/landing_speed.svg"
                    />
                    <Title style={styles.offeringTitle}>Unified Experience</Title>
                </View>
                <Text style={{...styles.bannerSubheading, paddingLeft:10}}>One place to access the complete cryptocurrency market, real time charts & cryptocurrency prices.</Text>
            </View>
            <View style={styles.offerings}>
                <View style={styles.offeringRow}>
                    <SvgUri
                        width="10%"
                        height="100%"
                        uri="https://files.coinswitch.co/public/images/landing_support.svg"
                    />
                    <Title style={styles.offeringTitle}>Reliable Support</Title>
                </View>
                <Text style={{...styles.bannerSubheading, paddingLeft:10}}>Our team will help you with all transactions across any of our supported cryptocurrency exchanges.</Text>
            </View>
            <View style={{padding:10, marginHorizontal:'5%', width:'90%', marginBottom:20}}>
                <Text style={styles.bannertext}>How does this cryptocurrency trade work?</Text>
            </View>
            <View style={styles.featuresCard}>
                <Image source={{uri:'https://files.coinswitch.co/public/images/STOCKS.png?v=2020070607'}} style={styles.featureCardImage} />
                <Title style={styles.offeringTitle}>1.Compare</Title>
                <Text style={{...styles.bannerSubheading, paddingLeft:10}}>Compare rates across exchanges and find the best exchange rate.</Text>
            </View>
            <View style={styles.featuresCard}>
                <Image source={{uri:'https://files.coinswitch.co/public/images/ALTCOINS.png?v=2020070607'}} style={styles.featureCardImage} />
                <Title style={styles.offeringTitle}>2.Convert</Title>
                <Text style={{...styles.bannerSubheading, paddingLeft:10}}>Follow simple steps to exchange your cryptocurrency. Need help? Refer our guide.</Text>
            </View>
            <View style={styles.featuresCard}>
                <Image source={{uri:'https://files.coinswitch.co/public/images/ORDERED%20RECORDS.png?v=2020070607'}} style={styles.featureCardImage} />
                <Title style={styles.offeringTitle}>3.Track</Title>
                <Text style={{...styles.bannerSubheading, paddingLeft:10}}>Easily track your order progress with our simplified and intuitive UI.</Text>
            </View>
            <View style={{padding:10, marginHorizontal:'5%', width:'90%', marginBottom:20, marginTop:10}}>
                <Text style={styles.bannertext}>Latest Reviews</Text>
            </View>
            <ScrollView contentContainerStyle={{height:350, paddingLeft:10}} horizontal={true}>
                <View style={styles.reviewCard}>
                <Avatar.Icon icon="format-quote-close" style={{backgroundColor:'transparent', position:'absolute', top:-40, right:-32}} size={100} color="rgba(255,255,255,0.25)" />
                <Text style={{...styles.bannerSubheading, padding:10, paddingTop:15}}>
                    CoinSwitch is essentially an exchange marketplace, through which users can access the crypto-markets. This model removes the need for multiple accounts across various exchanges or even one account for an exchange.
                </Text>
                <Text style={{...styles.bannerSubheading, padding:10, paddingTop:15, color:'#736Df8', fontSize:18}}>
                    COIN TELEGRAPH
                </Text>
                </View>
                <View style={styles.reviewCard}>
                <Avatar.Icon icon="format-quote-close" style={{backgroundColor:'transparent', position:'absolute', top:-40, right:-32}} size={100} color="rgba(255,255,255,0.25)" />
                <Text style={{...styles.bannerSubheading, padding:10, paddingTop:15}}>  
                    CoinSwitch is a one-stop destination for all your cryptocurrency trading needs.
                </Text>
                <Text style={{...styles.bannerSubheading, padding:10, paddingTop:15, color:'#736Df8', fontSize:18}}>
                    THE BITCOIN NEWS
                </Text>
                </View>
                <View style={styles.reviewCard}>
                <Avatar.Icon icon="format-quote-close" style={{backgroundColor:'transparent', position:'absolute', top:-40, right:-32}} size={100} color="rgba(255,255,255,0.25)" />
                <Text style={{...styles.bannerSubheading, padding:10, paddingTop:15}}>
                    With over 300 cryptocurrencies covered, Coinswitch boasts an enviable array of digital assets and is built upon existing platforms including Shapeshift and Hitbtc.
                </Text>
                <Text style={{...styles.bannerSubheading, padding:10, paddingTop:15, color:'#736Df8', fontSize:18}}>
                    BITCOIN.COM
                </Text>
                </View>
            </ScrollView>
            <View style={{padding:10, marginHorizontal:'5%', width:'90%', marginBottom:20}}>
                <Text style={styles.bannertext}>FAQ & Support</Text>
            </View>
            
            <View style={styles.faqCard}>
                <Image source={require('../assets/OTCTRADING.png')} style={{width:50, height:50, marginRight:10}} />
                <Title style={{...styles.offeringTitle, fontSize:22}} onPress={()=>faqHide({status:!faqShow.status, parent:0, child:-1})}>About Coinswitch</Title>
            </View>
            {faqShow.status&&faqShow.parent===0&&<View style={styles.faqCardExtendable}>
                <View style={{flex:1}}>
                    <Text style={{...styles.offeringTitle, fontSize:22}}>What is Coinswitch?</Text>
                </View>
                <IconButton icon="chevron-down-circle" color='rgba(0,0,0,0.3)' onPress={()=>faqHide({status:true, parent:0, child:faqShow.child===-1?0:-1})} />
            </View>}
            {faqShow.status&&faqShow.parent===0&&faqShow.child===0&&<View style={styles.faqCardExtendable}>
                <View style={{flex:1}}>
                    <Text style={{...styles.offeringTitle, fontSize:20, color:'rgba(255,255,255,0.75)'}}>
                            CoinSwitch is a cryptocurrency exchange providing the best way to invest in cryptocurrencies by aggregating all leading exchanges and comparing cryptocurrency prices in real time. We support over </Text>
                </View>
            </View>}
            {faqShow.status&&<View style={styles.faqCardExtendable}>
                <View style={{flex:1}}>
                    <Text style={{...styles.offeringTitle, fontSize:22}}>How to buy cryptocurrency with credit card or flat money on CoinSwitch?</Text>
                </View>
                <IconButton icon="chevron-down-circle" color='rgba(0,0,0,0.3)' onPress={()=>faqHide({status:true, parent:0, child:faqShow.child===-1?1:-1})} />
            </View>}
            {faqShow.status&&faqShow.parent===0&&faqShow.child===1&&<View style={styles.faqCardExtendable}>
                <View style={{flex:1}}>
                    <Text style={{...styles.offeringTitle, fontSize:20, color:'rgba(255,255,255,0.75)'}}>
                            CoinSwitch is a cryptocurrency exchange providing the best way to invest in cryptocurrencies by aggregating all leading exchanges and comparing cryptocurrency prices in real time. We support over </Text>
                </View>
            </View>}
            {faqShow.status&&<View style={styles.faqCardExtendable}>
                <View style={{flex:1}}>
                    <Text style={{...styles.offeringTitle, fontSize:22}}>Why should I trust you?</Text>
                </View>
                <IconButton icon="chevron-down-circle" color='rgba(0,0,0,0.3)' onPress={()=>faqHide({status:true, parent:0, child:faqShow.child===-1?2:-1})} />
            </View>}
            {faqShow.status&&faqShow.parent===0&&faqShow.child===2&&<View style={styles.faqCardExtendable}>
                <View style={{flex:1}}>
                    <Text style={{...styles.offeringTitle, fontSize:20, color:'rgba(255,255,255,0.75)'}}>
                            CoinSwitch is a cryptocurrency exchange providing the best way to invest in cryptocurrencies by aggregating all leading exchanges and comparing cryptocurrency prices in real time. We support over </Text>
                </View>
            </View>}
            {faqShow.status&&<View style={styles.faqCardExtendable}>
                <View style={{flex:1}}>
                    <Text style={{...styles.offeringTitle, fontSize:22}}>How to buy cryptocurrency with credit card or flat money on CoinSwitch?</Text>
                </View>
                <IconButton icon="chevron-down-circle" color='rgba(0,0,0,0.3)' onPress={()=>faqHide({status:true, parent:0, child:faqShow.child===-1?3:-1})} />
            </View>}
            {faqShow.status&&faqShow.parent===0&&faqShow.child===3&&<View style={styles.faqCardExtendable}>
                <View style={{flex:1}}>
                    <Text style={{...styles.offeringTitle, fontSize:20, color:'rgba(255,255,255,0.75)'}}>
                            CoinSwitch is a cryptocurrency exchange providing the best way to invest in cryptocurrencies by aggregating all leading exchanges and comparing cryptocurrency prices in real time. We support over </Text>
                </View>
            </View>}
            <View style={styles.faqCard}>
                <Image source={require('../assets/BITCOINWALLET.png')} style={{width:50, height:50, marginRight:10}} />
                <Title style={{...styles.offeringTitle, fontSize:22}}>About Wallets</Title>
            </View>
            <View style={styles.faqCard}>
                <Image source={require('../assets/BITCOINWALLET.png')} style={{width:50, height:50, marginRight:10}} />
                <Title style={{...styles.offeringTitle, fontSize:22}}>About Blockchains</Title>
            </View>
            <View style={styles.faqCard}>
                <Image source={require('../assets/BITCOINWALLET.png')} style={{width:50, height:50, marginRight:10}} />
                <Title style={{...styles.offeringTitle, fontSize:22}}>About exchanging cryptocurrency & altcoins</Title>
            </View>
            </ScrollView>
            
            <IconButton icon="forum" style={{backgroundColor:'rgb(75,179,87)', position:'absolute', bottom:20, right:0}} color="#fff" onPress={() => chatInitHandler()} size={30} />
            
            <Provider>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modal}>
                <View style={{flex:1, width:'100%', justifyContent:'flex-start'}}>
                    <View style={{backgroundColor:'#4BB357', height:60, padding:10, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <View style={{flexDirection:'row'}}><View style={{width:30, height:30, marginRight:5}}>
                            <Image source={require('../assets/logo.png')} style={{width:30, height:30, marginRight:10, borderRadius:15}} />
                            <View style={{backgroundColor:'#13cb6e', height:10, width:10, borderRadius:5, position:'absolute', bottom:0, right:0, borderWidth:0.3}}></View>
                        </View>
                        <Text style={{color:'#fff', fontSize:25}}>CoinSwith.co</Text></View>
                        <IconButton icon="close" color="#fff" onPress={hideModal} />
                    </View>
                    <ScrollView contentContainerStyle={{paddingBottom:80}}>
                    {chatsMessages.map((chat, chatId) => (<View style={{flex:1}}>

                    {chat.from==='bot'&&<View style={{flexDirection:'row', padding:10, alignItems:'flex-end'}}>
                        <Image source={require('../assets/logo.png')} style={{width:30, height:30, marginRight:10, borderRadius:15}} />
                        <View style={{justifyContent:'flex-end', alignItems:'flex-start'}}>
                            <Text style={{fontSize:10, padding:10}}>CoinSwitch</Text>
                            <Text style={{backgroundColor:'#f8f8f8', padding:10, borderRadius:20}}>{chat.message}</Text>
                        </View>
                    </View>}
                        
                    {chat.from==='user'&&<View style={{padding:10, alignItems:'flex-end'}}>
                        <Text style={{backgroundColor:'#4BB357', padding:10, borderRadius:20, color:'#fff'}}>{chat.message}</Text>
                    </View>}
                    </View>))}
                    </ScrollView>
                    <View style={{position:'absolute',width:'100%', height:80, flexDirection:'row', padding:10, bottom:0, left:0, justifyContent:'space-around', alignItems:'center'}}>
                        <IconButton icon="paperclip" color="black" />
                        <TextInput placeholder="Reply to CoinSwitch Bot" style={{width:'70%', backgroundColor:'#fff', borderWidth:1, overflow:'hidden', borderRadius:20, borderTopLeftRadius:20, borderTopRightRadius:20, borderColor:'#d4e2e9'}} theme={{ colors: { primary: '#fff',underlineColor:'rgba(0, 0, 0, 0.1)', placeholder: '#353b48', text: '#353b48'}}} value={currentTypedReplyFromUser} onChangeText={(reply) => setCurrentTypedReplyFromUser(reply)} />
                        <IconButton icon="send" color="#736DF8" onPress={userReplyHandler} />
                    </View>
                </View>
                </Modal>
            </Portal>
            </Provider>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:'#393a4c',
        width:'100%',
        //alignItems:'center'
    },
    card:{
        width:'90%',
        height:300,
        backgroundColor:'rgba(0, 0, 0, 0.1)',
        opacity:0.9,
        marginHorizontal:'5%',
        paddingBottom:20,
        paddingHorizontal:10,
        marginBottom:10,
        justifyContent:'flex-end'
    },
    beforeCard:{
        height:300,
        width:'90%',
        marginTop:'10%',
        paddingTop:'10%',
        //borderWidth:1,
        marginHorizontal:'5%'
    },
    titleCard:{
        color:'#ffffff',
        fontWeight:'bold'
    },
    bannertext:{
        color:'#ffffff',
        fontSize:40,
        fontWeight:'bold',
        marginBottom:10
    },
    bannerSubheading:{
        fontWeight:'bold',
        fontSize:20,
        color:'rgba(255,255,255,0.65)'
    },
    offeringTitle:{
        color:'#fff',
        fontSize:25
    },
    offeringRow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    offerings:{
        width:'100%',
        padding:10
    },
    featuresCard:{
        width:'90%',
        marginHorizontal:'5%',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
        height:300,
        //borderWidth:1
    },
    featureCardImage:{
        width:150,
        height:150
    },
    reviewCard:{
        width:300,
        height:300,
        backgroundColor:'#44455a',
        marginRight:10
    },
    faqCard:{
        width:'90%',
        marginHorizontal:'5%',
        height:80,
        justifyContent:'flex-start',
        alignItems:'center',
        paddingHorizontal:10,
        backgroundColor:'rgba(255,255,255,0.04)',
        flexDirection:'row'
    },
    faqCardExtendable:{
        width:'90%',
        marginHorizontal:'5%',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:10,
        backgroundColor:'rgba(255,255,255,0.02)',
        paddingVertical:10,
        flexDirection:'row'
    },
    modal:{
        height:'80%',
        width:'90%',
        marginHorizontal:'5%',
        backgroundColor:'#fff',
        borderRadius:20,
        overflow:'hidden'
    }
});

export default Home;