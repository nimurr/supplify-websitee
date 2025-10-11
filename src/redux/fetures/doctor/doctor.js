import { apiSlice } from "../../api/apiSlice";

const doctor = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllschedules: builder.query({
            query: () => ({
                url: `/doctor-appointments/paginate?scheduleStatus=available`,
                method: "GET"
            }),
        }),
        createSchedule: builder.mutation({
            query: (data) => ({
                url: `/doctor-appointments`,
                method: "POST",
                body: data
            }),
        }),
        getUpcommingSchedules: builder.query({
            query: () => ({
                url: `/doctor-appointments/bookings/upcoming`,
                method: "GET"
            }),
        }),

        getAllProtocals: builder.query({
            query: () => ({
                url: `/doctor-patients/paginate/protocol`,
                method: "GET"
            }),
        }),

        getAllProtocalsByPatientId: builder.query({
            query: (id) => ({
                url: `/protocols/paginate?patientId=${id}`,
                method: "GET"
            }),
        }),
        // comment : assign protocol to patient
        assignProtocolToPatient: builder.mutation({
            query: (data) => ({
                url: `/protocols`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ["DoctorProtocol"]
        }),
        getSingleProtocol: builder.query({
            query: (id) => ({
                url: `/protocols/paginate?_id=${id}`,
                method: "GET"
            }),
            providesTags: ["DoctorProtocol"]
        }),
        updateProtocol: builder.mutation({
            query: ({ protocolId, data }) => ({
                url: `/protocols/update/${protocolId}`,
                method: "PUT",
                body: data
            }),
            providesTags: ["DoctorProtocol"]
        }),
        searchPlane: builder.query({
            query: ({ type, title }) => ({
                url: `/doctor-plans/paginate?planType=${type}&title=${title}`,
                method: "GET"
            }),
        }),
        createPlane: builder.mutation({
            query: (data) => ({
                url: `/plan-by-doc`,
                method: "POST",
                body: data
            }),
        }),

        // comment : assign specialist to patient
        assignSpecialistPatient: builder.mutation({
            query: (data) => ({
                url: `/specialist-patients`,
                method: "POST",
                body: data
            }),
        }),
        getAllSpacialist: builder.query({
            query: (id) => ({
                url: `/specialist-patients/specialist/${id}`,
                method: "GET"
            }),
        }),
        // Earning and withdrawal all info 
        getAllOrderHistory: builder.query({
            query: () => ({
                url: `/doctor-appointments/bookings/paginate`,
                method: "GET"
            }),
        }),
        getBankInfo: builder.query({
            query: () => ({
                url: `/bank-info/paginate`,
                method: "GET"
            }),
        }),


    }),
});
export const {
    useGetAllschedulesQuery,
    useCreateScheduleMutation,
    useGetUpcommingSchedulesQuery,
    useGetAllProtocalsQuery,
    useGetAllProtocalsByPatientIdQuery,
    useAssignProtocolToPatientMutation,
    useGetSingleProtocolQuery,
    useUpdateProtocolMutation,
    useSearchPlaneQuery,
    useCreatePlaneMutation,
    useAssignSpecialistPatientMutation,
    useGetAllSpacialistQuery,

    useGetAllOrderHistoryQuery,
    useGetBankInfoQuery
} = doctor;