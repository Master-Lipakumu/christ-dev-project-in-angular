import { InMemoryDbService } from "angular-in-memory-web-api";

import { Formations } from "../models/formations.model";

export class FormationData implements InMemoryDbService {
  createDb(): Record<string, Formations[]> {
    const formations: Formations[] = [
      {
        id: 1,
        date_D: "20 janvier 2017",
        date_F: "23 septembre 2019",
        title: "bachelor en programmation informatique",
        school: "Institut superieur d'informatique",
        descriptions: "Bachelor en programmation informatique spécialisé en web et mobile ma préparé au futurs spécialistés opérationnels dans le développement des solutions web et mobiles. J'ai reçu les fondamentaux nécessaires notamment à la création de sites web évolutifs et ergonomiques, mais aussi à la création d’applications pour des dispositifs mobiles comme les smartphones et les tablettes. À l’issue du cursus, je suis devenu aptes à : la conception et le développement d’applications, l’intégration des systèmes, le test et le déploiement de solutions, le support utilisateur, le développement durable, la construction et la sécurisation d’un système d’information.",
        dateproject:"18 juillet 2021",
        projectname:"dynamique web site de l' Eglise Grace de Vie",
        descriptionsproject:"conception d'un blog dynamique avec la technique Django3 de python spécialité rubrique membre(enregistrement, connexion, profile, like et favoriser les articles), espace visionnage de vidéo Youtube et ajout dynamique seulement par le super utilisateur.",
        lieu:"GABON/ESTUAIRE/LIBREVILLE",
        url:"",
    },
    {
        id:2,
        date_D:"25 janvier 2021",
        date_F:"5 mai 2021",
        title:"certification en developpement web",
        school:"EN LIGNE SUR LA PLATFORME UDEMY",
        descriptions: "Après avoir passé tous une année sans pouvoir vivre du code, grace à certain collègue qui mon donner comme conseil de me lancer en freelance un domaine que je ne connaissais pas je me suis alors offert l'occasion de me recycle en développement web(HTML 5, CSS 3, BOOSTRAP 4, PYTHON 3, DJANGO 3).",
        dateproject:"23 juillet 2021",
        projectname:"web dynamique blackstratege (music)",
        descriptionsproject:"comme le nom l'indique le projet concerne le groupe de musique black stratège, les techniques utilisées sont : HTML5, Css3, Django, bootstrap4 et Javascript point fort visionnage de vidéo-clip du groupe de musique",
        lieu:"GABON/ESTUAIRE/LIBREVILLE",
        url:"",

    }

    ];

    return { formations }

  }

}
