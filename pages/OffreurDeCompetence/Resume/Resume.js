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
  WrapperTechnologies,
  WrapperDiplomes,
  WrapperMetiers,
  WrapperCompetence,
  Competences,
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
  const [Centre_interet, setCentre_interet] = useState([]);
  const [Activite, setActivite] = useState([]);
  const [Capacite, setCapacite] = useState([]);
  const [Qualite, setQualite] = useState([]);
  const [Diplome, setDiplome] = useState([]);
  const [Talent, setTalent] = useState([]);
  const [Technique, setTechnique] = useState([]);
  const [Technologie, setTechnologie] = useState([]);
  const [Valeur, setValeur] = useState([]);
  const [Tache, setTache] = useState([]);
  const [Metier, setMetier] = useState([]);
  const [Competence, setCompetence] = useState([]);

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
            <WrapperActivite>
              <Title>Activites</Title>
              {Activite.map((Acti) => (
                <div key={Acti.id}>
                  <Text>{Acti.Activite}</Text>
                </div>
              ))}
            </WrapperActivite>
            <WrapperTaches>
              <Title>Tâches</Title>
              {Tache.map((Tach) => (
                <div key={Tach.id}>
                  <Text>{Tach.Tache}</Text>
                </div>
              ))}
            </WrapperTaches>
            <WrapperTechnologies>
              <Title>Technologies / Techniques</Title>
              <Text>
                Technologie :
                {Technologie.map((Tech) => (
                  <div key={Tech.id}>
                    <Text>{Tech.Technologie}</Text>
                  </div>
                ))}
              </Text>
              <br />
              <Text>
                Technique :
                {Technique.map((Tech) => (
                  <div key={Tech.id}>
                    <Text>{Tech.Technique}</Text>
                  </div>
                ))}
              </Text>
            </WrapperTechnologies>
            <WrapperDiplomes>
              <Title>Diplômes / Habilitations / Certificats</Title>
              {Diplome.map((Dip) => (
                <div key={Dip.id}>
                  <Text>{Dip.Diplome}</Text>
                </div>
              ))}
            </WrapperDiplomes>
          </WrapperTop>
          <WrapperMiddle>
            <WrapperMetiers>
              <Title>Métiers</Title>
              {Metier.map((Metier) => (
                <div key={Metier.id}>
                  <Text>{Metier.metier}</Text>
                </div>
              ))}
            </WrapperMetiers>
            <WrapperCompetence>
              <Competences>
                {Competence.map((Comp) => (
                  <div key={Comp.id}>
                    <Text>{Comp.Competence}</Text>
                  </div>
                ))}
              </Competences>
            </WrapperCompetence>
            <WrapperCentre_interet>
              <Title>{"Centres d'intérêts"}</Title>
              {Centre_interet.map((CentreInt) => (
                <div key={CentreInt.id}>
                  <Text>{CentreInt.Centre_interet}</Text>
                </div>
              ))}
            </WrapperCentre_interet>
          </WrapperMiddle>
          <WrapperBottom>
            <WrapperCapacites>
              <Title>Capacités</Title>
              {Capacite.map((Cap) => (
                <div key={Cap.id}>
                  <Text>{Cap.Capacite}</Text>
                </div>
              ))}
            </WrapperCapacites>
            <WrapperQualites>
              <Title>Qualités</Title>
              {Qualite.map((Quali) => (
                <div key={Quali.id}>
                  <Text>{Quali.Qualite}</Text>
                </div>
              ))}
            </WrapperQualites>
            <WrapperTalents>
              <Title>Talents</Title>
              {Talent.map((Tal) => (
                <div key={Tal.id}>
                  <Text>{Tal.Talent}</Text>
                </div>
              ))}
            </WrapperTalents>
            <WrapperValeurs>
              <Title>Valeurs</Title>
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
