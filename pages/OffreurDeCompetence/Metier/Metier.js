import React, { useState, useEffect } from "react";
import Header from "../../Header/Header2";
import Footer from "../../Footer/Footer";
import Image from "next/image";
import Progression from "../../BarreDeProgression/Progression";

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

const Metier = async (e) => {
  
  const [debut, setDebut] = useState("");
  const [fin, setFin] = useState("");
  const [metier, setMetier] = useState("");
  const [erreur, setErreur] = useState("");
  const [Metiers, setMetiers] = useState([]);
  const [id, setId] = useState(null);


  const submitform = (e) => {
    e.preventDefault();
    if (id === null) {
      console.log(Metiers);
      if (Metiers.length === 5) {
        setErreur("Vous ne pouvez pas ajouter plus de 5 métiers");
      } else {
        setErreur("");
        let met = {
          id: Metiers.length,
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

  const updateMetier = (id) => {
    setMetier(Metiers[id].metier);
    setDebut(Metiers[id].debut);
    setFin(Metiers[id].fin);
    setId(id);
  };

  const removeMetier = (id) => {
    setMetiers(Metiers.filter((m) => m.id !== id));
  };

   const nextStep = () => {
    if (metier.length === 0) {
      setErreur("Veuillez renseigner ce champ");
    } else {
      setErreur("");
      window.location = "/OffreurDeCompetence/Activites/Activites";
    }
  };

  const listMetier = () => {
    if (Metiers.length === 0) {
      console.log("Liste des Metiers = 0");
      console.log(Metiers);
    } else {
      console.log(metier);
      console.log("Sa passe mais pas le .map");
      console.log(Metiers + " Pourquoi");
      Metiers = [Metiers];
      console.log(Metiers + " now");
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
                  <ButtonLinkMS onClick={() => updateMetier(met.id)}>
                    <a>
                      <Text>Modifier</Text>
                    </a>
                  </ButtonLinkMS>
                  <ButtonLinkMS onClick={() => removeMetier(met.id)}>
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
                    <ButtonLinkAdd type="submit" value="Ajouter">
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
