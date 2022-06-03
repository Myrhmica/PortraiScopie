import React from "react";
import Link from "next/link";
import Header1 from "../../Header/Header1";
import Footer from "../../Footer/Footer";

import WrapperALL, {
  WrapperTitle,
  Title,
  Text,
  WrapperCocheAll,
  WrapperCocheLeft,
  WrapperCocheRight,
  WrapperCoche,
  Coche,
  ButtonLink,
  TextBottom,
} from "./Raison.style";

const Raison = () => {
  return (
    <>
      <Header1 />
      <WrapperALL>
        <WrapperTitle>
          <Title>Pour quoi souhaitez-vous faire votre PortraiScopie ?</Title>
          <Text>
            {
              "Ces information sont anonymes et n'apparaîtront pas dans votre PortraiScopie. Vous pouvez enregistrer plusieurs réponses"
            }
          </Text>
        </WrapperTitle>
        <WrapperCocheAll>
          <WrapperCocheLeft>
            <WrapperCoche>
              <Coche>
                <input type="checkbox" />
              </Coche>
              <Text>Entrer sur le marché du travail</Text>
            </WrapperCoche>
            <WrapperCoche>
              <Coche>
                <input type="checkbox" />
              </Coche>
              <Text>{"Préparer mon entretien d'embauche"}</Text>
            </WrapperCoche>
            <WrapperCoche>
              <Coche>
                <input type="checkbox" />
              </Coche>
              <Text>
                Convaincre ma hiérarchie que je suis compétent(e) ou le candidat
                idéal à une promotion
              </Text>
            </WrapperCoche>
            <WrapperCoche>
              <Coche>
                <input type="checkbox" />
              </Coche>
              <Text>Rechercher une formation</Text>
            </WrapperCoche>
            <WrapperCoche>
              <Coche>
                <input type="checkbox" />
              </Coche>
              <Text>{"Rechercher d'autres pistes de métiers"}</Text>
            </WrapperCoche>
            <WrapperCoche>
              <Coche>
                <input type="checkbox" />
              </Coche>
              <Text>
                {"Changer de métiers, de secteur, de domaine d'activité"}
              </Text>
            </WrapperCoche>
            <WrapperCoche>
              <Coche>
                <input type="checkbox" />
              </Coche>
              <Text>
                Intégrer une nouvelle équipe, une nouvelle entreprise, un
                nouveau secteur d’activité
              </Text>
            </WrapperCoche>
            <WrapperCoche>
              <Coche>
                <input type="checkbox" />
              </Coche>
              <Text>Me reconvertir</Text>
            </WrapperCoche>
          </WrapperCocheLeft>

          <WrapperCocheRight>
            <WrapperCoche>
              <Coche>
                <input type="checkbox" />
              </Coche>
              <Text>
                Je déménage dans une nouvelle région (pays) mes compétences
                sont-elles recherchées ?
              </Text>
            </WrapperCoche>
            <WrapperCoche>
              <Coche>
                <input type="checkbox" />
              </Coche>
              <Text>
                Faire un état des lieux de mes compétences car je n’ai aucune
                idée et on avenir professionnel semble flou
              </Text>
            </WrapperCoche>
            <WrapperCoche>
              <Coche>
                <input type="checkbox" />
              </Coche>
              <Text>
                Je souhaite valoriser et faire reconnaître un talent auprès de
                ma hiérarchie
              </Text>
            </WrapperCoche>
            <WrapperCoche>
              <Coche>
                <input type="checkbox" />
              </Coche>
              <Text>
                Je souhaite comprendre pourquoi je ne me sens plus aussi «
                heureux » dans mon travail
              </Text>
            </WrapperCoche>
            <WrapperCoche>
              <Coche>
                <input type="checkbox" />
              </Coche>
              <Text>
                Je souhaite savoir pourquoi je vais à reculons au travail
              </Text>
            </WrapperCoche>
            <WrapperCoche>
              <Coche>
                <input type="checkbox" />
              </Coche>
              <Text>Autres</Text>
            </WrapperCoche>
          </WrapperCocheRight>
        </WrapperCocheAll>
        <ButtonLink>
          <Link href="/OffreurDeCompetence/Competence/Competence">
            <a>
              <TextBottom>Valider</TextBottom>
            </a>
          </Link>
        </ButtonLink>
        <Footer />
      </WrapperALL>
    </>
  );
};

export default Raison;
