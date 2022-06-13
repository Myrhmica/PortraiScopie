import React from "react";

import HeaderWrapper, { WrapperImage } from "./Header1.style";

// NEXT WIDGETS
import Image from "next/image";
import Link from "next/link";

// IMAGES
import Myrhmica from "../../public/image/Myrhmica-color-remove.png";
import PortraitScopie from "../../public/image/PortraitScopie-remove.png";

const Header1 = () => {
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
                width={270}
                height={70}
              />
            </a>
          </Link>
        </WrapperImage>
      </HeaderWrapper>
    </>
  );
};

export default Header1;
