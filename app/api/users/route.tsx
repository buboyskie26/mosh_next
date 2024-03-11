import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const users = await prisma?.user.findMany();

  return NextResponse.json(users);
}
export async function POST(request: NextRequest) {
  const body = await request.json();

  try {
    // Parse the request body to extract user data
    const { email, name, followers = 0, isActive = true } = body;

    // Create a new user using Prisma client
    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        followers,
        isActive,
      },
    });
    // Return success response with the newly created user
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    // Handle any errors that occur during user creation
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    );
  }
}
