import React, { useState, useEffect } from "react";
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
} from "./Taches.style";

import Idea from "../../../public/image/idea.png";
import Plus from "../../../public/image/plus.png";

const Taches = () => {
<<<<<<< HEAD
  const [tache, setTache] = useState("");

  useEffect(() => {
    localStorage.setItem("tâches", JSON.stringify(tache));
  }, [tache]);

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post(
        "https://portraiscopie-dev.herokuapp.com/api/portraiscopies/",
        {
          taches: tache,
        }
      );
      console.log(response);
    } catch (err) {
      console.log("il y a une erreur");
    }
  };
=======

  const [Tache, setTache] = useState('');
  const [erreur, setErreur] = useState('');
  const [Taches, setTaches] = useState([]);
  const [id, setId] = useState(null);

  const submitform = (e) => {
        e.preventDefault();
        if (id === null) {
            if(Taches.length === 5){
                setErreur('Vous ne pouvez pas ajouter plus de 5 Tâches');
            } else {
                setErreur('');
                let Tach = {
                    id: Taches.length,
                    Tache: Tache,
                }
                setTaches([...Taches, Tach]);
                setTache('');
            }
        } else {
            let Tach = {
                id: id,
                Tache: Tache,
            }
            setTaches(Taches.map(m => m.id === id ? Tach : m));
            setTache('');
            setId(null);
        }
    };

    const updateTache = (id) => {
        setTache(Taches[id].Tache);
        setId(id);
    };

    const removeTache = (id) => {
        setTaches(Taches.filter(m => m.id !== id));
    };

    const nextStep = () => {
        if(Taches.length === 0){
            setErreur('Vous devez ajouter au moins une taâche');
        } else {
            setErreur('');
            localStorage.setItem('Tache', JSON.stringify(Taches));
            console.log(localStorage.getItem('Tache'));
        }
      };

      const listTache = () => {
          if (Taches.length === 0) {
              return <Text>Vous n`avez pas encore ajouté de tâche</Text>
          } else {
              return (
                  <div>
                      {Taches.map(Tach => (
                            <div key={Tach.id}>
                                <Text> Tache : {Tach.Tache}</Text>
                                <ButtonLink onClick={() => updateTache(Tach.id)}>
                                    <a>
                                        <Text>Modifier</Text>
                                    </a>
                                </ButtonLink>
                                <ButtonLink onClick={()=> removeTache(Tach.id)}>
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
            <TitleImp>Tâches réalisées</TitleImp>
            <WrapperImage>
              <Image src={Idea} alt={"Idée"} quality={100} />
            </WrapperImage>
          </WrapperImp>
          <Divider></Divider>
          <WrapperContent>
            <Title>Tâches pour cette compétence</Title>
            <WrapperMenuDeroulant>
<<<<<<< HEAD
              <input
                placeholder="Vous pouvez ajouter 1 à 5 Tâches"
                value={tache}
                onChange={(e) => setTache(e.target.value)}
              />

              {/* Image 
                    src={}
                    alt={}
                    width={}
                    height={}
                /> */}
=======
              <form onSubmit={submitform}>
                    <input type="text" placeholder="exemple : Plombier" value={Tache} onChange={e => setTache(e.target.value)} required/>
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
              {listTache()}
            <WrapperButton>
              <ButtonLinkPrec>
                <Link href="/OffreurDeCompetence/Activites/Activite">
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
                <Link href="/OffreurDeCompetence/Techniques/Techniques">
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

export default Taches;
