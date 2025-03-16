"use client";

import BlogTableItem from "@/Components/AdminComponents/BlogTableItem";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");

    if (response.status === 200) {
      setBlogs(response.data.blogs);
    } else {
      toast.error("Error al obtener los blogs");
    }
  };

  const deleteBlog = async (mongoId) => {
    const response = await axios.delete(`/api/blog`, {
      params: {
        id: mongoId
      }
    });
    if (response.status === 200) {
      toast.success(response.data.msg);
      fetchBlogs();
    } else {
      toast.error("Error al eliminar el blog");
    }
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1>All blogs</h1>
      <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-sm text-gray-700 text-left uppercase bg-gray-50">
            <tr>
              <th scope="col" className="hidden sm:block px-6 py-3">
                Author name
              </th>
              <th scope="col" className="px-6 py-3">
                Blog title
              </th>
              <th scope="col" className="px-6 py-3">
                Blog date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => {
              return (
                <BlogTableItem
                  key={index}
                  mongoId={blog._id}
                  authorImg={blog.authorImg}
                  title={blog.title}
                  author={blog.author}
                  date={blog.date}
                  deleteBlog={deleteBlog}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogList;
