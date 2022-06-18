import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import Pagination from "../components/Ui/pagination";
import Posts from "../components/Pages/home/Posts";
import Loading from "../components/Ui/Loading";
const HomeDetailsPage = function () {
  const [posts, setPosts] = useState(null);
  const [requestStatus, setRequestStatus] = useState({
    loading: false,
    error: null,
  });
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setRequestStatus({ loading: true, error: null });
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=20
        `
      )
      .then((response) => {
        setPosts(response.data || null);
        setRequestStatus({ loading: false, error: null });
      })
      .catch((error) => {
        setRequestStatus({ loading: false, error: error.message });
        setPosts(null);
      });
  }, [pageNumber]);

  return (
    <Layout>
      <div>Home Detail page</div>
      {posts && !requestStatus.loading && (
        <>
          <Posts data={posts} />
          <Pagination
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            totalAmount={100 / 20}
          />
        </>
      )}
       {requestStatus.loading && <Loading/>}
      {requestStatus.error && (
        <p className="text-red-500 text-center">{requestStatus.error}</p>
      )}
    </Layout>
  );
};

export default HomeDetailsPage;
