import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header2 from "../../Header/Header2";
import Footer from "../../Footer/Footer";
import axios from "axios";

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
  const [Competence, setCompetence] = useState("");
  const [erreur, setErreur] = useState("");
  const [Competences, setCompetences] = useState([]);
  const [id, setId] = useState(null);

  const submitform = (e) => {
    e.preventDefault();
    if (id === null) {
      if (Competences.length === 5) {
        setErreur("Vous ne pouvez pas ajouter plus de 5 centres d' intérêts.");
      } else {
        setErreur("");
        let Comp = {
          id: Competences.length,
          Competence: Competence,
        };
        setCompetences([...Competences, Comp]);
        setCompetence("");
      }
    } else {
      let Comp = {
        id: id,
        Competence: Competence,
      };
      setCompetences(Competences.map((m) => (m.id === id ? Comp : m)));
      setCompetence("");
      setId(null);
    }
  };

  const nextStep = () => {
    if (Competences.length === 0) {
      setErreur("Vous devez ajouter une compétence");
    } else {
      setErreur("");
      localStorage.setItem("Competence", JSON.stringify(Competences));
      console.log(localStorage.getItem("Competence"));
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
              <form onSubmit={submitform}>
                <input
                  type="text"
                  placeholder="exemple : Manager une équipe"
                  value={Competence}
                  onChange={(e) => setCompetence(e.target.value)}
                  required
                />
                <br />
                <Text style={{ color: "red", marginLeft: 26 }}>{erreur}</Text>
              </form>
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
                  nextStep();
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
