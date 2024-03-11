'use client';
import { CldImage } from 'next-cloudinary';
import React from 'react';

interface PostProps {
  id: number;
  title: string;
  content: string;
  image_public_id: string | null;
  createdAt: Date;
  updatedAt: Date;
}
interface Props {
  cloud_image: [];
  posts: PostProps[];
}
const CloudinaryImages = ({ cloud_image, posts }: Props) => {
  // console.log(cloud_image.cloudinary_images);

  const removeImage = async (image_public_id: string) => {
    console.log(image_public_id);
    if(image_public_id){
      
    }
  };
  return (
    <div>
      <h2>Cloudinary Images</h2>
      {/* <table>
        <thead>
          <tr>
            <th>Image Url</th>
          </tr>
        </thead>
        <tbody>
          {cloud_image.cloudinary_images.map((image, index) => (
            <tr key={index}>
              <td>
                <CldImage width={270} height={180} alt="image" src={image} />
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Image Url</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={index}>
              <td>{post.title}</td>
              <td>{post.content}</td>
              <td>
                <CldImage
                  width={270}
                  height={180}
                  alt="image"
                  src={post.image_public_id || ''}
                />
                <button onClick={() => removeImage(post.image_public_id || '')}>
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CloudinaryImages;
