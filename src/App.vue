<template>
<div id="app">
    <Navigation>
        <!-- <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div> -->
        <router-view/>
        <!-- <Footer/> -->
    </Navigation>
</div>
</template>

<script lang="ts">
import {
    Component,
    Vue,
} from 'vue-property-decorator';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';

Vue.use(VueMaterial);

import Navigation from '@/views/Navigation.vue';
import Footer from '@/views/Footer.vue';

@Component({
    components: {
        Navigation,
        Footer,
    },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "~vue-material/dist/theme/engine";
@include md-register-theme( "default", ( primary: md-get-palette-color(blue, A200), accent: md-get-palette-color(red, A200)));
@import "~vue-material/dist/theme/all";
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
