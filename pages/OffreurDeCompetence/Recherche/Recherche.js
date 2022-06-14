import React, { useState } from "react";
import Image from "next/image";
import Header from "../../Header/Header2";

import WrapperTitle, {
  WrapperRecherche,
  WrapperImage,
  Title,
  WrapperButton,
  ButtonLink,
} from "./Recherche.style";

import Rechercher from "../../../public/image/rechercher.png";
import axios from "axios";

const Recherche = async (e) => {

  // récupérer les infos de l'API 
  // afficher les données 
  // script d'affichage des données que lorque l'on écrit

  const Response = () => {
    fetch("https://portraiscopie-dev.herokuapp.com/api/technicals/")
    .then(response => response.json())
    .then(data => {
      output.textContent = `{data.technicals}`;
    })
  }


  return (
    <>
      <Header />
      <WrapperTitle>
        <Title>Quelle compétence rechercher vous ?</Title>
        <WrapperRecherche>
          <input
            className="Input"
            placeholder="Compétence recherchée, Technologies, Qualités, ..."
            onClick={() => {Response()}}
          />
          <WrapperImage>
            <Image
              src={Rechercher}
              alt={"Myrhmica"}
              quality={100}
              width={70}
              height={70}
            />
          </WrapperImage>
        </WrapperRecherche>
        <WrapperButton>
          <ButtonLink
            onClick={() => {
              history.back();
            }}
          >
            Revenir en arrière
          </ButtonLink>
        </WrapperButton>
      </WrapperTitle>
    </>
  );
};

export default Recherche;
