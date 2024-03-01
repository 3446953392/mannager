<template>
    <!-- 全局引入TinyMCE -->
    <script src="//unpkg.com/tinymce@5.1.5/tinymce.min.js"></script>
    <!-- App -->
    <div id="app">
        <vue-tinymce
            v-model="content"
            :setup="setup"
            :setting="setting" />
    </div>
</template>
<script>
    import Vue from "vue"
    import VueTinymce from "@packy-tang/vue-tinymce"

    //安装组件
    Vue.use(VueTinymce)

    new Vue({
        el: "#app",
        data: function() {
            return {
                content: "<p>html content</p>",
                setting: {
                    height: 500
                }
            }
        },
        methods: {
            setup(editor) {
                console.log(editor)
            }
        }
    })
</script>
