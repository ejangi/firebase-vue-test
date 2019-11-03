<template>
    <b-container class="mt-3">
        <h1>Tasks</h1>

        <b-card-group columns class="d-flex flex-column">
            <template v-for="(task, key, index) in tasks">
            <b-card>
                <b-card-title>{{ task.title }}</b-card-title>
                <b-card-text>{{ task.description }}</b-card-text>
                <b-button to="/tasks/1/complete" variant="primary">Complete</b-button>
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
            errored: false
        }
    },
    mounted () {
        axios
            .get(this.getAPIUri() + '/tasks')
            .then(response => {
                this.tasks = response.data.tasks
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)
    }
}
</script>