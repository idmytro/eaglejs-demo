<template>
  <div class="frontpage">
    <div class="content">
      <h1><span class="logo"/><span>Eagle</span><span class="grey">.js</span></h1>
      <h2>A slideshow framework for hackers</h2>
      <iframe
        class="github-star"
        src="https://ghbtns.com/github-btn.html?user=zulko&amp;repo=eagle.js&amp;type=star&amp;count=true&amp;size=large"
        frameborder="0"
        scrolling="0"
        width="160px"
        height="30px"
      />
      <p>Eagle.js is a web-based slideshow framework for Vue.js. It supports animations, themes, interactive widgets (for web demos), and makes it easy to reuse components, slides and styles across presentations.
      </p>
      <p>Most of all, Eagle aims at offering a simple and very hackable API so you can get off the beaten tracks and craft the slideshows you really want.
      </p>
      <div class="thumbnails">
        <div
          v-for="(slideshow, index) in slideshows"
          :key="index"
          class="box-card"
        >
          <router-link
            :to="slideshow.infos.path"
            @click.native="click"
          >
            <div class="embedded-slideshow-container">
              <component
                :is="slideshow"
                :embedded="true"
                :keyboardNavigation="false"
                :mouseNavigation="false"
              />
            </div>
          </router-link>
          <div class="caption">
            <h3>{{ slideshow.infos.title }}</h3>
            <p class="thumbnail-description">{{ slideshow.infos.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import slideshows from 'slideshows/slideshows'

export default {
  data () {
    return {
      slideshows: slideshows.list
    }
  },
  mounted () {
    document.currentSlide = {}
  },
  methods: {
    click (evt) {
      evt.stopPropagation()
    }
  }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Patrick+Hand+SC);

.frontpage {
  width: 100%;
  height: auto;
  position: absolute;
  background-image: url("~eagle.js/dist/themes/assets/crossword.png");
}

.frontpage .content {
  width: 600px;
  max-width: 90%;
  margin: 0 auto;
}

h1,
h2,
h3,
h4,
p {
  font-weight: normal;
  font-family: "Patrick Hand SC";
}

h1 {
  font-size: 8em;
  margin-top: 0.5em;
  margin-bottom: 0;
  line-height: 0.8em;
  text-align: center;
}
h2 {
  font-size: 2.2em;
  margin-top: 0.4em;
  margin-bottom: 2em;
  line-height: 0.8em;
  text-align: center;
}

p {
  margin-top: 1.5em;
  font-size: 23px;
}
h3 {
  font-size: 30px;
}

.grey {
  color: #bbb;
}

.box-card {
  text-align: center;
  margin-bottom: 50px;
}
.box-card .embedded-slideshow-container {
  position: relative;
  width: 150px;
  height: 120px;
  margin: 0 auto;
  border: 1px solid grey;
  overflow: hidden;
}
.box-card h3,
.box-card p {
  margin-bottom: 0;
  margin-top: 0;
}

a {
  text-decoration: inherit;
  color: inherit;
}

.logo {
  display: inline-block;
  width: 130px;
  height: 90px;
  margin-right: 0.1em;
  background-image: url(./logo.svg);
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat;
}

.github-star {
  display: block;
  margin: 0 auto;
  margin-top: -10px;
}
</style>
