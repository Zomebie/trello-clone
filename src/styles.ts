import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  background-color: #3179ba;
`;

export const ColumnContainer = styled.div`
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  padding: 8px 8px;
  flex-grow: 0;
  border-radius: 3px;
  background-color: #ebecf0;
`;

export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`;

export const CardContainer = styled.div`
  max-width: 300px;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  background-color: #fff;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
`;

type AddItemButtonProps = {
  dark?: boolean;
};

export const AddItemButton = styled.button<AddItemButtonProps>`
  background-color: #ffffff3d;
  border-radius: 3px;
  border: none;
  color: ${(props) => (props.dark ? "#000" : "#fff")};
  cursor: pointer;
  max-width: 300px;
  padding: 10px 12px;
  text-align: left;
  transition: background 85ms ease-in;
  width: 100%;
  &:hover {
    background-color: #ffffff52;
  }
`;

export const NewItemFormContainer = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;

export const NewItemButton = styled.button`
  background-color: #5aac44;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: #fff;
  padding: 6px 12px;
  text-align: center;
`;

export const NewItemInput = styled.input`
  border-radius: 3px;
  border: none;
  box-shadow: #091e4240 0px 1px 0px 0px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
`;
