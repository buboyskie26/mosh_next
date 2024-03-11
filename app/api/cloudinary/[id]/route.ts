import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface IdProps {
  params: { id: string };
}
export async function DELETE(request: NextRequest, { params }: IdProps) {
  //
  // Checking users session
  // const session = await getServerSession(authOptions);
  // if (!session) return NextResponse.json({}, { status: 401 });

  console.log(params.id);
  if (params.id) {
    const post = await prisma.post.findUnique({
      where: { id: parseInt(params.id) },
    });
    if (!post)
      return NextResponse.json({ error: 'Invalid Post' }, { status: 400 });
  }

  //

  //
  return NextResponse.json(params.id);
}
