import React from 'react';
import UserData from '@/components/dataOfUser';
// import { useAppSelector } from '@/lib/store/hooks';

function Page() {
  // const users = useAppSelector((state) => state.product.items);

  return (
    <>
      <div>User List</div>
      <UserData/>
      {/* {users.map((user) => (
        <div key={user.id}>
          <li>{user.username}</li>
        </div>
      ))} */}
    </>
  );
}

export default Page;
