<template>
<div id="yaml_editer_content">
    <div id="yaml_editer_header">YAML</div>
    <div id="yaml_editer_button">
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
    <div id="yaml_editor" style="height: 600px; width: 100%;" />
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
import YAML from 'json2yaml';
import yaml from 'js-yaml';

let editor = null;
let fromSetValue = false;

export default {
    mounted() {
        editor = ace.edit('yaml_editor');
        editor.setValue(YAML.stringify(this.$store.state.source), -1);
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
            try {
                if (!editor.getValue() || fromSetValue) {
                    return;
                }
                const val = yaml.safeLoad(editor.getValue());
                this.$store.commit('updateSourceToYaml', val);
            } catch (e) {
                // console.warn('YAML PARSE ERROR!!!');
                // console.warn(e);
            }
        });
        this.$store.subscribe((mutation, state) => {
            if (mutation.type !== 'updateSourceToYaml') {
                fromSetValue = true;
                editor.setValue(YAML.stringify(this.$store.state.source), 1);
                fromSetValue = false;
            }
        });
    },

    methods: {
        undo() {
            editor.undo();
        },
        redo() {
            editor.redo();
        },
        save() {
            /* empty */
        },
        reset() {
            this.contentA = 'reset content for Editor A';
        },
    },
};
</script>

<style lang="scss">
#yaml_editer_content {
    text-align: left;
    border: 1px solid #AAA;
}

#yaml_editer_header {
    padding: 4px 8px;
    background-color: #999;
    color: #FFF;
}

#yaml_editer_button {
    overflow: hidden;
    height: 44px;
    button {
        height: 36px;
        min-width: 36px;
        margin: 4px;
    }
}
</style>
