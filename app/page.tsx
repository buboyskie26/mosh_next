import Image from 'next/image';
import Link from 'next/link';
import ProductCard from './components/ProductCard';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';

export default async function Home() {
  // Coming from the Server
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h2>Hello {session && session.user?.name}</h2>
      <Link href={'/users'}>Users</Link>
      <ProductCard />
    </div>
  );
}
