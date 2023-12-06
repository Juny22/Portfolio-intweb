import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import NinacarducciImg from "../../Assets/Projects/ninacarducci.png";
import ArgentbankImg from "../../Assets/Projects/argentbank.png";
import EventImg from "../../Assets/Projects/724events.png";
import SophiebluelImg from "../../Assets/Projects/sophiebluel.png"
import OhmyfoodImg from "../../Assets/Projects/ohmyfood.png"
import BookiImg from "../../Assets/Projects/booki.png"

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
              imgPath={ArgentbankImg}
              isBlog={false}
              title={<strong>ArgentBank</strong>}
              description="Ce projet visait à concevoir une application web réactive en utilisant React Redux pour le système d'authentification d'Argent Bank, une banque en ligne.
              Les fonctionnalités prévues comprenaient la gestion de la navigation, l'authentification des utilisateurs (connexion/déconnexion) et 
              la sécurisation de l'accès aux données du profil après la connexion. Seule la modification du pseudonyme était autorisée dans ce contexte.
              J'ai également travaillé sur une fonctionnalité de transactions permettant aux utilisateurs de réaliser certaines actions spécifiques.
              La connexion ne fonctionne pas car il faut lancer le backend."
              softwareUsed={<strong>React, React Redux, Node.js</strong>}
              ghLink="https://github.com/Juny22/ArgentBank-website"
              demoLink="https://juny22.github.io/ArgentBank-website/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EventImg}
              isBlog={false}
              title={<strong>724Events</strong>}
              description="Ce projet consistait à résoudre plusieurs problèmes sur le site existant de 724Events.
              Je devais corriger des bugs tels que l'affichage incorrect des événements dans le carrousel,
              le dysfonctionnement du filtre des réalisations et l'absence d'affichage du message de confirmation après l'envoi du formulaire.
              En plus de ces corrections, je devais effectuer des tests pour m'assurer du bon fonctionnement du site une fois les correctifs appliqués.
              Enfin, j'ai rempli un cahier de recette pour garantir la fiabilité du site et répondre aux besoins actuels,
              tout en fournissant une base pour les futurs développements."
              softwareUsed={<strong>React</strong>}
              ghLink="https://github.com/Juny22/Projet-10---724events"
              demoLink="https://juny22.github.io/Projet-10---724events/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NinacarducciImg}
              isBlog={false}
              title={<strong>Nina Carducci</strong>}
              description="Ce projet visait à améliorer considérablement le référencement du site de la photographe Nina Carducci en intervenant à plusieurs niveaux :
              L'optimisation globale pour augmenter à la fois les performances et l'efficacité du référencement (SEO).
              L'implémentation d'un référencement local via Schema.org pour une meilleure visibilité locale.
              L'intégration de métadonnées spécifiques aux réseaux sociaux pour améliorer la présence en ligne.
              Améliorer de l'accessibilité du site pour tous les utilisateurs.
              Réaliser rapport détaillé, exposant toutes les actions entreprises et leur impact sur le site."
              softwareUsed={<strong>JavaScript, HTML, CSS</strong>}
              ghLink="https://github.com/Juny22/Projet-9-Nina-Carducci"
              demoLink="https://juny22.github.io/Projet-9-Nina-Carducci/"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SophiebluelImg}
              isBlog={false}
              title={<strong>Sophie Bluel</strong>}
              description="Pour ce projet, mon rôle impliquait la création d'une page présentant les travaux de l'architecte à partir du code HTML existant, 
              la conception d'une page de connexion pour l'administrateur du site, ainsi que la création d'une modale pour télécharger de nouveaux médias.
              Les médias n'apparaissent pas sur la démo car il faut être connecté au backend."
              softwareUsed={<strong>JavaScript, HTML, CSS, Node.js</strong>}
              ghLink="https://github.com/Juny22/Projet-6-Sophie-Bluel"
              demoLink="https://juny22.github.io/Projet-6-Sophie-Bluel/FrontEnd/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OhmyfoodImg}
              isBlog={false}
              title={<strong>Ohmyfood</strong>}
              description="Le projet visait à concevoir un site web responsive pour les restaurants gastronomiques,
              offrant la possibilité aux clients de composer leur repas à l'avance pour réduire les temps d'attente.
              En mettant l'accent sur la mobilité, le site proposera des menus, un système de réservation et une fonctionnalité de composition de repas,
              améliorant ainsi l'expérience client."
              softwareUsed={<strong>HTML, CSS, SASS</strong>}
              ghLink="https://github.com/Juny22/Projet-4-Ohmyfood"
              demoLink="https://juny22.github.io/Projet-4-Ohmyfood/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BookiImg}
              isBlog={false}
              title={<strong>Booki</strong>}
              description="La mission de ce projet consistait à créer un site web pour Booki, permettant aux utilisateurs de rechercher des hébergements et des activités dans la ville de leur choix.
              Mon rôle était d'intégrer l'interface utilisateur en utilisant du code HTML et CSS.
              L'objectif était de fournir une expérience conviviale et attrayante,
              facilitant la navigation et la recherche pour les utilisateurs à la recherche d'options d'hébergement et d'activités dans différentes villes."
              softwareUsed={<strong>HTML, CSS</strong>}
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
