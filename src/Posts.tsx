import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { IPost, useAddPostMutation, useGetPostQuery } from "./services/post";

export const Posts = () => {
  const { data = [], error } = useGetPostQuery(undefined, {
    pollingInterval: 10000,
    skip: false,
  });
  const [post, setPost] = useState("");
  const [totalPosts, setTotalPosts] = useState<IPost[]>([]);
  const [addPost] = useAddPostMutation();
  useEffect(() => {
    if (data.length > 0) {
      setTotalPosts(data);
    }
  }, [data]);

  const onAddPost = async () => {
    const p: IPost = {
      title: post,
      body: post,
      userId: Math.random(),
      id: Math.random(),
    };
    await addPost(p);
    setTotalPosts([p, ...totalPosts]);
  };

  return (
    <div>
      Post components
      <div>
        <input
          type="text"
          value={post}
          onChange={(event) => setPost(event.target.value)}
        />
        <button onClick={onAddPost}>Add Post</button>
      </div>
      {/* <div>{isLoading ? "isFetching" : "Fetched"}</div> */}
      {error && <div>{JSON.stringify(error)}</div>}
      {totalPosts &&
        totalPosts.map((d) => (
          <ListGroup>
            <ListGroup.Item>{d.title}</ListGroup.Item>
          </ListGroup>
        ))}
    </div>
  );
};
