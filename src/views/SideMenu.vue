<template>
<md-list>
    <md-list-item @click="$router.push('/')">
        <md-icon>move_to_inbox</md-icon>
        <span class="md-list-item-text">Home</span>
    </md-list-item>

    <md-list-item @click="$router.push('/about')">
        <md-icon>send</md-icon>
        <span class="md-list-item-text">About</span>
    </md-list-item>
</md-list>
</template>

<script lang="ts">
export default {
};
</script>

<style lang="scss">
a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
        color: #42b983;
    }
}
</style>
