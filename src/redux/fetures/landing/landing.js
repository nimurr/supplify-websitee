import { apiSlice } from "@/redux/api/apiSlice";

const landing = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllCategories: builder.query({
            query: () => `/products/by/category`,
            providesTags: ["Landing"]
        }),
        getAddToCartLangth: builder.query({
            query: () => ({
                url: `/carts/paginate`,
                method: 'GET',
            }),
            providesTags: ["Landing"]
        }),
        addTocartProduct: builder.mutation({
            query: (data) => ({
                url: `/cart-items/create`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ["Landing"]
        })
    })
})


export const {
    useGetAllCategoriesQuery,
    useGetAddToCartLangthQuery,
    useAddTocartProductMutation
} = landing