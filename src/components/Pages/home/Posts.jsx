import React from "react";
import { useNavigate } from "react-router-dom";

function Posts({ data }) {
  let navigate = useNavigate();
  return (
    <table className="table-auto border w-full border-collapse my-4">
      <thead className="bg-gray-200 ">
        <tr>
          <th className="p-2">id</th>
          <th className="p-2">user id</th>
          <th className="p-2">title</th>
        </tr>
      </thead>
      <tbody>
        {data.map((post) => (
          <tr
            key={post.id}
            className=" even:bg-gray-100 cursor-pointer "
            onClick={function () {
              navigate(`posts/${post.id}`);
            }}
          >
            <td className="p-2">{post.id}</td>
            <td className="p-2">{post.userId}</td>
            <td className="p-2 text-sm">{post.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Posts;
