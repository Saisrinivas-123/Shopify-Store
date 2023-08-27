import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const placeholderApi = createApi({
    reducerPath: "placeholderApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com',
        prepareHeaders: (headers) => {
            headers.set(
                "Authorization",
                "Bearer Auth Test API"
            );
            return headers;
        },
    }),
    tagTypes: ["Products"],
    endpoints: (builder) => ({
        getData: builder.query<any, any>({
            query: () => '/products',
            providesTags: ["Products"]
        })
    })
});

export const { useGetDataQuery } = placeholderApi;
export default placeholderApi;
