<template>
  <section class="dashboard flex">
    <div class="profile-progress">
      <div class="profile flex">
        <div class="img-container">
          <img :src="user.imgUrl" alt="" />
        </div>
        <div class="seller-desc flex">
          <div class="flex column">
            <span>Positive rating</span>
            <b>100%</b>
          </div>
          <div class="flex column">
            <span>Response Time</span>
            <b> 1 Hrs.</b>
          </div>
        </div>
      </div>
      <div class="progress">
        <Progress />
      </div>
    </div>
    <div class="seller-orders">
      <h2>Earnings</h2>
      <div class="income-order-dashboard flex">
        <div
          v-for="(item, i) in dashboardItems"
          class="dashboard-item flex column">
          <span>{{ item.title }}</span>
          <h3>{{ income(i) }}</h3>
        </div>
      </div>
      <h2>Manage Orders</h2>
      <div class="orders-table flex column">
        <div class="table-header flex">
          <h4 class="head-buyer">BUYER</h4>
          <h4 class="head-gig">GIG</h4>
          <h4 class="head-date">DATE</h4>
          <h4 class="head-total">TOTAL</h4>
          <h4 class="head-status">STATUS</h4>
        </div>
        <div class="table-entity flex">
          <div class="buyer flex">
            <img src="../assets/images/About/default.png" alt="" />
            <p>fred</p>
          </div>
          <span class="gig">I will write you an attractive instagram bio</span>
          <span class="date">21.3.2023</span>
          <span class="total">US$50</span>
          <Status />
        </div>
        <div class="table-entity flex">
          <div class="buyer flex">
            <img src="../assets/images/About/default.png" alt="" />
            <p>damn</p>
          </div>
          <span class="gig"
            >I will do data entry, copy paste and excel data entry work for
            you</span
          >
          <span class="date">29.3.2023</span>
          <span class="total">US$33</span>
          <Status />
        </div>
        <div class="table-entity flex">
          <div class="buyer flex">
            <img src="../assets/images/About/default.png" alt="" />
            <p>twitch</p>
          </div>
          <span class="gig"
            >I will do hyper realistic pencil sketch portrait by hand
            drawing</span
          >
          <span class="date">21.2.2023</span>
          <span class="total">US$67</span>
          <Status />
        </div>
        <div class="table-entity flex" v-for="(order, i) in orders">
          <div class="buyer flex">
            <img :src="order.buyer.imgUrl" alt="" />
            <p>{{ order.buyer.username }}</p>
          </div>
          <span class="gig">{{ order.gig.name }}</span>
          <span class="date">{{ order.date }}</span>
          <span class="total">US${{ order.gig.price }}</span>
          <Status
            :status="order.status"
            :class="order.status"
            @status="setStatus($event, order._id)" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Progress from '../cmps/Progress.vue'
import Status from '../cmps/Status.vue'
import { ordersService } from '../services/order.service'
export default {
  name: 'Dashboard',
  data() {
    return {
      dashboardItems: [
        { title: 'Annual Revenue' },
        { title: 'Monthly Revenue' },
        { title: 'Completed Orders' },
        { title: 'Pending Orders' },
      ],
      orders: null,
    }
  },

  methods: {
    makeDate(timeStamp) {
      const date = new Date(timeStamp)
      return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
    },
    async setStatus(status, orderId) {
      const order = this.orders.find((order) => order._id === orderId)
      order.status = status
      const orderUi = this.orders.find((order) => order._id === orderId)
      orderUi.status = status
      await ordersService.save(order)
    },
    async loadOrdersByOwner() {
      const owner = userService.getLoggedinUser()
      this.orders = await ordersService.query({ ownerId: owner._id })
    },

    income(i) {
      if (this.orders) {
        if (i < 2) {
          return this.orders
            .filter((order) => order.status === 'Completed')
            .reduce((acc, curr) => (acc += curr.price), 0)
        } else if (i === 2) {
          return this.orders.filter((order) => order.status === 'Completed')
            .length
          return 4
        } else {
          return this.orders.filter((order) => order.status === 'Pending')
            .length
        }
      }
    },
  },
  computed: {
    user() {
      return userService.getLoggedinUser()
    },
    // orders() {
    //   return this.$store.getters.orders
    // }
  },

  components: {
    Progress,
    Status,
  },

  created() {
    setTimeout(() => {
      console.log('hey', this.orders)
    }, 1000)
    console.log(this.$store.getters.orders)
    this.loadOrdersByOwner()
  },
}
</script>
