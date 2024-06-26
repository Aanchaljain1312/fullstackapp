import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//make http post req login user
export const userLogin = createAsyncThunk('loginuser', async (userCredentialObj, thunkApi) => {

    let response = await axios.post('/user-api/login', userCredentialObj)
    let data = response.data;
    if (data.message === 'success') {
        localStorage.setItem("token", data.payload);
        return data.userObj;
    }
    if (data.message === "Invalid user" || data.message === "Invalid password") {
        return thunkApi.rejectWithValue(data);
    }

})

let userSlice = createSlice({
    name: 'user',
    initialState: {
        userObj: {},
        isError: false,
        isSuccess: false,
        isLoading:false,
        errMsg: ''
    },
    reducers: {
        clearLoginStatus:(state)=>{
            state.isSuccess=false;
            state.userObj=null;
            state.isError=false;
            state.errMsg='';
            return state;
        }
    },
//     extraReducers: {
//         //track life cycle of promise returned by create async thunk function
//         [userLogin.pending]: (state, action) => {
//             state.isLoading=true;
//         },
//         [userLogin.fulfilled]: (state,action) => {
//             state.userObj=action.payload;
//             state.isLoading=false;
//             state.isError=false;
//             state.isSuccess=true;
//             state.errMsg='';
//         },
//         [userLogin.rejected]:(state,action)=>{
//             state.isError=true;
//             state.isLoading=false;
//             state.isSuccess=false;
//             state.errMsg=action.payload.message;
//         }
//     }
// })
extraReducers: (builder) => {
    // track life cycle of promise returned by create async thunk function
    builder
        .addCase(userLogin.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(userLogin.fulfilled, (state, action) => {
            state.userObj = action.payload;
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.errMsg = '';
        })
        .addCase(userLogin.rejected, (state, action) => {
            state.isError = true;
            state.isLoading = false;
            state.isSuccess = false;
            state.errMsg = action.payload.message;
        });
}
});

//export action creators
export const {clearLoginStatus} = userSlice.actions;
//export reducer
export default userSlice.reducer;