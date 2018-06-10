import {
      ENTER_SISTOLIC,
      ENTER_DIASTOLIC,
      ENTER_PULSE,
      SHOW_HIDE_INPUT_CONTAINER,
      GET_USER_DATA,
      SHOW_HIDE_CONTAINER_CONTROL_BUTTON,
      SAVE_USER_DATA
} from './constants';
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

export const save_data = () =>({
      type: SAVE_USER_DATA
})

export const get_user_data = ()=>(dispatch) => {
      var db;
      var request = indexedDB.open("health");
      request.onupgradeneeded = function(event) { 
            db = event.target.result;
            var objectStore = db.createObjectStore("health", { keyPath: "ID" });
            objectStore.transaction.oncomplete = (event) =>{
            db.transaction("health", "readwrite").objectStore("health");
            }
      };
      // request.onerror = function(event) {
      //       alert("Applicaiton not availabel due to IndexedDB issue.");
      // };
      request.onsuccess = function(event) {
            db = event.target.result;
            if(db){
            var transaction = db.transaction(['health'],'readwrite');
            var objectStore = transaction.objectStore('health');
            var request = objectStore.getAll();
            request.onsuccess = (event)=>{
            console.log(request.result);
            dispatch({type:GET_USER_DATA, payload:request.result})
            }
      }
      };

}
