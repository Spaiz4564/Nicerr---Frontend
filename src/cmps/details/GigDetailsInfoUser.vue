<template>
    <div class="gig-user-info flex column">
        <Overview :gig="gig" />
        <Description :gig="gig" />
        <AboutSeller :gig="gig" />
        <Reviews :gig="gig" />
    </div>
</template>

<script>
import AboutSeller from './AboutSeller.vue';
import Reviews from './Reviews.vue';
import Description from './Description.vue';
import Overview from './Overview.vue';


export default {
    props: ['gig'],
    name: 'GigUserInfo',
    data() {
        return {
        }
    },
    methods: {
    },
    computed: {
    },
    created() {

    },
    components: {

        AboutSeller,
        Reviews,
        Description,
        Overview
    },
}
</script>

<style></style>

<!-- <vueper-slides fade :touchable="false">
    <vueper-slide v-for="(img, i) in gig.images" :key="i" :image="imgUrl(img)" />
</vueper-slides> -->