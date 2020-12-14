import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MapContainer } from 'react-leaflet';

export const PageOrphanage = styled.div`
  display: flex;

  aside {
    width: 100%;
    height: 85px;
    background: linear-gradient(329.54deg, #ba55d3 0%, #00c7c7 100%);
    padding: 10px;

    display: flex;
    flex-direction: center;
  }
  h1 {
    margin-left: 25px;
    font-size: 50px;
    font-weight: 900;
    line-height: 70px;
  }
`;

export const LinkBack = styled(Link)`
  position: absolute;
  right: 0;
  margin-right: 30px;
  top: 10px;

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

export const Container = styled.div`
  /* position: absolute;
  width: 900px;
  height: 1677px;
  left: 280px;
  top: 108px;
  margin-bottom: 85px;
  margin-top: 40px;

  background: #ffffff;

  border: 1px solid #d3e2e5;
  box-sizing: border-box;
  border-radius: 20px; */

  width: 700px;
  margin: 64px auto;

  background: #ffffff;
  border: 1px solid #d3e2e5;
  border-radius: 20px;

  overflow: hidden;
`;

export const OrphanageDetails = styled.div`
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 30px;
    width: 300px;
    height: 300px;
  }

  h1 {
    color: #4d6f80;
    font-size: 54px;
    line-height: 54px;
    margin-top: 64px;
    margin-bottom: 8px;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 28px;
    color: #5c8599;
    margin-top: 32px;
    margin-left: 80px;
    margin-right: 80px;
  }
`;

export const Image = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 16px;

  margin: 16px 40px 0;

  button {
    border: 0;
    height: 88px;
    background: none;
    cursor: pointer;
    border-radius: 20px;
    overflow: hidden;
    outline: none;

    opacity: 0.6;
  }

  button.active {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 88px;
    object-fit: cover;
  }
`;

export const MapOng = styled.div`
  margin-top: 64px;
  background: #e6f7fb;
  border: 1px solid #b3dae2;
  border-radius: 20px;
`;

export const ContainerMap = styled(MapContainer)`
  width: 100%;
  height: 280px;
`;

export const Details = styled.div`
  h2 {
    margin-top: 128px;
    margin-left: 80px;
    font-size: 36px;
    line-height: 46px;

    color: #4d6f80;

    display: flex;
    flex-direction: center;
  }
  p {
    line-height: 28px;
    color: #5c8599;
    margin-top: 24px;
    margin-left: 80px;
  }
`;

export const Contact = styled.div`
  display: flex;
  margin-left: 80px;

  margin-right: 80px;
  margin-top: 50px;

  p {
    color: #5c8599;
    line-height: 28px;
    margin-left: 10px;
  }
  svg {
    display: flex;
    margin-bottom: 20px;
    justify-content: space-between;
  }
`;

export const Bank = styled.div`
  display: flex;
  margin-left: 80px;

  margin-right: 80px;
  margin-top: 10px;

  p {
    color: #5c8599;
    line-height: 28px;
    margin-left: 10px;
  }

  svg {
    display: flex;
    margin-bottom: 20px;
    justify-content: space-between;
  }
`;

export const ContainerDestails = styled.div`
  margin-top: 90px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
`;

export const HourDetails = styled.div`
  background: linear-gradient(149.97deg, #e6f7fb 8.13%, #ffffff 92.67%);
  border: 1px solid #b3dae2;
  color: #5c8599;
  padding: 32px 24px;
  border-radius: 20px;
  line-height: 28px;

  width: 264px;
  height: 176px;
  margin-left: 80px;
  margin-bottom: 20px;

  svg {
    display: block;
    margin-bottom: 20px;
  }
`;

export const OpenWeekends = styled.div`
  background: linear-gradient(154.16deg, #edfff6 7.85%, #ffffff 91.03%);
  border: 1px solid #a1e9c5;
  color: #37c77f;
  padding: 32px 24px;
  border-radius: 20px;
  line-height: 28px;

  width: 264px;
  height: 176px;
  margin-right: 40px;
  margin-bottom: 20px;

  svg {
    display: block;
    margin-bottom: 20px;
  }
`;

export const NOOpenWeekends = styled.div`
  background: linear-gradient(154.16deg, #fdf0f5 7.85%, #ffffff 91.03%);
  border: 2px solid #ffbcd4;
  color: #ff669d;
  padding: 32px 24px;
  border-radius: 20px;
  line-height: 28px;

  width: 264px;
  height: 176px;
  margin-right: 40px;
  margin-bottom: 20px;

  svg {
    display: block;
    margin-bottom: 20px;
  }
`;
