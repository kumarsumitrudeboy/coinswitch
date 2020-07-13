//import * as firebase from 'firebase';
//import 'firebase/firestore';
//import { UPDATE_INITIAL } from '../actions/ChecklistAction';




const firebaseConfig = {
    apiKey: "AIzaSyBjDVYzpOon_Z93uVPfDG1NIf0DvQzSf_k",
    authDomain: "cloudnotes-dev.firebaseapp.com",
    databaseURL: "https://cloudnotes-dev.firebaseio.com",
    projectId: "cloudnotes-dev",
    storageBucket: "cloudnotes-dev.appspot.com",
    messagingSenderId: "1001467897339",
    appId: "1:1001467897339:web:06c85907914669e619d75e",
    measurementId: "G-8F10Q15FJW"
};
// if(!firebase.apps.length || firebase.apps.length<=0){
//     firebase.initializeApp(firebaseConfig);
// }

// const db = firebase.firestore();

const initialState = {
    checklists: []
};

const FakeSwitchReducer = (state=initialState, action) => {
    switch(action.type){
        case "UPDATE_INITIAL":
            return {...state, checklists:action.checklists}
        
        default:
            return state
    };
};

export default FakeSwitchReducer;