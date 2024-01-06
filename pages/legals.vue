<template>
  <v-container class="centering-column mt-16 mb-15 text-center">
    <ClassicTitle
    class="mb-8 mx-5 legals-title"
    :text="['Conditions générales d\'utilisation']"
    letterSpaced
    />

    <hr class="mb-10"/>

    <p class="classic-text">
    Les présentes Conditions Générales d'Utilisation (ci-après dénommées "les Conditions") régissent l'utilisation du site web de Les Bonnes Manières (ci-après dénommé "le Site") et l'accès à son contenu. En accédant au Site, vous acceptez sans réserve les présentes Conditions. Si vous n'acceptez pas ces Conditions, veuillez ne pas utiliser le Site.
    </p>

    <ClassicTitle
    class="small legals-small-title"
    :text="['Utilisation du site']"
    />

    <p class="classic-text">
    Vous acceptez de n'utiliser le Site qu'à des fins légales et conformes à ces Conditions. Vous vous engagez à ne pas utiliser le Site à des fins illégales, offensantes, ou en violation des droits de tiers.
    </p>

    <ClassicTitle
    class="small legals-small-title"
    :text="['Contenu du site']"
    />

    <p class="classic-text">
    Le contenu du Site, y compris textes, images, vidéos, graphiques, logos et marques, est la propriété de Les Bonnes Manières ou de ses partenaires, et est protégé par les lois sur le droit d'auteur et les marques. Aucune partie du contenu du Site ne peut être reproduite, copiée, modifiée, distribuée ou utilisée sans l'autorisation écrite de Les Bonnes Manières. Liens vers des Sites Tiers Le Site peut contenir des liens vers des sites web de tiers. Les Bonnes Manières n'endosse pas ces sites et n'est pas responsable de leur contenu ou de leurs pratiques de confidentialité. L'utilisation de ces liens se fait à vos propres risques.
    </p>

    <ClassicTitle
    class="small legals-small-title"
    :text="['Responsabilité']"
    />

    <p class="classic-text">
    Les Bonnes Manières s'efforce de fournir des informations précises et à jour sur le Site, mais ne garantit pas l'exactitude ou l'exhaustivité de son contenu. Les Bonnes Manières décline toute responsabilité pour les pertes ou dommages résultant de l'utilisation du Site.
    </p>

    <ClassicTitle
    class="small legals-small-title"
    :text="['Modification des conditions']"
    />

    <p class="classic-text">
    Les Bonnes Manières se réserve le droit de modifier ces Conditions à tout moment. Les modifications seront publiées sur le Site et prendront effet dès leur publication. Il est de votre responsabilité de consulter régulièrement les Conditions pour vous assurer que vous en êtes informé.
    </p>

    <ClassicTitle
    class="small legals-small-title"
    :text="['Droit applicable et juridiction']"
    />

    <p class="classic-text">
    Les présentes Conditions sont régies par le droit français. Tout litige découlant de l'utilisation du Site sera soumis à la juridiction exclusive des tribunaux de Paris.
    </p>

    <p class="classic-text">
    En utilisant le Site, vous reconnaissez avoir lu, compris et accepté ces Conditions Générales d'Utilisation. Si vous avez des questions concernant ces Conditions, veuillez nous contacter à nadia@lesbonnesmanieres.paris  
    </p>


  </v-container>
</template>

<script lang="ts">

import ClassicTitle from '~/components/atoms/ClassicTitle.vue';
import { isMobile } from '~/ts/functions/composition/displayHelpers';

export default {
    
    name: 'LegalsPage',
    
    components: { ClassicTitle },
    
    setup() {
        const mobile = isMobile();
        return {
            mobile
        };
    }
}

</script>

<style scoped>

.legals-title{
  letter-spacing: 6px !important;
}

.legals-small-title{
  margin: 20px;
}

p{
  margin: 20px;
  line-height: 22px;
  letter-spacing: 1px;
}

hr{
  border-top: 2px solid black;
  width: 200px;

}

</style>
