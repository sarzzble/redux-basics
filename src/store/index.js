import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";

// reducer'ları mağazaya bağlıyoruz
// bu store'u uygulamanın en temel içeriği olan
// "index.js" dosyasında Provider'ın içine
// prop olarak veriyoruz.
// Bu sayede state'lerimizi yönetebiliyoruz.
/* const store = createStore(counterSlice.reducer); */

const store = configureStore({
  // key isimlerini biz veriyoruz
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
