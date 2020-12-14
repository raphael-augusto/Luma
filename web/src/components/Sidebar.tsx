import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import logoImg from '../images/logo.svg';

import { Container, PageOrphanage, LinkBack } from './styles/styles';

const Siderbar: React.FC = () => {
  return (
    <>
      <Container>
        <PageOrphanage>
          <aside>
            <img src={logoImg} alt="Logo" width={63} height={63} />
            <h1>Luma</h1>
          </aside>
        </PageOrphanage>

        <LinkBack to="/app">
          <FiArrowRight size={20} color="#000" />
        </LinkBack>
      </Container>
    </>
  );
};
export default Siderbar;
