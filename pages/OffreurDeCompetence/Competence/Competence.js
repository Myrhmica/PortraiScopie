import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header2 from "../../Header/Header2";
import Footer from "../../Footer/Footer";

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

  const [metiers, setMetiers] = useState([]);
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
    setMetiers(JSON.parse(localStorage.getItem("metiers")));
  }, []);

  const submitform = (e) => {
    e.preventDefault();
    if (Competence.length === 0) {
    } else {
      setErreur("Merci d'avoir renseigner ce champ");
      let Comp = {
        id: Competences.length,
        Competence: Competence,
      };
      setCompetences(Competences.push(Comp));
      localStorage.setItem("Competence", JSON.stringify(Competences));
      console.log(localStorage.getItem("Competence"));
      setCompetence("");

      if (metiers.length === 0) {
        localStorage.setItem("metiers", JSON.stringify(metiers));
        console.log(localStorage.getItem("metiers"));
      }

      if (Activite.length === 0) {
        localStorage.setItem("Activite", JSON.stringify(Activite));
        console.log(localStorage.getItem("Activite"));
      }

      if (Tache.length === 0) {
        localStorage.setItem("Tache", JSON.stringify(Tache));
        console.log(localStorage.getItem("Tache"));
      }

      if (Technique.length === 0) {
        localStorage.setItem("Technique", JSON.stringify(Technique));
        console.log(localStorage.getItem("Technique"));
      }

      if (Technologie.length === 0) {
        localStorage.setItem("Technologie", JSON.stringify(Technologie));
        console.log(localStorage.getItem("Technologie"));
      }

      if (Diplome.length === 0) {
      } else {
        localStorage.setItem("Diplome", JSON.stringify(Diplome));
        console.log(localStorage.getItem("Diplome"));
      }

      if (Capacite.length === 0) {
      } else {
        localStorage.setItem("Capacite", JSON.stringify(Capacite));
        console.log(localStorage.getItem("Capacite"));
      }

      if (Qualite.length === 0) {
      } else {
        localStorage.setItem("Qualite", JSON.stringify(Qualite));
        console.log(localStorage.getItem("Qualite"));
      }

      if (Valeur.length === 0) {
        localStorage.setItem("Valeur", JSON.stringify(Valeur));
        console.log(localStorage.getItem("Valeur"));
      }

      if (Talent.length === 0) {
        localStorage.setItem("Talent", JSON.stringify(Talent));
        console.log(localStorage.getItem("Talent"));
      }

      if (Centre_interet.length === 0) {
        localStorage.setItem("Centre_interet", JSON.stringify(Centre_interet));
        console.log(localStorage.getItem("Centre_interet"));
      }
    }
  };

  const nextStep = () => {
    if (Competence.length === 0) {
      setErreur("Veuillez renseigner ce champ");
    } else {
      window.location = "/OffreurDeCompetence/Metier/Metier";
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
              vous excellez !
            </Text>
            <WrapperInput>
              <form onSubmit={submitform}>
                <input
                  type="text"
                  placeholder="Ex : Manager une équipe"
                  value={Competence}
                  onChange={(e) => setCompetence(e.target.value)}
                />
                <br />
            <WrapperButton>
              <ButtonLinkLeft>
                <Link href="/OffreurDeCompetence/Competence/Competence">
                  <a>
                    <TextBottom>Enregistrer et Quitter</TextBottom>
                  </a>
                </Link>
              </ButtonLinkLeft>
              <ButtonLinkRight
                type="submit"
                value={Competence}
                onClick={() => {
                  nextStep();
                }}
              >
                <Link href="/OffreurDeCompetence/Metier/Metier">
                    <TextBottom>Valider</TextBottom>
                </Link>
              </ButtonLinkRight>
            </WrapperButton>
            </form>
            </WrapperInput>
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