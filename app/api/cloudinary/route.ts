// pages/api/images.ts

import { NextApiRequest, NextApiResponse } from 'next';
import cloudinary from 'cloudinary';
import { NextRequest, NextResponse } from 'next/server';

// Configure Cloudinary with your credentials
cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
// Export your API route function
// export default async function GET(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     // Fetch all images from Cloudinary
//     const { resources } = await cloudinary.v2.api.resources({
//       type: 'upload',
//       max_results: 100,
//     });

//     // Extract URLs of the images
//     const imageUrls = resources.map((resource: any) => resource.url);

//     // Return the image URLs as JSON response
//     res.status(200).json({ images: imageUrls });
//   } catch (error) {
//     console.error('Error fetching images from Cloudinary:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }

// Export your API route function
export async function GET(request: NextRequest) {
  try {
    // Fetch all images from Cloudinary
    const { resources } = await cloudinary.v2.api.resources({
      type: 'upload',
      max_results: 100,
    });
    // console.log(resources);
    // Extract URLs of the images
    const imageUrls = resources.map((resource: any) => resource.public_id);

    // Return the image URLs as JSON response
    return NextResponse.json({ cloudinary_images: imageUrls });
  } catch (error) {
    console.error('Error fetching images from Cloudinary:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
