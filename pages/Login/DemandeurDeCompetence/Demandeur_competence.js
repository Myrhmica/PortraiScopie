import React, { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "../../Footer/Footer";
import Header1 from "../../Header/Header1";

import WrapperALL, {
  WrapperContent,
  WrapperInscription,
  WrapperTitle,
  Title,
  WrapperBottom,
  Subtitle,
  WrapperInput,
  WrapperButton,
  Button,
  Text,
} from "./Demandeur_competence.style";

const Demandeur_competence = () => {

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [Personnas, setPersonnas] = useState([]);
  const [id, setId] = useState(null);
  const [erreur, setErreur] = useState("");

  const submitform = async (e) => {
    let user = {
        email: email,
        pwd: pwd,
        Personnas: Personnas,
        id: id
    }
      localStorage.setItem('user', JSON.stringify(user));
      console.log(user);
  };

  const nextStep = () => {
    if((email.length != 0 && pwd.length != 0)) {
      window.location = "/OffreurDeCompetence/Conseil/Conseil";
    } else {
      setErreur("Veuillez remplir tous les champ");
    } 
  }
  
  return (
    <>
      <WrapperALL>
        <Header1 />
        <WrapperContent>
          <WrapperInscription>
            <form onSubmit={submitform()}>
              <WrapperTitle>
                <Title>Email</Title>
              </WrapperTitle>
              <WrapperInput>
                <input
                  type="email"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </WrapperInput>
              <WrapperTitle>
                <Title>Mot de passe</Title>
              </WrapperTitle>
              <WrapperInput>
                <input
                  type="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                />
              </WrapperInput>
              <Text style={{
                color: 'red',
                fontSize: 20,
                fontWeight: 'bold',
              }}>{erreur}</Text>
              <WrapperBottom>
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
                      nextStep();
                    }}
                  >
                    <Text>Connexion</Text>
                  </Button>
                </WrapperButton>
              </WrapperBottom>
            </form>
          </WrapperInscription>
        </WrapperContent>
        <Footer />
      </WrapperALL>
    </>
  );
};

export default Demandeur_competence;
