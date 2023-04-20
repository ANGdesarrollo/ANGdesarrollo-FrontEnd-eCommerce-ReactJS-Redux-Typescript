import { createSlice } from '@reduxjs/toolkit';
import { IUserInitial } from './interface';

export const initialState: IUserInitial = {
    isLogged: false,
    username: null,
    pageLogin: false,
    pageRegister: false,
    loading: false,
    error: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        onLoginSlice: (state, action) => {
            state.isLogged = action.payload.isLogged;
            state.username = action.payload.username;
        },
        onRegisterSlice: (state, action) => {},
        onAuthSession: (state, action) => {
            state.username = action.payload.username;
            state.isLogged = action.payload.isLogged;
        },
        onLogOutSlice: (state, action) => {
            state.isLogged = action.payload;
            state.username = action.payload;
        },
        onLoading: (state, action) => {
            state.loading = action.payload;
        },
        onError: (state, action) => {
            state.error = action.payload;
        },
        loginView: (state) => {
            state.pageLogin = true;
            state.pageRegister = false;
        },
        registerView: (state) => {
            state.pageLogin = false;
            state.pageRegister = true;
        },
        closeView: (state) => {
            state.pageLogin = false;
            state.pageRegister = false;
        },
    },
});

export const { onLoginSlice, onRegisterSlice, onAuthSession, loginView, registerView, onError, onLoading, closeView, onLogOutSlice } =
    userSlice.actions;
