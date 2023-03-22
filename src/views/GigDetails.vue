<template>
  <section class="gig-details" v-if="gig">
    <main class="gig-details-main">
      <div class="gig-user-info">
        <h1>{{ gig.title }}</h1>
        <!-- <img :src="gig.imgUrl" /> here come the image -->
        <p>{{ gig._id }}</p>
      </div>
      <div class="gig-purchase">
        <div class="gig-purchase-price flex space-between">
          <p>silver</p>
          <p>price: {{ gig.price }}</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          facilis magni omnis rerum saepe? Dicta itaque molestiae, enim suscipit
          rem eos aliquid sed, blanditiis ad repellendus distinctio, provident
          natus tenetur!
        </p>
        <div class="gig-purchase-options flex column">
          <p class="flex align-center">
            <span className="icon" v-html="getSvg('clock')"></span>
            5 Days Delivery
            <span className="icon" v-html="getSvg('recycle')"></span>
            2 Reviews
          </p>
          <p>1 concept included</p>
          <p>Logo transparency</p>
          <p>Vector File</p>
          <p>Printable file</p>
          <p>Include source file</p>
          <button class="btn-purchase">Purchase</button>
        </div>
        <button class="btn-contact-seller">contact seller</button>
      </div>
    </main>
  </section>
</template>

<script>
import { gigService } from '../services/gig.service.local'
import { svgService } from '../services/svg.service'

export default {
  name: 'Gig-Details',
  data() {
    return {
      gig: null,
    }
  },
  methods: {
    getSvg(iconName) {
      return svgService.getSvg(iconName)
    },
  },
  computed: {},
  created() {
    const { id } = this.$route.params
    gigService.getById(id).then(gig => {
      this.gig = gig
    })
  },
  components: {
    svgService,
  },
}
</script>

<style></style>
