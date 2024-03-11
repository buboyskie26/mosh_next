'use client';
import { CldUploadWidget, CldImage } from 'next-cloudinary';
import React, { FormEventHandler, useState } from 'react';
import CloudinaryImages from './cloud/page';
import axios from 'axios';

interface CloudinaryResult {
  public_id: string;
}
const UploadPage = async () => {
  const [publicId, setPublicId] = useState('');

  const handleUploadSuccess = async (result: any, widget: any) => {
    console.log(result);
    if (result.event !== 'success') return;

    const info = result.info;

    // Update state with the public_id of the uploaded image
    setPublicId(info.public_id);

    // Only proceed if public_id is not empty
    // if (info.secure_url !== '') {
    //   try {
    //     // Prepare the form data for the POST request
    //     const formData = {
    //       title: 'test title',
    //       content: 'test content',
    //       image_public_id: info.secure_url,
    //     };

    //     // Send a POST request to the server
    //     const response = await axios.post(
    //       'http://localhost:3000/api/postCloud',
    //       formData
    //     );

    //     // Log success message and form data if request is successful
    //     console.log('Uploaded:', formData);
    //     console.log('Server response:', response.data);
    //   } catch (error) {
    //     // Log and handle errors from the POST request
    //     console.error('Error uploading image:', error);
    //   }
    // }
  };
  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={270} height={180} alt="Image" />
      )}
      <CldUploadWidget
        uploadPreset="lzmfaf1k"
        options={{
          sources: ['local', 'google_drive'],
        }}
        onSuccess={handleUploadSuccess}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>

      {/* <CloudinaryImages /> */}
    </>
  );
  //
};

export default UploadPage;
