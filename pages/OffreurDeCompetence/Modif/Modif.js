import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../Header/Header2";

import WrapperTitle, {
  Title,
  TitleTop,
  TitleButton,
  TitleBox,
  Text,
  TextBox,
  TextDel,
  Wrapper,
  WrapperAll,
  WrapperContent,
  WrapperBoxAll,
  WrapperBox,
  WrapperProgression,
  Progression,
  ButtonLink,
} from "./Modif.style";

const Modif = () => {
  return (
    <>
      <Header />
      <WrapperTitle>
        <Link href="/OffreurDeCompetence/Recherche/Recherche">
          <a>
            <TitleTop>Rechercher une offre</TitleTop>
          </a>
        </Link>
        <TitleTop>Générer mon PortraiScopie</TitleTop>
      </WrapperTitle>

      <Wrapper>
        <WrapperAll>
          <Text>
            Bonjour {/* Pseudo ou nom de la personne */}, prêt à rentrer de
            nouvelles compétences ?
          </Text>
          <WrapperContent>
            <WrapperBoxAll>
              <WrapperBox>
                <Title>{"Compétence entrer par l'utilisateur"}</Title>
                <WrapperProgression>
                  <TextBox>100%</TextBox>
                  <Progression></Progression>
                </WrapperProgression>
                <ButtonLink>
                  <Link href="/OffreurDeCompetence/Competence/Competence">
                    <a>
                      <TitleBox>Modifier ma compétence</TitleBox>
                    </a>
                  </Link>
                </ButtonLink>
                <TextDel>Supprimer cette compétence</TextDel>
              </WrapperBox>

              {/*<WrapperBox>
                <Title>Compétence entrer par l'utilisateur</Title>
                <WrapperProgression>
                  <TextBox>100%</TextBox>
                  <Progression></Progression>
                </WrapperProgression>
                <ButtonLink>
                  <Link href="/OffreurDeCompetence/Competence/Competence">
                    <a>
                      <TitleBox>Modifier ma compétence</TitleBox>
                    </a>
                  </Link>
                </ButtonLink>
                <TextDel>Supprimer cette compétence</TextDel>
  </WrapperBox>*/}
            </WrapperBoxAll>
            <ButtonLink>
              <Link href="/OffreurDeCompetence/Competence/Competence">
                <a>
                  <TitleButton>Ajouter une nouvelle compétence</TitleButton>
                </a>
              </Link>
            </ButtonLink>
          </WrapperContent>
        </WrapperAll>
      </Wrapper>
    </>
  );
};

export default Modif;
