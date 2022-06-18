import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import Pagination from "../components/Ui/pagination";
import Posts from "../components/Pages/home/Posts";
import Loading from "../components/Ui/Loading";
import { useSelector, useDispatch } from "react-redux";
import { getAll, addOne } from "./../store/reducers/getProduct";
import { productsList } from "../store/reducers/getProduct";

const HomeDetailsPage = function () {
  const postsState = useSelector(productsList);

  console.log(postsState);
  const dispatch = useDispatch();
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
        // setPosts(response.data || null);
        dispatch(getAll(response.data || null));
        setRequestStatus({ loading: false, error: null });
      })
      .catch((error) => {
        setRequestStatus({ loading: false, error: error.message });
        // setPosts(null);
      });
  }, [pageNumber,]);

  return (
    <Layout>
      <div>Home Detail page</div>
      {postsState  && (
        <>
          <Posts data={postsState} />
          <Pagination
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            totalAmount={100 / 20}
          />
        </>
      )}
      {requestStatus.loading && <Loading />}
      {requestStatus.error && (
        <p className="text-red-500 text-center">{requestStatus.error}</p>
      )}
    </Layout>
  );
};

export default HomeDetailsPage;
