import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../Header/Header2";

import WrapperTitle, {
  Title,
  TitleTop,
  Text,
  WrapperAll,
  Wrapper,
  WrapperTop,
  WrapperMiddle,
  WrapperBottom,
  WrapperActivite,
  WrapperTaches,
  WrapperTechnologies,
  WrapperDiplomes,
  WrapperMetiers,
  WrapperCompetence,
  Competence,
  WrapperCentre_interet,
  WrapperCapacites,
  WrapperQualites,
  WrapperTalents,
  WrapperValeurs,
  WrapperCopyright,
  ButtonLink,
  WrapperButton,
} from "./Resume.style";

const Resumes = () => {
  return (
    <>
      <Header />
      <WrapperTitle>
        <ButtonLink>
          <Link href="/OffreurDeCompetence/Modif/Modif">
            <a>
              <TitleTop>Ajouter ou Modifier</TitleTop>
            </a>
          </Link>
        </ButtonLink>
        <ButtonLink onclick="window.print()">
          <TitleTop>Imprimer mon PortraiScopie</TitleTop>
        </ButtonLink>
      </WrapperTitle>
      <WrapperAll>
        <Wrapper>
          <WrapperTop>
            <WrapperActivite>
              <Title>Activités</Title>
              {/**/}
            </WrapperActivite>
            <WrapperTaches>
              <Title>Tâches</Title>
              {/**/}
            </WrapperTaches>
            <WrapperTechnologies>
              <Title>Technologies / Techniques</Title>
              {/**/}
            </WrapperTechnologies>
            <WrapperDiplomes>
              <Title>Diplômes / Habilitations / Certificats</Title>
              {/**/}
            </WrapperDiplomes>
          </WrapperTop>
          <WrapperMiddle>
            <WrapperMetiers>
              <Title>Métiers</Title>
              {/**/}
            </WrapperMetiers>
            <WrapperCompetence>
              <Competence>
                <Title>Libellé de la compétence</Title>
                {/**/}
              </Competence>
            </WrapperCompetence>
            <WrapperCentre_interet>
              <Title>{"Centres d'intérêt"}</Title>
              {/**/}
            </WrapperCentre_interet>
          </WrapperMiddle>
          <WrapperBottom>
            <WrapperCapacites>
              <Title>Capacités</Title>
              {/**/}
            </WrapperCapacites>
            <WrapperQualites>
              <Title>Qualités</Title>
              {/**/}
            </WrapperQualites>
            <WrapperTalents>
              <Title>Talents</Title>
              {/**/}
            </WrapperTalents>
            <WrapperValeurs>
              <Title>Valeurs</Title>
              {/**/}
            </WrapperValeurs>
          </WrapperBottom>
          <WrapperCopyright>
            <Text>PortraiScopie © (copyright)</Text>
          </WrapperCopyright>
        </Wrapper>
      </WrapperAll>
    </>
  );
};

export default Resumes;
