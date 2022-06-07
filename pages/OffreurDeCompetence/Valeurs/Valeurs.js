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
} from "./Valeurs.style";

import Idea from "../../../public/image/idea.png";
import Plus from "../../../public/image/plus.png";

const Valeurs = () => {
  
  const [Valeur, setValeur] = useState('');
  const [erreur, setErreur] = useState('');
  const [Valeurs, setValeurs] = useState([]);
  const [id, setId] = useState(null);

  const submitform = (e) => {
        e.preventDefault();
        if (id === null) {
            if(Valeurs.length === 5){
                setErreur('Vous ne pouvez pas ajouter plus de 5 Valeurs');
            } else {
                setErreur('');
                let Val = {
                    id: Valeurs.length,
                    Valeur: Valeur,
                }
                setValeurs([...Valeurs, Val]);
                setValeur('');
            }
        } else {
            let Val = {
                id: id,
                Valeur: Valeur,
            }
            setValeurs(Valeurs.map(m => m.id === id ? Val : m));
            setValeur('');
            setId(null);
        }
    };

    const updateValeur = (id) => {
        setValeur(Valeurs[id].Valeur);
        setId(id);
    };

    const removeValeur = (id) => {
        setValeurs(Valeurs.filter(m => m.id !== id));
    };

    const nextStep = () => {
        if(Valeurs.length === 0){
            setErreur('Vous devez ajouter au moins une Valeur');
        } else {
            setErreur('');
            localStorage.setItem('Valeur', JSON.stringify(Valeurs));
            console.log(localStorage.getItem('Valeur'));
        }
      };

      const listValeur = () => {
          if (Valeurs.length === 0) {
              return <Text>Vous n`avez pas encore ajouté de tâche</Text>
          } else {
              return (
                  <div>
                      {Valeurs.map(Val => (
                            <div key={Val.id}>
                                <Text> Valeur : {Val.Valeur}</Text>
                                <ButtonLink onClick={() => updateValeur(Val.id)}>
                                    <a>
                                        <Text>Modifier</Text>
                                    </a>
                                </ButtonLink>
                                <ButtonLink onClick={()=> removeValeur(Val.id)}>
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
            <TitleImp>Mes valeurs</TitleImp>
            <WrapperImage>
              <Image src={Idea} alt={"Idée"} quality={100} />
            </WrapperImage>
          </WrapperImp>
          <Divider></Divider>
          <WrapperContent>
            <Title>Vos valeurs pour cette compétence</Title>
            <WrapperMenuDeroulant>
             <form onSubmit={submitform}>
                    <input type="text" placeholder="exemple : Plombier" value={Valeur} onChange={e => setValeur(e.target.value)} required/>
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
            {listValeur()}
            <WrapperButton>
              <ButtonLinkPrec>
                <Link href="/OffreurDeCompetence/Qualites/Qualites">
                  <a>
                    <Text>Précédent</Text>
                  </a>
                </Link>
              </ButtonLinkPrec>
              <ButtonLink onClick={() => {nextStep()}}>
                <Link href="/OffreurDeCompetence/Talents/Talents">
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

export default Valeurs;
