import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const ProductWapper = styled.div`
  width: 240px;
  padding: 35px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: gray;
  margin: 50px auto;
  border-radius: 25px;
  &:not(last-child){
    margin-bottom: 25px;
  };
`;

const ProductCont = styled.div`
  width: 210px;
  display: ${props => props.$variant !== 'image' ? 'flex' : 'block'};
  align-items: center;
  justify-content: space-around;
  margin-top: ${props => props.$variant !== 'image' ? '25px' : '0'};  
  
`;

const ProductImg = styled.img`
  border-radius: 25px;
  background-color: transparent;
`;

const ProductTitle = styled.h2`
  margin: 0;
  margin-right: 20px;
`;

const ProductParagraft = styled.p`
  margin: 0;
`;

const ProductButton = styled.button`
  margin: 0;
  margin: 15px 0 10px 0;
  border-radius: 15px;
  text-transform: uppercase;
  padding: 5px 25px;
  cursor: pointer;
`;

const Product = ({
  imgUrl = "https://www.randomanimestuff.com/wp-content/uploads/2020/08/Ford-Mustang-Cobra-GT-500-Gunsmith-Cats.jpg",
  name,
  price,
}) => (
  <ProductWapper>
    <ProductCont $variant="image">
      <ProductImg src={imgUrl} alt={name} width="210"/>
    </ProductCont>
    <ProductCont>
      <ProductTitle>{name}</ProductTitle>
      <ProductParagraft>Price: $ {price}</ProductParagraft>
    </ProductCont>
    <ProductButton type="button" onClick = {e => console.log(e)}>Add to cart</ProductButton>
  </ProductWapper>
);

Product.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;