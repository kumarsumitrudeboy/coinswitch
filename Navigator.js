import * as React from 'react';
import { AsyncStorage, Button, Text, TextInput, View, StyleSheet, Image, TouchableHighlight, Linking, ImageBackground} from 'react-native';
import { NavigationContainer, useNavigation, DrawerActions  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContent,} from '@react-navigation/drawer';

import { IconButton, ActivityIndicator, Colors, ProgressBar, Title} from 'react-native-paper';
import * as firebase from 'firebase';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import Home from './screens/Home';
import MyOrders from './screens/MyOrders';
import Products from './screens/Products';
import Support from './screens/Support';
import TrackOrders from './screens/TrackOrders';
import FakeSwitchReducer from './store/reducers';

const AuthContext = React.createContext();

const rootReducer = combineReducers({
  fakeswitch:FakeSwitchReducer
});

const store = createStore(rootReducer);

const SplashScreen = (props) => {
    //state to check if firebase is loaded and our application is good to go
    const [isAppReady, setIsAppReady] = React.useState(false);

    //firebase sdk configuration items
    const firebaseConfig = {
        apiKey: "AIzaSyATFUDqy11ibsbCf9ahNqCCPy4it27DL6U",
        authDomain: "blogposts-e9fb0.firebaseapp.com",
        databaseURL: "https://blogposts-e9fb0.firebaseio.com",
        projectId: "blogposts-e9fb0",
        storageBucket: "blogposts-e9fb0.appspot.com",
        messagingSenderId: "818960870517",
        appId: "1:818960870517:web:d062dced0e220940"
    };

    //initializing firebase on load
    React.useEffect(() => {
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
    }, [isAppReady]);

    return (
        <View style={{flex:1, width:'100%', justifyContent:'center', alignItems:'center', backgroundColor:'#212121'}}>
        <ImageBackground resizeMode="contain" style={{flex:1, justifyContent:'center', alignItems:'center',width:100}} source={require('./assets/splash.gif')}>
        </ImageBackground>
        <ActivityIndicator animating={true} color={Colors.red800} />
        </View>
    );
    }

function HomeScreen({route, navigation}) {
  const { user } = React.useContext(AuthContext);
  const { signOut } = React.useContext(AuthContext);
  const [menuOpen, setMenuOpen] = React.useState(true);

  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}


function SignInScreen({route, navigation}) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  return (
    <View style={{flex:1}}>
     <LoginForm signIn={signIn} navigation={navigation} />
    </View>
  );
}

function SignUpScreen({route, navigation}) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  return (
    <View style={{flex:1}}>
     <SignupForm signIn={signIn} navigation={navigation} />
    </View>
  );
}

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const DrawerNavigation =() => {

  const { signOut } = React.useContext(AuthContext);

  const customDrawerContent=(props) => {
    return(
      <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      <View style={{flexDirection:'row',justifyContent:'center', marginBottom:50}}>
        <Title style={{color:'#eeeeee'}}>COIN</Title>
        <Title style={{color:'#eeeeee', fontWeight:'bold'}}>SWITCH</Title>
        <Title style={{color:'#4527a0'}}>| PRO</Title>
      </View>
      <DrawerItem
        label="Exchange "
        onPress={() => props.navigation.jumpTo('HomeMain')}
        icon={() => <IconButton icon="recycle" color="#eeeeee" />}
        activeTintColor="#eeeeee"
        inactiveTintColor="#bdbdbd"
        labelStyle={{fontSize:20, margin:0}}
      />
      <DrawerItem
        label="My Orders "
        onPress={() => props.navigation.jumpTo('Orders')}
        icon={() => <IconButton icon="clock-outline" color="#eeeeee" />}
        activeTintColor="#eeeeee"
        inactiveTintColor="#bdbdbd"
        labelStyle={{fontSize:20, margin:0}}
      />
      <DrawerItem
        label="Track Orders "
        onPress={() => props.navigation.jumpTo('TrackOrder')}
        icon={() => <IconButton icon="magnify" color="#eeeeee" />}
        activeTintColor="#eeeeee"
        inactiveTintColor="#bdbdbd"
        labelStyle={{fontSize:20, margin:0}}
      />
      <DrawerItem
        label="Products "
        onPress={() => props.navigation.jumpTo('Products')}
        icon={() => <IconButton icon="cart" color="#eeeeee" />}
        activeTintColor="#eeeeee"
        inactiveTintColor="#bdbdbd"
        labelStyle={{fontSize:20, margin:0}}
      />
      <DrawerItem
        label="Support ."
        onPress={() => Linking.openURL('https://support.coinswitch.co/en/support/home')}
        icon={() => <IconButton icon="cogs" color="#eeeeee" />}
        activeTintColor="#eeeeee"
        inactiveTintColor="#bdbdbd"
        labelStyle={{fontSize:20, margin:0}}
      />
      <DrawerItem
        label="SignOut ."
        onPress={signOut}
        icon={() => <IconButton icon="login" color="#eeeeee" />}
        activeTintColor="#eeeeee"
        inactiveTintColor="#bdbdbd"
        labelStyle={{fontSize:20, margin:0}}
      />
      
      </DrawerContentScrollView>
    );
  }
  return (
    
      <Drawer.Navigator 
        drawerType="slide" 
        drawerStyle={{
          backgroundColor: '#23222d',
          width: '50%',
        }}
        drawerContent={customDrawerContent}
      >
        <Drawer.Screen name="HomeMain" component={HomeScreen} />
        <Drawer.Screen name="Orders" component={MyOrders} />
        <Drawer.Screen name="TrackOrder" component={TrackOrders} />
        <Drawer.Screen name="Products" component={Products} />
        <Drawer.Screen name="Support" component={Support} />
      </Drawer.Navigator>
    
  );
};

const HeaderRight = () => {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection:'row', justifyContent:'space-around', backgroundColor:'rgba(255,255,255,0.15)', padding:10, paddingLeft:20, borderTopLeftRadius:20, borderBottomLeftRadius:20}}>
      <Text style={{fontStyle:"italic", fontWeight:'bold', color:'#ffffff', marginRight:5}}>VISA</Text>
      <Image source={{uri:'https://i.pinimg.com/originals/7b/60/d1/7b60d14a92740a145d0d8c27efc7f363.jpg'}} style={{width:30, height:20}} />
    </View>
  );
};

const HeaderLeft = () => {
  const navigation = useNavigation();
  return (
    <IconButton icon="menu" size={25} color="#eeeeee" onPress={() => {
      navigation.dispatch(DrawerActions.openDrawer());
    }} />
  );
};

export default function Navigator({ navigation }) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            user: action.user,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            user: action.user,
          };
        case 'SIGN_OUT':
          firebase.auth().signOut().then(function() {
            //console.log('signout');
            dispatch(signOutUserFromFirebase());
            //console.log('after signout dispatch user is'+user);
            //props.navigation.navigate('Authentication', {screen: 'SignIn'});
          }).catch(function(error) {
            console.log(error);
          });
          return {
            ...prevState,
            isSignout: true,
            user: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {

      try {
        //console.log('cuurent user');
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            console.log('user is valid')
            dispatch({ type: 'RESTORE_TOKEN', user: user });
          } else {
            dispatch({ type: 'RESTORE_TOKEN', user: null });
          }
        });
        console.log(userReLogin);
      } catch (e) {
        // Restoring token failed
      }
      
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async user => {
        dispatch({ type: 'SIGN_IN', user: user });
      },
      signOut: async() => {
        await firebase.auth().signOut().then(function() {
          console.log('signout');
          dispatch(signOutUserFromFirebase());
          console.log('after signout dispatch user is'+user);
          //props.navigation.navigate('Authentication', {screen: 'SignIn'});
        }).catch(function(error) {
          console.log(error);
        });
        dispatch({ type: 'SIGN_OUT' })
      },
      signUp: async data => {
        dispatch({ type: 'SIGN_IN', user: user });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="screen" screenOptions={({navigation}) => ({
          headerLeft:()=><HeaderLeft />,
          headerRight:() => <HeaderRight />
        })}>
          {state.isLoading ? (
            // We haven't finished checking for the token yet
            <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}} />
          ) : state.user == null ? (
            // No token found, user isn't signed in
            <Stack.Screen
              name="SignIn"
              component={SignInScreen}
              options={{
                title: 'Sign in',
                headerShown:false,
            // When logging out, a pop animation feels intuitive
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}
            />
          ) : (
            // User is signed in
              <Stack.Screen name="Home" component={DrawerNavigation} options={({navigation}) => ({
                headerShown:true,
                headerStyle:{
                  backgroundColor:'#393a4c'
                },
                headerTitleStyle:{
                  color:'#eeeeee',
                  fontSize:30
                },
                headerTitle:'COINSWITCH'
              })} />
          )}
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{
              title: 'Sign Up',
              headerShown:false,
          // When logging out, a pop animation feels intuitive
              animationTypeForReplace: state.isSignout ? 'pop' : 'push',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ede7f6',//#ede7f6
      alignItems: 'center',
      justifyContent: 'center',
      //borderWidth:1
    },
  });  
