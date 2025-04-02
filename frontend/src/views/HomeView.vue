<template>
    <div class="home">
        <Carousel class="carousel" v-slot="{currentSlide}">
            <Slide v-for="(slide, index) in carouselSlides" :key="index">
                <div v-show="currentSlide === index + 1" class="slide-info">
                    <img :src="getImagePath(slide)" alt="image" />
                </div>
            </Slide>
        </Carousel>
        <CoreValues />
        <News />
        <Projects />
    </div>
</template>
  
<script>
import Carousel from "../components/Home/Carousel.vue";
import Slide from "../components/Home/Slide.vue";
import CoreValues from "../components/Home/CoreValues.vue"
import News from "../components/Home/News.vue"
import Projects from "../components/Home/Projects.vue"

export default {
    name: "Home",
    components: { Carousel, Slide, CoreValues, News, Projects},
    setup() {
        const carouselSlides = ["carousel1", "carousel2", "carousel3", "carousel4"];
        const getImagePath = (slide) => {
            return new URL(`../assets/${slide}.jpg`, import.meta.url).href;
        };
        
        return { carouselSlides, getImagePath };
    },
};
</script>


<style lang="css" scoped>
.carousel {
    position: relative;
    max-height: 100vh;
    height:80vh;
}

.carousel .slide-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    height: 100%;
}

.carousel img {
    min-width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>