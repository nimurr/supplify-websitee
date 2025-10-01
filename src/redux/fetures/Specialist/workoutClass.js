import { apiSlice } from "../../api/apiSlice";

const workoutClass = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllWorkoutClass: builder.query({
            query: () => "/workout-schedules/paginate",
        }),
    }),
});

export const { useGetAllWorkoutClassQuery } = workoutClass;