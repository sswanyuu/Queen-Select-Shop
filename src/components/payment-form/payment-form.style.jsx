import styled from "styled-components";
import Button from "../button/button.component";
export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 10px 10px;
`;
export const FormContainer = styled.form`
  margin: 10px;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  height: 200px;
  min-width: 700px;
`;
export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 50px;
`;
