import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const getPostData = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response;
};

const addPostData = async (payload: IPost) => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    JSON.stringify(payload)
  );
  return response;
};

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: getPostData,
  tagTypes: ["Post", "Users"],
  endpoints: (builder) => ({
    getPost: builder.query<IPost[], void>({
      query: () => "/",
      transformResponse: (response: IPost[]) => response.slice(0, 5),
      providesTags: ["Post"],
    }),
    addPost: builder.mutation({
      query: addPostData,
      invalidatesTags: ["Post"],
    }),
  }),
});

export const { useGetPostQuery, useAddPostMutation } = postApi;
