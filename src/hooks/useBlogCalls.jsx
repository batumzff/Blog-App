import React from "react";
import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import {
  fetchFail,
  fetchStart,
  getBlogsSuccess,
  getBlogsDetailSucces,
  getBlogsLikesDetail,
  getCategoriesSlice
} from "../features/blogSlice";
import { useNavigate } from "react-router-dom";

const useBlogCalls = () => {
  const dispatch = useDispatch();
  const { axiosWithToken, axiosPublic } = useAxios();
  const navigate = useNavigate();
  const getBlogs = async (page, limit) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.get(
        `/blogs/?page=${page}&limit=${limit}`
      );
      dispatch(getBlogsSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  const getBlogsDetail = async (id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.get(`/blogs/${id}`);
      dispatch(getBlogsDetailSucces(data));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  const postComments = async (info) => {
    console.log(info.blogId);
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.post(`/comments/`, info);
      console.log(data);
      getBlogsDetail(info.blogId);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  const blogLikes = async (blogId) => {
    const { data } = await axiosWithToken.post(`/blogs/${blogId}/postLike`);
    console.log(data);
    dispatch(getBlogsLikesDetail(data));
    getBlogsDetail(blogId)
    getBlogs(1, 10);
  };
  const getCategories = async () => {
    const { data } = await axiosPublic.get(`/categories`);
    dispatch(getCategoriesSlice(data))
  };

  return { getBlogs, getBlogsDetail, postComments, blogLikes, getCategories };
};

export default useBlogCalls;