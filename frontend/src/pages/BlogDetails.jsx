import { useParams } from "react-router-dom";

function BlogDetails() {
  const { id } = useParams();

  const blogs =
    JSON.parse(localStorage.getItem("blogs")) || [];

  const blog = blogs[id];

  if (!blog) {
    return <h2>Blog Not Found</h2>;
  }

  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "800px",
        margin: "auto",
      }}
    >
      <h1>{blog.title}</h1>

      {blog.image && (
        <img
          src={blog.image}
          alt="Blog"
          style={{
            width: "100%",
            borderRadius: "10px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        />
      )}

      <p>
        <b>Category:</b>{" "}
        {blog.category}
      </p>

      <hr />

      <div
        style={{
          lineHeight: "1.8",
          fontSize: "18px",
        }}
        dangerouslySetInnerHTML={{
          __html:
            blog.description,
        }}
      />
    </div>
  );
}

export default BlogDetails;