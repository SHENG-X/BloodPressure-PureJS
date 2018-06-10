import {ENTER_SISTOLIC, ENTER_DIASTOLIC, ENTER_PULSE, REQUEST_DATA, SHOW_HIDE_CONTAINER_CONTROL_BUTTON, GET_USER_DATA, SHOW_HIDE_INPUT_CONTAINER, SAVE_USER_DATA} from './constants';
import Joi from 'joi';
const schema = {
      systolic:Joi.number().required(),
      diastolic: Joi.number().required(),
      pulse: Joi.number().required()
};

const initialState = {
      diastolic: '',
      systolic: '',
      pulse: '',
      container_display: '',
      show_container_button: 'none',
      data:[]
}

// const appDataState={
//       data: [] 
// }

export const setInput = (state = initialState, action = {}) => {
      console.log(action.type);
      switch(action.type){
            case ENTER_SISTOLIC:
                  return {...state, systolic: action.payload};
            case ENTER_DIASTOLIC:
                  return {...state, diastolic: action.payload};
            case ENTER_PULSE:
                  return {...state, pulse: action.payload};
            case SHOW_HIDE_INPUT_CONTAINER:
                  return {...state, container_display:'none',show_container_button:''};
            case SHOW_HIDE_CONTAINER_CONTROL_BUTTON:
                  return {...state, container_display:'',show_container_button:'none'};
            case GET_USER_DATA:
                  let holder = state.data;
                  action.payload.forEach(val => holder.push(val));
                  return {...state, data:holder};
            case SAVE_USER_DATA:
                  // Save data to indexed db From here
                  // key (ID)==> time
                  // Only save systolic/diastolic/pulse
                  // check user input if input is valid
                  var dataID = Date.now();
                  const result = Joi.validate({'systolic': state.systolic, 'diastolic': state.diastolic, 'pulse': state.pulse}, schema);
                  if(result.error){
                        console.log(result.error.details[0].message);
                        alert(result.error.details[0].message);
                  }else{
                        if (!window.indexedDB) {
                              window.alert("Your browser doesn't support a stable version of IndexedDB. This app requires IndexedDB to work properly.");
                        }
                        else{
                              var db = null;
                              const request = window.indexedDB.open('health', 1);
                              request.onerror = (event) => {
                                    alert('IndexedDB is required for the application');
                              }
                              request.onsuccess = (event) =>{
                                    db = event.target.result;
                                    if(db){
                                          var transaction = db.transaction(['health'],'readwrite');
                                          var objectStore = transaction.objectStore('health');
                                          objectStore.add({'systolic': state.systolic, 'diastolic': state.diastolic, 'pulse': state.pulse, 'ID':dataID});
                                          console.log('App data state: ', state.data);
                                    }   
                              }
                              request.onupgradeneeded = (event) =>{ 
                                    var db = event.target.result;
                                    var objectStore = db.createObjectStore("health", { keyPath: "ID" });
                                    objectStore.transaction.oncomplete = (event) =>{
                                          var clientObjectStore = db.transaction("health", "readwrite").objectStore("health");
                                          clientObjectStore.add({'systolic': state.systolic, 'diastolic': state.diastolic, 'pulse': state.pulse, 'ID':dataID});
                                          let holder = state.data;
                                          console.log('App data state: ', state.data);
                                    }
                              };
                              console.log(state.systolic, state.diastolic, state.pulse, Date.now());
                              let holder = [];
                              holder = state.data;
                              holder.push({systolic: state.systolic, diastolic: state.diastolic, pulse: state.pulse, ID:dataID})
                              return {diastolic: '', systolic: '', pulse: '', container_display: '', show_container_button: 'none', data:holder};
                        }
                        
                  }
                  
            default:
                  return state;
      }
}

// export const fetchData = (state = appDataState, action = {}) => {
//       switch(action.type){
//             case GET_USER_DATA:
//                   action.payload.forEach(val => appDataState.data.push(val));
//                   return appDataState.data;
//             case REQUEST_DATA:
//                   return appDataState.data;
//             default:
//                   return appDataState;
//       }
// }