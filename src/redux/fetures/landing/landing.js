import { apiSlice } from "@/redux/api/apiSlice";

const landing = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllCategories: builder.query({
            query: () => `/landing/getAllCategories`,
            providesTags: [{ type: "Landing" }]
        })
    })
})


export const { 
    useGetAllCategoriesQuery 
} = landing