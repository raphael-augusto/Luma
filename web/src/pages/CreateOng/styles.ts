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

export const Container = styled.div/* form */ `
  /*   position: absolute;
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
  height: 2250px;

  background: #ffffff;
  border: 1px solid #d3e2e5;
  border-radius: 20px;

  padding: 64px 80px;

  overflow: hidden;
`;

export const Legend = styled.div`
  width: 104%;

  font-size: 32px;
  line-height: 34px;
  color: #5c8599;
  font-weight: 700;

  border-bottom: 1px solid #d3e2e5;
  margin-bottom: 30px;
  margin-top: 34px;
  margin-left: 64px auto;

  padding-bottom: 24px;
`;

export const MapOng = styled.div`
  /* position: absolute;
  width: 560px;
  height: 350px;
  left: 160px;
  top: 180px;
  border: 1px solid #dde3f0;
  box-sizing: border-box;
  border-radius: 20px; */

  position: absolute;
  width: 560px;
  height: 350px;

  margin: 64px auto;

  padding: 64px 80px;
  border: 1px solid #dde3f0;
  box-sizing: border-box;
  border-radius: 20px;

  overflow: hidden;
`;

export const ContainerMap = styled(MapContainer)`
  position: absolute;
  width: 550px;
  height: 295px;
  left: 4px;
  top: 4px;
  border-radius: 20px;

  /*
  position: absolute;
  width: 560px;
  height: 350px;
  /* left: 160px;
  top: 180px auto;
  padding: 64px 80px;
  border: 1px solid #dde3f0;
  box-sizing: border-box;
  border-radius: 20px; */
`;

export const Text = styled.div`
  position: absolute;
  width: 550px;
  height: 45px;
  left: 4px;
  top: 300px;
  background: #5c8599;
  border-radius: 0px 0px 16px 16px;
  display: flex;

  text-align: center;
  align-items: center;
  justify-content: center;

  /* p {
    /position: absolute;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

  } */
`;

export const ButtonNome = styled.div`
  margin-top: 500px;

  p {
    color: #8fa7b3;
    margin-bottom: 8px;
    line-height: 24px;
  }

  input {
    position: absolute;
    width: 548px;
    height: 55px;
    padding: 10px;

    margin-top: 500px;

    top: 335px;
    background-color: #f5f8fa;

    border: 2px solid #d3e2e5;

    box-sizing: border-box;
    border-radius: 20px;

    outline: none;
  }
`;

export const ButtonAbout = styled.div`
  margin-top: 100px;

  p {
    color: #8fa7b3;
    margin-bottom: 8px;
    line-height: 24px;
  }

  input {
    position: absolute;
    width: 548px;
    height: 55px;
    padding: 10px;

    margin-top: 620px;

    top: 335px;
    background-color: #f5f8fa;

    border: 2px solid #d3e2e5;

    box-sizing: border-box;
    border-radius: 20px;

    outline: none;
  }
`;

export const Phone = styled.div`
  margin-top: 100px;

  p {
    color: #8fa7b3;
    margin-bottom: 8px;
    line-height: 24px;
  }

  input {
    position: absolute;
    width: 220px;
    height: 55px;
    padding: 10px;

    margin-top: 745px;

    top: 335px;
    background-color: #f5f8fa;

    border: 2px solid #d3e2e5;

    box-sizing: border-box;
    border-radius: 20px;

    outline: none;
  }
`;

export const Agency = styled.div`
  margin-top: 100px;

  p {
    color: #8fa7b3;
    margin-bottom: 8px;
    line-height: 24px;
  }
  input {
    position: absolute;
    width: 220px;
    height: 55px;
    padding: 10px;

    margin-top: 745px;

    top: 460px;
    background-color: #f5f8fa;

    border: 2px solid #d3e2e5;

    box-sizing: border-box;
    border-radius: 20px;

    outline: none;
  }
`;
export const Account = styled.div`
  margin-top: 100px;

  p {
    color: #8fa7b3;
    margin-bottom: 8px;
    line-height: 24px;
  }

  input {
    position: absolute;
    width: 220px;
    height: 55px;
    padding: 10px;

    margin-top: 745px;

    top: 583px;
    background-color: #f5f8fa;

    border: 2px solid #d3e2e5;

    box-sizing: border-box;
    border-radius: 20px;

    outline: none;
  }
`;

export const Images = styled.div`
  margin-top: 100px;
  p {
    color: #8fa7b3;
    margin-bottom: 8px;
    line-height: 24px;
  }
  input {
    display: none;
  }
`;

export const PhotoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 0fr);
  grid-gap: 16px;

  img {
    object-fit: cover;
    border-radius: 20%;
  }
`;

export const UploadImages = styled.div``;

export const Button = styled.label`
  font-size: 1em;
  margin: 2px;
  width: 100px;
  height: 96px;
  padding: 0.25em 1em;
  // margin-top: 20px;
  border: 2px solid #d3e2e5;
  border-radius: 20%;
  background: #eff3f7;
  outline: none;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    // background: #17d6eb;
    opacity: 0.7;
  }
`;

export const SecondLegend = styled.div`
  width: 104%;

  font-size: 32px;
  line-height: 34px;
  color: #5c8599;
  font-weight: 700;

  border-bottom: 1px solid #d3e2e5;
  margin-bottom: 30px;
  margin-top: 80px;
  margin-left: 64px auto;

  padding-bottom: 24px;
`;

export const Instruction = styled.div`
  margin-top: 40px;

  p {
    color: #8fa7b3;
    margin-bottom: 8px;
    line-height: 24px;
  }

  input {
    position: absolute;
    width: 548px;
    height: 55px;
    padding: 10px;

    margin-top: 1200px;

    top: 580px;
    background-color: #f5f8fa;

    border: 2px solid #d3e2e5;

    box-sizing: border-box;
    border-radius: 20px;

    outline: none;
  }
`;

export const VisitingHours = styled.div`
  margin-top: 110px;

  p {
    color: #8fa7b3;
    margin-bottom: 8px;
    line-height: 24px;
  }

  input {
    position: absolute;
    width: 548px;
    height: 55px;
    padding: 10px;

    margin-top: 1340px;

    top: 575px;
    background-color: #f5f8fa;

    border: 2px solid #d3e2e5;

    box-sizing: border-box;
    border-radius: 20px;

    outline: none;
  }
`;

export const AttendsWeekend = styled.div`
  margin-top: 110px;
  display: flex;

  p {
    color: #8fa7b3;
    margin-bottom: 8px;
    line-height: 24px;
  }

  button.active2 {
  }
`;

export const ButtonYesAttendsWeekend = styled.button`
  position: absolute;
  width: 260px;
  height: 55px;

  margin-top: 1810px;

  top: 250px;
  background-color: #f5f8fa;

  border: 2px solid #d3e2e5;

  box-sizing: border-box;
  border-radius: 20px;

  outline: none;
  :hover {
    background: #87f094;
    // opacity: 0.5;
  }
`;
export const ButtonNoAttendsWeekend = styled.button`
  position: absolute;
  width: 260px;
  height: 55px;

  margin-top: 1810px;
  margin-left: 290px;

  top: 250px;
  background-color: #f5f8fa;

  border: 2px solid #d3e2e5;

  box-sizing: border-box;
  border-radius: 20px;

  outline: none;
  :hover {
    background: #fa6976;
    // opacity: 0.5;
  }
`;

export const ButtonConfirmation = styled.button`
  position: absolute;
  width: 548px;
  height: 55px;

  margin-top: 2000px;

  top: 230px;
  background-color: #87f094;

  border: 2px solid #d3e2e5;

  box-sizing: border-box;
  border-radius: 20px;

  outline: none;

  :hover {
    //background: #90ee90;
    opacity: 0.8;
  }
`;
