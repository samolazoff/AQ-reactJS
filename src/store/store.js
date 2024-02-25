import {configureStore} from '@reduxjs/toolkit';

import langSlice from './slices/langSlice';
import burgerSlice from './slices/burgerSlice';

export const store = configureStore({
    reducer: {
        lang: langSlice,
        burger: burgerSlice
    },
    devTools: true
});