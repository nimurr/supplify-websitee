import { apiSlice } from "../../api/apiSlice";

const specialist = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        spacialistAllPatents: builder.query({
            query: () => ({
                url: `/specialist-patients/all-patients`,
                method: "GET",
            }),
        }),
        spacialistPatientById: builder.query({
            query: (id) => ({
                url: `/doctor-patients/paginate/doctor-protocol?patientId=${id}`,
                method: "GET",
            }),
        }),
    })
})

export const { useSpacialistAllPatentsQuery, useSpacialistPatientByIdQuery } = specialist;