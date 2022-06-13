import React, {useState, useEffect} from "react";

import HeaderWrapper, {
  WrapperImage,
  ContainerMenu,
  WrapperTitle,
  Title,
  Text,
} from "./Header2.style";

// NEXT WIDGETS
import Image from "next/image";
import Link from "next/link";

// IMAGES
import Myrhmica from "../../public/image/Myrhmica-color-remove.png";
import PortraitScopie from "../../public/image/PortraitScopie-remove.png";
import Profil from "../../public/image/profil.png";

import axios from 'axios'

const Header2 = () => {
  const request = () => {
    const [user, setUser] = useState(null)
    const [user_id, setUserId] = useState(5)

    const request = async () => {
        try {
            let response = await axios.get(`https://portraiscopie-dev.herokuapp.com/api/users/${user_id}`);
            setUser(response.data)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (user === null) {
            request();
        }
        console.log(user);
    },)

    if (user === null) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )

    } else {
        return <h1>{user.firstName}</h1>   
    }
}

  return (
    <>
      <HeaderWrapper>
        <WrapperImage>
          <Link href="/">
            <a>
              <Image src={Myrhmica} alt={"Myrhmica"} quality={100} />
            </a>
          </Link>
          <Link href="/portraitscopie">
            <a>
              <Image
                src={PortraitScopie}
                alt={"PortraitScopie"}
                quality={100}
                width={280}
                height={70}
              />
            </a>
          </Link>

          <Link href="/OffreurDeCompetence/Profil/Profil">
            <a>
              <Image
                src={Profil}
                alt={"Profil"}
                quality={100}
                width={40}
                height={40}
              />
              {request()}
            </a>
          </Link>
        </WrapperImage>
      </HeaderWrapper>

      <ContainerMenu>
        <WrapperTitle>
          <Link href="/">
            <a>
              <Title>Accueil</Title>
            </a>
          </Link>
          <Link href="/OffreurDeCompetence/Resume/Resume">
            <a>
              <Title>Visualisation</Title>
            </a>
          </Link>
          <Link href="/OffreurDeCompetence/Recherche/Recherche">
            <a>
              <Title>Moteur de recherche</Title>
            </a>
          </Link>
        </WrapperTitle>
      </ContainerMenu>
    </>
  );
};

export default Header2;
