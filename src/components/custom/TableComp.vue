<template>
    <md-table v-if="ok">
        <md-table-row v-for="(item, key) in val">
            <md-table-cell>{{key}}</md-table-cell>
            <md-table-cell>{{item}}</md-table-cell>
        </md-table-row>
    </md-table>
</template>

<script lang="js">
</script>

<style lang="scss">
</style>