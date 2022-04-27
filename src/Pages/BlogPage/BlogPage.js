import React from "react";
import "./BlogPage.css";
import blogsFakeData from "../../utilities/blogsFakeData";
import Blog from "../../Components/Blog/Blog";
import FancyTitle from "../../Components/FancyTitle/FancyTitle";

const BlogPage = () => {
    return (
        <section className="blog-wrapper">
            <FancyTitle firstPart={"blo"} secondPart={"gs"} />
            <div className="blog-row">
                {blogsFakeData.map((blog) => (
                    <Blog key={blog.id} blog={blog} />
                ))}
            </div>
        </section>
    );
};

export default BlogPage;
