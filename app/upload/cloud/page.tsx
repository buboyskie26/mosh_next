import { getAllCloudinaryImages } from '@/api';
import React from 'react';
import CloudinaryImages from './CloudinaryImages';
import { Prisma } from '@prisma/client';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const ImagesIndex = async () => {
  const getAllCLoudinaryImages = await getAllCloudinaryImages();
  // console.log(getAllCLoudinaryImages);
  const posts = await prisma.post.findMany();

  // console.log(posts);
  return (
    <div>
      <CloudinaryImages posts={posts} cloud_image={getAllCLoudinaryImages} />
    </div>
  );
};

export default ImagesIndex;
