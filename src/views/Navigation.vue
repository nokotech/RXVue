<template>
<md-app md-mode="reveal">
    <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
            <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Yaml Editor</span>
    </md-app-toolbar>
    <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>
        <SideMenu/>
    </md-app-drawer>
    <md-app-content>
        <slot/>
    </md-app-content>
</md-app>
</template>

<style lang="scss" scoped>
.md-app {
    border: 1px solid rgba(#000, .12);
} // Demo purposes only
.md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
}
.md-app-content {
    padding: 0px;
    min-height: 720px;
}
</style>

<script lang="ts">
import {
    Prop,
    Vue,
} from 'vue-property-decorator';
import SideMenu from '@/views/SideMenu.vue';

Vue.component('SideMenu', SideMenu);
export default {
    name: 'Reveal',
    data: () => ({
        menuVisible: false,
    }),
};
</script>
