import {ENTER_SISTOLIC, ENTER_DIASTOLIC, ENTER_PULSE, SHOW_HIDE_INPUT_CONTAINER, SHOW_HIDE_CONTAINER_CONTROL_BUTTON} from './constants';
export const enter_systolic = (text) =>({
      type: ENTER_SISTOLIC,
      payload: text
});

export const enter_diastolic = (text) => ({
      type: ENTER_DIASTOLIC,
      payload: text
});

export const enter_pulse = (text) => ({
      type: ENTER_PULSE,
      payload: text
});

export const show_hide_input_container = ()=>({
      type: SHOW_HIDE_INPUT_CONTAINER
});

export const show_hide_container_control_button = () => ({
      type: SHOW_HIDE_CONTAINER_CONTROL_BUTTON
});