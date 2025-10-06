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


    }),
});
export const { useGetAllschedulesQuery, useCreateScheduleMutation, useGetUpcommingSchedulesQuery , useGetAllProtocalsQuery } = doctor;