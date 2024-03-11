import { error } from 'console';
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  // Parameter in the url is 'string'
  { params }: { params: { id: number } }
) {
  const userId = Number(params.id); // Parse id to number

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });

  return NextResponse.json(user);
}
export async function PUT(
  request: NextRequest,
  // Parameter in the url is 'string'
  { params }: { params: { id: number } }
) {
  const body = await request.json();

  try {
    const userId = Number(params.id); // Parse id to number

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user)
      return NextResponse.json({ error: 'User not found' }, { status: 404 });

    // Parse the request body to extract user data
    const { email, name, followers = 0, isActive = true } = body;

    // Create a new user using Prisma client
    const newUser = await prisma.user.update({
      where: { id: userId },
      data: {
        email,
        name,
        followers,
        isActive,
      },
    });
    // Return success response with the newly updated user
    return NextResponse.json(newUser, { status: 200 });
  } catch (error) {
    // Handle any errors that occur during user creation
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    );
  }
}
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const userId = parseInt(params.id); // Parse id to number

    // Check if the user exists
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user)
      return NextResponse.json({ error: 'User not found' }, { status: 404 });

    // Delete the user using Prisma client
    await prisma.user.delete({
      where: { id: userId },
    });

    // Return success response
    return NextResponse.json(
      { message: 'User deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    // Handle any errors that occur during user deletion
    return NextResponse.json(
      { error: 'Failed to delete user' },
      { status: 500 }
    );
  }
}
