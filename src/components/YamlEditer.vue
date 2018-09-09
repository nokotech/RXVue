<template>
<div id="yaml_editer">
    <div id="yaml_editer_header">YAML</div>
    <div id="yaml_editer_button">
        <md-button @click="undo">
            <md-icon>undo</md-icon>
        </md-button>
        <md-button @click="redo">
            <md-icon>redo</md-icon>
        </md-button>
        <md-button @click="">
            <md-icon>save</md-icon>
        </md-button>
    </div>
    <div id="editor" style="height: 600px; width: 100%;"></div>
</div>
</template>

<script lang="js">
import {
    Component,
    Vue,
} from 'vue-property-decorator';
import ace from 'ace-builds';
import 'ace-builds/src-noconflict/mode-yaml.js';
import chrome from 'ace-builds/src-noconflict/theme-chrome.js';
import monokai from 'ace-builds/src-noconflict/theme-monokai.js';

let editor = null;

export default {
    mounted() {
        editor = ace.edit('editor');
        editor.setTheme(chrome);
        editor.setFontSize(14);
        editor.getSession().setMode('ace/mode/yaml');
        editor.getSession().setUseWrapMode(true);
        editor.getSession().setTabSize(2);
        editor.commands.addCommand({
            Name: 'savefile',
            bindKey: {
                win: 'Ctrl-S',
                mac: 'Command-S',
            },
            exec: (e) => onSave(),
        }, {
            Name: 'undo',
            bindKey: {
                win: 'Ctrl-Z',
                mac: 'Command-Z',
            },
            exec: (e) => editor.undo(),
        }, {
            Name: 'redo',
            bindKey: {
                win: 'Ctrl-Y',
                mac: 'Command-Y',
            },
            exec: (e) => editor.redo(),
        });
        editor.getSession().on('change', (v) => {
            // console.log('change in my world!', v);
        });
    },

    data() {
        return {
            contentA: 'default content for Editor A',
        };
    },
    methods: {
        undo() {
            editor.undo();
        },
        redo() {
            editor.redo();
        },
        reset() {
            this.contentA = 'reset content for Editor A';
        },
        changeContentA(val) {
            if (this.contentA !== val) {
                this.contentA = val;
            }
        },
    },
};
</script>

<style lang="scss">
#yaml_editer {
    text-align: left;
    border: 1px solid #AAA;
}

#yaml_editer_header {
    padding: 4px 8px;
    background-color: #999;
    color: #FFF;
}
#yaml_editer_button button{
    height: 36px;
    min-width: 36px;
    margin: 4px;
}
</style>
