import React, { useEffect, useState } from 'react';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { TileLayer, Marker } from 'react-leaflet';

import { PageMap, CreateOng, ContainerMap, PopUp, ArrowRight } from './styles';

import logoImg from '../../images/logo.svg';
import mapIcon from '../../utils/mapIcon';
import api from '../../services/api';

interface Ong {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

const OngsMap: React.FC = () => {
  const [ongs, setOngs] = useState<Ong[]>([]);

  useEffect(() => {
    api.get('ongs').then(response => {
      setOngs(response.data);
    });
  }, []);

  return (
    <>
      <PageMap>
        <aside>
          <header>
            <img src={logoImg} alt="Logo" width={80} height={80} />

            <h2>Escolha uma ong no nosso mapa</h2>
            <p>Muitos animais estão esperando para ter um novo lar!</p>
          </header>

          <footer>
            <strong>Niterói</strong>
            <span>Rio de Janeiro</span>
          </footer>
        </aside>

        <ContainerMap
          // center={[-22.8917948, -43.1115397]}
          center={[-22.9132254, -43.1347436]}
          zoom={12}
          scrollWheelZoom={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {ongs.map(ong => {
            return (
              <Marker
                icon={mapIcon}
                position={[ong.latitude, ong.longitude]}
                key={ong.id}
              >
                <PopUp closeButton={false}>
                  {ong.name}
                  <ArrowRight to={`/ongs/${ong.id}`}>
                    <FiArrowRight size={15} color="#fff" />
                  </ArrowRight>
                </PopUp>
              </Marker>
            );
          })}
        </ContainerMap>

        <CreateOng to="/ongs/create">
          <FiPlus size={32} color="#fff" />
        </CreateOng>
      </PageMap>
    </>
  );
};

export default OngsMap;
