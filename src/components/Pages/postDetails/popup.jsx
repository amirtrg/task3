import React, { useEffect, useRef } from "react";
import Card from "../../Ui/Card";
import { useSelector, useDispatch } from "react-redux";
import { productsList, editOne } from "./../../../store/reducers/getProduct";

function PopUp({ data, setIsEditPopupOpen }) {
  const TitleRef = useRef();
  const descriptionRef = useRef();
  const postsState = useSelector(productsList);

  console.log(postsState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      TitleRef.current.value = data?.title;
      descriptionRef.current.value = data?.body;
    }
  }, [data]);

  function submitFormHandler(event) {
    event.preventDefault();
    dispatch(
      editOne({
        id:data.id,
        title: TitleRef.current.value,
        description: descriptionRef.current.value,
      })
    );
    setIsEditPopupOpen(false);
  }

  return (
    <div className="absolute flex items-center bg-black/50 z-20 justify-center inset-0 ">
      <Card>
        <form className=" grid gap-2 z-20" onSubmit={submitFormHandler}>
          <input
            type="text"
            name="title"
            placeholder="title"
            className=" p-1 border rounded"
            ref={TitleRef}
          />

          <input
            type="text"
            name="description"
            placeholder="description"
            ref={descriptionRef}
            className=" p-1 border rounded"
          />
          <button>submit</button>
          <button
            onClick={function (event) {
              event.preventDefault();
              setIsEditPopupOpen(false);
            }}
          >
            cancel
          </button>
        </form>
      </Card>
    </div>
  );
}

export default PopUp;
