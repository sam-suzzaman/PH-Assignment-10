import React from "react";
import "./BlogPage.css";
import blogsFakeData from "../../utilities/blogsFakeData";
import Blog from "../../Components/Blog/Blog";

const BlogPage = () => {
    return (
        <section className="blog-wrapper">
            <h2 className="blog-title">Blogs</h2>
            <div className="blog-row">
                {blogsFakeData.map((blog) => (
                    <Blog key={blog.id} blog={blog} />
                ))}
            </div>
        </section>
    );
};

export default BlogPage;
