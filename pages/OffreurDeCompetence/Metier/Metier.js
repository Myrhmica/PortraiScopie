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
  TitleColor,
  Text,
  TextAjout,
  Wrapper,
  WrapperAll,
  WrapperImp,
  Divider,
  WrapperContent,
  WrapperMenuDeroulant,
  WrapperAjout,
  ButtonLink,
  ButtonLinkPrec,
  WrapperButton,
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
      if (Metiers.length === 5) {
        setErreur("Vous ne pouvez pas ajouter plus de 5 métiers");
      } else {
        setErreur("");
        let Metier = {
          id: Metiers.length,
          metier: metier,
          debut: debut,
          fin: fin,
        };
        setMetiers([...Metiers, Metier]);
        setMetier("");
        setDebut("");
        setFin("");
      }
    } else {
      let Metier = {
        id: id,
        metier: metier,
        debut: debut,
        fin: fin,
      };
      setMetiers(Metiers.map((m) => (m.id === id ? Metier : m)));
      setMetier("");
      setDebut("");
      setFin("");
      setId(null);
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
    if (Metiers.length === 0) {
      setErreur("Vous devez ajouter au moins un métier");
    } else {
      setErreur("");
      localStorage.setItem("metiers", JSON.stringify(Metiers));
      console.log(localStorage.getItem("metiers"));
    }
  };

  const listMetier = () => {
    if (Metiers.length === 0) {
      return <Text>Vous n`avez pas encore ajouté de métiers</Text>;
    } else {
      return (
        <div>
          {Metiers.map((met) => (
            <div key={met.id}>
              <Text> Métier : {met.metier}</Text>
              <Text> Debut: {met.debut}</Text>
              <Text> Fin: {met.fin}</Text>
              <ButtonLink onClick={() => updateMetier(met.id)}>
                <a>
                  <Text>Modifier</Text>
                </a>
              </ButtonLink>
              <ButtonLink onClick={() => removeMetier(met.id)}>
                <a>
                  <Text>Supprimer</Text>
                </a>
              </ButtonLink>
            </div>
          ))}
        </div>
      );
    }
  };

  const [Competence, setCompetence] = useState([]);
  useEffect(() => {
    setCompetence(JSON.parse(localStorage.getItem("Competence")));
    console.log(typeof(Competence));
}, []);

  return (
    <>
      <WrapperALL>
        <Header />
        <WrapperTitle>
          <WrapperTop>
            <TitleTop>Mon PortraiScopie</TitleTop>
            <TitleColor>
            {Competence.map((Comp) => (
                  <div key={Comp.id}>
                    <Text>{Comp.Competence}</Text>
                  </div>
                ))}
            </TitleColor>
          </WrapperTop>
        </WrapperTitle>

        <Wrapper>
          <WrapperAll>
            <Progression></Progression>
            <WrapperImp>
              <TitleImp>Métiers</TitleImp>
              <WrapperImage>
                <Image src={Idea} alt={"Myrhmica"} quality={100} />
              </WrapperImage>
            </WrapperImp>
            <Divider></Divider>

            <WrapperContent>
              <Title>Le metier exercé pour cette compétence</Title>
              <WrapperMenuDeroulant>
                <form onSubmit={submitform}>
                  <input
                    type="text"
                    placeholder="exemple : Plombier"
                    value={metier}
                    onChange={(e) => setMetier(e.target.value)}
                    required
                  />
                  <br />
                  <Text style={{ color: "red", marginLeft: 26 }}>{erreur}</Text>
                  <Title>Date de début</Title>
                  <input
                    type="date"
                    placeholder="01/01/2000"
                    value={debut}
                    onChange={(e) => setDebut(e.target.value)}
                    required
                  />
                  <br />
                  <Title>Date de fin</Title>
                  <input
                    type="date"
                    placeholder="07/08/2003"
                    value={fin}
                    onChange={(e) => setFin(e.target.value)}
                    required
                  />
                  <br />
                  <WrapperAjout>
                    <ButtonLink type="submit" value="Ajouter">
                      <a>
                        <Image src={Plus} alt={"PortraiScopie"} quality={100} />
                        <Text>Ajouter</Text>
                      </a>
                    </ButtonLink>
                  </WrapperAjout>
                </form>
              </WrapperMenuDeroulant>
              {listMetier()}
              <WrapperButton>
                <ButtonLinkPrec>
                  <Link href="/OffreurDeCompetence/Competence/Competence">
                    <a>
                      <Text>Précédent</Text>
                    </a>
                  </Link>
                </ButtonLinkPrec>
                <ButtonLink
                  onClick={() => {
                    nextStep();
                  }}
                >
                  <Link href="/OffreurDeCompetence/Activites/Activites">
                    <a>
                      <Text>Suivant</Text>
                    </a>
                  </Link>
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
