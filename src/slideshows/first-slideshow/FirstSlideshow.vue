<template>
  <div id="MyFirstSlideshow">
    <div class="eg-slideshow">
      <slide>
        <h1>Hi there !</h1>
        <h4>This is your first slideshow !</h4>
        <PrismCode
          class="language-js"
          style="padding-top: 0; padding-bottom: 0"
        >
          <code
            v-html="`
  export default {
    name: 'hello'
  }
        `"
          />
        </PrismCode>
      </slide>
      <slide
        enter="bounceInRight"
        leave="fadeOut"
      >
        <h3>Hey modify me !</h3>
        <p>Come on modify me ! If you are running the development server, you will see the changes take effect immediately
        </p>
      </slide>
      <slide enter="fadeIn">
        <h3>Want cool effects?</h3>
        <p>Code your own, or try stealing for the other slideshows !</p>
      </slide>
      <div>{{ currentSlideIndex }} / {{ slides.length }}</div>
    </div>
  </div>
</template>

<script>
import eagle from 'eagle.js'
import PrismCode from '../../components/PrismCode'

export default {
  components: {PrismCode},
  mixins: [ eagle.slideshow ],
  infos: {
    // These infos appear on the home page, below the slideshow's thumbnail
    title: 'Your First Slideshow',
    description: 'A boilerplate to get you started',
    path: 'your-first-slideshow'
  },
  watch: {
    currentSlideIndex: {
      immediate: true,
      handler (to) {
        console.log(to)
        this.$router.replace({query: {
          s: to
        }})
      }
    },
    $route (to) {
      let newIndex = +to.query.s || 1
      if (newIndex > this.slides.length) newIndex = this.slides.length
      this.currentSlideIndex = newIndex
    }
  },
  created () {
  }
}
</script>

<style lang='scss'>
@import url(https://fonts.googleapis.com/css?family=Raleway);

@import 'node_modules/prismjs/themes/prism';

#MyFirstSlideshow .eg-slideshow {
  font-family: "Raleway";
  background-color: #eef;
}
#MyFirstSlideshow .eg-slide-content {
  width: 25em;
  max-width: 80%;
  margin: 0 auto;
}
</style>
