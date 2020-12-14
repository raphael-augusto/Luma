import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MapContainer, Popup } from 'react-leaflet';

export const PageMap = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;

  aside {
    width: 440px;
    background: linear-gradient(329.54deg, #ba55d3 0%, #00c7c7 100%);
    padding: 80px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      font-size: 40px;
      font-weight: 800;
      line-height: 42px;
      margin-top: 64px;
    }

    footer {
      margin-top: 60px;
      display: flex;
      flex-direction: column;

      line-height: 24px;

      strong {
        font-weight: 800;
      }
    }

    p {
      line-height: 28px;
      margin-top: 24px;
    }
  }
`;

export const CreateOng = styled(Link)`
  position: absolute;
  right: 40px;
  bottom: 40px;

  z-index: 10 !important;

  width: 64px;
  height: 64px;
  background: #15c3d6;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;

  :hover {
    background: #17d6eb;
  }
`;
export const ContainerMap = styled(MapContainer)`
  width: 100%;
  height: 100%;
  z-index: 5;
`;

export const PopUp = styled(Popup)`
  .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, 0.8);
    color: #696969;
    border-radius: 20px;
  }

  .leaflet-popup-content {
    font-size: 15px;
    font-weight: bold;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ArrowRight = styled(Link)`
  width: 40px;
  height: 40px;
  background: #15c3d6;
  border-radius: 35%;

  margin-left: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
