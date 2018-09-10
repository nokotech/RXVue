<template>
    <md-table v-if="typeof val === 'object'">
        <md-table-row v-for="(item, key) in val" :key="item.id">
            <md-table-cell class="key">
              {{key}}
            </md-table-cell>
            <md-table-cell class="value">
              <TableComp :val="item"/>
            </md-table-cell>
        </md-table-row>
    </md-table>
    <span v-else-if="typeof val != 'object'">{{val}}</span>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import TableComp from '@/components/custom/TableComp.vue';

Vue.component('TableComp', TableComp);

export default {
  props: ['val'],
};
</script>

<style lang="scss">
// .md-table-cell:last-child .md-table-cell-container {
//   padding: 0px;
// }
.key {
  color: #1DA462;
}
.value {
  color: #4C8BF5;
}
</style>
