<template>
    <Nav />

    <h1>{{ title }}</h1>
</template>

<script>

import Nav from '../components/Nav.vue';

export default {
    name: 'Post',
    components: {
        Nav,
    },
    data() {
        return {
            timestamp: '',
            author: '',
            title: '',
            description: '',
            imageUrl: '',
        };
    },
}

</script>

<style>



</style>