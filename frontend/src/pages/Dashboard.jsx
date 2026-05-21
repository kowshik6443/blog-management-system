import {
  useEffect,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [blogs, setBlogs] =
    useState([]);

  const navigate =
    useNavigate();

  useEffect(() => {
    const isLoggedIn =
      localStorage.getItem(
        "isLoggedIn"
      );

    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    const savedBlogs =
      JSON.parse(
        localStorage.getItem(
          "blogs"
        )
      ) || [];

    setBlogs(savedBlogs);
  }, []);

  const handleEdit = (
    index
  ) => {
    navigate(
      `/add-blog?edit=${index}`
    );
  };

  const handleDelete = (
    index
  ) => {
    const updatedBlogs =
      blogs.filter(
        (_, i) =>
          i !== index
      );

    localStorage.setItem(
      "blogs",
      JSON.stringify(
        updatedBlogs
      )
    );

    setBlogs(
      updatedBlogs
    );
  };

  const handleLogout =
    () => {
      localStorage.removeItem(
        "isLoggedIn"
      );

      navigate(
        "/login"
      );
    };

  return (
    <div
      style={{
        padding: "30px",
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
          flexWrap:
            "wrap",
          gap: "10px",
        }}
      >
        <h1>
          Admin Dashboard
        </h1>

        <div
          style={{
            display:
              "flex",
            gap: "10px",
          }}
        >
          <button
            onClick={() =>
              navigate("/")
            }
            style={{
              background:
                "green",
              color:
                "white",
              border:
                "none",
              padding:
                "10px 15px",
              borderRadius:
                "5px",
              cursor:
                "pointer",
            }}
          >
            Home
          </button>

          <button
            onClick={
              handleLogout
            }
            style={{
              background:
                "red",
              color:
                "white",
              border:
                "none",
              padding:
                "10px 15px",
              borderRadius:
                "5px",
              cursor:
                "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </div>

      <button
        onClick={() =>
          navigate(
            "/add-blog"
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
            "12px 20px",
          borderRadius:
            "5px",
          cursor:
            "pointer",
          marginBottom:
            "30px",
          marginTop:
            "20px",
        }}
      >
        Add New Blog
      </button>

      <h2>
        All Blogs
      </h2>

      {blogs.length ===
      0 ? (
        <p>
          No blogs added
        </p>
      ) : (
        blogs.map(
          (
            blog,
            index
          ) => (
            <div
              key={
                index
              }
              style={{
                border:
                  "1px solid #ddd",
                padding:
                  "20px",
                marginBottom:
                  "20px",
                borderRadius:
                  "10px",
                background:
                  "white",
                boxShadow:
                  "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h3>
                {
                  blog.title
                }
              </h3>

              <p>
                <b>
                  Category:
                </b>{" "}
                {
                  blog.category
                }
              </p>

              <div
                style={{
                  display:
                    "flex",
                  gap:
                    "10px",
                  marginTop:
                    "10px",
                  flexWrap:
                    "wrap",
                }}
              >
                <button
                  onClick={() =>
                    handleEdit(
                      index
                    )
                  }
                  style={{
                    background:
                      "orange",
                    color:
                      "white",
                    border:
                      "none",
                    padding:
                      "10px 15px",
                    borderRadius:
                      "5px",
                    cursor:
                      "pointer",
                  }}
                >
                  Edit Blog
                </button>

                <button
                  onClick={() =>
                    handleDelete(
                      index
                    )
                  }
                  style={{
                    background:
                      "red",
                    color:
                      "white",
                    border:
                      "none",
                    padding:
                      "10px 15px",
                    borderRadius:
                      "5px",
                    cursor:
                      "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          )
        )
      )}
    </div>
  );
}

export default Dashboard;