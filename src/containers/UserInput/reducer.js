import {ENTER_SISTOLIC, ENTER_DIASTOLIC, ENTER_PULSE, SHOW_HIDE_CONTAINER_CONTROL_BUTTON, SHOW_HIDE_INPUT_CONTAINER} from './constants';
const initialState = {
      distolic: '',
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
                  return {...state, distolic: action.payload};
            case ENTER_PULSE:
                  return {...state, pulse: action.payload};
            case SHOW_HIDE_INPUT_CONTAINER:
                  return {...state, container_display:'none',show_container_button:''};
            case SHOW_HIDE_CONTAINER_CONTROL_BUTTON:
                  return {...state, container_display:'',show_container_button:'none'};
            default:
                  return state;
      }
}