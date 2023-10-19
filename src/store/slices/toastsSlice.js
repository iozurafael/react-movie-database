import { createSlice } from '@reduxjs/toolkit';

const toastSlice = createSlice({
  name: 'toasts',
  initialState: {
    toasts: [],
  },
  reducers: {
    addToast: (state, action) => {
      const id = Date.now();
      state.toasts.push({ ...action.payload, id });
    },
    removeToast: (state, action) => {
      state.toasts = state.toasts.filter(
        (toast) => toast.id !== action.payload
      );
    },
  },
});

export const { addToast, removeToast } = toastSlice.actions;
export const selectToasts = (state) => state.toasts.toasts;
export const toastsReducer = toastSlice.reducer;
