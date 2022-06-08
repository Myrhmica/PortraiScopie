import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header2 from "../../Header/Header2";
import Footer from "../../Footer/Footer";
import axios from 'axios';

import WrapperALL, {
  WrapperContent,
  WrapperTitle,
  WrapperImage,
  Title,
  TextTitle,
  TextTop,
  Text,
  TextBottom,
  WrapperCompetence,
  WrapperTop,
  WrapperInput,
  ButtonLinkLeft,
  ButtonLinkRight,
  WrapperButton,
  Footer1,
} from "./Competence.style";

import Idea from "../../../public/image/idea.png";

const Competence = () => {
  const [competence, setCompetence] = useState("");

  useEffect(() => {
    localStorage.setItem("compétences", JSON.stringify(competence));
  }, [competence]);

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post(
        "https://portraiscopie-dev.herokuapp.com/api/portraiscopies/",
        {
          compétences: competence,
        }
      );
      console.log(response);
    } catch (err) {
      console.log("il y a une erreur");
    }
  };

  return (
    <>
      <WrapperALL>
        <Header2 />
        <WrapperContent>
          <WrapperTitle>
            <Title>Mon PortraiScopie Mes Compétences mises en Avant !</Title>
            <TextTitle>
              {
                "PortraiScopie ouvre la voie à l'expression de la compétence et aux savoirs comportementaux rattachés"
              }
            </TextTitle>
          </WrapperTitle>
          <WrapperCompetence>
            <WrapperTop>
              <TextTop>Ma compétence</TextTop>
              <WrapperImage>
                <Image
                  src={Idea}
                  alt={"Idée"}
                  quality={100}
                  width={30}
                  height={30}
                />
              </WrapperImage>
            </WrapperTop>
            <Text>
              Citez ou choisissez dans la liste une compétence dans laquelle
              vous excellez
            </Text>
            <WrapperInput>
              <input
                placeholder="Compétence"
                value={competence}
                onChange={(e) => setCompetence(e.target.value)}
              />
            </WrapperInput>
            <WrapperButton>
              <ButtonLinkLeft>
                <Link href="/OffreurDeCompetence/Competence/Competence">
                  <a>
                    <TextBottom>Enregistrer et Quitter</TextBottom>
                  </a>
                </Link>
              </ButtonLinkLeft>
              <ButtonLinkRight
                onClick={() => {
                  handleSubmit();
                }}
              >
                <Link href="/OffreurDeCompetence/Metier/Metier">
                  <a>
                    <TextBottom>Valider</TextBottom>
                  </a>
                </Link>
              </ButtonLinkRight>
            </WrapperButton>
          </WrapperCompetence>
        </WrapperContent>
        <Footer1>
          <Footer />
        </Footer1>
      </WrapperALL>
    </>
  );
};

export default Competence;
