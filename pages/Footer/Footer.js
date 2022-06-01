import React from "react";
import FooterWrapper, {
  Text,
  ImageWrapper,
  ContentWrapper,
} from "./Footer.style";
import Image from "next/image";

import Myrhmica from "../../public/image/Myrhmica_remove.png";

const Footer = () => {
  return (
    <FooterWrapper>
      <ContentWrapper>
        <ImageWrapper>
          <Image src={Myrhmica} alt={"Myrhmica"} quality={100} />
        </ImageWrapper>
        <Text>Contact</Text>
        <Text>Mention Légales</Text>
        <Text>Politique de confidentialité</Text>
        <Text>
          Copyright © 2021 SAS Human Vision Global Solution - Consulting - Hvgs
          Innnovation Based Company
        </Text>
      </ContentWrapper>
    </FooterWrapper>
  );
};

export default Footer;
