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
import Plus from "../../../public/image/plus.png";

const Metier = () => {
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
            <Progression />
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
                  placeholder="Métier 1"
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
