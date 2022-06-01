// import des packages nécessaire au bon fonctionnement
import React, { useState } from "react";
import Link from "next/link";
import Footer from "../../Footer/Footer";
import axios from "axios";
import config from "../../../config.json";
import Header1 from "../../Header/Header1";

import WrapperContent, {
  WrapperInscription,
  Title,
  Subtitle,
  WrapperInput,
  WrapperButton,
  Button,
  Text,
  Footer1,
} from "./Offreur_de_competence.style";

// Import Images
import Myrhmica from "../../../public/image/Myrhmica-color-remove.png";
import PortraitScopie from "../../../public/image/PortraitScopie-remove.png";

const Offreur_de_competence = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post(
        "https://portraiscopie-dev.herokuapp.com/api/authenticate",
        {
          email: email,
          password: pwd,
        }
      );
      console.log(response);
    } catch (err) {
      console.log("il y a une erreur");
    }
  };

  return (
    <WrapperContent>
      <Header1 />
      <WrapperInscription>
        <Title>Email</Title>
        <WrapperInput>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </WrapperInput>
        <Title>Mot de passe</Title>
        <WrapperInput>
          <input
            placeholder="Mot de passe"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </WrapperInput>
        <Subtitle>
          Pas encore de compte ?
          <Link href="/Register/OffreurDeCompetence/Offreur_de_competence">
            <a>Inscrivez-vous</a>
          </Link>
        </Subtitle>
        <WrapperButton>
          <Link href="/">
            <a>
              <Button>
                <Text>Changer de mot de passe</Text>
              </Button>
            </a>
          </Link>
          <Link href="/OffreurDeCompetence/Conseil/Conseil">
            <Button
              onClick={() => {
                handleSubmit();
              }}
            >
              <a>
                <Text>Connexion</Text>
              </a>
            </Button>
          </Link>
        </WrapperButton>
      </WrapperInscription>
      <Footer1>
        <Footer />
      </Footer1>
    </WrapperContent>
  );
};

export default Offreur_de_competence;
