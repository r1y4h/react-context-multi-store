import React from "react";

import { useUserStore } from "stores";

export default () => {
  const { user, updateUser } = useUserStore();

  const handleUpdateUser = (event) => {
    updateUser({
      ...user,
      name: event.target.value,
    });
  };

  return (
    <div>
      <h2>{user.name}</h2>
      <input className="form-control" onChange={handleUpdateUser} />
    </div>
  );
};
