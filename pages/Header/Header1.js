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
                width={300}
                height={75}
              />
            </a>
          </Link>
        </WrapperImage>
      </HeaderWrapper>
    </>
  );
};

export default Header1;
