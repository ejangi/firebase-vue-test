<template>
    <b-container class="mt-3">
        <h1>Tasks</h1>

        <b-card-group columns class="d-flex flex-column">
            <b-card title="Default">
                <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                <b-button to="/tasks/1/complete" variant="primary">Complete</b-button>
            </b-card>

            <b-card title="Default">
                <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                <b-button to="/tasks/2/complete" variant="primary">Complete</b-button>
            </b-card>
        </b-card-group>
    </b-container>
</template>

<script>
export default {
    name: 'tasks'
}
</script>