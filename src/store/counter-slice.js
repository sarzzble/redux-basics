import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

// hem reducer'leri hem de action'ları bir arada
// tanımlamak için kullanılır.
const counterSlice = createSlice({
  name: "counter", // slice'ın ismi
  initialState: initialCounterState,

  // state'i nasıl değiştireceğimizi belirleyen
  // fonksiyonlar, reducer'lar.
  // Bu fonksiyonlar doğrudan state üzerinde değişiklik yapıyormuş gibi görünse de, Redux Toolkit bunu güvenli bir şekilde yapar. Toolkit, aslında "immer" kütüphanesini kullanarak state'in "immütabl" olmasını sağlar ve bir kopya oluşturur. Yani aslında doğrudan değişiklik yapılmıyor, arka planda kopyalar üzerinden işlemler yapılıyor.
  reducers: {
    increment(state) {
      // normalde bu şekilde kullanmak yasak ama
      // redux toolkit bir kopyasını oluşturuyor.
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      // burada action.payload demek zorundayız.
      // payload, dispatch edeceğimiz ekstra data.
      state.counter = state.counter + action.payload;
    },
    reset(state) {
      state.counter = 0;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// counterSlice.actions, createSlice fonksiyonu tarafından otomatik olarak oluşturulan action'ların bir koleksiyonudur ve bunları export ederek diğer componentlar'da kullanmamızı sağlar.
// örneğin, counterActions.increment() şeklinde kullanılır ve bu da action'un ne yaptığını açıkça belirtir, anlamamızı kolaylaştırır.
export const counterActions = counterSlice.actions;

// direkt olarak reducer'larımızı export ediyoruz.
export default counterSlice.reducer;
