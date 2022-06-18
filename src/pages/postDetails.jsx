import Layout from "../components/Layout/Layout";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Ui/Card";
import Loading from "../components/Ui/Loading";

import PopUp from "../components/Pages/postDetails/popup";

const PostDetailsPage = function () {
  const params = useParams();
  const [post, setPost] = useState(null);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [requestStatus, setRequestStatus] = useState({
    loading: false,
    error: null,
  });

  useEffect(() => {
    setRequestStatus({ loading: true, error: null });
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${params.id}
            `
      )
      .then((response) => {
        setPost(response.data || null);
        setRequestStatus({ loading: false, error: null });
      })
      .catch((error) => {
        setRequestStatus({ loading: false, error: error.message });
        setPost(null);
      });
  }, []);

  function editHandler() {
    setIsEditPopupOpen(true);
  }

  return (
    <Layout mode="postDetail">
      {requestStatus.loading && <Loading />}
      {requestStatus.error && <p>{requestStatus.error}</p>}
      {post && !requestStatus.loading && (
        <Card>
          <div className="flex flex-col space-y-2">
            <h1 className="font-medium">{post.title}</h1>
            <p className="text-sm">{post.body}</p>
            <button onClick={editHandler}>edit</button>
          </div>
        </Card>
      )}

      {isEditPopupOpen && (
        <PopUp data={post} setIsEditPopupOpen={setIsEditPopupOpen} />
      )}
    </Layout>
  );
};

export default PostDetailsPage;
