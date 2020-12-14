import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logoImg from '../../images/logo.svg';
import {
  ContentWrapper,
  EnterAPP,
  LocationAPP,
  LogoWrapper,
  PageLanging,
} from './styles';
import logoBack from '../../images/landing.svg';

const Landing: React.FC = () => {
  return (
    <>
      <PageLanging>
        <ContentWrapper>
          <LogoWrapper>
            <img src={logoImg} alt="Logo" width={100} height={100} />
            <h1>Luma</h1>
          </LogoWrapper>

          <h1>Leve felicidade para o seu lar!</h1>

          <p>Visite todas as ONG's cadastradas</p>
        </ContentWrapper>
        <img src={logoBack} alt="logo_back" width={500} />
      </PageLanging>

      <LocationAPP className="location">
        <strong>Niterói</strong>
        <span>Rio de Janeiro</span>
      </LocationAPP>

      <EnterAPP className="enter">
        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </Link>
      </EnterAPP>
    </>
  );
};

export default Landing;
