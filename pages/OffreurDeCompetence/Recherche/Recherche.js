import React, {useState, useEffect} from "react";
import Image from "next/image";
import Header from "../../Header/Header2";
import fetchData from '../../api/fetchData';

import WrapperTitle, {
  WrapperRecherche,
  WrapperImage,
  Title,
  WrapperButton,
  ButtonLink,
} from "./Recherche.style";

import Rechercher from "../../../public/image/rechercher.png";
import TechnicalsData from "../../../components/TechnicalsData";
import Link from "next/link";

const Recherche = () => {

  const [data, setData] = useState("");
  const [search, setSearch] = useState("");
  const [eheh, setEheh] = useState("");

  useEffect(() => {
    const data = fetchData();
    setData(data.result);
  },[]);
  console.log(data);

  return (
    <>
      <Header />
      <WrapperTitle>
        <Title>Quelle compétence rechercher vous ?</Title>
        <WrapperRecherche>
          <WrapperImage>
          <TechnicalsData />
            <Link href={""}>
              <a>
                <Image
                  src={Rechercher}
                  alt={"Myrhmica"}
                  quality={100}
                  width={70}
                  height={70}
              />
              </a>
            </Link>
          </WrapperImage>
        </WrapperRecherche>
        <WrapperButton>
          <ButtonLink
            onClick={() => {
              history.back();
            }}
          >
            Revenir en arrière
          </ButtonLink>
        </WrapperButton>
      </WrapperTitle>
    </>
  );
};

export default Recherche;
