import React, { useState } from "react";
import Image from "next/image";
import Header from "../../Header/Header2";
import axios from "axios";

import WrapperTitle, {
  WrapperRecherche,
  WrapperImage,
  Title,
  WrapperButton,
  ButtonLink,
} from "./Recherche.style";

import Rechercher from "../../../public/image/rechercher.png";

const Recherche = () => {
  return (
    <>
      <Header />
      <WrapperTitle>
        <Title>Quelle compétence rechercher vous ?</Title>
        <WrapperRecherche>
          <input
            placeholder="Compétence recherchée, Technologies, Qualités, ..."
            value={metier}
            onChange={(e) => setMetier(e.target.value)}
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
