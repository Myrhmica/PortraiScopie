<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../Header/Header2";
import Footer from "../../Footer/Footer";
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
  WrapperDate,
  WrapperCoche,
  WrapperDuCoche,
  WrapperAjout,
  ButtonLink,
  ButtonLinkPrec,
  WrapperButton,
} from "./Metier.style";

import Idea from "../../../public/image/idea.png";
=======
import React, {useState} from 'react';
import Link from 'next/link';
import Header from '../../Header/Header2';
import Footer from '../../Footer/Footer';
import Image from 'next/image';

import Idea from '../../../public/image/idea.png';
>>>>>>> 557cf842935d07082978f964ce3e60fb2e8f60ca
import Plus from "../../../public/image/plus.png";

import WrapperTitle, { WrapperTop, TitleTop, TitleColor, WrapperProgression, Wrapper1, TextTop1, DividerTop1, TextBottom, Wrapper2, DividerTop2, TextTop2,
    Wrapper3, DividerTop3, TextTop3, Wrapper4, DividerTop4, TextTop4, Wrapper5, DividerTop5, TextTop5, Wrapper6, DividerTop6, TextTop6, Wrapper7,
    DividerTop7, TextTop7, Wrapper8, DividerTop8, TextTop8, Wrapper9, DividerTop9, TextTop9, Wrapper10, DividerTop10, TextTop10, Wrapper11, DividerTop11, TextTop11, WrapperImp, TitleImp, WrapperImage, Divider, WrapperContent, Title, WrapperMenuDeroulant, Wrapper, WrapperAll, ButtonLink, Text, WrapperAjout,
} from './Metier.style';

const Metier = () => {
<<<<<<< HEAD
  const [metier, setMetier] = useState("");

  useEffect(() => {
    localStorage.setItem("métiers", JSON.stringify(metier));
  }, [metier]);

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post(
        "https://portraiscopie-dev.herokuapp.com/api/portraiscopies/",
        {
          métiers: metier,
        }
      );
      console.log(response);
    } catch (err) {
      console.log("il y a une erreur");
    }
  };

  return (
    <>
      <WrapperALL>
        <Header />
        <WrapperTitle>
          <WrapperTop>
            <TitleTop>Mon PortraiScopie</TitleTop>
            <TitleColor>{/*Compétence choisie*/}</TitleColor>
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
                <input
                  placeholder="Vous pouvez ajouter 1 et 5 Métiers"
                  value={metier}
                  onChange={(e) => setMetier(e.target.value)}
                />

                {/* Image 
                    src={}
                    alt={}
                    width={}
                    height={}
                /> */}
              </WrapperMenuDeroulant>
              <Title>Date de début</Title>
              <WrapperDate>
                <input placeholder="Mois" />

                {/* Image 
                    src={}
                    alt={}
                    width={}
                    height={}
                /> */}
                <input placeholder="Année" />
                {/* Image 
                    src={}
                    alt={}
                    width={}
                    height={}
                /> */}
              </WrapperDate>
              <Title>Date de fin</Title>
              <WrapperDate>
                <input placeholder="Mois" />
                {/* Image 
                    src={}
                    alt={}
                    width={}
                    height={}
                /> */}
                <input placeholder="Année" />
                {/* Image 
                    src={}
                    alt={}
                    width={}
                    height={}
                /> */}
              </WrapperDate>
              <WrapperDuCoche>
                <WrapperCoche>
                  <input type="checkbox" />
                </WrapperCoche>
                <Text>{"J'occupe actuellement ce poste"}</Text>
              </WrapperDuCoche>
              <WrapperAjout>
                <Image src={Plus} alt={"PortraiScopie"} quality={100} />
                <TextAjout>Ajouter</TextAjout>
              </WrapperAjout>
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
                    handleSubmit();
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
=======

    const [debut, setDebut] = useState('');
    const [fin, setFin] = useState('');
    const [metier, setMetier] = useState('');
    const [erreur, setErreur] = useState('');
    const [Metiers, setMetiers] = useState([]);
    const [id, setId] = useState(null);

    const submitform = (e) => {
        e.preventDefault();
        if (id === null) {
            if(Metiers.length === 5){
                setErreur('Vous ne pouvez pas ajouter plus de 5 métiers');
            } else {
                setErreur('');
                let Metier = {
                    id: Metiers.length,
                    metier: metier,
                    debut: debut,
                    fin: fin
                }
                setMetiers([...Metiers, Metier]);
                setMetier('');
                setDebut('');
                setFin('');
            }
        } else {
            let Metier = {
                id: id,
                metier: metier,
                debut: debut,
                fin: fin
            }
            setMetiers(Metiers.map(m => m.id === id ? Metier : m));
            setMetier('');
            setDebut('');
            setFin('');
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
        setMetiers(Metiers.filter(m => m.id !== id));
    };

    const nextStep = () => {
        if(Metiers.length === 0){
            setErreur('Vous devez ajouter au moins un métier');
        } else {
            setErreur('');
            localStorage.setItem('metiers', JSON.stringify(Metiers));
            console.log(localStorage.getItem('metiers'));
        }
      };

      const listMetier = () => {
          if (Metiers.length === 0) {
              return <Text>Vous n`avez pas encore ajouté de métiers</Text>
          } else {
              return (
                  <div>
                      {Metiers.map(met => (
                            <div key={met.id}>
                                <Text> Métier : {met.metier}</Text>
                                <Text> Debut: {met.debut}</Text>
                                <Text> Fin: {met.fin}</Text>
                                <ButtonLink onClick={() => updateMetier(met.id)}>
                                    <a>
                                        <Text>Modifier</Text>
                                    </a>
                                </ButtonLink>
                                <ButtonLink onClick={()=> removeMetier(met.id)}>
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
                <TextTop1>1</TextTop1>
                <DividerTop1></DividerTop1>
                <Link href="/OffreurDeCompetence/Metier/Metier">
                  <a>
                    <TextBottom>Métier</TextBottom>
                  </a>
                </Link>
              </Wrapper1>

              <Wrapper2>
                <DividerTop2></DividerTop2>
                <TextTop2>2</TextTop2>
                <DividerTop2></DividerTop2>
                <TextBottom>Activités</TextBottom>
              </Wrapper2>

              <Wrapper3>
                <DividerTop3></DividerTop3>
                <TextTop3>3</TextTop3>
                <DividerTop3></DividerTop3>
                <TextBottom>Tâches</TextBottom>
              </Wrapper3>

              <Wrapper4>
                <DividerTop4></DividerTop4>
                <TextTop4>4</TextTop4>
                <DividerTop4></DividerTop4>
                <TextBottom>Techniques</TextBottom>
              </Wrapper4>

              <Wrapper5>
                <DividerTop5></DividerTop5>
                <TextTop5>5</TextTop5>
                <DividerTop5></DividerTop5>
                <TextBottom>Technologies</TextBottom>
              </Wrapper5>

              <Wrapper6>
                <DividerTop6></DividerTop6>
                <TextTop6>6</TextTop6>
                <DividerTop6></DividerTop6>
                <TextBottom>Diplômes</TextBottom>
              </Wrapper6>

              <Wrapper7>
                <DividerTop7></DividerTop7>
                <TextTop7>7</TextTop7>
                <DividerTop7></DividerTop7>
                <TextBottom>Capacités</TextBottom>
              </Wrapper7>

              <Wrapper8>
                <DividerTop8></DividerTop8>
                <TextTop8>8</TextTop8>
                <DividerTop8></DividerTop8>
                <TextBottom>Qualités</TextBottom>
              </Wrapper8>
            <Wrapper9>
                <DividerTop9></DividerTop9>
                <TextTop9>9</TextTop9>
                <DividerTop9></DividerTop9>
                <TextBottom>Valeurs</TextBottom>
              </Wrapper9>

              <Wrapper10>
                <DividerTop10></DividerTop10>
                <TextTop10>10</TextTop10>
                <DividerTop10></DividerTop10>
                <TextBottom>Talents</TextBottom>
              </Wrapper10>

              <Wrapper11>
                <DividerTop11></DividerTop11>
                <TextTop11>11</TextTop11>
                <TextBottom>Centres d'interêts</TextBottom>
              </Wrapper11>
            </WrapperProgression>

                <WrapperImp>
                <TitleImp>Métiers</TitleImp>
                    <WrapperImage>
                        <Image src={Idea} alt={"Idée"} quality={100} />
                    </WrapperImage>
                </WrapperImp>
            <Divider></Divider>
          <WrapperContent>
            <Title>Le metier exercé pour cette compétence</Title>
            <WrapperMenuDeroulant>
                <form onSubmit={submitform}>
                    <input type="text" placeholder="exemple : Plombier" value={metier} onChange={e => setMetier(e.target.value)} required/>
                    <br />
                    <Text style={{ color: 'red', marginLeft: 26, }}>{erreur}</Text>
                    <Title>Date de début</Title>
                    <input type='date' placeholder="01/01/2000" value={debut} onChange={e => setDebut(e.target.value)} required/>
                    <br />
                    <Title>Date de fin</Title>
                    <input type="date" placeholder="07/08/2003" value={fin} onChange={e => setFin(e.target.value)} required/>
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
                    <ButtonLink onClick={() => {nextStep()}}>
                    <Link href="/OffreurDeCompetence/Activites/Activites">
                        <a>
                            <Text>Suivant</Text>
                        </a>
                    </Link>
                    </ButtonLink>
                </WrapperContent>
            </WrapperAll>
        </Wrapper>
        <Footer />
        </>
    );
}

export default Metier;
>>>>>>> 557cf842935d07082978f964ce3e60fb2e8f60ca
