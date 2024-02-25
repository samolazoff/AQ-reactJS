import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    burgerClasses: ['burger', 'close']
};

export const burgerSlice = createSlice({
    name: 'burger',
    initialState: initialState,
    reducers: {
        changeClasses: (state) => {
            if(state.burgerClasses.includes('open')){
                state.burgerClasses = ['burger', 'close']
            } else {
                state.burgerClasses = ['burger', 'open']
            }
        }
    }
});

export const {changeClasses} = burgerSlice.actions;
export default burgerSlice.reducer;