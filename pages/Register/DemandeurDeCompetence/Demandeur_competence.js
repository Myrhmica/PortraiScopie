import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../Footer/Footer";
import axios from "axios";

import WrapperContent, {
  WrapperImage,
  WrapperInscription,
  Title,
  WrapperInput,
  WrapperCoche,
  CheckBox,
  Subtitle,
  WrapperButton,
  Button,
  Text,
  Footer1,
} from "./Demandeur_competence.style";

// Import Images
import Myrhmica from "../../../public/image/Myrhmica-color-remove.png";
import PortraitScopie from "../../../public/image/PortraitScopie-remove.png";

const Demandeur_competence = () => {

  const [entityName, setEntityName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pseudo, setPseudo] = useState("");

  const handleSubmit = async (e) => {
    console.log("Le lien a été cliqué.");
    try {
      const response = await axios.post(
        "https://portraiscopie-dev.herokuapp.com/api/users/",
        JSON.stringify({
          entityName,
          firstName,
          lastName,
          password,
          email,
          pseudo,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
    } catch (err) {
      if (!err?.response) {
        console.log("No server Response");
      } else if (err.response?.status === 405) {
        console.log("Invalid url");
      } else {
        console.log("Registration Failed");
      }
    }
  };

  return (
    <WrapperContent>
      <WrapperImage>
        <Link href="/">
          <a>
            <Image src={Myrhmica} alt={"Myrhmica"} quality={100} />
          </a>
        </Link>
        <Link href="/https:/myrhmica.fr.">
          <a>
            <Image
              src={PortraitScopie}
              alt={"PortraitScopie"}
              quality={100}
              width={400}
              height={100}
            />
          </a>
        </Link>
      </WrapperImage>
      <WrapperInscription>
        <WrapperInput>
          <Title>Entité / Raisons sociale ou Nom Prénom</Title>
          <input
            type="text"
            placeholder="exemple : Myrhmica"
            value={entityName}
            onChange={(e) => setEntityName(e.target.value)}
          />
        </WrapperInput>

        <WrapperInput>
          <Title>Nom</Title>
          <input
            type="text"
            placeholder="exemple : Durand"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </WrapperInput>

        <WrapperInput>
          <Title>Prénom</Title>
          <input
            type="text"
            placeholder="exemple : Pierre"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </WrapperInput>

        <WrapperInput>
          <Title>Pseudo</Title>
          <input
            type="text"
            placeholder="exemple : Pierre1234"
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
          />
        </WrapperInput>

        <WrapperInput>
          <Title>Email</Title>
          <input
            type="email"
            placeholder="exemple : exemple@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </WrapperInput>

        <WrapperInput>
          <Title>Mot de passe</Title>
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </WrapperInput>
        {/*
          <Title>Confirmer mot de passe</Title>
          <WrapperInput>
            <input placeholder="Confirmer mot de passe" />
          </WrapperInput> 
          */}

        <Subtitle>
          Vous avez déjà un compte ?
          <Link href="/Login/DemandeurDeCompetence/Demandeur_competence">
            <a>Connectez-vous</a>
          </Link>
        </Subtitle>
        <WrapperCoche>
          <CheckBox></CheckBox>
          <Text>
            J’ai pris connaissance et j’accepte la
            <Link href="/Login/DemandeurDeCompetence/Demandeur_competence">
              <a> politique de confidentialité</a>
            </Link>
          </Text>
        </WrapperCoche>

        <WrapperButton>
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
      </WrapperInscription>
      <Footer1>
        <Footer />
      </Footer1>
    </WrapperContent>
  );
};

export default Demandeur_competence;
