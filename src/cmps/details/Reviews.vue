<template>
    <section class="review-container" v-if="gig">
        <h3>Reviews</h3>
        <div class="review-star flex">
            <span>270 reviews for this Gig</span>
            <div class="flex">
                <div className="review-star icon" v-html="getSvg('fiveStarsEmpty')"></div>
                <p>4.8</p>
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
                    <li v-for="user in this.reviews" class="review-item">
                        <section class="review-header flex">
                            <div class="flex align-center">
                                <div class="user-profile-image">
                                    <label class="user-img">
                                        <img :src=user.imgUrl alt="">
                                    </label>
                                    <div class="flex column">
                                        <div class=" review-user-info flex column">
                                            <span class="review-user-info name">{{ user.name }}</span>
                                            <div class="review-user-info img">
                                                <img :src=user.flagImg alt="">
                                                <span class="review-user-info country">{{ user.country }}</span>
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
                                <p>{{ user.txt }}</p>
                            </div>
                            <div class="helpful flex align-center">
                                <span>Helpful?</span>
                                <div className="icon thumbsUp" v-html="getSvg('thumbsUp')"></div>
                                <span>Yes</span>
                                <div className="icon thumbsDown" v-html="getSvg('thumbsDown')"></div>
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
import LongTxt from '../../services/LongTxt.vue'
import { gigService } from '../../services/gig.service.local';

export default {
    props: ['gig'],
    name: 'Reviews',
    data() {
        return {
            reviews: gigService.getReviews()
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
        LongTxt,
    },
}
</script>

<style></style>