// import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "./cartSlice"
// import productSlice from "./productSlice";

// const Store = configureStore({
// reducer:{
//     cart: cartSlice,
//     product: productSlice,
// }
// })

// export default  Store
// -----------------------------------------------------------------------------------------
// import { configureStore } from "@reduxjs/toolkit";  
// import cartSlice from "./cartSlice"; // Ensure the path is correct  
// import productSlice from "./productSlice"; // Ensure the path is correct  

// const store = configureStore({  
//     reducer: {  
//         cart: cartSlice,  
//         product: productSlice,  
//     }  
// })  

// export default store;



import { configureStore } from "@reduxjs/toolkit";  
import cartSlice from "./cartSlice"; // Ensure the path is correct  
import productSlice from "./productSlice"; // Ensure the path is correct  

const store = configureStore({  
    reducer: {  
        cart: cartSlice,  
        product: productSlice,  
    }  
});  

export default store;