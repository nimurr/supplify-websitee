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
        assignProtocolToPatient: builder.mutation({
            query: (data) => ({
                url: `/protocols`,
                method: "POST",
                body: data
            }),
        }),
        getSingleProtocol: builder.query({
            query: (id) => ({
                url: `/protocols/paginate?_id=${id}`,
                method: "GET"
            }),
        }),
        updateProtocol: builder.mutation({
            query: ({ id, data }) => ({
                url: `/protocols/update/${id}`,
                method: "PATCH",
                body: data
            }),
        }),


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
    useAssignSpecialistPatientMutation,
    useGetAllSpacialistQuery
} = doctor;