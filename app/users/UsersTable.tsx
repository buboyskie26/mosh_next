'use client';
import React from 'react';
import { sort, createNewSortInstance } from 'fast-sort';
import Link from 'next/link';

interface UsersPageProps {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UsersTable = async ({ sortOrder }: Props) => {
  //
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    // cache: 'no-store',
    // Everytime 10 secons, It will get fresh data from the server
    next: { revalidate: 10 },
  });

  const users: UsersPageProps[] = await res.json();

  const sortedUsers = sort(users).asc(
    sortOrder === 'email' ? (user) => user.email : (user) => user.name
  );
  //
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr className="text-center">
            <th>
              <Link href={'/users?sortOrder=name'}>Name</Link>
            </th>
            <th>
              <Link href={'/users?sortOrder=email'}>Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr className="text-center" key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersTable;
