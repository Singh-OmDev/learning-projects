import React, { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/Singh-OmDev")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []); // ✅ important

  if (!data) return <div>Loading...</div>;

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <p>Github Followers: {data.followers}</p>

      <img
        src={data.avatar_url}
        alt="github profile"
        width={300}
        className="mx-auto mt-4 rounded-full"/>
    </div>
  );
};

export default Github;
