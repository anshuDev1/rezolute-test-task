import styled from "styled-components";

export const MainDiv = styled.div`
display: flex;
justify-content: center;
`;

export const TableMain = styled.table`
margin: 15px auto;
`;

export const TableHead = styled.th`
min-width: 300px;
border: 1px solid #000;
font-size: 16px;
font-weight: 500;
text-transform: capitalize;
padding: 8px;
background-color: #ccc;
`;

export const TableData = styled.td`
min-width: 300px;
border: 1px solid #000;
font-size: 14px;
font-weight: 400;
text-transform: capitalize;
padding: 0px 8px;
`;

export const TextHover = styled.div`
color: #0d6efd;
text-decoration: underline;
cursor: pointer;

&:hover {
  color: #000;
}
`;