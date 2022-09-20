import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 100%;
  padding-right: calc(var(--bs-gutter-x) * .5);
  padding-left: calc(var(--bs-gutter-x) * .5);
  margin-right: auto;
  margin-left: auto;
  --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;


`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  height: 100%;
`;

export const Col = styled.div.attrs((props: { width: string }) => props)`
  flex: 0 0 auto;
  width: ${props => (props.width)};
  margin-bottom: 1.5rem;
  @media(max-width: 991px) {
    width:100%;
  }
`;


export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: 100%;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #0000002d;
  border-radius: 0.5rem;
  margin-bottom: 1rem
`;

export const CardBody = styled.div`
  flex: 1 1 auto;
  padding: 1.5rem!important;
`;

export const TextMuted = styled.div`
  color: #6c757d;
  margin-top: 0;
  margin-bottom: 1rem;
`;

export const CustomGradient = styled.div`
  width: 33.33%;
  text-align: left;
  padding: 0 15px;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  
  img {
    max-width: 100%;
    height: auto;
    width: 155px;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  @media(max-width: 991px) {
    width:100%;
    text-align: center;
  }
  h5 span,
  p span {
    font-weight: 400;
    text-transform: capitalize;
  }
  p {
    font-weight: bold;
  }
`;

export const CustomCol = styled.div`
  width: 66.66%;
  @media(max-width: 991px) {
    width:100%;
  }
`;

export const RepoHeading = styled.div` 
  padding: 15px 0 5px;
  border-bottom: 1px solid #ccc;
  background-color: #ccc;
  border-radius: 5px 5px 0 0;
  text-transform: uppercase;
  h3 {
    font-size: 20px
  }
`;

export const ColInfo = styled.div` 
  padding: 5px 0 0;
  width: 50%;
  text-align: left;
`;
