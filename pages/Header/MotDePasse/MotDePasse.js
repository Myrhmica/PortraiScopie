import React, { useState } from "react";
import Link from "next/link";
import Footer from "../Footer/Footer";
import Header1 from "../Header/Header1";
import axios from "axios";
import config from "../../config.json";

import WrapperContent, {
  WrapperInscription,
  Title,
  Subtitle,
  WrapperInput,
  WrapperButton,
  Button,
  Text,
  Footer1,
} from "./MotDePasse.style";

const MotDePasse = () => {
  return (
    <>
      <Header1 />
      <WrapperContent>
        <WrapperInscription>
          <Title>Ancien Mot de passe</Title>
          <WrapperInput>
            <input placeholder="Ancien Mot de passe" />
          </WrapperInput>
          <Title>Nouveau mot de passe</Title>
          <WrapperInput>
            <input placeholder="Nouveau mot de passe" />
          </WrapperInput>
          <Title>Confirmer le mot de passe</Title>
          <WrapperInput>
            <input placeholder="Confirmer le mot de passe" />
          </WrapperInput>
          <Subtitle>
            Pas encore de compte ?
            <Link href="/Register/DemandeurDeCompetence/Demandeur_competence">
              <a>Inscrivez-vous</a>
            </Link>
          </Subtitle>

          <WrapperButton>
            <Button>
              <Link href="/">
                <a>
                  <Text>Changer de mot de passe</Text>
                </a>
              </Link>
            </Button>
          </WrapperButton>
        </WrapperInscription>
      </WrapperContent>
      <Footer1>
        <Footer />
      </Footer1>
    </>
  );
};

export default MotDePasse;
