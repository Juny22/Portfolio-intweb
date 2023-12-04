import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes récents <strong className="purple">projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Ce sont des projets réalisés avec OpenClassRoom.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="ArgentBank"
              description={`Ce projet consistait à créer une application web réactive avec React Redux 
              pour un système d'authentification pour la banque en ligne Argent Bank.
              Les fonctionnalités attendues incluent la navigation, la connexion/déconnexion des utilisateurs,
              et la restriction d'accès aux données du profil après la connexion.
              Seules les modifications du pseudonyme étaient autorisées.
              J'ai également travaillé sur une fonctionnalité de transactions permettant aux utilisateurs de réaliser certaines actions spécifiques.`}
              ghLink="https://github.com/Juny22/ArgentBank-website"
              demoLink=""
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="724Events"
              description="Ce projet consistait à résoudre plusieurs problèmes sur le site existant de 724Events.
              Je devais corriger des bugs tels que l'affichage incorrect des événements dans le carrousel,
              le dysfonctionnement du filtre des réalisations et l'absence d'affichage du message de confirmation après l'envoi du formulaire.
              En plus de ces corrections, je devais effectuer des tests pour m'assurer du bon fonctionnement du site une fois les correctifs appliqués.
              Enfin, j'ai rempli un cahier de recette pour garantir la fiabilité du site et répondre aux besoins actuels,
              tout en fournissant une base pour les futurs développements."
              ghLink="https://github.com/Juny22/Projet-10---724events"
              demoLink="https://juny22.github.io/Projet-10---724events/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Nina Carducci"
              description="Ce projet visait à améliorer considérablement le référencement du site de la photographe Nina Carducci en intervenant à plusieurs niveaux :
              L'optimisation globale pour augmenter à la fois les performances et l'efficacité du référencement (SEO).
              L'implémentation d'un référencement local via Schema.org pour une meilleure visibilité locale.
              L'intégration de métadonnées spécifiques aux réseaux sociaux pour améliorer la présence en ligne.
              Améliorer de l'accessibilité du site pour tous les utilisateurs.
              Réaliser rapport détaillé, exposant toutes les actions entreprises et leur impact sur le site."
              ghLink="https://github.com/Juny22/Projet-9-Nina-Carducci"
              demoLink="https://juny22.github.io/Projet-9-Nina-Carducci/"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Agence Kasa"
              description="L'objectif était de démarrer le projet en React avec Create React App et de développer toute l'application 
              y compris les composants React, les routes avec React Router, en respectant les maquettes Figma fournies pour l'Agence Kasa.
              La contrainte principale était l'absence temporaire d'une équipe dédiée au back-end, nécessitant ainsi une construction du Front-end indépendamment pour le moment."
              ghLink="https://github.com/Juny22/Projet-8---Agence-Kasa"
              demoLink="https://juny22.github.io/Projet-8---Agence-Kasa/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Sophie Bluel"
              description="Pour ce projet, mon rôle impliquait la création d'une page présentant les travaux de l'architecte à partir du code HTML existant, 
              la conception d'une page de connexion pour l'administrateur du site, ainsi que la création d'une modale pour télécharger de nouveaux médias.
              Les médias n'apparaissent pas sur la démo car il faut être connecté au backend."
              ghLink="https://github.com/Juny22/Projet-6-Sophie-Bluel"
              demoLink="https://juny22.github.io/Projet-6-Sophie-Bluel/FrontEnd/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Booki"
              description="La mission de ce projet consistait à créer un site web pour Booki, permettant aux utilisateurs de rechercher des hébergements et des activités dans la ville de leur choix.
              Mon rôle était d'intégrer l'interface utilisateur en utilisant du code HTML et CSS.
              L'objectif était de fournir une expérience conviviale et attrayante,
              facilitant la navigation et la recherche pour les utilisateurs à la recherche d'options d'hébergement et d'activités dans différentes villes."
              ghLink="https://github.com/Juny22/Projet-3_booki-starter-code-master"
              demoLink="https://juny22.github.io/Projet-3_booki-starter-code-master/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
