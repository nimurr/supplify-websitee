import { apiSlice } from "../../api/apiSlice";

const createPlane = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createPlane: builder.mutation({
            query: (data) => ({
                url: "/doctor-plans",
                method: "POST",
                body: data,
            }),
        }),
        updatePlane: builder.mutation({
            query: ({ submissionData, id }) => ({
                url: `/doctor-plans/update/${id}`,
                method: "PUT",
                body: submissionData,
            }),
        }),
        getAllPlanes: builder.query({
            query: (planType) => ({
                url: `/doctor-plans/paginate?planType=${planType || "mealPlan"}`,
                method: "GET",
            }),
        }),
        getSinglePlane: builder.query({
            query: (id) => ({
                url: `/doctor-plans/paginate?_id=${id}`,
                method: "GET",
            }),
        }),
    }),
});

export const { useCreatePlaneMutation, useUpdatePlaneMutation, useGetAllPlanesQuery, useGetSinglePlaneQuery } = createPlane;