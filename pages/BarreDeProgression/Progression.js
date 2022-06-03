import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Wrapper, {
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
} from "./Progression.style";

const Progression = () => {
  return (
    <>
      <Wrapper>
        <WrapperProgression>
          <Wrapper1>
            <TextTop1>1</TextTop1>
            <DividerTop1></DividerTop1>
            <Link href="/OffreurDeCompetence/Metier/Metier">
              <a>
                <TextBottom>Métier</TextBottom>
              </a>
            </Link>
          </Wrapper1>

          <Wrapper2>
            <DividerTop2></DividerTop2>
            <TextTop2>2</TextTop2>
            <DividerTop2></DividerTop2>
            <TextBottom>Activités</TextBottom>
          </Wrapper2>

          <Wrapper3>
            <DividerTop3></DividerTop3>
            <TextTop3>3</TextTop3>
            <DividerTop3></DividerTop3>
            <TextBottom>Tâches</TextBottom>
          </Wrapper3>

          <Wrapper4>
            <DividerTop4></DividerTop4>
            <TextTop4>4</TextTop4>
            <DividerTop4></DividerTop4>
            <TextBottom>Techniques</TextBottom>
          </Wrapper4>

          <Wrapper5>
            <DividerTop5></DividerTop5>
            <TextTop5>5</TextTop5>
            <DividerTop5></DividerTop5>
            <TextBottom>Technologies</TextBottom>
          </Wrapper5>

          <Wrapper6>
            <DividerTop6></DividerTop6>
            <TextTop6>6</TextTop6>
            <DividerTop6></DividerTop6>
            <TextBottom>Diplômes</TextBottom>
          </Wrapper6>

          <Wrapper7>
            <DividerTop7></DividerTop7>
            <TextTop7>7</TextTop7>
            <DividerTop7></DividerTop7>
            <TextBottom>Capacités</TextBottom>
          </Wrapper7>

          <Wrapper8>
            <DividerTop8></DividerTop8>
            <TextTop8>8</TextTop8>
            <DividerTop8></DividerTop8>
            <TextBottom>Qualités</TextBottom>
          </Wrapper8>

          <Wrapper9>
            <DividerTop9></DividerTop9>
            <TextTop9>9</TextTop9>
            <DividerTop9></DividerTop9>
            <TextBottom>Valeurs</TextBottom>
          </Wrapper9>

          <Wrapper10>
            <DividerTop10></DividerTop10>
            <TextTop10>10</TextTop10>
            <DividerTop10></DividerTop10>
            <TextBottom>Talents</TextBottom>
          </Wrapper10>

          <Wrapper11>
            <DividerTop11></DividerTop11>
            <TextTop11>11</TextTop11>
            <TextBottom>{"Centre d'intérêt"}</TextBottom>
          </Wrapper11>
        </WrapperProgression>
      </Wrapper>
    </>
  );
};

export default Progression;
