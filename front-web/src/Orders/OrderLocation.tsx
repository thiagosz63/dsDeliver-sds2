import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import AsyncSelect from 'react-select/async';
import { fetchLocalMapBox } from '../api';
import { orderLocationData } from './types';

const initialPosition = {
    lat: -7.8470889,
    lng: -34.9115947

}
type Place = {
    label?: string;
    value?: string;
    position: {
        lat: number;
        lng: number;
    };
}
type Props = {
    onChangeLocation: (location: orderLocationData) => void;
}

export default function OrderLocation({ onChangeLocation }: Props) {
    const [address, setAddress] = useState<Place>({
        position: initialPosition
    });
    const [responses, setResponses] = useState<Place[]>([]);

    const loadOptions = (
        inputValue: string,
        callback: (places: Place[]) => void) => {
        fetchLocalMapBox(inputValue)
            .then(response => setResponses(response.data.features))
            .catch(error => console.log(error))

        const places = responses.map((item: any) => {
            return ({
                label: item.place_name,
                value: item.place_name,
                position: {
                    lat: item.center[1],
                    lng: item.center[0]
                }
            });
        });

        callback(places);
    };

    const handleChangeSelect = (place: Place) => {
        setAddress(place);
        onChangeLocation({
            latitude: place.position.lat,
            longitude: place.position.lng,
            address: place.label!
        });
    };

    return (
        <div className='order-location-container'>
            <div className="order-location-content">
                <h3 className="order-location-title">
                    Selecione onde o pedido deve ser entregue:
                </h3>
                <div className="filter-container">
                    <AsyncSelect
                        placeholder="Digite um Endereço para entrega do Pedido"
                        className='filter'
                        cacheOptions
                        loadOptions={loadOptions}
                        onChange={value => handleChangeSelect(value as Place)}
                    />
                </div>

                <MapContainer
                    center={address.position}
                    zoom={13}
                    key={address.position.lat}
                    scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={address.position}>
                        <Popup>
                            {address.label}
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>

    );
}

