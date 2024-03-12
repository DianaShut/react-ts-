import {configureStore} from "@reduxjs/toolkit";

import {loadingReducer} from "./slices";

const store = configureStore({
    reducer:{
        loadingReducer,

    }
})

export {store}