import React, { useState, useEffect } from "react";
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
  WrapperTechniqueTechnologies,
  WrapperTechnique,
  WrapperTechnologies,
  WrapperDiplomes,
  WrapperMetiers,
  WrapperCompetence,
  TextComp,
  Competences,
  WrapperCentre_interet,
  WrapperCapacites,
  WrapperQualites,
  WrapperTalents,
  WrapperValeurs,
  WrapperCopyright,
  ButtonLink,
} from "./Resume.style";

const Resumes = () => {
  const [Competence, setCompetence] = useState([]);
  const [Metier, setMetier] = useState([]);
  const [Activite, setActivite] = useState([]);
  const [Tache, setTache] = useState([]);
  const [Technique, setTechnique] = useState([]);
  const [Technologie, setTechnologie] = useState([]);
  const [Diplome, setDiplome] = useState([]);
  const [Capacite, setCapacite] = useState([]);
  const [Qualite, setQualite] = useState([]);
  const [Valeur, setValeur] = useState([]);
  const [Talent, setTalent] = useState([]);
  const [Centre_interet, setCentre_interet] = useState([]);

  useEffect(() => {
    setCentre_interet(JSON.parse(localStorage.getItem("Centre_interet")));
    setActivite(JSON.parse(localStorage.getItem("Activite")));
    setCapacite(JSON.parse(localStorage.getItem("Capacite")));
    setQualite(JSON.parse(localStorage.getItem("Qualite")));
    setDiplome(JSON.parse(localStorage.getItem("Diplome")));
    setTalent(JSON.parse(localStorage.getItem("Talent")));
    setTechnique(JSON.parse(localStorage.getItem("Technique")));
    setTechnologie(JSON.parse(localStorage.getItem("Technologie")));
    setValeur(JSON.parse(localStorage.getItem("Valeur")));
    setTache(JSON.parse(localStorage.getItem("Tache")));
    setMetier(JSON.parse(localStorage.getItem("metiers")));
    setCompetence(JSON.parse(localStorage.getItem("Competence")));
}, [])

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
            <WrapperActivite
              onClick={() => {
                window.location = "/OffreurDeCompetence/Activites/Activites";
              }}
            >
              <Title>Activité(s)</Title>
              {Activite.map((Acti) => (
                <div key={Acti.id}>
                  <Text>{Acti.Activite}</Text>
                </div>
              ))}
            </WrapperActivite>
            <WrapperTaches
              onClick={() => {
                window.location = "/OffreurDeCompetence/Taches/Taches";
              }}
            >
              <Title>Tâche(s)</Title>
              {Tache.map((Tach) => (
                <div key={Tach.id}>
                  <Text>{Tach.Tache}</Text>
                </div>
              ))}
            </WrapperTaches>
            <WrapperTechniqueTechnologies
              onClick={() => {
                window.location = "/OffreurDeCompetence/Techniques/Techniques";
              }}
            >
              <Title>Technique(s)/ Technologie(s)</Title>
              <Text>
                {Technique.map((Tech) => (
                  <div key={Tech.id}>
                    <Text>{Tech.Technique}</Text>
                  </div>
                ))}
              </Text>
              <Text>
                {Technologie.map((Tech) => (
                  <div key={Tech.id}>
                    <Text>{Tech.Technologie}</Text>
                  </div>
                ))}
              </Text>
            </WrapperTechniqueTechnologies>
            <WrapperDiplomes
              onClick={() => {
                window.location = "/OffreurDeCompetence/Diplomes/Diplomes";
              }}
            >
              <Title>Diplôme(s) / Certificat(s) / Habilitation(s)</Title>
              {Diplome.map((Dip) => (
                <div key={Dip.id}>
                  <Text>{Dip.Diplome}</Text>
                </div>
              ))}
            </WrapperDiplomes>
          </WrapperTop>
          <WrapperMiddle>
            <WrapperMetiers
              onClick={() => {
                window.location = "/OffreurDeCompetence/Metier/Metier";
              }}
            >
              <Title>Métier(s)</Title>
              {Metier.map((Metier) => (
                <div key={Metier.id}>
                  <Text>{Metier.metier}</Text>
                </div>
              ))}
            </WrapperMetiers>
            <WrapperCompetence
              onClick={() => {
                window.location = "/OffreurDeCompetence/Competence/Competence";
              }}
            >
              <Competences>
                {Competence.map((Comp) => (
                  <div key={Comp.id}>
                    <TextComp>{Comp.Competence}</TextComp>
                  </div>
                ))}
              </Competences>
            </WrapperCompetence>
            <WrapperCentre_interet
              onClick={() => {
                window.location =
                  "/OffreurDeCompetence/Centre_interet/Centre_interet";
              }}
            >
              <Title>{"Centre(s) d'intérêt"}</Title>
              {Centre_interet.map((CentreInt) => (
                <div key={CentreInt.id}>
                  <Text>{CentreInt.Centre_interet}</Text>
                </div>
              ))}
            </WrapperCentre_interet>
          </WrapperMiddle>
          <WrapperBottom>
            <WrapperCapacites
              onClick={() => {
                window.location = "/OffreurDeCompetence/Capacites/Capacites";
              }}
            >
              <Title>Capacité(s)</Title>
              {Capacite.map((Cap) => (
                <div key={Cap.id}>
                  <Text>{Cap.Capacite}</Text>
                </div>
              ))}
            </WrapperCapacites>
            <WrapperQualites
              onClick={() => {
                window.location = "/OffreurDeCompetence/Qualites/Qualites";
              }}
            >
              <Title>Qualité(s)</Title>
              {Qualite.map((Quali) => (
                <div key={Quali.id}>
                  <Text>{Quali.Qualite}</Text>
                </div>
              ))}
            </WrapperQualites>
            <WrapperTalents
              onClick={() => {
                window.location = "/OffreurDeCompetence/Talents/Talents";
              }}
            >
              <Title>Talent(s)</Title>
              {Talent.map((Tal) => (
                <div key={Tal.id}>
                  <Text>{Tal.Talent}</Text>
                </div>
              ))}
            </WrapperTalents>
            <WrapperValeurs
              onClick={() => {
                window.location = "/OffreurDeCompetence/Valeurs/Valeurs";
              }}
            >
              <Title>Valeur(s)</Title>
              {Valeur.map((Val) => (
                <div key={Val.id}>
                  <Text>{Val.Valeur}</Text>
                </div>
              ))}
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
