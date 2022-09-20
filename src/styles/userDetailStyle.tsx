import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 100%;
  padding-right: calc(var(--bs-gutter-x) * .5);
  padding-left: calc(var(--bs-gutter-x) * .5);
  margin-right: auto;
  margin-left: auto;
  --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0

  @media(min-width: 1400px) {
    max-width: 1320px;
  }

  @media(min-width: 1200px) {
    max-width: 1140px;
  }

  @media(min-width: 992px) {
    max-width: 960px;
  }


`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  height: 100%;
`;

export const Col1 = styled.div`
  flex: 0 0 auto;
  width: 66.66%;
  margin-bottom: 1.5rem;
  @media(max-width: 991px) {
    width:100%;
  }
`;

export const Col2 = styled.div`
  flex: 0 0 auto;
  width: 33.33%;
  margin-bottom: 1.5rem;
  @media(max-width: 991px) {
    width:100%;
    margin-bottom: 0;
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
  text-align: center;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  img {
    max-width: 100%;
    height: auto;
    width: 80px;
    margin-top: 3rem!important;
    margin-bottom: 3rem!important;
  }
  @media(max-width: 991px) {
    width:100%;
  }
`;

export const CustomCol = styled.div`
  width: 66.66%;
  @media(max-width: 991px) {
    width:100%;
  }
`;
