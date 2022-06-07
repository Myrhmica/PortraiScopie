import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../Header/Header2";

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
  TextTop,
  TextBottom,
  WrapperTop,
  TitleTop,
  TitleColor,
  Title,
  TitleImp,
  Text,
  TextAjout,
  Wrapper,
  WrapperAll,
  WrapperImp,
  WrapperImage,
  Divider,
  WrapperContent,
  WrapperMenuDeroulant,
  WrapperAjout,
  ButtonLink,
  ButtonLinkPrec,
  WrapperButton,
} from "./Technologies.style";

import Idea from "../../../public/image/idea.png";
import Plus from "../../../public/image/plus.png";

const Technologies = () => {
  
  const [Technologie, setTechnologie] = useState('');
  const [erreur, setErreur] = useState('');
  const [Technologies, setTechnologies] = useState([]);
  const [id, setId] = useState(null);

  const submitform = (e) => {
        e.preventDefault();
        if (id === null) {
            if(Technologies.length === 5){
                setErreur('Vous ne pouvez pas ajouter plus de 5 Technologie');
            } else {
                setErreur('');
                let Techno = {
                    id: Technologies.length,
                    Technologie: Technologie,
                }
                setTechnologies([...Technologies, Techno]);
                setTechnologie('');
            }
        } else {
            let Techno = {
                id: id,
                Technologie: Technologie,
            }
            setTechnologies(Technologies.map(m => m.id === id ? Techno : m));
            setTechnologie('');
            setId(null);
        }
    };

    const updateTechnologie = (id) => {
        setTechnologie(Technologies[id].Technologie);
        setId(id);
    };

    const removeTechnologie = (id) => {
        setTechnologies(Technologies.filter(m => m.id !== id));
    };

    const nextStep = () => {
        if(Technologies.length === 0){
            setErreur('Vous devez ajouter au moins une Technologie');
        } else {
            setErreur('');
            localStorage.setItem('Technologie', JSON.stringify(Technologies));
            console.log(localStorage.getItem('Technologie'));
        }
      };

      const listTechnologie = () => {
          if (Technologies.length === 0) {
              return <Text>Vous n`avez pas encore ajouté de Technologie</Text>
          } else {
              return (
                  <div>
                      {Technologies.map(Techno => (
                            <div key={Techno.id}>
                                <Text> Technologie : {Techno.Technologie}</Text>
                                <ButtonLink onClick={() => updateTechnologie(Techno.id)}>
                                    <a>
                                        <Text>Modifier</Text>
                                    </a>
                                </ButtonLink>
                                <ButtonLink onClick={()=> removeTechnologie(Techno.id)}>
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
              <TextBottom>Technologie</TextBottom>
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
            <TitleImp>Technologies</TitleImp>
            <WrapperImage>
              <Image src={Idea} alt={"Idée"} quality={100} />
            </WrapperImage>
          </WrapperImp>
          <Divider></Divider>
          <WrapperContent>
            <Title>Technologies pour cette compétence</Title>
            <WrapperMenuDeroulant>
              <form onSubmit={submitform}>
                    <input type="text" placeholder="exemple : Plombier" value={Technologie} onChange={e => setTechnologie(e.target.value)} required/>
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
            {listTechnologie()}
            <WrapperAjout>
            </WrapperAjout>
            <WrapperButton>
              <ButtonLinkPrec>
                <Link href="/OffreurDeCompetence/Techniques/Techniques">
                  <a>
                    <Text>Précédent</Text>
                  </a>
                </Link>
              </ButtonLinkPrec>
              <ButtonLink onClick={() => {nextStep()}}>
                <Link href="/OffreurDeCompetence/Diplomes/Diplomes">
                  <a>
                    <Text>Suivant</Text>
                  </a>
                </Link>
              </ButtonLink>
            </WrapperButton>
          </WrapperContent>
        </WrapperAll>
      </Wrapper>
    </>
  );
};

export default Technologies;
