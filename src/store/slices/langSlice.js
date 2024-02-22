import { createSlice } from "@reduxjs/toolkit";

import mainTxtEngJSON from '../../data/mainTxtEng.json';
import mainTxtRuJSON from '../../data/mainTxtRu.json';

const initialState = {
    lang: 'RU',
    text: mainTxtRuJSON
};

export const langSlice = createSlice ({
    name:'lang',
    initialState: initialState,
    reducers: {
        getEngTxt: (state) => {
            state.lang = 'EN';
            state.text = mainTxtEngJSON;
        },
        getRuTxt: (state) => {
            state.lang = 'RU';
            state.text = mainTxtRuJSON;
        }
    }
});

export const {getEngTxt, getRuTxt} = langSlice.actions;
export default langSlice.reducer;