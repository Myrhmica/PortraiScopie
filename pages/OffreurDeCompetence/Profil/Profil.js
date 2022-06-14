import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../Header/Header1";

import WrapperTitle, {
  WrapperTop,
  WrapperMiddle,
  WrapperCard,
  WrapperBottom1,
  WrapperCompetence,
  WrapperBottom,
  WrapperBox,
  ButtonLink,
  TitleCard,
  Text,
  TextTop,
  TextTopButton,
  TextBottom,
} from "./Profil.style";

//image
import profil from "../../../public/image/profil.png";

const Profil = () => {
  const [Competence, setCompetence] = useState([]);
  useEffect(() => {
    setCompetence(JSON.parse(localStorage.getItem("Competence")));
  }, []);

  return (
    <>
      <Header />
      <WrapperTitle>
        <WrapperTop>
          <Link href="/OffreurDeCompetence/Profil/Profil">
            <a>
              <Image
                src={profil}
                alt={"Profil"}
                quality={100}
                width={60}
                height={60}
              />
              <TextTop>Profil</TextTop>
            </a>
          </Link>
          <ButtonLink>
            <Link href="/OffreurDeCompetence/Resume/Resume">
              <a>
                <TextTopButton>Visualiser mon PortaiScopie</TextTopButton>
              </a>
            </Link>
          </ButtonLink>
        </WrapperTop>
        <WrapperMiddle>
          <WrapperCard>
            <TitleCard>Changer de Pseudo</TitleCard>
            <WrapperBox></WrapperBox>
          </WrapperCard>
          <WrapperCard>
            <TitleCard>Changer de Mot de passe</TitleCard>
            <WrapperBox></WrapperBox>
          </WrapperCard>
          <WrapperCard>
            <TitleCard>{"Changer d'adresse mail"}</TitleCard>
            <WrapperBox></WrapperBox>
          </WrapperCard>
        </WrapperMiddle>
        <WrapperBottom1>
          <WrapperCompetence
            onClick={() => {
              window.location = "/OffreurDeCompetence/Competence/Competence";
            }}
          >
            {Competence.map((Comp) => (
              <div key={Comp.id}>
                <TextBottom>{Comp.Competence}</TextBottom>
              </div>
            ))}
          </WrapperCompetence>
        </WrapperBottom1>
        <WrapperBottom>
          <TextBottom
            onClick={() => {
              window.location = "/OffreurDeCompetence/Metier/Metier";
            }}
          >
            Métier(s)
          </TextBottom>

          <TextBottom
            onClick={() => {
              window.location = "/OffreurDeCompetence/Activites/Activites";
            }}
          >
            Activité(s)
          </TextBottom>

          <TextBottom
            onClick={() => {
              window.location = "/OffreurDeCompetence/Taches/Taches";
            }}
          >
            Tâche(s)
          </TextBottom>

          <TextBottom
            onClick={() => {
              window.location = "/OffreurDeCompetence/Techniques/Techniques";
            }}
          >
            Technique(s)
          </TextBottom>

          <TextBottom
            onClick={() => {
              window.location =
                "/OffreurDeCompetence/Technologies/Technologies";
            }}
          >
            Technologie(s)
          </TextBottom>

          <TextBottom
            onClick={() => {
              window.location = "/OffreurDeCompetence/Diplomes/Diplomes";
            }}
          >
            Diplôme(s)
          </TextBottom>

          <TextBottom
            onClick={() => {
              window.location = "/OffreurDeCompetence/Capacites/Capacites";
            }}
          >
            Capacité(s)
          </TextBottom>

          <TextBottom
            onClick={() => {
              window.location = "/OffreurDeCompetence/Qualites/Qualites";
            }}
          >
            Qualité(s)
          </TextBottom>

          <TextBottom
            onClick={() => {
              window.location = "/OffreurDeCompetence/Valeurs/Valeurs";
            }}
          >
            Valeur(s)
          </TextBottom>

          <TextBottom
            onClick={() => {
              window.location = "/OffreurDeCompetence/Talents/Talents";
            }}
          >
            Talent(s)
          </TextBottom>

          <TextBottom
            onClick={() => {
              window.location =
                "/OffreurDeCompetence/Centre_interet/Centre_interet";
            }}
          >
            Centre(s) d’intérêt
          </TextBottom>
        </WrapperBottom>
      </WrapperTitle>
    </>
  );
};

export default Profil;
