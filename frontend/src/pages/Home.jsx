import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [blogs, setBlogs] =
    useState([]);

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("All");

  const navigate =
    useNavigate();

  useEffect(() => {
    const savedBlogs =
      JSON.parse(
        localStorage.getItem(
          "blogs"
        )
      ) || [];

    setBlogs(savedBlogs);
  }, []);

  const filteredBlogs =
    selectedCategory ===
    "All"
      ? blogs
      : blogs.filter(
          (blog) =>
            blog.category ===
            selectedCategory
        );

  return (
    <div
      style={{
        padding: "30px",
        maxWidth:
          "1200px",
        margin: "auto",
      }}
    >
      <div
        style={{
          display:
            "flex",
          justifyContent:
            "space-between",
          alignItems:
            "center",
          marginBottom:
            "30px",
          flexWrap:
            "wrap",
          gap: "10px",
        }}
      >
        <h1>
          Latest Blogs
        </h1>

        <button
          onClick={() =>
            navigate(
              "/login"
            )
          }
          style={{
            background:
              "blue",
            color:
              "white",
            border:
              "none",
            padding:
              "10px 20px",
            borderRadius:
              "5px",
            cursor:
              "pointer",
          }}
        >
          Login
        </button>
      </div>

      <div
        style={{
          display:
            "flex",
          justifyContent:
            "center",
          flexWrap:
            "wrap",
          gap: "10px",
          marginBottom:
            "30px",
        }}
      >
        {[
          "All",
          "Admit Card",
          "Latest Jobs",
          "Results",
          "Answer Key",
        ].map((cat) => (
          <button
            key={cat}
            onClick={() =>
              setSelectedCategory(
                cat
              )
            }
            style={{
              padding:
                "10px 20px",
              borderRadius:
                "8px",
              border:
                "none",
              background:
                selectedCategory ===
                cat
                  ? "#007bff"
                  : "#ddd",
              color:
                selectedCategory ===
                cat
                  ? "white"
                  : "black",
              cursor:
                "pointer",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div
        style={{
          display:
            "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredBlogs.map(
          (
            blog,
            index
          ) => (
            <div
              key={index}
              style={{
                background:
                  "#fff",
                borderRadius:
                  "12px",
                padding:
                  "20px",
                boxShadow:
                  "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              {blog.image && (
                <img
                  src={
                    blog.image
                  }
                  alt="Blog"
                  style={{
                    width:
                      "100%",
                    height:
                      "200px",
                    objectFit:
                      "cover",
                    borderRadius:
                      "10px",
                    marginBottom:
                      "10px",
                  }}
                />
              )}

              <h2>
                {
                  blog.title
                }
              </h2>

              <p>
                <b>
                  Category:
                </b>{" "}
                {
                  blog.category
                }
              </p>

              <p>
                {blog.description
                  ?.replace(
                    /<[^>]+>/g,
                    ""
                  )
                  .slice(
                    0,
                    100
                  )}
                ...
              </p>

              <button
                onClick={() =>
                  navigate(
                    `/blog/${index}`
                  )
                }
                style={{
                  background:
                    "#007bff",
                  color:
                    "white",
                  border:
                    "none",
                  padding:
                    "10px 15px",
                  borderRadius:
                    "6px",
                  cursor:
                    "pointer",
                }}
              >
                Read More
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Home;