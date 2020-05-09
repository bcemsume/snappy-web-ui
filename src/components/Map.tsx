import React from "react";
import { geolocated, GeolocatedProps } from "react-geolocated";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps";

export interface IMarker {
  lat?: number | undefined;
  lng?: number | undefined;
}

interface IMapProps {
  initMark?: IMarker;
  marker?: IMarker;
  onClick?: (e: any) => void;
  label: string;
}

interface IProps extends IMapProps {
  onChange: (lat: number, lng: number) => void;
}

const MyMaps = withScriptjs(
  withGoogleMap((props: IMapProps) => (
    <GoogleMap
      onClick={props.onClick}
      defaultZoom={14}
      defaultCenter={props.initMark}
    >
      {props.marker && <Marker position={props.marker} />}
    </GoogleMap>
  ))
);

interface IMapState {
  marker?: IMarker;
}

class Map extends React.Component<IProps & GeolocatedProps, IMapState> {
  componentWillMount() {
    if (this.props.marker?.lat !== 0) {
      this.setState({ marker: this.props.marker });
    } else if (!this.state?.marker)
      this.setState({ marker: { lat: 0, lng: 0 } });
  }
  render() {
    return (
      <>
        <MyMaps
          onClick={(e: any) => {
            this.setState({
              marker: {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
              },
            });
            this.props.onChange(e.latLng.lat(), e.latLng.lng());
          }}
          initMark={{
            lat:
              this.state.marker?.lat === 0
                ? this.props.coords?.latitude
                : this.state.marker?.lat,
            lng:
              this.state.marker?.lng === 0
                ? this.props.coords?.longitude
                : this.state.marker?.lng,
          }}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBkfo8f4gg2S4NDBSC9GUA086KOrzn4IBI&v=3.exp&libraries=geometry,drawing,places"
          containerElement={<div style={{ height: "100%" }} />}
          loadingElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
          label={this.props.label}
          marker={this.state.marker}
        ></MyMaps>
      </>
    );
  }
}
export default geolocated()(Map);
