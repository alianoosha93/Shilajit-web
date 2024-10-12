import { createSlice } from "@reduxjs/toolkit";  

const initialState = {  
    products: [],  
    searchTerm: '',  
    filteredData: []  
};  

const productSlice = createSlice({  
    name: "products",  
    initialState,  
    reducers: {  
        setProducts(state, action) {  
            state.products = action.payload;  
        },  


        setSearchTerm(state, action) {  
            state.searchTerm = action.payload; // Always check that action.payload isn't undefined  
            const searchTermLowered = state.searchTerm.toLowerCase();  
            
            state.filteredData = state.products.filter(product => {  
                // Check if product.name exists before calling toLowerCase()  
                if (product.name) {  
                    return product.name.toLowerCase().includes(searchTermLowered);  
                }  
                return false; // Exclude products without a name  
            });  
        }
         
    },   
});  


export const { setProducts, setSearchTerm } = productSlice.actions;  
export default productSlice.reducer;