import React, { useState } from "react";
import Link from "next/link";
import Footer from "../../Footer/Footer";
import Header1 from "../../Header/Header1";
import axios from "axios";
import config from "../../../config.json";

const LOGIN_URL = "/api/authenticate";

import WrapperContent, {
  WrapperInscription,
  Title,
  Subtitle,
  WrapperInput,
  WrapperButton,
  Button,
  Text,
  Footer1,
} from "./Demandeur_competence.style";

const Demandeur_competence = () => {
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
    <>
      <Header1 />
      <WrapperContent>
        <WrapperInscription>
          <form>
            <Title>Email</Title>
            <WrapperInput>
              <input
                type="email"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </WrapperInput>
            <Title>Mot de passe</Title>
            <WrapperInput>
              <input
                type="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
            </WrapperInput>
            <Subtitle>
              Pas encore de compte ?
              <Link href="/Register/DemandeurDeCompetence/Demandeur_competence">
                <a>Inscrivez-vous</a>
              </Link>
            </Subtitle>

            <WrapperButton>
              <Button>
                <Link href="/MotDePasse/MotDePasse">
                  <a>
                    <Text>Changer de mot de passe</Text>
                  </a>
                </Link>
              </Button>
              <Button
                onClick={() => {
                  handleSubmit();
                }}
              >
                <Link href="/OffreurDeCompetence/Conseil/Conseil">
                  <a>
                    <Text>Connexion</Text>
                  </a>
                </Link>
              </Button>
            </WrapperButton>
          </form>
        </WrapperInscription>
      </WrapperContent>
      <Footer1>
        <Footer />
      </Footer1>
    </>
  );
};

export default Demandeur_competence;
