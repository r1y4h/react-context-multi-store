import React from "react";

import { useStores } from "stores";

export default () => {
  const { userStore } = useStores()
  const { user, updateUser } = userStore;

  const handleUpdateUser = (event) => {
    updateUser({
      ...user,
      name: event.target.value,
    });
  };

  return (
    <div>
      <h2>{user.name}</h2>
      <input className="form-control" placeholder="Type to change user name" onChange={handleUpdateUser} />
    </div>
  );
};
