import styled from "styled-components";
export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  justify-self: center;
`;

export const Image = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;
export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
  margin: auto;
`;

export const Label = styled.span`
  width: 23%;
  justify-content: baseline;
  text-align: center;
`;

export const Quantity = styled.span`
  width: 23%;
  justify-content: center;
  display: flex;
`;
export const Arrow = styled.span`
  cursor: pointer;
`;
export const Value = styled.span`
  margin: 0 10px;
`;
