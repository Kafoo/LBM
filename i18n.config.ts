export default defineI18nConfig(() => ({
  legacy: false,

  messages: {

    en: {

      navigation: {
        expertise: 'our expertise',
        creations: 'our creations',
        nous: 'who are we',
        contact: 'contact'
      },

      home: {
        services: {
          title: 'Our services',
          text: 'Les Bonnes Manières is an event agency that collaborates with the biggest players in the luxury industry to create extraordinary, memorable events. Our commitment lies in the art of thinking and shaping each events into an unforgettable experience, carefully curated and including the customer at the heart of every experience.',
          last: 'Discover the art of celebration with Les Bonnes Manières!',
          picture1: 'Corporate events and product launches',
          picture2: 'Corporate seminars',
          picture3: 'Ephemeral spaces / booths',
        },
        square: {
          text: 'We make your dreams come true, with a special commitment to exceed your expectations. Our collaborative approach allows us to create events that reflect the essence of our customers while surprising them at the same time.',
          why: 'Why should we work together ?',
          reason1: 'For our strong knowledge and expertise of the travel retail industry.',
          reason2 : 'For our in-depth commitment to  the codes and requirements of the sector.',
          reason3 : 'For our reliability and legitimacy AS an agency recognized for over 25 years.'
        }
      },

      expertise:{
        title: 'We create exclusive experiences that transcend borders and combine unique refinement and creativity.',
        blocs:[
          {
            title: 'Corporate seminars', 
            text: 'We create  exclusive experiences tailored around your needs and products and your company DNA that transcend borders and combine refinement and uniqueness . From the concept to the execution, we organize corporate seminars that reflect your image, where elegance and conviviality come together to create outstanding memorable experiences.',
            image: '/pictures/soiree-terrasse.jpg',
            cta: 'Discover our seminars'
          },
          {
            title: 'Corporate events and product launches', 
            text: 'We handle every step of your event with integrity, passion and precision. Our dedicated team is committed to creating exceptional moments where professionalism, creativity and uniqueness come together to create an unforgettable experience.',
            image: '/pictures/caviar.jpg',
            cta: 'Discover our corporate events'
          },
          {
            title: 'Ephemeral spaces', 
            text: 'We design elegant, custom-made stands and pop-up stores for every one of our customers. No matter what the occasion , we are committed to sublimate your spaces to leave a lasting impression in the mind of your guests.',
            image: '/pictures/scooter.jpg',
            cta: 'Discover our activations'
          },
          {
            title: 'Our technical expertise', 
            text: 'Our team takes care of all the services required for your event, from the technical to the artistic, location, catering… Nothing is left to chance. Our aim is to offer you a high-performance scenography and optimal rendering.',
            image: '/pictures/regie.jpg',
            cta: 'Discover our corporate events'
          },
        ],
        square: {
          title: 'Our little extra ?',
          text: 'We put exceptional locations at your disposal, frequently offering you the privilege of being among the first to experience it.'
        }
      },

      creations: {
        title: 'Our Creations',
        subtitle: 'A picture is worth a thousand words.',
        text: 'Every collaboration is unique, and that’s what we focus on.',
        last: 'Discover our latest events',
        images:[
          {
            title: 'Unique artistic creation',
            src: '/pictures/couple.jpg',
          },
          {
            title: 'Executing priceless memories',
            src: '/pictures/villa.jpg',
          },
          {
            title: 'Immersive sensorial experience',
            src: '/pictures/dessert.jpg',
          },
          {
            title: 'The sky is the limit',
            src: '/pictures/feux.jpg',
          },
          {
            title: 'A unique decor that stimulates the senses',
            src: '/pictures/fleurs.jpg',
          },
          {
            title: 'Detail oriented',
            src: '/pictures/livres.jpg',
          }
        ],
        catch: 'Exclusive events, priceless memories'
      },

      contact: {
        title: {
          line1: 'Need a quote',
          line2: 'for your',
          line3: 'project ?'
        },
        text: 'We’ll be delighted to work with you, whether your project is defined or not! Just fill in our form share your ideas and we will get back to you as soon as possible.',
        form: {
          name: 'Surname - First name',
          email: 'Email',
          phone: 'Phone number',
          eventType: 'Event type',
          guests: 'Number of Guests',
          date: 'Date of the event',
          message: 'Your message',
          submit: 'Send'
        }
      },

      confiance: 'They trusted us',
      cta: {
        expertise: 'discover our expertise',
        creations: 'discover our creations',
        contact: 'contact us'
      },

      footer: {
        activities:[
          'Creative concept',
          'Digital, physical, hybrid strategy',
          'Content creation',
          'Graphic design',
          'Pop-up store',
          'Scenography and space design',
          'Logistics and Production',
          'Technical',
          'Corporate events',
          'Corporate seminars',
        ],
        legal: 'official website : all rights reserved les bonnes manières - © 2023 - ',
        uLegal: 'legal notice'
      }
    },

    fr: {

      navigation: {
        expertise: 'notre expertise',
        creations: 'nos créations',
        nous: 'qui sommes nous',
        contact: 'contact'
      },

      home: {
        services: {
          title: 'Nos services',
          text: 'Les Bonnes Manières est une agence événementielle qui s’associe aux plus grands acteurs du luxe pour créer des événements hors du commun. Notre engagement réside dans l’art de penser et de façonner chacun de vos événements en une expérience inoubliable, plaçant avec soin le client au coeur de chacun de nos choix.',
          last: 'Découvrez l’art de la célébration avec Les Bonnes Manières !',
          picture1: 'Soirées d’entreprise et lancement de produits',
          picture2: 'Séminaires d’entreprise',
          picture3: 'Lieux éphémères / Stands',
        },
        square: {
          text: 'Nous transformons vos désirs en réalité, avec un engagement particulier pour dépasser vos attentes. Notre approche collaborative permet de créer l’événement de manière à refléter fidèlement l’essence même de nos clients et de les surprendre.',
          why: 'Pourquoi travailler ensemble ?',
          reason1: 'Pour notre parfaite connaissance de l’industrie du travel retail.',
          reason2 : 'Pour notre connaissance approfondie des codes et des exigences de votre secteur d’activité.',
          reason3 : 'Pour le serieux et la légitimité d’une agence reconnue dans le milieu depuis plus de 25 ans.'
        }
      },

      expertise:{
        title: 'Nous concevons des expériences exclusives qui transcendent les frontières et allient raffinement et créativité.',
        blocs:[
          {
            title: 'Séminaires d’entreprise', 
            text: 'Nous concevons des expériences exclusives qui transcendent les frontières et allient raffinement et créativité. De la conception à l’exécution, nous créons des séminaires d’entreprise à votre image où élégance et convivialité se rencontrent pour des expériences professionnelles hors du commun.',
            image: '/pictures/soiree-terrasse.jpg',
            cta: 'Découvrez nos séminaires'
          },
          {
            title: 'Corporate events et lancement de produits', 
            text: 'Nous nous occupons de chaque étape de vos événements avec passion et précision. Notre équipe dévouée se consacre à concevoir des moments exceptionnels où le professionnalisme, la créativité et la singularité s’allient pour vous offrir un moment inoubliable.',
            image: '/pictures/caviar.jpg',
            cta: 'Découvrez nos soirées d’entreprise'
          },
          {
            title: 'Lieux éphémères', 
            text: 'Nous concevons des stands et pop-up stores élégants, sur mesure pour chacun de nos clients. Peu importe l’occasion, nous nous engageons à sublimer vos espaces pour marquer les esprits de vos invités.',
            image: '/pictures/scooter.jpg',
            cta: 'Découvrez nos animations'
          },
          {
            title: 'Notre expertise technique', 
            text: 'Notre équipe prend en charge l’ensemble des prestations nécessaires à la réalisation de votre événement. Nous assurons la direction artistique et technique sur la globalité du projet. Notre objectif est de vous proposer une scénographie performante et un rendu optimal.',
            image: '/pictures/regie.jpg',
            cta: 'Découvrez nos soirées d’entreprise'
          },
        ],
        square: {
          title: 'Notre petit plus ?',
          text: 'Nous mettons à votre disposition des lieux d’exception, vous offrant fréquemment le privilège d’être parmi les premiers à les utiliser.'
        }
      },

      creations: {
        title: 'Nos créations',
        subtitle: 'Une image vaut mille mots.',
        text: 'Chaque collaboration est unique, et c’est ce que nous faisons ressortir lors de vos événements.',
        last: 'Découvrez nos dernières réalisations',
        images:[
          {
            title: 'Création artistique unique',
            src: '/pictures/couple.jpg',
          },
          {
            title: 'Offrir des souvenirs qui n’ont pas de prix',
            src: '/pictures/villa.jpg',
          },
          {
            title: 'Expérience sensorielle immersive',
            src: '/pictures/dessert.jpg',
          },
          {
            title: 'The sky is the limit',
            src: '/pictures/feux.jpg',
          },
          {
            title: 'Une décoration unique qui stimule les sens',
            src: '/pictures/fleurs.jpg',
          },
          {
            title: 'Le sens du détail',
            src: '/pictures/livres.jpg',
          }
        ],
        catch: 'Des événements exclusifs, des souvenirs inestimables'
      },

      contact: {
        title: {
          line1: 'Besoin d’un',
          line2: 'devis pour votre',
          line3: 'projet ?'
        },
        text: 'Nous serons ravis de vous aider que votre projet soit défini ou non ! Remplissez notre formulaire, nous reviendrons vers vous dans les plus brefs délais.',
        form: {
          name: 'Nom - Prénom',
          email: 'Email',
          phone: 'téléphone',
          eventType: 'type d’événement',
          guests: 'Nombre d’invités',
          date: 'Date de l’événement',
          message: 'Votre message',
          submit: 'Envoyer'
        }
      },

      confiance: 'Ils nous ont fait confiance',

      cta: {
        expertise: 'Découvrez notre expertise',
        creations: 'Découvrez nos créations',
        contact: 'contactez nous'
      },

      footer: {
        activities:[
          'Concept créatif',
          'Stratégie digitale, physique, hybride',
          'Création de contenu',
          'Design graphique',
          'Pop-up store',
          'Scénographie et design d’espace',
          'Logistique et Production',
          'Technique',
          'Soirées corporate',
          'Séminaires d’entreprise'
        ],
        legal: 'site officiel : tous droits réservés les bonnes manières - © 2023 - ',
        uLegal: 'mentions légales'
      }
    }
  },
}))