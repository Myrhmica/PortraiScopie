import React from "react";

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

const Header2 = () => {
  return (
    <>
      <HeaderWrapper>
        <WrapperImage>
          <Link href="https://myrhmica.fr">
            <a>
              <Image src={Myrhmica} alt={"Myrhmica"} quality={100} />
            </a>
          </Link>
          <Link href="/">
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
              <Text>Profil</Text>
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
