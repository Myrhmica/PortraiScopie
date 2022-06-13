import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../Header/Header2";
import axios from "axios";

import WrapperTitle, {
  WrapperProgression,
  DividerTop1,
  DividerTop2,
  DividerTop3,
  DividerTop4,
  DividerTop5,
  DividerTop6,
  DividerTop7,
  DividerTop8,
  DividerTop9,
  DividerTop10,
  DividerTop11,
  Wrapper1,
  Wrapper2,
  Wrapper3,
  Wrapper4,
  Wrapper5,
  Wrapper6,
  Wrapper7,
  Wrapper8,
  Wrapper9,
  Wrapper10,
  Wrapper11,
  TextTop1,
  TextTop2,
  TextTop3,
  TextTop4,
  TextTop5,
  TextTop6,
  TextTop7,
  TextTop8,
  TextTop9,
  TextTop10,
  TextTop11,
  TextBottom,
  WrapperTop,
  TitleTop,
  TitleColor,
  TitleImp,
  Text,
  Title,
  Wrapper,
  WrapperAll,
  WrapperImp,
  WrapperImage,
  Divider,
  WrapperContent,
  WrapperMenuDeroulant,
  WrapperAjout,
  TextAjout,
  WrapperButton,
  ButtonLinkPrec,
  ButtonLink,
  WrapperAdd,
  WrapperAllAdd,
  WrapperTextI,
  TextI,
  WrapperButtonAdd,
  ButtonLinkAdd,
  ButtonLinkMS,
} from "./Techniques.style";

import Idea from "../../../public/image/idea.png";
import Plus from "../../../public/image/plus.png";

const Techniques = () => {
  const [Technique, setTechnique] = useState("");
  const [erreur, setErreur] = useState("");
  const [Techniques, setTechniques] = useState([]);
  const [id, setId] = useState(null);

  const submitform = (e) => {
    e.preventDefault();
    if (id === null) {
      if (Techniques.length === 5) {
        setErreur("Vous ne pouvez pas ajouter plus de 5 Techniques");
      } else {
        setErreur("");
        let Tech = {
          id: Techniques.length,
          Technique: Technique,
        };
        setTechniques([...Techniques, Tech]);
        setTechnique("");
      }
    } else {
      let Tech = {
        id: id,
        Technique: Technique,
      };
      setTechniques(Techniques.map((m) => (m.id === id ? Tech : m)));
      setTechnique("");
      setId(null);
    }
  };

  const updateTechnique = (id) => {
    setTechnique(Techniques[id].Technique);
    setId(id);
  };

  const removeTechnique = (id) => {
    setTechniques(Techniques.filter((m) => m.id !== id));
  };

  const nextStep = () => {
    if (Techniques.length === 0) {
      setErreur("Vous devez ajouter au moins une Technique");
      localStorage.setItem("Technique", JSON.stringify(Techniques));
      console.log(localStorage.getItem("Technique"));
    } else {
      setErreur("");
      localStorage.setItem("Technique", JSON.stringify(Techniques));
      console.log(localStorage.getItem("Technique"));
    }
  };

  const listTechnique = () => {
    if (Techniques.length === 0) {
    } else {
      return (
        <WrapperAdd>
          {Techniques.map((Tech) => (
            <div key={Tech.id}>
              <WrapperAllAdd>
                <WrapperTextI>
                  <TextI>{Tech.Technique}</TextI>
                </WrapperTextI>
                <WrapperButtonAdd>
                  <ButtonLinkMS onClick={() => updateTechnique(Tech.id)}>
                    <a>
                      <Text>Modifier</Text>
                    </a>
                  </ButtonLinkMS>
                  <ButtonLinkMS onClick={() => removeTechnique(Tech.id)}>
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
          <WrapperProgression>
            <Wrapper1>
              <TextTop1 id="p1">1</TextTop1>
              <DividerTop1></DividerTop1>
              <Link href="/OffreurDeCompetence/Metier/Metier">
                <a>
                  <TextBottom>Métier(s)</TextBottom>
                </a>
              </Link>
            </Wrapper1>

            <Wrapper2>
              <DividerTop2></DividerTop2>
              <TextTop2>2</TextTop2>
              <DividerTop3></DividerTop3>
              <Link href="/OffreurDeCompetence/Activites/Activites">
                <a>
                  <TextBottom>Activité(s)</TextBottom>
                </a>
              </Link>
            </Wrapper2>

            <Wrapper3>
              <DividerTop3></DividerTop3>
              <TextTop3>3</TextTop3>
              <DividerTop4></DividerTop4>
              <Link href="/OffreurDeCompetence/Taches/Taches">
                <a>
                  <TextBottom>Tâche(s)</TextBottom>
                </a>
              </Link>
            </Wrapper3>

            <Wrapper4>
              <DividerTop4></DividerTop4>
              <TextTop4>4</TextTop4>
              <DividerTop5></DividerTop5>
              <Link href="/OffreurDeCompetence/Techniques/Techniques">
                <a>
                  <TextBottom>Technique(s)</TextBottom>
                </a>
              </Link>
            </Wrapper4>

            <Wrapper5>
              <DividerTop5></DividerTop5>
              <TextTop5>5</TextTop5>
              <DividerTop6></DividerTop6>
              <Link href="/OffreurDeCompetence/Technologies/Technologies">
                <a>
                  <TextBottom>Technologie(s)</TextBottom>
                </a>
              </Link>
            </Wrapper5>

            <Wrapper6>
              <DividerTop6></DividerTop6>
              <TextTop6>6</TextTop6>
              <DividerTop7></DividerTop7>
              <Link href="/OffreurDeCompetence/Diplomes/Diplomes">
                <a>
                  <TextBottom>Diplôme(s)</TextBottom>
                </a>
              </Link>
            </Wrapper6>

            <Wrapper7>
              <DividerTop7></DividerTop7>
              <TextTop7>7</TextTop7>
              <DividerTop8></DividerTop8>
              <Link href="/OffreurDeCompetence/Capacites/Capacites">
                <a>
                  <TextBottom>Capacité(s)</TextBottom>
                </a>
              </Link>
            </Wrapper7>

            <Wrapper8>
              <DividerTop8></DividerTop8>
              <TextTop8>8</TextTop8>
              <DividerTop9></DividerTop9>
              <Link href="/OffreurDeCompetence/Qualites/Qualites">
                <a>
                  <TextBottom>Qualité(s)</TextBottom>
                </a>
              </Link>
            </Wrapper8>

            <Wrapper9>
              <DividerTop9></DividerTop9>
              <TextTop9>9</TextTop9>
              <DividerTop10></DividerTop10>
              <Link href="/OffreurDeCompetence/Valeurs/Valeurs">
                <a>
                  <TextBottom>Valeur(s)</TextBottom>
                </a>
              </Link>
            </Wrapper9>

            <Wrapper10>
              <DividerTop10></DividerTop10>
              <TextTop10>10</TextTop10>
              <DividerTop11></DividerTop11>
              <Link href="/OffreurDeCompetence/Talents/Talents">
                <a>
                  <TextBottom>Talent(s)</TextBottom>
                </a>
              </Link>
            </Wrapper10>

            <Wrapper11>
              <DividerTop11></DividerTop11>
              <TextTop11>11</TextTop11>
              <Link href="/OffreurDeCompetence/Centre_interet/Centre_interet">
                <a>
                  <TextBottom>{"Centre(s) d'intérêt"}</TextBottom>
                </a>
              </Link>
            </Wrapper11>
          </WrapperProgression>

          <WrapperImp>
            <TitleImp>Technique(s) en lien avec cette compétence</TitleImp>
            <WrapperImage>
              <Image src={Idea} alt={"Idée"} quality={100} />
            </WrapperImage>
          </WrapperImp>
          <Divider></Divider>
          <WrapperContent>
            <Title>Citer 1 à 5 techniques</Title>
            <WrapperMenuDeroulant>
              <form onSubmit={submitform}>
                <input
                  type="text"
                  placeholder="Ex : Soudage MIG-MAG"
                  value={Technique}
                  onChange={(e) => setTechnique(e.target.value)}
                  required
                />
                <br />
                <Text style={{ color: "red", marginLeft: 26 }}>{erreur}</Text>
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
            {listTechnique()}
            <WrapperButton>
              <ButtonLinkPrec
                onClick={() => {
                  window.location = "/OffreurDeCompetence/Taches/Taches";
                }}
              >
                Précédent
              </ButtonLinkPrec>
              <ButtonLink
                onClick={() => {
                  nextStep();
                  window.location =
                    "/OffreurDeCompetence/Technologies/Technologies";
                }}
              >
                Suivant
              </ButtonLink>
            </WrapperButton>
          </WrapperContent>
        </WrapperAll>
      </Wrapper>
    </>
  );
};

export default Techniques;
