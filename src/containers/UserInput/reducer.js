import {ENTER_SISTOLIC, ENTER_DIASTOLIC, ENTER_PULSE, SHOW_HIDE_CONTAINER_CONTROL_BUTTON, SHOW_HIDE_INPUT_CONTAINER, SAVE_USER_DATA} from './constants';
const initialState = {
      diastolic: '',
      systolic: '',
      pulse: '',
      container_display: '',
      show_container_button: 'none',
}


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
            case SAVE_USER_DATA:
                  // Save data to indexed db From here
                  // key (ID)==> time
                  // Only save systolic/diastolic/pulse
                  // check user input if input is valid
                  console.log(state.systolic, state.diastolic, state.pulse, Date.now());
                  return initialState;
            default:
                  return state;
      }
}