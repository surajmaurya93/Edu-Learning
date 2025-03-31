import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const COURSE_API = "http://localhost:8080/api/v1/course";

export const courseApi = createApi({
    reducerPath: "courseApi",
    tagTypes: ["Refetch_Creator_Course", "Refetch_Lecture"],
    baseQuery: fetchBaseQuery({
        baseUrl: COURSE_API,
        credentials: "include",
    }),
    endpoints: (builder) => ({
        createCourse: builder.mutation({
            query: ({ courseTitle, category }) => ({
                url: "",
                method: "POST",
                body: { courseTitle, category },
            })
        })
    })
});
export const {
  useCreateCourseMutation,
} = courseApi;