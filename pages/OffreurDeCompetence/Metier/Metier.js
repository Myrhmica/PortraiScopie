import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../../Header/Header2";
import Footer from "../../Footer/Footer";
import Image from "next/image";
import Progression from "../../BarreDeProgression/Progression";
import axios from "axios";

import WrapperALL, {
  WrapperTitle,
  WrapperTop,
  Title,
  TitleImp,
  WrapperImage,
  TitleTop,
  Text,
  WrapperTextI,
  TextI,
  Wrapper,
  WrapperAll,
  WrapperImp,
  Divider,
  WrapperContent,
  WrapperMenuDeroulant,
  WrapperMetier,
  WrapperDebut,
  WrapperFin,
  WrapperAjout,
  WrapperAdd,
  WrapperButtonAdd,
  ButtonLink,
  ButtonLinkAdd,
  ButtonLinkMS,
  ButtonLinkPrec,
  WrapperButton,
  WrapperAllAdd,
} from "./Metier.style";

import Idea from "../../../public/image/idea.png";
import Plus from "../../../public/image/plus.png";

const Metier = () => {
  const [debut, setDebut] = useState("");
  const [fin, setFin] = useState("");
  const [metier, setMetier] = useState("");
  const [erreur, setErreur] = useState("");
  const [Metiers, setMetiers] = useState([]);
  const [id, setId] = useState(null);

  const submitform = (e) => {
    e.preventDefault();

    if (id === null) {
      Metiers = JSON.parse(window.localStorage.getItem("metiers"));
      if (Metiers.length === 5) {
        setErreur("Vous avez atteint le nombre maximum de métiers");
      } else {
        setErreur("");
        let ListeMetiers = Metiers.length;
        switch (ListeMetiers) {
          case 0:
            console.log("Metiers.length == 0");
            id = 1;
            break;
          case 1:
            console.log("Metiers.length == 1");
            id = 2;
            if (removeMetier(Metiers[id])) {
              console.log("Remove");
              id = id - 1;
            }
            break;
          case 2:
            console.log("Metiers.length == 2");
            id = 3;
            break;
          case 3:
            console.log("Metiers.length == 3");
            id = 4;
            break;
          case 4:
            console.log("Metiers.length == 4");
            id = 5;
            break;
        }
        let met = {
          id: id,
          metier: metier,
          debut: debut,
          fin: fin,
        };
        setMetiers(Metiers.push(met));
        localStorage.setItem("metiers", JSON.stringify(Metiers));
        console.log(localStorage.getItem("metiers"));
        setMetier("");
        setDebut("");
        setFin("");
      }
    }
  };

  let use = false;

  const updateMetier = async (id, metier, debut, fin) => {
    Metiers = JSON.parse(window.localStorage.getItem("metiers"));
    if (use == true) {
      console.log("Metiers Before");
      console.log(Metiers);
      setMetier(metier);
      setDebut(debut);
      setFin(fin);
      setId(id);
      console.log(localStorage.getItem("metiers"));

      let met = {
        id: id,
        metier: metier,
        debut: debut,
        fin: fin,
      };
      setMetiers(Metiers.push(met));
      console.log(id);
      Metiers.splice((id, metier, debut, fin), 0);
      localStorage.setItem("metiers", JSON.stringify(Metiers));
      console.log(met);
      console.log("Metiers After");
      console.log(Metiers);
    }
  };

  const removeMetier = (id) => {
    if (use == true) {
      Metiers = JSON.parse(window.localStorage.getItem("metiers"));
      console.log("Before remove");
      console.log(Metiers);
      Metiers.splice(id - 1, 1);
      if (Metiers.length == 1) {
        Metiers.splice(0, 1);
      }
      localStorage.setItem("metiers", JSON.stringify(Metiers));
      console.log("After remove");
      console.log(Metiers);
      return;
    }
  };

  const nextStep = () => {
    if (Metiers.length === 0) {
      setErreur("Veuillez renseigner ce champ");
    } else {
      setErreur("");
      window.location = "/OffreurDeCompetence/Activites/Activites";
    }
  };

  const listMetier = () => {
    if (Metiers.length === 0) {
      console.log("Liste des Metiers = 0");
    } else {
      let Metiers = JSON.parse(window.localStorage.getItem("metiers"));
      console.log(Metiers);
      let ListeMetiers = Metiers[id];
      console.log(ListeMetiers);

      return (
        <WrapperAdd>
          {Metiers.map((met) => (
            <div key={met.id}>
              <WrapperAllAdd>
                <WrapperTextI>
                  <TextI>{met.metier}</TextI>
                  <TextI>{met.debut}</TextI>
                  <TextI>{met.fin}</TextI>
                </WrapperTextI>
                <WrapperButtonAdd>
                  <ButtonLinkMS
                    onClick={() => {
                      if (use == true) {
                      } else {
                        use = true;
                        updateMetier(met.id, met.metier, met.debut, met.fin);
                      }
                    }}
                  >
                    <a>
                      <Text>Modifier</Text>
                    </a>
                  </ButtonLinkMS>
                  <ButtonLinkMS
                    onClick={() => {
                      if (use == true) {
                      } else {
                        use = true;
                        removeMetier(met.id);
                      }
                    }}
                  >
                    <a>
                      <Text>Supprimer</Text>
                    </a>
                  </ButtonLinkMS>
                </WrapperButtonAdd>
              </WrapperAllAdd>
            </div>
          ))}
        </WrapperAdd>
      );
    }
  };

  const [Competence, setCompetence] = useState([]);
  useEffect(() => {
    setCompetence(JSON.parse(localStorage.getItem("Competence")));
  }, []);

  return (
    <>
      <WrapperALL>
        <Header />
        <WrapperTitle>
          <WrapperTop>
            {Competence.map((Comp) => (
              <div key={Comp.id}>
                <TitleTop>{Comp.Competence}</TitleTop>
              </div>
            ))}
          </WrapperTop>
        </WrapperTitle>

        <Wrapper>
          <WrapperAll>
            <Progression></Progression>
            <WrapperImp>
              <TitleImp>Métier(s) en lien avec cette compétence</TitleImp>
              <WrapperImage>
                <Image src={Idea} alt={"Myrhmica"} quality={100} />
              </WrapperImage>
            </WrapperImp>
            <Divider></Divider>

            <WrapperContent>
              <Title>Citez 1 à 5 métiers</Title>
              <WrapperMenuDeroulant>
                <form onSubmit={submitform}>
                  <WrapperMetier>
                    <input
                      type="text"
                      placeholder="Ex : Plombier"
                      value={metier}
                      onChange={(e) => setMetier(e.target.value)}
                      required
                    />
                    <br />
                    <Text style={{ color: "red", marginLeft: 26 }}>
                      {erreur}
                    </Text>
                  </WrapperMetier>
                  <WrapperDebut>
                    <Title>Date de début</Title>
                    <input
                      type="date"
                      value={debut}
                      onChange={(e) => setDebut(e.target.value)}
                      required
                    />
                    <br />
                  </WrapperDebut>
                  <WrapperFin>
                    <Title>Date de fin</Title>
                    <input
                      type="date"
                      value={fin}
                      onChange={(e) => setFin(e.target.value)}
                      required
                    />
                    <br />
                  </WrapperFin>
                  <WrapperAjout>
                    <ButtonLinkAdd
                      type="submit"
                      value="Ajouter"
                      onClick={submitform}
                    >
                      <a>
                        <Image src={Plus} alt={"PortraiScopie"} quality={100} />
                        <Text>Ajouter</Text>
                      </a>
                    </ButtonLinkAdd>
                  </WrapperAjout>
                </form>
              </WrapperMenuDeroulant>
              {listMetier()}
              <WrapperButton>
                <ButtonLinkPrec
                  onClick={() => {
                    window.location =
                      "/OffreurDeCompetence/Competence/Competence";
                  }}
                >
                  Précédent
                </ButtonLinkPrec>
                <ButtonLink
                  onClick={() => {
                    nextStep();
                  }}
                >
                  Suivant
                </ButtonLink>
              </WrapperButton>
            </WrapperContent>
          </WrapperAll>
        </Wrapper>
        <Footer />
      </WrapperALL>
    </>
  );
};

export default Metier;
