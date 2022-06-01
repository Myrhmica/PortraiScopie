import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../Header/Header1";

import WrapperTitle, {
  WrapperTop,
  WrapperMiddle,
  WrapperCard,
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
        <WrapperBottom>
          <Link href="/OffreurDeCompetence/Metier/Metier">
            <a>
              <TextBottom>Métiers</TextBottom>
            </a>
          </Link>
          <Link href="/OffreurDeCompetence/Activites/Activites">
            <a>
              <TextBottom>Activités</TextBottom>
            </a>
          </Link>
          <Link href="/OffreurDeCompetence/Taches/Taches">
            <a>
              <TextBottom>Tâches</TextBottom>
            </a>
          </Link>
          <Link href="/OffreurDeCompetence/Techniques/Techniques">
            <a>
              <TextBottom>Techniques</TextBottom>
            </a>
          </Link>
          <Link href="/OffreurDeCompetence/Technologies/Technologies">
            <a>
              <TextBottom>Technologies</TextBottom>
            </a>
          </Link>
          <Link href="/OffreurDeCompetence/Diplomes/Diplomes">
            <a>
              <TextBottom>Diplômes</TextBottom>
            </a>
          </Link>
          <Link href="/OffreurDeCompetence/Capacites/Capacites">
            <a>
              <TextBottom>Capacités</TextBottom>
            </a>
          </Link>
          <Link href="/OffreurDeCompetence/Qualites/Qualites">
            <a>
              <TextBottom>Qualités</TextBottom>
            </a>
          </Link>
          <Link href="/OffreurDeCompetence/Valeurs/Valeurs">
            <a>
              <TextBottom>Valeurs</TextBottom>
            </a>
          </Link>
          <Link href="/OffreurDeCompetence/Talents/Talents">
            <a>
              <TextBottom>Talents</TextBottom>
            </a>
          </Link>
          <Link href="/OffreurDeCompetence/Centre_interet/Centre_interet">
            <a>
              <TextBottom>Centres d’intérêt</TextBottom>
            </a>
          </Link>
        </WrapperBottom>
      </WrapperTitle>
    </>
  );
};

export default Profil;
