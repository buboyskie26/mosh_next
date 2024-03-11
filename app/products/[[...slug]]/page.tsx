import React from 'react';

interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}
const ProductPageSlugs = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <div>
      ProductPageSlugs: {slug}, Order: {sortOrder}
    </div>
  );
};

export default ProductPageSlugs;
