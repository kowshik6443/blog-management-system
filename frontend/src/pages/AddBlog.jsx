import { useState, useEffect } from "react";
import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import ReactQuill from "react-quill-new";
import "react-quill/dist/quill.snow.css";

function AddBlog() {
  const navigate = useNavigate();

  const [searchParams] =
    useSearchParams();

  const editIndex =
    searchParams.get("edit");

  const [title, setTitle] =
    useState("");

  const [category, setCategory] =
    useState("Admit Card");

  const [
    description,
    setDescription,
  ] = useState("");

  const [image, setImage] =
    useState("");

  useEffect(() => {
    if (editIndex !== null) {
      const blogs =
        JSON.parse(
          localStorage.getItem(
            "blogs"
          )
        ) || [];

      const selectedBlog =
        blogs[editIndex];

      if (selectedBlog) {
        setTitle(
          selectedBlog.title
        );

        setCategory(
          selectedBlog.category
        );

        setDescription(
          selectedBlog.description
        );

        setImage(
          selectedBlog.image || ""
        );
      }
    }
  }, [editIndex]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      title,
      category,
      description,
      image,
    };

    const existingBlogs =
      JSON.parse(
        localStorage.getItem(
          "blogs"
        )
      ) || [];

    if (editIndex !== null) {
      existingBlogs[
        editIndex
      ] = newBlog;
    } else {
      existingBlogs.push(
        newBlog
      );
    }

    localStorage.setItem(
      "blogs",
      JSON.stringify(
        existingBlogs
      )
    );

    alert(
      editIndex !== null
        ? "Blog Updated"
        : "Blog Published"
    );

    navigate("/");
  };

  return (
    <div
      style={{
        padding: "30px",
      }}
    >
      <h1>
        {editIndex !== null
          ? "Edit Blog"
          : "Add New Blog"}
      </h1>

      <form
        onSubmit={
          handleSubmit
        }
        style={{
          display:
            "flex",
          flexDirection:
            "column",
          gap: "15px",
          maxWidth:
            "700px",
        }}
      >
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) =>
            setTitle(
              e.target.value
            )
          }
          required
          style={{
            padding:
              "10px",
          }}
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(
              e.target.value
            )
          }
          style={{
            padding:
              "10px",
          }}
        >
          <option>
            Admit Card
          </option>
          <option>
            Latest Jobs
          </option>
          <option>
            Results
          </option>
          <option>
            Answer Key
          </option>
        </select>

        <ReactQuill
          theme="snow"
          value={
            description
          }
          onChange={
            setDescription
          }
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file =
              e.target
                .files[0];

            if (file) {
              const reader =
                new FileReader();

              reader.onloadend =
                () => {
                  setImage(
                    reader.result
                  );
                };

              reader.readAsDataURL(
                file
              );
            }
          }}
        />

        {image && (
          <img
            src={image}
            alt="Preview"
            style={{
              width:
                "200px",
              borderRadius:
                "10px",
            }}
          />
        )}

        <button
          type="submit"
          style={{
            background:
              "blue",
            color:
              "white",
            border:
              "none",
            padding:
              "12px",
            borderRadius:
              "5px",
            cursor:
              "pointer",
          }}
        >
          {editIndex !== null
            ? "Update Blog"
            : "Publish Blog"}
        </button>
      </form>
    </div>
  );
}

export default AddBlog;