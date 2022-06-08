<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React, {useState} from "react";
>>>>>>> 557cf842935d07082978f964ce3e60fb2e8f60ca
import Image from "next/image";
import Link from "next/link";
import Header from "../../Header/Header2";

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
} from "./Activites.style";

import Idea from "../../../public/image/idea.png";
import Plus from "../../../public/image/plus.png";

const Activites = () => {
<<<<<<< HEAD
  const [activite, setActivite] = useState("");

  useEffect(() => {
    localStorage.setItem("activités", JSON.stringify(activite));
  }, [activite]);

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post(
        "https://portraiscopie-dev.herokuapp.com/api/portraiscopies/",
        {
          activités: activite,
        }
      );
      console.log(response);
    } catch (err) {
      console.log("Il y a une erreur");
    }
  };
=======

  const [Activite, setActivite] = useState('');
  const [erreur, setErreur] = useState('');
  const [Activites, setActivites] = useState([]);
  const [id, setId] = useState(null);

  const submitform = (e) => {
        e.preventDefault();
        if (id === null) {
            if(Activites.length === 5){
                setErreur('Vous ne pouvez pas ajouter plus de 5 activités');
            } else {
                setErreur('');
                let Acti = {
                    id: Activites.length,
                    Activite: Activite,
                }
                setActivites([...Activites, Acti]);
                setActivite('');
            }
        } else {
            let Acti = {
                id: id,
                Activite: Activite,
            }
            setActivites(Activites.map(m => m.id === id ? Acti : m));
            setActivite('');
            setId(null);
        }
    };

    const updateActivite = (id) => {
        setActivite(Activites[id].Activite);
        setId(id);
    };

    const removeActivite = (id) => {
        setActivites(Activites.filter(m => m.id !== id));
    };

    const nextStep = () => {
        if(Activites.length === 0){
            setErreur('Vous devez ajouter au moins une activité');
        } else {
            setErreur('');
            localStorage.setItem('Activite', JSON.stringify(Activites));
            console.log(localStorage.getItem('Activite'));
        }
      };

      const listActivite = () => {
          if (Activites.length === 0) {
              return <Text>Vous n`avez pas encore ajouté d'activité</Text>
          } else {
              return (
                  <div>
                      {Activites.map(Acti => (
                            <div key={Acti.id}>
                                <Text> Activité : {Acti.Activite}</Text>
                                <ButtonLink onClick={() => updateActivite(Acti.id)}>
                                    <a>
                                        <Text>Modifier</Text>
                                    </a>
                                </ButtonLink>
                                <ButtonLink onClick={()=> removeActivite(Acti.id)}>
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

>>>>>>> 557cf842935d07082978f964ce3e60fb2e8f60ca

  return (
    <>
      <Header />
      <WrapperTitle>
        <WrapperTop>
          <TitleTop>Ma Compétence</TitleTop>
          <TitleColor>{/*Compétence choisie*/}</TitleColor>
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
                  <TextBottom>Métiers</TextBottom>
                </a>
              </Link>
            </Wrapper1>

            <Wrapper2>
              <DividerTop2></DividerTop2>
              <TextTop2>2</TextTop2>
              <DividerTop3></DividerTop3>
              <Link href="/OffreurDeCompetence/Activites/Activites">
                <a>
                  <TextBottom>Activités</TextBottom>
                </a>
              </Link>
            </Wrapper2>

            <Wrapper3>
              <DividerTop3></DividerTop3>
              <TextTop3>3</TextTop3>
              <DividerTop4></DividerTop4>
              <Link href="/OffreurDeCompetence/Taches/Taches">
                <a>
                  <TextBottom>Tâches</TextBottom>
                </a>
              </Link>
            </Wrapper3>

            <Wrapper4>
              <DividerTop4></DividerTop4>
              <TextTop4>4</TextTop4>
              <DividerTop5></DividerTop5>
              <Link href="/OffreurDeCompetence/Techniques/Techniques">
                <a>
                  <TextBottom>Techniques</TextBottom>
                </a>
              </Link>
            </Wrapper4>

            <Wrapper5>
              <DividerTop5></DividerTop5>
              <TextTop5>5</TextTop5>
              <DividerTop6></DividerTop6>
              <Link href="/OffreurDeCompetence/Technologies/Technologies">
                <a>
                  <TextBottom>Technologies</TextBottom>
                </a>
              </Link>
            </Wrapper5>

            <Wrapper6>
              <DividerTop6></DividerTop6>
              <TextTop6>6</TextTop6>
              <DividerTop7></DividerTop7>
              <Link href="/OffreurDeCompetence/Diplomes/Diplomes">
                <a>
                  <TextBottom>Diplômes</TextBottom>
                </a>
              </Link>
            </Wrapper6>

            <Wrapper7>
              <DividerTop7></DividerTop7>
              <TextTop7>7</TextTop7>
              <DividerTop8></DividerTop8>
              <Link href="/OffreurDeCompetence/Capacites/Capacites">
                <a>
                  <TextBottom>Capacités</TextBottom>
                </a>
              </Link>
            </Wrapper7>

            <Wrapper8>
              <DividerTop8></DividerTop8>
              <TextTop8>8</TextTop8>
              <DividerTop9></DividerTop9>
              <Link href="/OffreurDeCompetence/Qualites/Qualites">
                <a>
                  <TextBottom>Qualités</TextBottom>
                </a>
              </Link>
            </Wrapper8>

            <Wrapper9>
              <DividerTop9></DividerTop9>
              <TextTop9>9</TextTop9>
              <DividerTop10></DividerTop10>
              <Link href="/OffreurDeCompetence/Valeurs/Valeurs">
                <a>
                  <TextBottom>Valeurs</TextBottom>
                </a>
              </Link>
            </Wrapper9>

            <Wrapper10>
              <DividerTop10></DividerTop10>
              <TextTop10>10</TextTop10>
              <DividerTop11></DividerTop11>
              <Link href="/OffreurDeCompetence/Talents/Talents">
                <a>
                  <TextBottom>Talents</TextBottom>
                </a>
              </Link>
            </Wrapper10>

            <Wrapper11>
              <DividerTop11></DividerTop11>
              <TextTop11>11</TextTop11>
              <Link href="/OffreurDeCompetence/Centre_interet/Centre_interet">
                <a>
                  <TextBottom>{"Centre d'intérêt"}</TextBottom>
                </a>
              </Link>
            </Wrapper11>
          </WrapperProgression>

          <WrapperImp>
            <TitleImp>Activités réalisées</TitleImp>
            <WrapperImage>
              <Image src={Idea} alt={"Idée"} quality={100} />
            </WrapperImage>
          </WrapperImp>
          <Divider></Divider>
          <WrapperContent>
            <Title>Activités pour cette compétence</Title>
            <WrapperMenuDeroulant>
<<<<<<< HEAD
              <input
                placeholder="Vous pouvez ajouter 1 à 5 Activités"
                value={activite}
                onChange={(e) => setActivite(e.target.value)}
              />

              {/* Image 
                    src={}
                    alt={}
                    width={}
                    height={}
                /> */}
=======
              <form onSubmit={submitform}>
                    <input type="text" placeholder="exemple : Remplacer un tuyau" value={Activite} onChange={e => setActivite(e.target.value)} required/>
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
>>>>>>> 557cf842935d07082978f964ce3e60fb2e8f60ca
            </WrapperMenuDeroulant>
            {listActivite()}
            <WrapperButton>
              <ButtonLinkPrec>
                <Link href="/OffreurDeCompetence/Metier/Metier">
                  <a>
                    <Text>Précédent</Text>
                  </a>
                </Link>
              </ButtonLinkPrec>
<<<<<<< HEAD
              <ButtonLink
                onClick={() => {
                  handleSubmit();
                }}
              >
=======
              <ButtonLink onClick={() => {nextStep()}}>
>>>>>>> 557cf842935d07082978f964ce3e60fb2e8f60ca
                <Link href="/OffreurDeCompetence/Taches/Taches">
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

export default Activites;
