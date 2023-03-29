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
        <div v-for="item in dashboardItems" class="dashboard-item flex column">
          <span>{{ item.title }}</span>
          <h3>{{ item.value }}</h3>
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
                <img src="../assets/images/About/default.png" alt="">
                <p>fred</p>
            </div>
            <span class="gig">I will write you an attractive instagram bio</span>
            <span class="date">21.3.2023</span>
            <span class="total">US$50</span>
            <span class="status completed">Completed</span>
        </div>
        <div class="table-entity flex">
            <div class="buyer flex">
                <img src="../assets/images/About/default.png" alt="">
                <p>damn</p>
            </div>
            <span class="gig">I will do data entry, copy paste and excel data entry work for you</span>
            <span class="date">29.3.2023</span>
            <span class="total">US$33</span>
            <span class="status rejected">Rejected</span>
        </div>
        <div class="table-entity flex">
            <div class="buyer flex">
                <img src="../assets/images/About/default.png" alt="">
                <p>twitch</p>
            </div>
            <span class="gig">I will do hyper realistic pencil sketch portrait by hand drawing</span>
            <span class="date">21.2.2023</span>
            <span class="total">US$67</span>
            <span class="status in-progress">In Progress</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Progress from '../cmps/Progress.vue'
  export default {
    name: 'Dashboard',
    data() {
      return {
        dashboardItems: [
          { title: 'Annual Revenue', value: '$335' },
          { title: 'Monthly Revenue', value: '$335' },
          { title: 'Completed Orders', value: 5 },
          { title: 'Pending Orders', value: 2 },
        ],
      }
    },
    computed: {
      user() {
        return userService.getLoggedinUser()
      },
    },
    components: {
      Progress,
    },
  }
</script>
