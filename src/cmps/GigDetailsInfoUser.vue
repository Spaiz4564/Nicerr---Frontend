<template>
    <div class="gig-user-info flex column">
        <p class="title">I will create modern unique and creative logo design</p>
        <div class="info-img">
            <img class="logo" :src="gig.owner.imgUrl" alt="" />
            <p class="name">{{ gig.owner.fullname }}</p>
            <p>level 3 Seller (569)</p>
        </div>
        <div class="img">
            <div class="img-container">
                <vueper-slides ref="vueperslides1"
                    @slide="$refs.vueperslides2 && $refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })"
                    :slide-ratio="1 / 4" :bullets="false">
                    <vueper-slide v-for="(img, i) in gig.images" :key="i" :image="imgUrl(img)"
                        :style="'background-color: ' + ['#ff5252', '#42b983'][i % 2]" />
                </vueper-slides>

                <vueper-slides ref="vueperslides2" :slide-ratio="1 / 8" :dragging-distance="50"
                    @slide="$refs.vueperslides1 && $refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })"
                    :visible-slides="3" fixed-height="100px" :arrows="false" :bullets="false">
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
        <section class="gig-desc">
            <h3>About This Gig</h3>
            <p>Hi esteemed buyer!Looking for modern unique and creative 2d or 3d logo design? Yes, you're at the right
                place.<br>Having a vast experience with hundreds of satisfied customers across the globe, I extend my
                services to design<br>modern unique and creative logo design to represent your brand idea in a befitting
                manner.<br>What proves my individuality over others?<br>Quick delivery, quality work and transforming your
                brain idea into a 3d creative unique and modern logo
                design<br>are my attributes.<br>MY GIG OFFERINGS ARE:<br>Best customer care<br>Revisions within 24
                Hours<br>100% satisfaction guaranteed<br>Modern unique and creative designing ideas<br>Logically and
                aesthetically hypnotizing logos<br>1 free revision after completion of order<br>Editable and re-sizeable
                vector files<br>Font download link included<br>High resolution final files in zip<br>Note: For Complex
                Illustrations and Mascots, please discuss in inbox before placing order! It is also not<br>included in our
                packages.<br>Have queries? Contact us in inbox anytime!<br>★Hearing from you would be an absolute pleasure,
                Go ahead and ORDER NOW!★
            </p>
        </section>
        <section class="about-seller">
            <h2>About The Seller</h2>
            <section class="seller-preview flex">
                <div class="img-container">
                    <img src="" alt="">
                </div>
                <section class="info-details flex ">
                    <section class="line">
                        <p class="user-name">{{ gig.owner.fullname }}</p>
                        <div class="online-indicator">
                            <span class="online">Online</span>
                        </div>
                    </section>
                    <p class="seller-level">Level 3 Seller</p>
                    <section>
                        <ul class="ul-rate clean-list  flex  align-center ">
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
                            <p class="rate">5 (569)</p>
                        </ul>
                    </section>
                    <button class="contact-me-btn">Contact Me</button>
                </section>
            </section>
            <section class="seller-details-container">
                <section class="seller-stat">
                    <ul class="grid clean-list user-info">
                        <li class="flex column">
                            <span class="key">From</span>
                            <span class="value">Bangladesh</span>
                        </li>
                        <li class="flex column">
                            <span class="key">Member since</span>
                            <span class="value">Jan 2023</span>
                        </li>
                        <li class="flex column">
                            <span class="key">Avg. response time</span>
                            <span class="value">1 hour</span>
                        </li>
                        <li class="flex column">
                            <span class="key">Last delivery</span>
                            <span class="value">about 12 hours</span>
                        </li>
                    </ul>

                </section>
            </section>
        </section>
    </div>
</template>

<script>

import { svgService } from '../services/svg.service';
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

export default {
    props: ['gig'],
    name: 'GigUserInfo',
    data() {
        return {
            user: this.user
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
        handleImages() {
            return this.gig.images[0]
        }
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

<!-- <vueper-slides fade :touchable="false">
    <vueper-slide v-for="(img, i) in gig.images" :key="i" :image="imgUrl(img)" />
</vueper-slides> -->