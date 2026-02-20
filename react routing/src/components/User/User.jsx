import React from 'react'
import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams(); // ✅ get route param

  return (
    <div>
      User: {userid}
    </div>
  );
};

export default User;
