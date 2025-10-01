import { apiSlice } from "../../api/apiSlice";

const workoutClass = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllWorkoutClass: builder.query({
            query: () => "/workout-schedules/paginate",
        }),
        createWorkoutClass: builder.mutation({
            query: (data) => ({
                url: "/workout-schedules",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const { useGetAllWorkoutClassQuery, useCreateWorkoutClassMutation } = workoutClass;