import styled from 'styled-components';

export const PageLanging = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #ba55d3 0%, #00c7c7 100%);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  position: relative;

  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-width: 600px;

  display: flex;
  align-self: flex-start;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    max-width: 600px;
    font-size: 76px;
    font-weight: 900;
    line-height: 70px;
  }

  p {
    max-width: 350px;
    margin-top: 50px;
    font-size: 24px;
    line-height: 34px;
    margin-bottom: 25px;
  }
`;

export const LogoWrapper = styled.div`
  margin-top: 20px;

  display: flex;
  align-self: start;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 45px;
  }
`;

export const LocationAPP = styled.div`
  position: absolute;
  right: 0;
  margin-right: 30px;
  bottom: 20px;

  font-size: 17px;
  line-height: 34px;

  display: flex;
  flex-direction: column;

  text-align: right;

  strong {
    font-weight: 800;
  }
`;

export const EnterAPP = styled.div`
  position: absolute;
  right: 0;
  margin-right: 30px;
  top: 20px;

  margin-bottom: 25px;

  width: 60px;
  height: 60px;
  background: #96feef;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  :hover {
    background: #17d6eb;
  }
`;
