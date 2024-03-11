import React from 'react';

interface Props {
  params: { id: number; photoId: number };
}
const PhotoDetailsPage = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      UserDetailPageId: {id} PhotoDetailsPage: {photoId}
    </div>
  );
};

export default PhotoDetailsPage;
