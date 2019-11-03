<template>
    <b-container class="mt-3">
        <b-jumbotron header="Welcome" lead="The ultimate TODO app">
                <p>Get started by creating your very first todo!</p>
            <b-button variant="primary" to="/tasks">Get Started</b-button>
        </b-jumbotron>
    </b-container>
</template>

<script>
export default {
    name: 'home'
}
</script>