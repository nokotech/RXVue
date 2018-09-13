<template>
<div>
    <table v-bind:id="table_key" class="frame" v-if="typeof val === 'object'" border="1">
        <thead>
            <tr @click="tap">
                <th class="header">
                  <!-- <md-icon class="del_icon">sort</md-icon> -->
                  <span class="str">key</span>
                </th>
                <th class="header">
                  <!-- <md-icon class="del_icon">sort</md-icon> -->
                  <span class="str">value</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, key) in val" :key="item.id">
                <td class="key">
                    <!-- <md-icon class="del_icon">swap_vert</md-icon> -->
                    <!-- <md-icon class="del_icon" @click="delete(key)">delete</md-icon> -->
                    <span class="str">{{key}}</span>
                </td>
                <td class="value">
                    <TableComp :val="item" :table_key="table_key+'__'+key"/>
                </td>
            </tr>
        </tbody>
    </table>
    <span class="str" v-else-if="typeof val != 'object'">{{val}}</span>
</div>
</template>

<script lang="ts">
import {
    Vue,
} from 'vue-property-decorator';
import TableComp from '@/components/custom/TableComp.vue';
import tableDragger from 'table-dragger';

Vue.component('TableComp', TableComp);

export default {
    props: ['table_key', 'val'],
    mounted() {
        // const doms = document.getElementsByClassName('frame');
        // for (const dom of doms) {
        //     const dragger = tableDragger(dom, {
        //             mode: 'row',
        //         })
        //         .on('drop', (from: number, to: number, el: Element, mode: string) => {
        //             console.log(`drop ${el.nodeName} from ${from} ${mode} to ${to} ${mode}`);
        //         });
        // }
    },
    methods: {
        delete(key: string|number) {
            // let source = this.$store.state.source;
            // this.$store.commit('updateSourceToJson', source);
        },
        tap() {
          $('table').each((index: number, element: any) => {
            $(element).resizableColumns(); });
        },
    },
};
</script>

<style lang="scss">
.frame {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border: none;
}

.header {
    color: #333;
    border: 1px solid #CCC;
    padding: 8px;
    background-color: #EEEEEE;
}

.key {
    color: #1DA462;
    border: 1px solid #CCC;
    padding: 8px;
    background-color: #F6F6F6;
}

.value {
    color: #4C8BF5;
    border: 1px solid #CCC;
    padding: 8px;
    background-color: #FFFFFF;
}

.del_icon {
    color: #ff5252;
}

.str {
    padding-left: 4px;
}
</style>
