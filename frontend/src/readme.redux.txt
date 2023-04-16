TO CONFIGURE REDUX IN PROJECT:

STEP 1: INSTALL DEPENDENCIES 
    "@reduxjs/toolkit": "^1.8.5",
    "react-redux": "^8.0.4"
STEP 2: CREATE A FOLDER 'src/Redux' in root directory
STEP 3: CREATE A FILE 'src/Redux/store.js'
STEP 4:ADD BELOW LINE
     import { configureStore } from "@reduxjs/toolkit";
     
   export default configureStore({
        reducer: {
            // REGISTER ALL THE Reducers
            name: REDUCER
        }
    });

STEP 5: CREATE A FOLDER INSIDE 'src/Redux/Reducers':
       CREATE A Match.reducer.js 