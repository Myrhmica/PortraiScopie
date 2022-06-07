import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../Header/Header2";
import axios from 'axios';

import WrapperTitle, {
  WrapperProgression,
  DividerTop,
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
  Title,
  TextTop,
  TextBottom,
  WrapperTop,
  TitleTop,
  TitleColor,
  TitleImp,
  Text,
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
} from "./Techniques.style";

import Idea from "../../../public/image/idea.png";
import Plus from "../../../public/image/plus.png";

const Techniques = () => {
  
  const [Technique, setTechnique] = useState('');
  const [erreur, setErreur] = useState('');
  const [Techniques, setTechniques] = useState([]);
  const [id, setId] = useState(null);

  const submitform = (e) => {
        e.preventDefault();
        if (id === null) {
            if(Techniques.length === 5){
                setErreur('Vous ne pouvez pas ajouter plus de 5 Techniques');
            } else {
                setErreur('');
                let Tech = {
                    id: Techniques.length,
                    Technique: Technique,
                }
                setTechniques([...Techniques, Tech]);
                setTechnique('');
            }
        } else {
            let Tech = {
                id: id,
                Technique: Technique,
            }
            setTechniques(Techniques.map(m => m.id === id ? Tech : m));
            setTechnique('');
            setId(null);
        }
    };

    const updateTechnique = (id) => {
        setTechnique(Techniques[id].Technique);
        setId(id);
    };

    const removeTechnique = (id) => {
        setTechniques(Techniques.filter(m => m.id !== id));
    };

    const nextStep = () => {
        if(Techniques.length === 0){
            setErreur('Vous devez ajouter au moins une Technique');
        } else {
            setErreur('');
            localStorage.setItem('Technique', JSON.stringify(Techniques));
            console.log(localStorage.getItem('Technique'));
        }
      };

      const listTechnique = () => {
          if (Techniques.length === 0) {
              return <Text>Vous n`avez pas encore ajouté de tâche</Text>
          } else {
              return (
                  <div>
                      {Techniques.map(Tech => (
                            <div key={Tech.id}>
                                <Text> Technique : {Tech.Technique}</Text>
                                <ButtonLink onClick={() => updateTechnique(Tech.id)}>
                                    <a>
                                        <Text>Modifier</Text>
                                    </a>
                                </ButtonLink>
                                <ButtonLink onClick={()=> removeTechnique(Tech.id)}>
                                    <a>
                                        <Text>Supprimer</Text>
                                    </a>
                                </ButtonLink>
                            </div>
                      ))}
                  </div>
              )
          }
      };

  return (
    <>
      <Header />
      <WrapperTitle>
        <WrapperTop>
          <TitleTop>Mon PortraiScopie</TitleTop>
          <TitleColor>{/*Compétence choisie*/}</TitleColor>
        </WrapperTop>
      </WrapperTitle>

      <Wrapper>
        <WrapperContent>
          <WrapperAll>
            <WrapperProgression>
              <Wrapper1>
                <TextTop>1</TextTop>
                <DividerTop></DividerTop>
                <TextBottom>Métier</TextBottom>
              </Wrapper1>
              <Wrapper2>
                <DividerTop></DividerTop>
                <TextTop>2</TextTop>
                <DividerTop></DividerTop>
                <TextBottom>Activités</TextBottom>
              </Wrapper2>
              <Wrapper3>
                <DividerTop></DividerTop>
                <TextTop>3</TextTop>
                <DividerTop></DividerTop>
                <TextBottom>Tâches</TextBottom>
              </Wrapper3>
              <Wrapper4>
                <DividerTop></DividerTop>
                <TextTop>4</TextTop>
                <DividerTop></DividerTop>
                <TextBottom>Techniques</TextBottom>
              </Wrapper4>
              <Wrapper5>
                <DividerTop></DividerTop>
                <TextTop>5</TextTop>
                <DividerTop></DividerTop>
                <TextBottom>Technologies</TextBottom>
              </Wrapper5>
              <Wrapper6>
                <DividerTop></DividerTop>
                <TextTop>6</TextTop>
                <DividerTop></DividerTop>
                <TextBottom>Diplômes</TextBottom>
              </Wrapper6>
              <Wrapper7>
                <DividerTop></DividerTop>
                <TextTop>7</TextTop>
                <DividerTop></DividerTop>
                <TextBottom>Capacités</TextBottom>
              </Wrapper7>
              <Wrapper8>
                <DividerTop></DividerTop>
                <TextTop>8</TextTop>
                <DividerTop></DividerTop>
                <TextBottom>Qualités</TextBottom>
              </Wrapper8>
              <Wrapper9>
                <DividerTop></DividerTop>
                <TextTop>9</TextTop>
                <DividerTop></DividerTop>
                <TextBottom>Valeurs</TextBottom>
              </Wrapper9>
              <Wrapper10>
                <DividerTop></DividerTop>
                <TextTop>10</TextTop>
                <DividerTop></DividerTop>
                <TextBottom>Talents</TextBottom>
              </Wrapper10>
              <Wrapper11>
                <DividerTop></DividerTop>
                <TextTop>11</TextTop>
                <TextBottom>{"Centre d'intérêt"}</TextBottom>
              </Wrapper11>
            </WrapperProgression>

            <WrapperImp>
              <TitleImp>Techniques</TitleImp>
              <WrapperImage>
                <Image src={Idea} alt={"Idée"} quality={100} />
              </WrapperImage>
            </WrapperImp>
            <Divider></Divider>
            <Title>Techniques pour cette compétence</Title>
            <WrapperMenuDeroulant>
              <form onSubmit={submitform}>
                    <input type="text" placeholder="exemple : Plombier" value={Technique} onChange={e => setTechnique(e.target.value)} required/>
                    <br />
                    <Text style={{ color: 'red', marginLeft: 26, }}>{erreur}</Text>
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
              {listTechnique()}
            <WrapperButton>
              <ButtonLinkPrec>
                <Link href="/OffreurDeCompetence/Taches/Tache">
                  <a>
                    <Text>Précédent</Text>
                  </a>
                </Link>
              </ButtonLinkPrec>
              <ButtonLink onClick={() => {nextStep()}}>
                <Link href="/OffreurDeCompetence/Technologies/Technologies">
                  <a>
                    <Text>Suivant</Text>
                  </a>
                </Link>
              </ButtonLink>
            </WrapperButton>
          </WrapperAll>
        </WrapperContent>
      </Wrapper>
    </>
  );
};

export default Techniques;
