import React, {
  useState,
  useEffect,
  FormEvent,
  ChangeEvent,
  useCallback,
} from 'react';
import { useHistory } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Marker, TileLayer, useMapEvents } from 'react-leaflet';
import swal from 'sweetalert';

import {
  Container,
  Legend,
  MapOng,
  ContainerMap,
  Text,
  ButtonNome,
  ButtonAbout,
  Phone,
  Agency,
  Account,
  Images,
  PhotoContainer,
  UploadImages,
  Button,
  SecondLegend,
  Instruction,
  VisitingHours,
  AttendsWeekend,
  ButtonYesAttendsWeekend,
  ButtonNoAttendsWeekend,
  ButtonConfirmation,
} from './styles';

import Siderbar from '../../components/Sidebar';
import mapIcon from '../../utils/mapIcon';
import api from '../../services/api';

const CreateOng: React.FC = () => {
  const history = useHistory();

  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([
    0,
    0,
  ]);

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [phones, setPhones] = useState('');
  const [agency, setAgency] = useState('');
  const [account, setAccount] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpening_hours] = useState('');
  const [open_on_weekends, setOpen_on_weekends] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      setInitialPosition([latitude, longitude]);
    });
  }, []);

  const Markers = () => {
    const map = useMapEvents({
      click(e) {
        const latitude = e.latlng.lat;
        const longitude = e.latlng.lng;

        setSelectedPosition([latitude, longitude]);
      },
      locationfound(e) {
        const latitude = e.latlng.lat;
        const longitude = e.latlng.lng;

        setSelectedPosition([latitude, longitude]);
      },
    });

    return selectedPosition ? (
      <Marker
        icon={mapIcon}
        position={selectedPosition /* || initialPosition */}
      />
    ) : null;
  };

  const handleSelectImages = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!event.target.files) {
        return;
      }

      const selectedImages = Array.from(event.target.files);

      setImages(selectedImages);

      const selectedImagesPreview = selectedImages.map(image => {
        return URL.createObjectURL(image);
      });

      setPreviewImages(selectedImagesPreview);
    },
    [],
  );

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      console.log('function funfando');

      const data = new FormData();

      data.append('name', name);
      data.append('latitude', String(`${selectedPosition[0]}`));
      data.append('longitude', String(`${selectedPosition[1]}`));
      data.append('about', about);
      data.append('instructions', instructions);
      data.append('opening_hours', opening_hours);
      data.append('open_on_weekends', String(open_on_weekends));
      images.forEach(image => {
        data.append('images', image);
      });
      data.append('phone', phones);
      data.append('agency', agency);
      data.append('account', account);

      await api.post('ongs', data);

      swal('Ong cadastrada!', 'Clique em ok para prosseguir', 'success');

      history.push('/app');
    },
    [
      about,
      account,
      agency,
      history,
      images,
      instructions,
      name,
      open_on_weekends,
      opening_hours,
      phones,
      selectedPosition,
    ],
  );

  return (
    <>
      <Siderbar />
      {/* encType="multipart/form-data" onSubmit={handleSubmit}  */}
      <Container>
        <Legend>Dados</Legend>

        <MapOng>
          <ContainerMap
            center={[-22.9132254, -43.1347436]}
            // center={[-22.8917948, -43.1115397]}
            zoom={12}
            scrollWheelZoom={false}
          >
            <Markers />
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {/*           {markers.latitude !== 0 ? (
              <Marker
                icon={mapIcon}
                position={[markers.latitude, markers.longitude]}
              />
            ) : null} */}

            {/* <Marker icon={mapIcon} position={[-22.8917948, -43.1115397]} /> */}
          </ContainerMap>
          <Text>
            <p>Marque a localização da ong no mapa a cima</p>
          </Text>
        </MapOng>

        <ButtonNome>
          <p>Nome</p>
          <input value={name} onChange={event => setName(event.target.value)} />
        </ButtonNome>

        <ButtonAbout>
          <p>Sobre</p>
          <input
            maxLength={300}
            value={about}
            onChange={event => setAbout(event.target.value)}
          />
        </ButtonAbout>

        <Phone>
          <p>Telefone</p>
          <input
            maxLength={11}
            value={phones}
            onChange={event => setPhones(event.target.value)}
          />
        </Phone>

        <Agency>
          <p>Agência</p>
          <input
            maxLength={4}
            value={agency}
            onChange={event => setAgency(event.target.value)}
          />
        </Agency>

        <Account>
          <p>Conta</p>
          <input
            maxLength={9}
            value={account}
            onChange={event => setAccount(event.target.value)}
          />
        </Account>

        <Images>
          <p>Fotos</p>
          <PhotoContainer>
            {previewImages.map(image => {
              return (
                <img
                  key={image}
                  src={image}
                  alt={name}
                  width={100}
                  height={96}
                />
              );
            })}
            <UploadImages />
            <Button htmlFor="image[]">
              <FiPlus size={24} color="#15b6d6" />
            </Button>
          </PhotoContainer>
          <input
            multiple
            onChange={handleSelectImages}
            type="file"
            id="image[]"
          />
        </Images>

        <SecondLegend>Visitação</SecondLegend>

        <Instruction>
          <p>Instrução</p>
          <input
            value={instructions}
            onChange={event => setInstructions(event.target.value)}
          />
        </Instruction>

        <VisitingHours>
          <p>Horário das visitas</p>
          <input
            value={opening_hours}
            onChange={event => setOpening_hours(event.target.value)}
          />
        </VisitingHours>

        <AttendsWeekend>
          <p>Atende fim de semana?</p>

          <ButtonYesAttendsWeekend
            // className={opening_on_weekends ? 'ButtonYesAttendsWeekend' : ''}
            onClick={() => setOpen_on_weekends(true)}
          >
            Sim
          </ButtonYesAttendsWeekend>

          <ButtonNoAttendsWeekend onClick={() => setOpen_on_weekends(false)}>
            Não
          </ButtonNoAttendsWeekend>
        </AttendsWeekend>

        <ButtonConfirmation
          onClick={handleSubmit}
          type="submit"
          value="Confirmar"
        >
          Confirmar
        </ButtonConfirmation>
      </Container>
    </>
  );
};

export default CreateOng;
