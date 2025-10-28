import { apiSlice } from "../../api/apiSlice";

const protocal = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllProtocal: builder.query({
            query: (type) => ({
                url: `/doctor-patients/paginate/doctor-protocol/forPatient`,
                method: "GET",
            }),
            providesTags: ["Protocal"],
        })
    }),
});


export const { useGetAllProtocalQuery } = protocal;