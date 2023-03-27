<template>
    <section v-if="gig">
        <p class="title">{{ gig.title }}</p>
        <div class="info-img flex align-center ">
            <img class="logo" :src="gig.owner.imgUrl" alt="" />
            <p class="name">{{ gig.owner.fullname }}</p>
            <p>Level 3 Seller (569)</p>
        </div>
        <div class="img">
            <div class="img-container">
                <vueper-slides class="main-slide" ref="vueperslides1" fixed-height="472px"
                    @slide="$refs.vueperslides2 && $refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })"
                    :slide-ratio="1 / 4" :bullets="false">
                    <vueper-slide v-for="(img, i) in gig.images" :key="i" :image="imgUrl(img)"
                        :style="'background-color: ' + ['#ff5252', '#42b983'][i % 2]" />
                </vueper-slides>
                <vueper-slides class="thumbnails" ref="vueperslides2" :slide-ratio="1 / 8" :dragging-distance="50"
                    @slide="$refs.vueperslides1 && $refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })"
                    :gap="1" :visible-slides="3" fixed-height="100px" :arrows="false" :bullets="false">
                    <vueper-slide v-for="(img, i) in gig.images" :key="i" :image="imgUrl(img)"
                        @click.native="$refs.vueperslides2 && $refs.vueperslides2.goToSlide(i)">
                    </vueper-slide>
                </vueper-slides>
            </div>
        </div>
        <section class="gig-review">
            <section class="header">
                <h2 class="title">What people loved about this seller</h2>
                <a>See all reviews</a>
            </section>
            <section class="review-container">
                <section class="review-preview">
                    <section class="grid">
                        <img class="img" />
                        <section class="user-details flex align-center">
                            <p>Lidor</p>
                            <img class="img" />
                            <p>United State</p>
                            <section>
                                <ul class="ul-rate clean-list  flex justify-center align-center ">
                                    <li>
                                        <span className="check gold" v-html="getSvg('starGold')"></span>
                                    </li>
                                    <li>
                                        <span className="check gold" v-html="getSvg('starGold')"></span>
                                    </li>
                                    <li>
                                        <span className="check gold" v-html="getSvg('starGold')"></span>
                                    </li>
                                    <li>
                                        <span className="check gold" v-html="getSvg('starGold')"></span>
                                    </li>
                                    <li>
                                        <span className="check gold" v-html="getSvg('starGold')"></span>
                                    </li>
                                    <p class="rate">5</p>
                                </ul>
                            </section>
                        </section>
                        <section class="preview-content">
                            <p class="content">Thank you SO MUCH to the seller. He was so patient and willing to work and
                                correct as
                                many times as
                                we needed as some things got miscommunicated and he easily fixed them. Thank you!!!</p>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    </section>
</template>

<script>

import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
import { svgService } from '../../services/svg.service';


export default {
    props: ['gig'],
    name: '',
    data() {
        return {

        }
    },
    methods: {
        getSvg(iconName) {
            return svgService.getSvg(iconName)
        },
        imgUrl(img) {
            return new URL(img, import.meta.url).href
        },
    },
    computed: {
    },
    created() {

    },
    components: {
        VueperSlides,
        VueperSlide,
    },
}
</script>

<style></style>


            v-for="(img, i) in gig.images"
            :key="i"
            :image="imgUrl(img)"