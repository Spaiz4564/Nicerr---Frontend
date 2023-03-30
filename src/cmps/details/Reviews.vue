<template>
  <section class="review-container" v-if="gig">
    <h3>Reviews</h3>
    <div class="review-star flex">
      <span>270 reviews for this Gig</span>
      <div class="flex">
        <div
          className="review-star icon"
          v-html="getSvg('fiveStarsEmpty')"
        ></div>
        <p>4.8</p>
      </div>
    </div>
    <section class="breakdown-progress flex">
      <section class="progress-bar">
        <ul class="clean-list flex column">
          <li class="flex align-center">
            <span class="key">4.8 Stars</span>
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
      <ul class="review-lists clean-list">
        <span class="review-item-component">
          <li class="review-item">
            <section class="review-header flex">
              <div class="flex align-center">
                <div class="user-profile-image">
                  <label class="user-img">
                    <img
                      src="https://res.cloudinary.com/dzcangpqd/image/upload/v1680014788/7b328e0e-e99a-4504-bde9-3ae9cd115341_oswrvw.jpg"
                      alt=""
                    />
                  </label>
                  <div class="flex column">
                    <div class="review-user-info flex column">
                      <span class="review-user-info name">worldexpo2016</span>
                      <div class="review-user-info img">
                        <img
                          src="https://res.cloudinary.com/dzcangpqd/image/upload/v1680012726/1f1fa-1f1f8_dxvj1l.png"
                          alt=""
                        />
                        <span class="review-user-info country"
                          >United State</span
                        >
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
                <p>2 months ago</p>
              </div>
              <div class="review-text">
                <p>
                  I'm so glad I chose tenpixls to do the job! They did an
                  amazing job on my website - quickly and efficiently. The
                  customer service was top-notch and they were always available
                  to answer any questions I had. They even went above and beyond
                  to...
                </p>
              </div>
              <div class="helpful flex align-center">
                <span>Helpful?</span>
                <div
                  className="icon thumbsUp"
                  v-html="getSvg('thumbsUp')"
                ></div>
                <span>Yes</span>
                <div
                  className="icon thumbsDown"
                  v-html="getSvg('thumbsDown')"
                ></div>
                <span>No</span>
              </div>
            </section>
          </li>
          <li class="review-item">
            <section class="review-header">
              <div class="flex item-center">
                <div class="user-profile-image">
                  <label class="user-img">
                    <img
                      src="https://res.cloudinary.com/dzcangpqd/image/upload/v1680014786/65b1b4ab-926d-46be-95d0-fe3ebeb2e61f_lnlwu5.jpg"
                      alt=""
                    />
                  </label>
                  <div class="flex column">
                    <div class="review-user-info flex column">
                      <span class="review-user-info name">joellauren</span>
                      <div class="review-user-info img">
                        <img
                          src="https://res.cloudinary.com/dzcangpqd/image/upload/v1680012724/1f1f7-1f1f4_s35l9n.png"
                          alt=""
                        />
                        <span class="review-user-info country">Romania</span>
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
                <p>2 months ago</p>
              </div>
              <div class="review-text">
                <p>
                  Fast, comprehensive delivery with good quality. Continuous
                  updates and clear maps of how the project will be carried out
                  even before we start it. Highly recommend!
                </p>
              </div>
              <div class="helpful flex align-center">
                <span>Helpful?</span>
                <div
                  className="icon thumbsUp"
                  v-html="getSvg('thumbsUp')"
                ></div>
                <span>Yes</span>
                <div
                  className="icon thumbsDown"
                  v-html="getSvg('thumbsDown')"
                ></div>
                <span>No</span>
              </div>
            </section>
          </li>
          <li class="review-item">
            <section class="review-header">
              <div class="flex item-center">
                <div class="user-profile-image">
                  <label class="user-img">
                    <img
                      src="https://res.cloudinary.com/dzcangpqd/image/upload/v1680014784/bbeab7dd-e6e9-44e8-ac16-9f73ab57974d_gmwav2.jpg"
                      alt=""
                    />
                  </label>
                  <div class="flex column">
                    <div class="review-user-info flex column">
                      <span class="review-user-info name">diplomattylaa</span>
                      <div class="review-user-info img">
                        <img
                          src="https://res.cloudinary.com/dzcangpqd/image/upload/v1680012722/1f1ee-1f1f1_opzusm.png"
                          alt=""
                        />
                        <span class="review-user-info country">Israel</span>
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
                <p>1 months ago</p>
              </div>
              <div class="review-text">
                <p>
                  Quick and excellent communication with perfect delivery time.
                  The results were superb and urek_arts went above and beyond!
                  Pricing was fair and well worth it. I would recommend
                  urek_arts in a heartbeat to anyone else looking for
                  anime-style artwork creations or editing.
                </p>
              </div>
              <div class="helpful flex align-center">
                <span>Helpful?</span>
                <div
                  className="icon thumbsUp"
                  v-html="getSvg('thumbsUp')"
                ></div>
                <span>Yes</span>
                <div
                  className="icon thumbsDown"
                  v-html="getSvg('thumbsDown')"
                ></div>
                <span>No</span>
              </div>
            </section>
          </li>
          <li class="review-item">
            <section class="review-header">
              <div class="flex item-center">
                <div class="user-profile-image">
                  <label class="user-img">
                    <img
                      src="https://res.cloudinary.com/dzcangpqd/image/upload/v1680014788/7b328e0e-e99a-4504-bde9-3ae9cd115341_oswrvw.jpg"
                      alt=""
                    />
                  </label>
                  <div class="flex column">
                    <div class="review-user-info flex column">
                      <span class="review-user-info name">birdcam_vt</span>
                      <div class="review-user-info img">
                        <img
                          src="https://res.cloudinary.com/dzcangpqd/image/upload/v1680012722/1f1ff-1f1e6_fu2irs.png"
                          alt=""
                        />
                        <span class="review-user-info country"
                          >South Africa</span
                        >
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
                <p>2 months ago</p>
              </div>
              <div class="review-text">
                <p>
                  Urek never disappoints, I provided a reference image and he
                  was able to match it and go above and beyond my expectations.
                  He is truly the best in his field, providing quality AI art
                  for a reasonable price. I strongly recommend him.
                </p>
              </div>
              <div class="helpful flex align-center">
                <span>Helpful?</span>
                <div
                  className="icon thumbsUp"
                  v-html="getSvg('thumbsUp')"
                ></div>
                <span>Yes</span>
                <div
                  className="icon thumbsDown"
                  v-html="getSvg('thumbsDown')"
                ></div>
                <span>No</span>
              </div>
            </section>
          </li>
          <li class="review-item">
            <section class="review-header">
              <div class="flex item-center">
                <div class="user-profile-image">
                  <label class="user-img">
                    <img
                      src="https://res.cloudinary.com/dzcangpqd/image/upload/v1680014784/bbeab7dd-e6e9-44e8-ac16-9f73ab57974d_gmwav2.jpg"
                      alt=""
                    />
                  </label>
                  <div>
                    <div class="review-user-info">
                      <span class="review-user-info name">khabou</span>
                      <div class="review-user-info img">
                        <img
                          src="https://res.cloudinary.com/dzcangpqd/image/upload/v1680012726/1f1fa-1f1f8_dxvj1l.png"
                          alt=""
                        />
                        <span class="review-user-info country"
                          >United State</span
                        >
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
                <p>3 months ago</p>
              </div>
              <div class="review-text">
                <p>
                  Pablo delivered a quick but insightful intro to stable
                  diffusion with a real case study in just 2 hours. I kew about
                  SD and played with it before, but I knew what it could do.
                  Pablo demonstarted the real potential in both speed and
                  creativity...
                </p>
              </div>
              <div class="helpful flex align-center">
                <span>Helpful?</span>
                <div
                  className="icon thumbsUp"
                  v-html="getSvg('thumbsUp')"
                ></div>
                <span>Yes</span>
                <div
                  className="icon thumbsDown"
                  v-html="getSvg('thumbsDown')"
                ></div>
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
}
</script>

<style></style>
