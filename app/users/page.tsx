import React, { Suspense } from 'react';
import UsersTable from './UsersTable';
import { sort, createNewSortInstance } from 'fast-sort';
interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  //   console.log(users);

  return (
    <>
      <h1>Users: {sortOrder}</h1>
      <UsersTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
