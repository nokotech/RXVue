<template>
<div id="block_editer_content">
    <div id="block_editer_header">BLOCK</div>
    <div id="block_editer_button">
        <md-button @click="undo">
            <md-icon>undo</md-icon>
        </md-button>
        <md-button @click="redo">
            <md-icon>redo</md-icon>
        </md-button>
        <md-button @click="save">
            <md-icon>save</md-icon>
        </md-button>
    </div>
    <div id="block_editor" style="width: 100%;">
        <TableComp :val="this.$store.state.source"/>
    </div>
</div>
</template>

<script lang="js">
import {
    Component,
    Vue,
} from 'vue-property-decorator';
import TableComp from '@/components/custom/TableComp.vue';

Vue.component('TableComp', TableComp);

export default {
    methods: {
        undo() {
            /* empty */
        },
        redo() {
            /* empty */
        },
        save() {
            /* empty */
        },
    },
};
</script>

<style lang="scss">
#block_editer_content {
    text-align: left;
    border: 1px solid #AAA;
    padding-bottom: 8px;
}

#block_editor {
    padding: 0 8px;
    table td {
        border: 1px solid #CCC;
    }
}

#block_editer_header {
    padding: 4px 8px;
    background-color: #999;
    color: #FFF;
}

#block_editer_button {
    overflow: hidden;
    height: 44px;
    button {
        height: 36px;
        min-width: 36px;
        margin: 4px;
    }
}
</style>
