const cloudinaryUrl = 'http://localhost:3000/api/cloudinary';

type Props = {
  url: string;
};

export const getAllCloudinaryImages = async (): Promise<[]> => {
  try {
    const res = await fetch(cloudinaryUrl);
    const imageUrls: [] = await res.json();
    //
    // console.log(imageUrls);

    // Transform the array of image URLs into an array of objects with the `url` property
    // const images: Props[] = imageUrls.map((url) => ({ url }));
    return imageUrls;
  } catch (error) {
    console.error('Error fetching Cloudinary images:', error);
    return []; // or throw error if needed
  }
};
