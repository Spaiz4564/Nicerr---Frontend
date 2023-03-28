<template>
    <section class="review-container" v-if="gig">
        <h3>Reviews</h3>
        <div class="review-star flex">
            <span>270 reviews for this Gig</span>
            <div class="flex">
                <div className="review-star icon" v-html="getSvg('fiveStarsEmpty')"></div>
                <p>5</p>
            </div>
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
                                        <div class=" review-user-info flex column">
                                            <span class="review-user-info name">worldexpo2016</span>
                                            <div>
                                                <span>Germany-flag</span>
                                                <span class="review-user-info country">Germany</span>
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
                                        <div class=" review-user-info flex column">
                                            <span class="review-user-info name">joellauren</span>
                                            <div>
                                                <span>Sweden-flag</span>
                                                <span class="review-user-info country">Sweden</span>
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
                                        <div class=" review-user-info flex column">
                                            <span class="review-user-info name">diplomattylaa</span>
                                            <div>
                                                <span>United States-flag</span>
                                                <span class="review-user-info country">United States</span>
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
                                        <div class=" review-user-info flex column">
                                            <span class="review-user-info name">birdcam_vt</span>
                                            <div>
                                                <span>United States-flag</span>
                                                <span class="review-user-info country">United States</span>
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
                                        <div class=" review-user-info flex column">
                                            <span class="review-user-info name">khabou</span>
                                            <div>
                                                <span>Spain-flag</span>
                                                <span class="review-user-info country">Spain</span>
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
</template>

<script>

import { svgService } from '../../services/svg.service';

export default {
    props: ['gig'],
    name: 'Reviews',
    data() {
        return {
        }
    },
    methods: {
        getSvg(iconName) {
            return svgService.getSvg(iconName)
        },
    },
    computed: {

    },
    created() {

    },
    components: {

    },
}
</script>

<style></style>