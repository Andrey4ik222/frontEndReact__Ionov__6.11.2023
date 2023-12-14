import UseFetch from "../../hooks/useFetch/useFetch";
import "./DisplayPosts.css";

const DisplayPosts = () => {
  const postsUrl = "https://jsonplaceholder.typicode.com/posts";
  const [data, error, isloading, refetch] = UseFetch(postsUrl);

  return (
    <div className="posts">
      <h1 className="main-title">Posts:</h1>
      <button className="button-refetch btn" onClick={refetch}>
        Refetch
      </button>
      {(isloading || error) && (
        <h3 className="loading-message">
          {isloading ? "Loading..." : error || ""}
        </h3>
      )}
      <ul className="posts-list">
        {data &&
          data.map((post) => (
            <li className="posts-item" key={post.id}>
              {post.title}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DisplayPosts;
