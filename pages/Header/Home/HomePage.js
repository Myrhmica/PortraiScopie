import React from "react";
import Image from "next/image";
import Link from "next/link";
import WrapperContent, {
  WrapperContentLeft,
  WrapperBox,
  WrapperDialog,
  Wrapper1,
  Wrapper2,
  Wrapper3,
  TextBox,
  WrapperImageTop,
  WrapperImageBottom,
  Text,
  Button,
  WrapperButton,
  WrapperContentRight,
  WrapperContentMiddle,
} from "./HomePage.style";

// IMAGES
import FourmiBleu from "../../public/image/FourmiBleu-remove.png";
import Myrhmica from "../../public/image/Myrhmica-color-remove.png";
import PortraiScopie from "../../public/image/PortraitScopie-remove.png";

const HomePage = () => {
  return (
    <WrapperContent>
      <WrapperImageTop>
        <Link href="https://myrhmica.fr">
          <a>
            <Image
              src={Myrhmica}
              alt={"Myrhmica"}
              quality={100}
              width={175}
              height={110}
            />
          </a>
        </Link>
      </WrapperImageTop>

      <WrapperContentMiddle>
        <WrapperContentLeft>
          <WrapperBox>
            <WrapperDialog>
              <Wrapper1>
                <TextBox>
                  L’AVENTURE <br />
                  PORTRAISCOPIE <br />
                  COMMENCE ICI
                </TextBox>
              </Wrapper1>
              <Wrapper2></Wrapper2>
              <Wrapper3></Wrapper3>
            </WrapperDialog>
          </WrapperBox>
          <Image
            className="img"
            src={FourmiBleu}
            alt={"FourmiBleu"}
            quality={100}
          />
        </WrapperContentLeft>

        <WrapperContentRight>
          <WrapperButton>
            <Link href="/Register/DemandeurDeCompetence/Demandeur_competence">
              <a>
                <Button>
                  <Text>Créer un compte Demandeur de compétences</Text>
                </Button>
              </a>
            </Link>
            <Link href="/Login/DemandeurDeCompetence/Demandeur_competence">
              <a>
                <Button>
                  <Text>Connexion Demandeur de compétences</Text>
                </Button>
              </a>
            </Link>
          </WrapperButton>

          <WrapperButton>
            <Link href="/Register/Institutionnel/Institutionnel">
              <a>
                <Button>
                  <Text>Créer un compte Institutionnel</Text>
                </Button>
              </a>
            </Link>
            <Link href="/Login/Institutionnel/Institutionnel">
              <a>
                <Button>
                  <Text>Connexion Institutionnel</Text>
                </Button>
              </a>
            </Link>
          </WrapperButton>

          <WrapperButton>
            <Link href="/Register/OffreurDeCompetence/Offreur_de_competence">
              <a>
                <Button>
                  <Text>Créer un compte Offreur de compétences</Text>
                </Button>
              </a>
            </Link>
            <Link href="/Login/OffreurDeCompetence/Offreur_de_competence">
              <a>
                <Button>
                  <Text>Connexion Offreur de compétences</Text>
                </Button>
              </a>
            </Link>
          </WrapperButton>
        </WrapperContentRight>
      </WrapperContentMiddle>
      <WrapperImageBottom>
        <Link href="/">
          <a>
            <Image
              src={PortraiScopie}
              alt={"PortraiScopie"}
              quality={100}
              width={400}
              height={100}
            />
          </a>
        </Link>
      </WrapperImageBottom>
    </WrapperContent>
  );
};

export default HomePage;