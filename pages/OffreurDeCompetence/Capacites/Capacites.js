import React, {useState, useEffect} from "react";
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
} from "./Capacites.style";

import Idea from "../../../public/image/idea.png";
import Plus from "../../../public/image/plus.png";

const Capacites = () => {

  const [Capacite, setCapacite] = useState('');
  const [erreur, setErreur] = useState('');
  const [Capacites, setCapacites] = useState([]);
  const [id, setId] = useState(null);

  const submitform = (e) => {
        e.preventDefault();
        if (id === null) {
            if(Capacites.length === 5){
                setErreur('Vous ne pouvez pas ajouter plus de 5 Capacites');
            } else {
                setErreur('');
                let Cap = {
                    id: Capacites.length,
                    Capacite: Capacite,
                }
                setCapacites([...Capacites, Cap]);
                setCapacite('');
            }
        } else {
            let Cap = {
                id: id,
                Capacite: Capacite,
            }
            setCapacites(Capacites.map(m => m.id === id ? Cap : m));
            setCapacite('');
            setId(null);
        }
    };

    const updateCapacite = (id) => {
        setCapacite(Capacites[id].Capacite);
        setId(id);
    };

    const removeCapacite = (id) => {
        setCapacites(Capacites.filter(m => m.id !== id));
    };

    const nextStep = () => {
        if(Capacites.length === 0){
            setErreur('Vous devez ajouter au moins une Capacite');
        } else {
            setErreur('');
            localStorage.setItem('Capacite', JSON.stringify(Capacites));
            console.log(localStorage.getItem('Capacite'));
        }
      };

      const listCapacite = () => {
          if (Capacites.length === 0) {
              return <Text>Vous n`avez pas encore ajouté de tâche</Text>
          } else {
              return (
                  <div>
                      {Capacites.map(Cap => (
                            <div key={Cap.id}>
                                <Text> Capacite : {Cap.Capacite}</Text>
                                <ButtonLink onClick={() => updateCapacite(Cap.id)}>
                                    <a>
                                        <Text>Modifier</Text>
                                    </a>
                                </ButtonLink>
                                <ButtonLink onClick={()=> removeCapacite(Cap.id)}>
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
            <TitleImp>Mes capacités</TitleImp>
            <WrapperImage>
              <Image src={Idea} alt={"Idée"} quality={100} />
            </WrapperImage>
          </WrapperImp>
          <Divider></Divider>
          <WrapperContent>
            <Title>Vos capacités pour cette compétence</Title>
            <WrapperMenuDeroulant>
               <form onSubmit={submitform}>
                    <input type="text" placeholder="exemple : Plombier" value={Capacite} onChange={e => setCapacite(e.target.value)} required/>
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
              {listCapacite()}
            <WrapperButton>
              <ButtonLinkPrec>
                <Link href="/OffreurDeCompetence/Diplomes/Diplomes">
                  <a>
                    <Text>Précédent</Text>
                  </a>
                </Link>
              </ButtonLinkPrec>
              <ButtonLink onClick={() => {nextStep()}}>
                <Link href="/OffreurDeCompetence/Qualites/Qualites">
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

export default Capacites;
