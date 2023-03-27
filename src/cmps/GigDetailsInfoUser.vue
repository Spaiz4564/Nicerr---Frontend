<template>
    <div class="gig-user-info flex column">
        <p class="title">{{ gig.title }}</p>
        <div class="info-img flex align-center ">
            <img class="logo" :src="gig.owner.imgUrl" alt="" />
            <p class="name">{{ gig.owner.fullname }}</p>
            <p>Level 3 Seller (569)</p>
        </div>
        <div class="img">
            <div class="img-container">
                <vueper-slides class="main-slide" ref="vueperslides1"
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
                            <span class="online">
                                <div class="dot" v-html="getSvg('dot')"></div>
                                Online
                            </span>

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
                    <!-- <button class="contact-me-btn">Contact Me</button> -->
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
                    <div class="seller-desc">
                        <p>
                            I am a professional graphics designer from Canada. Designing is not only my job, it's my
                            Passion. All I need from you is a rough sketch of your idea. Then you can just relax and see the
                            magic happening. Not only you'll get stunning and professional designs, but also you'll have top
                            class custome
                        </p>
                    </div>
                </section>
            </section>
            <ul class="metadata clean-list flex">
                <li class="attribute ">
                    <p>Programming language</p>
                    <ul class="clean-list">
                        <li>PHP</li>
                    </ul>
                </li>
                <li class="attribute ">
                    <p>Expertise</p>
                    <ul class="clean-list flex column">
                        <li>Cross Browser</li>
                        <li>compatibility</li>
                        <li>PST to HTML</li>
                        <li>Performance</li>
                    </ul>
                </li>
            </ul>
        </section>
        <section class="review-container">
            <h3>Reviews</h3>
            <div class="review-star flex">
                <span>270 reviews for this Gig</span>
                <div className="icon" v-html="getSvg('fiveStars')"></div>
                <p>5</p>
            </div>
            <section class="breakdown-progress flex">
                <section class="progress-bar">
                    <ul class="clean-list flex column">
                        <li class="flex align-center">
                            <span class="key">5 Stars</span>
                            <progress max="270" value="243"></progress>
                            <section class="progress-container flex align-center">
                                <span class="star-num"> (243) </span>
                            </section>
                        </li>
                        <li class="flex align-center">
                            <span class="key">4 Stars</span>
                            <section class="progress-container flex align-center">
                                <progress max="270" value="17"></progress>
                                <span class="star-num">(17)</span>
                            </section>
                        </li>
                        <li class="flex align-center">
                            <span class="key">3 Stars</span>
                            <section class="progress-container flex align-center">
                                <progress max="270" value="6"></progress>
                                <span class="star-num">(6)</span>
                            </section>
                        </li>
                        <li class="flex align-center">
                            <span class="key">2 Stars</span>
                            <section class="progress-container flex align-center">
                                <progress max="270" value="3"></progress>
                                <span class="star-num">(4)</span>
                            </section>
                        </li>
                        <li class="flex align-center">
                            <span class="key">1 Stars</span>
                            <section class="progress-container flex align-center">
                                <progress max="270" value="1"></progress>
                                <span class="star-num">(1)</span>
                            </section>
                        </li>
                    </ul>
                </section>
                <section class="rating-bar">
                    <ul class="clean-list flex column">
                        <li class="flex align-center">
                            <span class="main-title">Rating Break Down</span>
                        </li>
                        <li class="flex align-center space-between">
                            <span class="rating-option">Seller communication level</span>
                            <div class="flex">
                                <div className="icon gold" v-html="getSvg('starGold')"></div>
                                <span class="ratting">5</span>
                            </div>
                        </li>
                        <li class="flex align-center space-between">
                            <span class="rating-option">Recommend to a friend</span>
                            <div class="flex">
                                <div className="icon gold" v-html="getSvg('starGold')"></div>
                                <span class="ratting">5</span>
                            </div>
                        </li>
                        <li class="flex align-center space-between">
                            <span class="rating-option">Service as described</span>
                            <div class="flex">
                                <div className="icon gold" v-html="getSvg('starGold')"></div>
                                <span class="ratting">5</span>
                            </div>
                        </li>
                    </ul>

                </section>
            </section>
            <section class="reviews-wrap">
                <ul class="review-lists clean-list ">
                    <span class="review-item-component">
                        <li class="review-item">
                            <section class="review-header flex">
                                <div class="flex align-center">
                                    <div class="user-profile-image">
                                        <label class="user-img">
                                            <img src="" alt="">
                                        </label>
                                        <div class="flex column">
                                            <div class=" user-info flex column">
                                                <span>worldexpo2016</span>
                                                <div>
                                                    <span>Germany-flag</span>
                                                    <span class="country">Germany</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section class="review-details">
                                <div class="stars-count flex align-center">
                                    <div className="review" v-html="getSvg('fiveStarsEmpty')"></div>
                                    <div class="review-num">5</div>
                                    <span class="border"></span>
                                    <p> 2 months ago</p>
                                </div>
                                <div class="review-text">
                                    <p>I'm so glad I chose tenpixls to do the job! They did an amazing job on my website -
                                        quickly and efficiently. The customer service was top-notch and they were always
                                        available to answer any questions I had. They even went above and beyond to... </p>
                                </div>
                                <div class="helpful flex align-center">
                                    <span>Helpful?</span>
                                    <div className="icon" v-html="getSvg('thumbsUp')"></div>
                                    <span>Yes</span>
                                    <div className="icon" v-html="getSvg('thumbsDown')"></div>
                                    <span>No</span>
                                </div>
                            </section>
                        </li>
                        <li class="review-item">
                            <section class="review-header">
                                <div class="flex item-center">
                                    <div class="user-profile-image">
                                        <label class="user-img">
                                            <img src="" alt="">
                                        </label>
                                        <div class="flex column">
                                            <div class=" user-info flex column">
                                                <span>joellauren</span>
                                                <div>
                                                    <span>Sweden-flag</span>
                                                    <span class="country">Sweden</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section class="review-details">
                                <div class="stars-count flex align-center">
                                    <div className="review" v-html="getSvg('fiveStarsEmpty')"></div>
                                    <div class="review-num">5</div>
                                    <span class="border"></span>
                                    <p> 2 months ago</p>
                                </div>
                                <div class="review-text">
                                    <p>Fast, comprehensive delivery with good quality. Continuous updates and clear maps of
                                        how the project will be carried out even before we start it. Highly recommend! </p>
                                </div>
                                <div class="helpful flex align-center">
                                    <span>Helpful?</span>
                                    <div className="icon" v-html="getSvg('thumbsUp')"></div>
                                    <span>Yes</span>
                                    <div className="icon" v-html="getSvg('thumbsDown')"></div>
                                    <span>No</span>
                                </div>
                            </section>

                        </li>
                        <li class="review-item">
                            <section class="review-header">
                                <div class="flex item-center">
                                    <div class="user-profile-image">
                                        <label class="user-img">
                                            <img src="" alt="">
                                        </label>
                                        <div class="flex column">
                                            <div class=" user-info flex column">
                                                <span>diplomattylaa</span>
                                                <div>
                                                    <span>United States-flag</span>
                                                    <span class="country">United States</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section class="review-details">
                                <div class="stars-count flex align-center">
                                    <div className="review" v-html="getSvg('fiveStarsEmpty')"></div>
                                    <div class="review-num">5</div>
                                    <span class="border"></span>
                                    <p> 1 months ago</p>
                                </div>
                                <div class="review-text">
                                    <p>Quick and excellent communication with perfect delivery time. The results were superb
                                        and urek_arts went above and beyond! Pricing was fair and well worth it. I would
                                        recommend urek_arts in a heartbeat to anyone else looking for anime-style artwork
                                        creations or editing. </p>
                                </div>
                                <div class="helpful flex align-center">
                                    <span>Helpful?</span>
                                    <div className="icon" v-html="getSvg('thumbsUp')"></div>
                                    <span>Yes</span>
                                    <div className="icon" v-html="getSvg('thumbsDown')"></div>
                                    <span>No</span>
                                </div>
                            </section>

                        </li>
                        <li class="review-item">
                            <section class="review-header">
                                <div class="flex item-center">
                                    <div class="user-profile-image">
                                        <label class="user-img">
                                            <img src="" alt="">
                                        </label>
                                        <div class="flex column">
                                            <div class=" user-info flex column">
                                                <span>birdcam_vt</span>
                                                <div>
                                                    <span>United States-flag</span>
                                                    <span class="country">United States</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section class="review-details">
                                <div class="stars-count flex align-center">
                                    <div className="review" v-html="getSvg('fiveStarsEmpty')"></div>
                                    <div class="review-num">5</div>
                                    <span class="border"></span>
                                    <p> 2 months ago</p>
                                </div>
                                <div class="review-text">
                                    <p>Urek never disappoints, I provided a reference image and he was able to match it and
                                        go above and beyond my expectations. He is truly the best in his field, providing
                                        quality AI art for a reasonable price. I strongly recommend him. </p>
                                </div>
                                <div class="helpful flex align-center">
                                    <span>Helpful?</span>
                                    <div className="icon" v-html="getSvg('thumbsUp')"></div>
                                    <span>Yes</span>
                                    <div className="icon" v-html="getSvg('thumbsDown')"></div>
                                    <span>No</span>
                                </div>
                            </section>

                        </li>
                        <li class="review-item">
                            <section class="review-header">
                                <div class="flex item-center">
                                    <div class="user-profile-image">
                                        <label class="user-img">
                                            <img src="" alt="">
                                        </label>
                                        <div class="flex column">
                                            <div class=" user-info flex column">
                                                <span>khabou</span>
                                                <div>
                                                    <span>Spain-flag</span>
                                                    <span class="country">Spain</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section class="review-details">
                                <div class="stars-count flex align-center">
                                    <div className="review" v-html="getSvg('fiveStarsEmpty')"></div>
                                    <div class="review-num">5</div>
                                    <span class="border"></span>
                                    <p> 3 months ago</p>
                                </div>
                                <div class="review-text">
                                    <p>Pablo delivered a quick but insightful intro to stable diffusion with a real case
                                        study in just 2 hours. I kew about SD and played with it before, but I knew what it
                                        could do. Pablo demonstarted the real potential in both speed and creativity... </p>
                                </div>
                                <div class="helpful flex align-center">
                                    <span>Helpful?</span>
                                    <div className="icon" v-html="getSvg('thumbsUp')"></div>
                                    <span>Yes</span>
                                    <div className="icon" v-html="getSvg('thumbsDown')"></div>
                                    <span>No</span>
                                </div>
                            </section>

                        </li>
                    </span>

                </ul>

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
        },
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