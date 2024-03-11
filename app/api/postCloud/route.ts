import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const body = await request.json();

  const newPost = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      image_public_id: body.image_public_id,
    },
  });

  return NextResponse.json(newPost, { status: 201 });
}
