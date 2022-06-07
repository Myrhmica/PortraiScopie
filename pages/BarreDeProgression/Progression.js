import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

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
            <TextTop1 id="p1">1</TextTop1>
            <DividerTop1></DividerTop1>
            <Link href="/OffreurDeCompetence/Metier/Metier">
              <a>
                <TextBottom>Métiers</TextBottom>
              </a>
            </Link>
          </Wrapper1>

          <Wrapper2>
            <DividerTop2></DividerTop2>
            <TextTop2>2</TextTop2>
            <DividerTop3></DividerTop3>
            <Link href="/OffreurDeCompetence/Activites/Activites">
              <a>
                <TextBottom>Activités</TextBottom>
              </a>
            </Link>
          </Wrapper2>

          <Wrapper3>
            <DividerTop3></DividerTop3>
            <TextTop3>3</TextTop3>
            <DividerTop4></DividerTop4>
            <Link href="/OffreurDeCompetence/Taches/Taches">
              <a>
                <TextBottom>Tâches</TextBottom>
              </a>
            </Link>
          </Wrapper3>

          <Wrapper4>
            <DividerTop4></DividerTop4>
            <TextTop4>4</TextTop4>
            <DividerTop5></DividerTop5>
            <Link href="/OffreurDeCompetence/Techniques/Techniques">
              <a>
                <TextBottom>Techniques</TextBottom>
              </a>
            </Link>
          </Wrapper4>

          <Wrapper5>
            <DividerTop5></DividerTop5>
            <TextTop5>5</TextTop5>
            <DividerTop6></DividerTop6>
            <Link href="/OffreurDeCompetence/Technologies/Technologies">
              <a>
                <TextBottom>Technologies</TextBottom>
              </a>
            </Link>
          </Wrapper5>

          <Wrapper6>
            <DividerTop6></DividerTop6>
            <TextTop6>6</TextTop6>
            <DividerTop7></DividerTop7>
            <Link href="/OffreurDeCompetence/Diplomes/Diplomes">
              <a>
                <TextBottom>Diplômes</TextBottom>
              </a>
            </Link>
          </Wrapper6>

          <Wrapper7>
            <DividerTop7></DividerTop7>
            <TextTop7>7</TextTop7>
            <DividerTop8></DividerTop8>
            <Link href="/OffreurDeCompetence/Capacites/Capacites">
              <a>
                <TextBottom>Capacités</TextBottom>
              </a>
            </Link>
          </Wrapper7>

          <Wrapper8>
            <DividerTop8></DividerTop8>
            <TextTop8>8</TextTop8>
            <DividerTop9></DividerTop9>
            <Link href="/OffreurDeCompetence/Qualites/Qualites">
              <a>
                <TextBottom>Qualités</TextBottom>
              </a>
            </Link>
          </Wrapper8>

          <Wrapper9>
            <DividerTop9></DividerTop9>
            <TextTop9>9</TextTop9>
            <DividerTop10></DividerTop10>
            <Link href="/OffreurDeCompetence/Valeurs/Valeurs">
              <a>
                <TextBottom>Valeurs</TextBottom>
              </a>
            </Link>
          </Wrapper9>

          <Wrapper10>
            <DividerTop10></DividerTop10>
            <TextTop10>10</TextTop10>
            <DividerTop11></DividerTop11>
            <Link href="/OffreurDeCompetence/Talents/Talents">
              <a>
                <TextBottom>Talents</TextBottom>
              </a>
            </Link>
          </Wrapper10>

          <Wrapper11>
            <DividerTop11></DividerTop11>
            <TextTop11>11</TextTop11>
            <Link href="/OffreurDeCompetence/Centre_interet/Centre_interet">
              <a>
                <TextBottom>{"Centre d'intérêt"}</TextBottom>
              </a>
            </Link>
          </Wrapper11>
        </WrapperProgression>
      </Wrapper>
    </>
  );
};

export default Progression;
