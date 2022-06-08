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
} from "./Technologies.style";

import Idea from "../../../public/image/idea.png";
import Plus from "../../../public/image/plus.png";

const Technologies = () => {
<<<<<<< HEAD
  const [technologie, setTechnologie] = useState("");

  useEffect(() => {
    localStorage.setItem("Technologies", JSON.stringify(technologie));
  }, [technologie]);

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post(
        "https://portraiscopie-dev.herokuapp.com/api/portraiscopies/",
        {
          Technologies: technologie,
        }
      );
      console.log(response);
    } catch (err) {
      console.log("il y a une erreur");
    }
  };
=======
  
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
>>>>>>> 557cf842935d07082978f964ce3e60fb2e8f60ca

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
<<<<<<< HEAD
              <DividerTop4></DividerTop4>
              <TextTop4>4</TextTop4>
              <DividerTop5></DividerTop5>
              <Link href="/OffreurDeCompetence/Techniques/Techniques">
                <a>
                  <TextBottom>Techniques</TextBottom>
                </a>
              </Link>
=======
              <DividerTop></DividerTop>
              <TextTop>4</TextTop>
              <DividerTop></DividerTop>
              <TextBottom>Technologie</TextBottom>
>>>>>>> 557cf842935d07082978f964ce3e60fb2e8f60ca
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
            <TitleImp>Technologies</TitleImp>
            <WrapperImage>
              <Image src={Idea} alt={"Idée"} quality={100} />
            </WrapperImage>
          </WrapperImp>
          <Divider></Divider>
          <WrapperContent>
            <Title>Technologies pour cette compétence</Title>
            <WrapperMenuDeroulant>
<<<<<<< HEAD
              <input
                placeholder="Vous pouvez ajouter 1 à 5 Technologies"
                value={technologie}
                onChange={(e) => setTechnologie(e.target.value)}
              />

              {/* Image 
                  src={}
                  alt={}
                  width={}
                  height={}
              /> */}
=======
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
>>>>>>> 557cf842935d07082978f964ce3e60fb2e8f60ca
            </WrapperMenuDeroulant>
            {listTechnologie()}
            <WrapperAjout>
<<<<<<< HEAD
              <Image src={Plus} alt={"PortraiScopie"} quality={100} />
              <TextAjout>Ajouter</TextAjout>
=======
>>>>>>> 557cf842935d07082978f964ce3e60fb2e8f60ca
            </WrapperAjout>
            <WrapperButton>
              <ButtonLinkPrec>
                <Link href="/OffreurDeCompetence/Techniques/Techniques">
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
