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
                    <section class="payment-option flex">
                        <div class="card-info flex">
                            <div class="card-container">
                                <p>Card Number</p>
                                <input class="card-num" type="text" value="4580 5926 7852 9996">

                            </div>
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