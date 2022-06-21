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
    if (Competence.length === 0) {
    } else {
      setErreur("Merci d'avoir renseigner ce champ");
      setId(id);
      let Comp = {
        id: Competences.length,
        Competence: Competence,
      };
      setCompetences(Competences.push(Comp));
      localStorage.setItem("Competence", JSON.stringify(Competences));
      console.log(localStorage.getItem("Competence"));
      setCompetence("");
    }
  };

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

  const ValeurOther = () => {
    if (metiers == undefined || metiers.length === 0) {
      metiers = [];
      localStorage.setItem("metiers", JSON.stringify(metiers));
      console.log(localStorage.getItem("metiers"));
    } else {
    }

    if (Activite == undefined || Activite.length === 0) {
      Activite = [];
      localStorage.setItem("Activite", JSON.stringify(Activite));
      console.log(localStorage.getItem("Activite"));
    } else {
    }

    if (Tache == undefined || Tache.length === 0) {
      Tache = [];
      localStorage.setItem("Tache", JSON.stringify(Tache));
      console.log(localStorage.getItem("Tache"));
    } else {
    }

    if (Technique == undefined || Technique.length === 0) {
      Technique = [];
      localStorage.setItem("Technique", JSON.stringify(Technique));
      console.log(localStorage.getItem("Technique"));
    } else {
    }

    if (Technologie == undefined || Technologie.length === 0) {
      Technologie = [];
      localStorage.setItem("Technologie", JSON.stringify(Technologie));
      console.log(localStorage.getItem("Technologie"));
    } else {
    }

    if (Diplome == undefined || Diplome.length === 0) {
      Diplome = [];
      localStorage.setItem("Diplome", JSON.stringify(Diplome));
      console.log(localStorage.getItem("Diplome"));
    } else {
    }

    if (Capacite == undefined || Capacite.length === 0) {
      Capacite = [];
      localStorage.setItem("Capacite", JSON.stringify(Capacite));
      console.log(localStorage.getItem("Capacite"));
    } else {
    }

    if (Qualite == undefined || Qualite.length === 0) {
      Qualite = [];
      localStorage.setItem("Qualite", JSON.stringify(Qualite));
      console.log(localStorage.getItem("Qualite"));
    } else {
    }

    if (Valeur == undefined || Valeur.length === 0) {
      Valeur = [];
      localStorage.setItem("Valeur", JSON.stringify(Valeur));
      console.log(localStorage.getItem("Valeur"));
    } else {
    }

    if (Talent == undefined || Talent.length === 0) {
      Talent = [];
      localStorage.setItem("Talent", JSON.stringify(Talent));
      console.log(localStorage.getItem("Talent"));
    } else {
    }

    if (Centre_interet == undefined || Centre_interet.length === 0) {
      Centre_interet = [];
      localStorage.setItem("Centre_interet", JSON.stringify(Centre_interet));
      console.log(localStorage.getItem("Centre_interet"));
    } else {
    }
  };

  const nextStep = () => {
    if (Competence.length === 0) {
      setErreur("Veuillez renseigner ce champ");
    } else {
      ValeurOther();
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
                <Text style={{ color: "red", marginLeft: 26 }}>{erreur}</Text>
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
                    Valider
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
