import { apiSlice } from "../../api/apiSlice";

const traningProgram = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createTrainingProgram: builder.mutation({
            query: (data) => ({
                url: `/training-programs`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["TrainingProgram"],
        }),
        getAllTrainingProgram: builder.query({
            query: (page) => ({
                url: `/training-programs/specialist/paginate?page=${page}`,
                method: "GET",
            }),
            providesTags: ["TrainingProgram"],
        }),
        updateTrainingProgram: builder.mutation({
            query: ({ id, data }) => ({
                url: `/training-programs/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ["TrainingProgram"],
        }),
        deleteTrainingProgram: builder.mutation({
            query: (id) => ({
                url: `/training-programs/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["TrainingProgram"],
        }),
    }),
})
export const { 
    useCreateTrainingProgramMutation, 
    useGetAllTrainingProgramQuery, 
    useUpdateTrainingProgramMutation, 
    useDeleteTrainingProgramMutation } = traningProgram;
