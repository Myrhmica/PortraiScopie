import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header1 from "../../Header/Header1";
import Footer from "../../Footer/Footer";
import Container, {
  WrapperTitle,
  TextTop,
  WrapperConseilsCard,
  ConseilsCard,
  Text,
  WrapperImage,
  Button,
  ButtonLink,
  Footer1,
} from "./Conseil.style";

import Flêche from "../../../public/image/fleche-droite.png";

const Conseil = () => {
  return (
    <>
      <Container>
        <Header1 />
        <WrapperTitle>
          <TextTop>
            Pour une bonne prise en main de votre PortraiScopie, veuillez suivre
            attentivement les conseils ci-dessous
          </TextTop>
        </WrapperTitle>
        <WrapperConseilsCard>
          <ConseilsCard>
            <Text>
              Prenez le temps de consulter tous les outils à votre disposition
              comme les définitions ou le sommaire
            </Text>
          </ConseilsCard>
          <WrapperImage>
            <Image src={Flêche} alt={"PortraitScopie"} quality={100} />
          </WrapperImage>
          <ConseilsCard>
            <Text>
              Munissez-vous de tous documents retraçant votre parcours
              professionnel (contrat de travail, fiche de poste, ...)
            </Text>
          </ConseilsCard>
          <WrapperImage>
            <Image src={Flêche} alt={"PortraitScopie"} quality={100} />
          </WrapperImage>
          <ConseilsCard>
            <Text>
              Vous pouvez enrichir votre PortraiScopie à votre rythme. Il est
              possible de le réaliser en plusieurs fois
            </Text>
          </ConseilsCard>
        </WrapperConseilsCard>
        <ButtonLink>
          <Link href="/OffreurDeCompetence/Raison/Raison">
            <a>
              <Button>Commencez votre PortraiScopie</Button>
            </a>
          </Link>
        </ButtonLink>
      </Container>
      <Footer1>
        <Footer />
      </Footer1>
    </>
  );
};

export default Conseil;
