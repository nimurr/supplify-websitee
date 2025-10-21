import { apiSlice } from "@/redux/api/apiSlice";

const landing = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllCategories: builder.query({
            query: () => `/products/by/category`,
            providesTags: [{ type: "Landing" }]
        })
    })
})


export const { 
    useGetAllCategoriesQuery 
} = landing