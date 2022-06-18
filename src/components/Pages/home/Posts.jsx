import React from "react";
import { Link } from "react-router-dom";
import Card from "../../Ui/Card";

function Posts({ data }) {
  return (
    <div className="grid gap-2 py-4">
      {data.map((post) => (
        <Link to={`posts/${post.id}`} key={post.id}>
          <Card key={post.id}>
            <h1 className="text-sm">{post.title}</h1>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default Posts;
