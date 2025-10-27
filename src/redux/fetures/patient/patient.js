import { apiSlice } from "../../api/apiSlice";

const patient = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllYourDoctors: builder.query({
            query: (id) => ({
                url: `/doctor-patients/paginate`,
                method: "GET"
            }),
            providesTags: ["YourDoctors"]
        }),
        getAllOthers: builder.query({
            query: () => ({
                url: `/doctor-patients/paginate/others`,
                method: "GET"
            }),
            providesTags: ["YourDoctors"]
        }),
    }),
});


export const { useGetAllYourDoctorsQuery , useGetAllOthersQuery} = patient;