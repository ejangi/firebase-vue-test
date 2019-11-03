<template>
    <b-container class="mt-3">
        <h1>Tasks</h1>

        <template v-if="loading == true">
            <b-spinner label="Spinning"></b-spinner>
        </template>

        <template v-if="errored == true">
            <b-alert show variant="danger">{{ errorMessage }}</b-alert>
        </template>

        <b-card-group columns class="d-flex flex-column">
            <template v-for="(task, key, index) in tasks">
            <b-card>
                <b-card-title>{{ task.title }}</b-card-title>
                <b-card-text>{{ task.description }}</b-card-text>
                <b-button :to="'/tasks/' + key + '/complete'" variant="primary">Complete</b-button>
            </b-card>
            </template>
        </b-card-group>
    </b-container>
</template>

<script>
import axios from 'axios'

export default {
    name: 'tasks',
    data () {
        return {
            tasks: null,
            loading: true,
            errored: false,
            errorMessage: null
        }
    },
    mounted () {
        axios
            .get(this.getAPIUri() + '/tasks')
            .then(response => {
                this.tasks = response.data.tasks
            })
            .catch(error => {
                this.errorMessage = error,
                this.errored = true
            })
            .finally(() => this.loading = false)
    }
}
</script>