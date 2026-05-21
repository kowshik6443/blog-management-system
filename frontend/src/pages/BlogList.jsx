import { useState } from "react";
import { Link } from "react-router-dom";

function BlogList() {
  const blogs =
    JSON.parse(localStorage.getItem("blogs")) || [];

  const [filter, setFilter] =
    useState("All");

  const filteredBlogs =
    filter === "All"
      ? blogs
      : blogs.filter(
          (blog) =>
            blog.category === filter
        );

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Latest Blogs
      </h1>

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        {[
          "All",
          "Admit Card",
          "Latest Jobs",
          "Results",
        ].map((item) => (
          <button
            key={item}
            onClick={() =>
              setFilter(item)
            }
            style={{
              background:
                filter === item
                  ? "blue"
                  : "#ddd",
              color:
                filter === item
                  ? "white"
                  : "black",
              border: "none",
              padding:
                "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            {item}
          </button>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredBlogs.map(
          (blog, index) => (
            <div
              key={index}
              style={{
                border:
                  "1px solid #ddd",
                borderRadius:
                  "12px",
                padding: "20px",
                boxShadow:
                  "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h2>
                {blog.title}
              </h2>

              <p>
                <strong>
                  Category:
                </strong>{" "}
                {blog.category}
              </p>

              <p>
                {blog.description.slice(
                  0,
                  100
                )}
                ...
              </p>

              <Link
                to={`/blog/${index}`}
                style={{
                  color:
                    "white",
                  background:
                    "blue",
                  padding:
                    "10px 15px",
                  borderRadius:
                    "5px",
                  textDecoration:
                    "none",
                  display:
                    "inline-block",
                  marginTop:
                    "10px",
                }}
              >
                Read More
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default BlogList;