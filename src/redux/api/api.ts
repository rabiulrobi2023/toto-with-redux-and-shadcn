import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (priority) => {
        const params = new URLSearchParams();

        if (priority) {
          params.append("priority", priority);
        }
        console.log(params);

        return {
          url: `/todos`,
          method: "GET",
          params: params,
        };
      },
      providesTags: ["todo"],
    }),

    addTodo: builder.mutation({
      query: (data) => ({
        url: "/add-todo",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
    updateTodo: builder.mutation({
      query: (payload) => {
        console.log(payload);
        return {
          url: `update-todo/${payload.id}`,
          method: "PATCH",
          body: payload.data,
        };
      },
      invalidatesTags: ["todo"],
    }),

    deleteTodo: builder.mutation({
      query: (id) => {
        return {
          url: `delete-todo/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags:['todo']
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = baseApi;
