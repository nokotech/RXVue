<template>
<div id="json_editer_content">
    <div id="json_editer_header">JSON</div>
    <div id="json_editer_button">
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
    <div id="json_editor" style="height: 600px; width: 100%;" />
</div>
</template>

<script lang="js">
import {
    Component,
    Vue,
} from 'vue-property-decorator';
import 'ace-builds/src-noconflict/mode-json.js';
import chrome from 'ace-builds/src-noconflict/theme-chrome.js';
import monokai from 'ace-builds/src-noconflict/theme-monokai.js';

let editor = null;
let fromSetValue = false;

export default {
    mounted() {
        editor = ace.edit('json_editor');
        editor.setValue(JSON.stringify(this.$store.state.source, null, '\t'), -1);
        editor.setTheme(chrome);
        editor.setFontSize(14);
        editor.getSession().setMode('ace/mode/json');
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
                const val = JSON.parse(editor.getValue());
                this.$store.commit('updateSourceToJson', val);
            } catch (e) {
                // console.warn('JSON PARSE ERROR!!!');
            }
        });
        this.$store.subscribe((mutation, state) => {
            if (mutation.type !== 'updateSourceToJson') {
                fromSetValue = true;
                editor.setValue(JSON.stringify(this.$store.state.source, null, '\t'), 1);
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
#json_editer_content {
    text-align: left;
    border: 1px solid #AAA;
}

#json_editer_header {
    padding: 4px 8px;
    background-color: #999;
    color: #FFF;
}

#json_editer_button {
    overflow: hidden;
    height: 44px;
    button {
        height: 36px;
        min-width: 36px;
        margin: 4px;
    }
}
</style>
