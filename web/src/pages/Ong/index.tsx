/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { FiClock, FiInfo, FiPhone, FiDollarSign } from 'react-icons/fi';
import { Marker, TileLayer } from 'react-leaflet';
import { useParams } from 'react-router-dom';

import Siderbar from '../../components/Sidebar';
import mapIcon from '../../utils/mapIcon';
import api from '../../services/api';

import {
  Container,
  OrphanageDetails,
  Image,
  MapOng,
  ContainerMap,
  Details,
  ContainerDestails,
  HourDetails,
  OpenWeekends,
  NOOpenWeekends,
  Contact,
  Bank,
} from './styles';

interface IOng {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: Array<{
    id: number;
    url: string;
  }>;
  phone: string;
  agency: string;
  account: string;
}

interface OngParams {
  id: string;
}

const Ong: React.FC = () => {
  const params = useParams<OngParams>();
  const [ong, setOng] = useState<IOng>();
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  useEffect(() => {
    api.get(`ongs/${params.id}`).then(response => {
      setOng(response.data);
    });
  }, [params.id]);

  if (!ong) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <Siderbar />
      <Container>
        <OrphanageDetails>
          <img src={ong.images[activeImageIndex].url} alt={ong.name} />

          <Image>
            {ong.images.map((image, index) => {
              return (
                <button
                  key={image.id}
                  className={activeImageIndex === index ? 'active' : ''}
                  type="button"
                  onClick={() => {
                    setActiveImageIndex(index);
                  }}
                >
                  <img
                    src={image.url}
                    alt={ong.name}
                  />
                </button>
              )
            })}
          </Image>

          <h1>{ong.name}</h1>
          <p>{ong.about}</p>
        </OrphanageDetails>

        <MapOng>
          <ContainerMap
            center={[ong.latitude, ong.longitude]}
            zoom={16}
            scrollWheelZoom={false}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <Marker icon={mapIcon} position={[ong.latitude, ong.longitude]} />
          </ContainerMap>
        </MapOng>

        <Details>
          <h2>Instruções para visita</h2>
          <p>{ong.instructions}</p>
        </Details>

        <Contact>
          <FiPhone size={25} color="#15B6D6" />
          <p>
            Telefones:
            {' '}
            {ong.phone}
            {' '}
          </p>
        </Contact>

        <Bank>
          <FiDollarSign size={25} color="#15B6D6" />
          <p>
            Dados bancarios: Ag:
            {' '}
            {ong.agency}
            {' '}
            / CC:
            {' '}
            {ong.account}
            {' '}
          </p>
        </Bank>

        <ContainerDestails>
          <HourDetails>
            <FiClock size={32} color="#15B6D6" />
            {ong.opening_hours}
          </HourDetails>

          {ong.open_on_weekends ? (
            <OpenWeekends>
              <FiInfo size={32} color="#39CC83" />
              Atendemos finais de semana
            </OpenWeekends>
          ) : (
              <NOOpenWeekends>
                <FiInfo size={32} color="#ff669d" />
              Não Atendemos finais de semana
              </NOOpenWeekends>
            )}
        </ContainerDestails>
      </Container>
    </>
  );
};

export default Ong;
