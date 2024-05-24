import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  width: 200px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const ProductName = styled.h2`
  font-size: 1.25rem;
  margin: 0.5rem 0;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  color: #333;
`;

const ProductCard = ({ product }) => {
  return (
    <Card>
      <ProductImage src={product.image} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductPrice>{product.price}</ProductPrice>
    </Card>
  );
};

export default ProductCard;
