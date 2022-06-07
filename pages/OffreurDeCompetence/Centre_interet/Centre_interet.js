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
} from "./Centre_interet.style";

import Idea from "../../../public/image/idea.png";
import Plus from "../../../public/image/plus.png";

const Centre_interet = () => {
  
  const [Centre_interet, setCentre_interet] = useState('');
  const [erreur, setErreur] = useState('');
  const [Centre_interets, setCentre_interets] = useState([]);
  const [id, setId] = useState(null);

  const submitform = (e) => {
        e.preventDefault();
        if (id === null) {
            if(Centre_interets.length === 5){
                setErreur("Vous ne pouvez pas ajouter plus de 5 centres d' intérêts.");
            } else {
                setErreur('');
                let CentreInt = {
                    id: Centre_interets.length,
                    Centre_interet: Centre_interet,
                }
                setCentre_interets([...Centre_interets, CentreInt]);
                setCentre_interet('');
            }
        } else {
            let CentreInt = {
                id: id,
                Centre_interet: Centre_interet,
            }
            setCentre_interets(Centre_interets.map(m => m.id === id ? CentreInt : m));
            setCentre_interet('');
            setId(null);
        }
    };

    const updateCentre_interet = (id) => {
        setCentre_interet(Centre_interets[id].Centre_interet);
        setId(id);
    };

    const removeCentre_interet = (id) => {
        setCentre_interets(Centre_interets.filter(m => m.id !== id));
    };

    const nextStep = () => {
        if(Centre_interets.length === 0){
            setErreur("Vous devez ajouter au moins d'un centre d'intérêt ");
        } else {
            setErreur('');
            localStorage.setItem('Centre_interet', JSON.stringify(Centre_interets));
            console.log(localStorage.getItem('Centre_interet'));
        }
      };

      const listCentre_interet = () => {
          if (Centre_interets.length === 0) {
              return <Text>Vous n`avez pas encore ajouté de tâche</Text>
          } else {
              return (
                  <div>
                      {Centre_interets.map(CentreInt => (
                            <div key={CentreInt.id}>
                                <Text> Centre_interet : {CentreInt.Centre_interet}</Text>
                                <ButtonLink onClick={() => updateCentre_interet(CentreInt.id)}>
                                    <a>
                                        <Text>Modifier</Text>
                                    </a>
                                </ButtonLink>
                                <ButtonLink onClick={()=> removeCentre_interet(CentreInt.id)}>
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
            <TitleImp>Mes centres d’intérêt</TitleImp>
            <WrapperImage>
              <Image src={Idea} alt={"Idée"} quality={100} />
            </WrapperImage>
          </WrapperImp>
          <Divider></Divider>
          <WrapperContent>
            <Title>
              Vos centres d’intérêt qui mettent en lumière cette compétence
            </Title>
            <WrapperMenuDeroulant>
             <form onSubmit={submitform}>
                    <input type="text" placeholder="exemple : Plombier" value={Centre_interet} onChange={e => setCentre_interet(e.target.value)} required/>
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
              {listCentre_interet()}
            <WrapperAjout>
              <Image src={Plus} alt={"PortraiScopie"} quality={100} />
              <TextAjout>Ajouter</TextAjout>
            </WrapperAjout>
            <WrapperButton>
              <ButtonLinkPrec>
                <Link href="/OffreurDeCompetence/Talents/Talents">
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
                <Link href="/OffreurDeCompetence/Resume/Resume">
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

export default Centre_interet;
