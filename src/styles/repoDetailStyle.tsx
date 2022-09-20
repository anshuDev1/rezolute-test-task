
import styled from "styled-components";

export const MainDiv = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
max-height: 300px;
overflow: auto;
`;

export const Card = styled.div`
position: relative;
display: flex;
flex-direction: column;
min-width: 0;
word-wrap: break-word;
background-color: #fff;
background-clip: border-box;
border: none;
border-radius: 0.5rem;
border-color: #c4c4c4;
box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
  0 0 8px hsla(0, 0%, 76.9%, 0.4);
margin-top: 20px;
min-height: 176px;
`;

export const CardBody = styled.div`
flex: 1 1 auto;
padding: 1.25rem;
`;
export const CardTitle = styled.div`
text-transform: capitalize;
font-weight: 600;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
`;
export const CardSubtitle = styled.div`
margin-top: 10px;
font-size: 14px;
text-transform: capitalize;
color: #787878;
overflow: hidden;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
a {
  text-decoration: none;
  color: #00b1ff;
}
`;