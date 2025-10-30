import { apiSlice } from "../../api/apiSlice";

const specialist = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getSpecialist: builder.query({
            query: () => "/doctor-specialist-patient-relation/paginate",
        }),
        getAlldoctorPatientsProtacol: builder.query({
            query: ({ patientId, doctorId }) => ({
                url: `/doctor-patients/protocols-for-patient?patientId=${patientId}&doctorId=${doctorId}`,
                method: "GET",
            }),
        }),
    }),
});



export const { useGetSpecialistQuery, useGetAlldoctorPatientsProtacolQuery } = specialist;