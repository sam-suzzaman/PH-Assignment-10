import React from "react";
import "./Blog.css";

const Blog = (props) => {
    const { question, answer } = props.blog;
    return (
        <div className="blog">
            <h3 className="blog-question">{question}</h3>
            <p className="blog-answer">{answer}</p>
        </div>
    );
};

export default Blog;
