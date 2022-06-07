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
  WrapperCoche,
  WrapperDuCoche,
} from "./Diplomes.style";

import Idea from "../../../public/image/idea.png";
import Plus from "../../../public/image/plus.png";

const Diplomes = () => {

  const [Diplome, setDiplome] = useState('');
  const [erreur, setErreur] = useState('');
  const [Diplomes, setDiplomes] = useState([]);
  const [id, setId] = useState(null);

  const submitform = (e) => {
        e.preventDefault();
        if (id === null) {
            if(Diplomes.length === 5){
                setErreur('Vous ne pouvez pas ajouter plus de 5 Diplomes');
            } else {
                setErreur('');
                let Dip = {
                    id: Diplomes.length,
                    Diplome: Diplome,
                }
                setDiplomes([...Diplomes, Dip]);
                setDiplome('');
            }
        } else {
            let Dip = {
                id: id,
                Diplome: Diplome,
            }
            setDiplomes(Diplomes.map(m => m.id === id ? Dip : m));
            setDiplome('');
            setId(null);
        }
    };

    const updateDiplome = (id) => {
        setDiplome(Diplomes[id].Diplome);
        setId(id);
    };

    const removeDiplome = (id) => {
        setDiplomes(Diplomes.filter(m => m.id !== id));
    };

    const nextStep = () => {
        if(Diplomes.length === 0){
            setErreur('Vous devez ajouter au moins une Diplome');
        } else {
            setErreur('');
            localStorage.setItem('Diplome', JSON.stringify(Diplomes));
            console.log(localStorage.getItem('Diplome'));
        }
      };

      const listDiplome = () => {
          if (Diplomes.length === 0) {
              return <Text>Vous n`avez pas encore ajouté de tâche</Text>
          } else {
              return (
                  <div>
                      {Diplomes.map(Dip => (
                            <div key={Dip.id}>
                                <Text> Diplome : {Dip.Diplome}</Text>
                                <ButtonLink onClick={() => updateDiplome(Dip.id)}>
                                    <a>
                                        <Text>Modifier</Text>
                                    </a>
                                </ButtonLink>
                                <ButtonLink onClick={()=> removeDiplome(Dip.id)}>
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
            <TitleImp>Diplômes et Habilitations</TitleImp>
            <WrapperImage>
              <Image src={Idea} alt={"Idée"} quality={100} />
            </WrapperImage>
          </WrapperImp>
          <Divider></Divider>
          <WrapperContent>
            <Title>Certificats/Diplômes pour cette compétence</Title>
            <WrapperMenuDeroulant>
              <form onSubmit={submitform}>
                    <input type="text" placeholder="exemple : CAP BEP Plomberie" value={Diplome} onChange={e => setDiplome(e.target.value)} required/>
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
              {listDiplome()}
            <WrapperDuCoche>
              <WrapperCoche></WrapperCoche>
              <Text>
                Je n’ai aucun certificat ou diplôme pour cette compétence
              </Text>
            </WrapperDuCoche>
            <WrapperButton>
              <ButtonLinkPrec>
                <Link href="/OffreurDeCompetence/Technologies/Technologies">
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
                <Link href="/OffreurDeCompetence/Capacites/Capacites">
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

export default Diplomes;
