<template>
    <section class="app-container main-layout">
        <section class="gig-payment flex justify-center">
            <section class="payment-container flex">
                <section class="payment-details-container">
                    <h2>Payment Options</h2>
                    <section class="credit-selection flex">
                        <div>Credit & Debit Cards</div>
                        <div class="visa">
                            <div className="icon" v-html="getSvg('visa')"></div>
                        </div>
                    </section>
                    <section class="payment-option">
                        <div class="card-info flex">
                            <div class="card-container">
                                <p>Card Number</p>
                                <input class="card-num" type="text" value="4580 5926 7852 9996">

                            </div>
                            <div class="short-input flex">
                                <div>
                                    <p>Expiration Date</p>
                                    <input class="short" type="text" value="11 / 22">
                                </div>
                                <div>
                                    <p>Security Code</p>
                                    <input class="short" type="text" value="776">
                                </div>
                            </div>
                        </div>
                        <div class="name-inputs flex">
                            <div>
                                <p>First Name</p>
                                <input class="name-input" type="text">
                            </div>
                            <div>
                                <p>Last Name</p>
                                <input class="name-input" type="text">
                            </div>
                        </div>
                    </section>

                </section>
                <section class="package-container">
                    <section class="gig-package-payment">
                        <section class="header flex space-between">
                            <div class="img-container">
                                <img src="" alt="">
                            </div>
                            <p class="title">{{ gig.title }}</p>
                        </section>
                        <h3 class="price">US{{ gig.price }}$</h3>
                        <p>1 custom logo+high resolution file+3d mockup+logo transparency+ 300dpi</p>
                        <ul class="features clean-list">
                            <li class="regular">
                                <div className="svg-container icon fill" v-html="getSvg('checkSign')"></div>
                                1 concept included
                            </li>
                            <li class="regular">
                                <div className="svg-container icon fill" v-html="getSvg('checkSign')"></div>
                                Logo transparency
                            </li>
                            <li class="regular">
                                <div className="svg-container icon fill" v-html="getSvg('checkSign')"></div>
                                Include 3D mockup
                            </li>
                            <li class="regular">
                                <div className="svg-container icon fill" v-html="getSvg('checkSign')"></div>
                                1 concept included
                            </li>
                            <li class="regular">
                                <div className="svg-container icon fill" v-html="getSvg('checkSign')"></div>
                                Include source file
                            </li>

                        </ul>
                        <div class="pricing">
                            <p>Service Fee</p>
                            <p>US$17.55</p>
                        </div>
                        <div class="pricing">
                            <p>VAT</p>
                            <p>US$17</p>
                        </div>
                        <div class="pricing total">
                            <p>Total</p>
                            <p>US${{ handlePrice }}</p>
                        </div>
                        <div class="pricing">
                            <p class="bold">Delivery Time</p>
                            <p>7 Days</p>
                        </div>
                        <button class="continue-btn">Confirm And Pay</button>
                    </section>
                </section>
            </section>
        </section>
    </section>
</template>

<script>

import { svgService } from '../services/svg.service'
import { gigService } from '../services/gig.service.local'

export default {
    props: [],
    name: '',
    data() {
        return {
            gig: null
        }
    },
    methods: {
        getSvg(iconName) {
            return svgService.getSvg(iconName)
        },
    },
    computed: {
        handlePrice() {
            return this.gig.price + 34.55
        }

    },
    created() {
        const { id } = this.$route.params
        gigService.getById(id).then(gig => {
            this.gig = gig
        })
    },
    components: {

    },
}
</script>

<style></style>