<template>
    <Card style="width: 100%;height: 100%;">
    <textarea id="md" style="display:none"></textarea>
    </Card>
</template>
<script>
import SimpleMDE from 'simplemde';
import './simplemde.min.css';

export default {
    name: 'markdown',
    mounted() {
        new SimpleMDE({
            element: document.getElementById("md")
            // toolbar: ['bold', 'italic', 'strikethrough', 'heading', 'heading-smaller', 'heading-bigger', 'heading-1', 'heading-2', 'heading-3', '|', 'code', 'quote', 'unordered-list', 'clean-block', '|', 'link', 'image', 'table', 'horizontal-rule', '|', 'preview', 'guide']

        }).value("test value");
    }
}
</script>
