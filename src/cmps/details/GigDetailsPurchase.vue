<template>
    <div class="gig-purchase" v-if="gig">
        <div class="info">
            <section class="header">
                <h3 class="flex space-between align-center">
                    <b class="gig-title">Basic Price</b>
                    <div>
                        <span class="price">{{ gig.price }}$</span>
                    </div>
                </h3>
                <p class="gig-purchase-txt">
                    This package is great if you want to try, good quality logo with source files (PSD files)
                </p>
            </section>
            <article>
                <div class="options flex align-center">
                    <div class="delivery-wrapper flex align-center">
                        <span className="icon" v-html="getSvg('clock')"></span>
                        <b class="delivery"> 5 Days Delivery </b>
                    </div>
                    <div class="revisions-wrapper flex align-center">
                        <span className="icon" v-html="getSvg('recycle')"></span>
                        <b class="revisions"> 2 Revisions </b>
                    </div>
                </div>
                <ul class="features">
                    <li class="flex align-center">
                        <span className="check fillGreen" v-html="getSvg('checkSign')"></span>
                        <p>1 concept included</p>
                    </li>
                    <li class="flex align-center">
                        <span className="check fill" v-html="getSvg('checkSign')"></span>

                        <p>Logo transparency</p>
                    </li>
                    <li class="flex align-center">
                        <span className="check fillGreen" v-html="getSvg('checkSign')"></span>

                        <p>Vector File</p>
                    </li>
                    <li class="flex align-center">
                        <span className="check fill" v-html="getSvg('checkSign')"></span>

                        <p>Printable file</p>
                    </li>
                    <li class="flex align-center">
                        <span className="check fillGreen" v-html="getSvg('checkSign')"></span>

                        <p>Include source file</p>
                    </li>
                </ul>
                <div class="footer" @click="HandlePurchase(gig._id)">
                    <button class="btn-purchase">Continue</button>
                    <div className="icon arrow" v-html="getSvg('arrowRight')"></div>
                </div>
            </article>
        </div>
        <!-- <div class="contact-seller">
            <div class="contact-seller-wrapper">
                <button class="contact-seller-btn">Contact seller</button>
            </div>
        </div> -->
    </div>
</template>

<script>

import { svgService } from '../../services/svg.service';


export default {
    props: ['gig'],
    name: 'GigPurchase',
    data() {
        return {
        }
    },
    methods: {
        getSvg(iconName) {
            return svgService.getSvg(iconName)
        },
        HandlePurchase(gigId) {
            this.$router.push(`/purchase/${gigId}`)
        }, imgUrl(img) {
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
    },
}
</script>

<style></style>