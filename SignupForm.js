import React from 'react';
import {View, StyleSheet, SafeAreaView, Image, Alert, Keyboard} from 'react-native';
import {Text, Title, Headline, Subheading, TextInput, Avatar, Button, ActivityIndicator, Colors} from 'react-native-paper';
import * as firebase from 'firebase';

const SignupForm = props => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [keyBoardShown, setKeyBoardShown] = React.useState(false);
    const [processingLogin, setProcessingLogin] = React.useState(false);

    const signUpHandler = () => {
        setProcessingLogin(true);
        if((email!='')&&(password!='')){
            firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{
                const user = firebase.auth().currentUser;
                if(user!=null){
                    console.log('it came here');
                    setProcessingLogin(false);
                    props.signIn(user);
                    props.navigation.navigate('Home');
                }else{
                    setProcessingLogin(false);
                }   
            }).catch(function(error) {
            // Handle Errors here.
                let errorCode = error.code;
                let errorMessage = error.message;
                setProcessingLogin(false);
                Alert.alert(
                    "Invalid Username/Password",
                    errorMessage,
                    [
                      {
                        text: "Close",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                      },
                    ],
                    { cancelable: true }
                );
            // ...
            });

        }else{
            setProcessingLogin(false);
            Alert.alert(
                "Invalid Username/Password",
                "Username and password cannot be blank.",
                [
                  {
                    text: "Close",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                ],
                { cancelable: true }
            );
        }
    }

    React.useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
    
        // cleanup function
        return () => {
          Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
          Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };
      }, []);
    
      const _keyboardDidShow = () => {
        setKeyBoardShown(true);
      };
    
      const _keyboardDidHide = () => {
        setKeyBoardShown(false);
      };
    return (
        <View style={styles.screen}>
            <SafeAreaView style={styles.screen}>
                <View style={{flexDirection:'row', height:'10%'}}>
                    <Title style={{color:'#eeeeee'}}>COIN</Title>
                    <Title style={{color:'#eeeeee', fontWeight:'bold'}}>SWITCH</Title>
                    <Title style={{color:'#4527a0'}}>| PRO</Title>
                </View>
                <View style={{ height:'30%', width:'80%', marginHorizontal:'10%', alignItems:'center'}}>
                    <Headline style={{color:'#e0e0e0', fontSize:15}}>Join our community</Headline>
                    <TextInput style={{height:50, width:'100%', backgroundColor:'#bdbdbd', marginBottom:10}} underlineColor="white" selectionColor="#eeeeee" mode="flat" label="Email" theme={{ colors: { primary: '#212121',underlineColor:'transparent',}}} value={email} onChangeText={(typedEmail) => setEmail(typedEmail)} />
                    <TextInput style={{height:50, width:'100%', backgroundColor:'#bdbdbd'}} underlineColor="white" selectionColor="#eeeeee" mode="flat" label="Password" theme={{ colors: { primary: '#212121',underlineColor:'transparent',}}} secureTextEntry={true} value={password} onChangeText={(typedPass) => setPassword(typedPass)} />
                    <ActivityIndicator animating={processingLogin} color={Colors.red800} />
                    <Button color="#eeeeee" mode="outlined" onPress={signUpHandler}>SIGNUP</Button>
                    <Button color="#eeeeee" mode="outlined" onPress={() => {props.navigation.navigate('SignIn')}}>LOGIN</Button>
                </View>
                {!keyBoardShown &&<View style={{height:'30%', width:'80%', marginHorizontal:'10%', alignItems:'center'}}>
                    <View style={{flexDirection:'row', marginBottom:10}}>
                        <Avatar.Icon icon="flash" style={{backgroundColor:'#212121'}} color="#ffeb3b" />
                        <View style={{flex:1}}>
                            <Title style={{color:'#eeeeee'}}>Faster Exchanges</Title>
                            <Subheading style={{color:'#e0e0e0', fontSize:12}}>Try our all-new exchange for a faster experience.</Subheading>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', marginBottom:10}}>
                        <Avatar.Icon icon="currency-usd" style={{backgroundColor:'#212121'}} color="#00897b" />
                        <View style={{flex:1}}>
                            <Title style={{color:'#eeeeee'}}>Fixed rate Trade</Title>
                            <Subheading style={{color:'#e0e0e0', fontSize:12}}>Fix your exchange rate and avoid market rate fluctuations.</Subheading>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Avatar.Icon icon="face-agent" style={{backgroundColor:'#212121'}} color="#d50000" />
                        <View style={{flex:1}}>
                            <Title style={{color:'#eeeeee'}}>Priority Support</Title>
                            <Subheading style={{color:'#e0e0e0', fontSize:12}}>Avail our priority support for quick response and resolutions.</Subheading>
                        </View>
                    </View>
                </View>}
                {!keyBoardShown&&<View style={{height:'10%', width:'80%', marginHorizontal:'10%', justifyContent:'center', flexDirection:'row'}}>
                    <Button color="#eeeeee" mode="outlined">TERMS</Button>
                    <Button color="#eeeeee" mode="outlined">PRIVACY</Button>
                </View>}
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#212121',
        width:'100%'
    }
});

export default SignupForm;