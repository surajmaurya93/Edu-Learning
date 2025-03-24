import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { userLoggedIn } from "../authSlice";

const USER_API = "http://localhost:8080/api/v1/user/"

export const authApi = createApi({
    reducerPath:"authApi",
    baseQuery:fetchBaseQuery({
        baseUrl:USER_API,
        credentials:"include"           //help removing errors
    }), 
    endpoints:(builder) => ({               //builder se data fatch and post karte hai
        //register user mutation                 
        registerUser: builder.mutation({       //jab data api se fetch karna hota hai to hum query use karte hai and jab hume us api me data post karna hota hai to mutation use karte hai.
            query:(inputData) => ({
                url:"register",
                method:"POST",
                body:inputData
            })
        }),
        //login user mutation
        loginUser: builder.mutation({       
            query:(inputData) => ({
                url:"login",
                method:"POST",
                body:inputData
            }),
            async onQueryStarted(_, {queryFulfilled, dispatch}) {
                try {
                    const result = await queryFulfilled;
                    dispatch(userLoggedIn({user:result.data.user}));
                } catch (error) {
                    console.log(error)
                }
            }
        }),     
    })
});

export const {
    useRegisterUserMutation,
    useLoginUserMutation
} = authApi;
