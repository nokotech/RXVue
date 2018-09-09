<template>
<div class="home">
    <md-button class="md-primary" @click="size1=90; size2=10;">
        <md-icon>chevron_right</md-icon>
    </md-button>
    <md-button class="md-primary" @click="size1=50; size2=50; $refs.selfSplit.reset();">
        <md-icon>swap_horiz</md-icon>
    </md-button>
    <md-button class="md-primary" @click="size1=10; size2=90;">
        <md-icon>chevron_left</md-icon>
    </md-button>
    <Split style="height: 800px;" ref="selfSplit">
        <SplitArea :size="size1" ref="area1">
            <BlockEditer/>
        </SplitArea>
        <SplitArea :size="size2" ref="area2">
            <JsonEditer/>
        </SplitArea>
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    </Split>
</div>
</template>

<script lang="ts">
import {
    Component,
    Vue,
} from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import YamlEditer from '@/components/YamlEditer.vue';
import JsonEditer from '@/components/JsonEditer.vue';
import BlockEditer from '@/components/BlockEditer.vue';


import VueSplit from 'vue-split-panel';
Vue.use(VueSplit);

Vue.component('HelloWorld', HelloWorld);
Vue.component('YamlEditer', YamlEditer);
Vue.component('JsonEditer', JsonEditer);
Vue.component('BlockEditer', BlockEditer);

export default {
    data: () => ({
        size1: 50,
        size2: 50,
    }),
    methods: {},
};
</script>

<style lang="scss">
.split-horizontal {
    padding: 16px;
}
</style>
