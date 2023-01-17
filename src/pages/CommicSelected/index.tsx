import {
  GoogleMap,
  Marker,
  StandaloneSearchBox,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCommics } from "../../hooks/useCommics";
import {
  BuyContainer,
  CancelButton,
  CommicContainer,
  CommicSelectedContainer,
  Footer,
  PriceButton,
  Title,
  TitlePage,
  TitlePageContainer,
} from "./styles";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function CommicSelected() {
  const [lat, setLat] = useState<any>();
  const [lng, setLng] = useState<any>();

  const { commicWithId, commicPrice } = useCommics();

  const navigate = useNavigate();

  function handleConfirmBuy() {
    toast.success("Compra finalizada!", {
      position: "top-right",
      autoClose: 250,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    setTimeout(() => {
      navigate("/");
    }, 1000);
  }

  function handleCancelBuy() {
    toast.error("Compra cancelada!", {
      position: "top-right",
      autoClose: 250,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    setTimeout(() => {
      navigate("/");
    }, 1000);
  }

  function success(pos: any) {
    setLat(pos.coords.latitude);
    setLng(pos.coords.longitude);
  }

  navigator.geolocation.getCurrentPosition(success);

  const lt = Number(lat);
  const lg = Number(lng);

  const formatMath = commicPrice * 5.1;

  const formated = formatMath.toFixed(2);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDKeobmvSx9FrY2DYuOBO8jwg98WDNwXV8",
  });

  const containerStyle = {
    width: "400px",
    height: "400px",
    borderRadius: 8,
  };

  const center = {
    lat: lt,
    lng: lg,
  };

  return (
    <CommicSelectedContainer>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <TitlePageContainer>
        <TitlePage>Finalizar compra</TitlePage>
      </TitlePageContainer>

      <BuyContainer>
        <CommicContainer>
          <Title>{commicWithId.title}</Title>
          <img
            src={`${commicWithId.thumbnail?.path}.${commicWithId.thumbnail?.extension}`}
            alt="Commic Image"
          />
          <p>Preço R$ {formated}</p>
        </CommicContainer>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
          >
            <Marker position={center} />
          </GoogleMap>
        ) : (
          <></>
        )}
      </BuyContainer>

      <Footer>
        <CancelButton onClick={handleCancelBuy}>Cancelar compra</CancelButton>

        <PriceButton onClick={handleConfirmBuy}>
          Total:
          <strong> R$ {formated}</strong>
        </PriceButton>
      </Footer>
    </CommicSelectedContainer>
  );
}
