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
        spacialistPotentialPatient: builder.query({
            query: ({ patientId, doctorId }) => ({
                url: `/doctor-patients/protocols-for-patient?patientId=${patientId}&doctorId=${doctorId}`,
                method: "GET",
            }),
        }),
        getMealPlanByProtocolIdAndPatientId: builder.query({
            query: ({ protocolId, patientId }) => ({
                url: `/plan-by-doc/paginate/for-specialist?protocolId=${protocolId}&patientId=${patientId}`,
                method: "GET",
            }),
        }),
        getAllMealSuggestion: builder.query({
            query: ({ protocolId }) => ({
                url: `/plan-by-doc/with-suggestions?planByDoctorId=${protocolId}`,
                method: "GET",
            }),
        }),
    })
})

export const {
    useSpacialistAllPatentsQuery,
    useSpacialistPatientByIdQuery,
    useSpacialistPotentialPatientQuery,
    useGetMealPlanByProtocolIdAndPatientIdQuery,
    useGetAllMealSuggestionQuery
} = specialist;