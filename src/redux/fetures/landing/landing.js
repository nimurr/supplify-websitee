import { apiSlice } from "@/redux/api/apiSlice";

const landing = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllCategories: builder.query({
            query: () => `/products/by/category`,
            providesTags: [{ type: "Landing" }]
        }),
        getAddToCartLangth: builder.query({
            query: () => ({
                url: `/carts/paginate`,
                method: 'GET',
            })
        })
    })
})


export const {
    useGetAllCategoriesQuery,
    useGetAddToCartLangthQuery
} = landing