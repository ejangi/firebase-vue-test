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
                <b-button v-on:click="markCompleted(key)" :pressed="task.completed" variant="primary">Complete</b-button>
            </b-card>
            </template>
        </b-card-group>
    </b-container>
</template>

<script>
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
        this.loadTasks();
    },
    methods: {
        loadTasks() {
            let tasksRef = this.getFirestore().collection('tasks');
            let allTasks = tasksRef.get()
                .then(snapshot => {
                    if (this.tasks == null) {
                        this.tasks = [];
                    }

                    snapshot.forEach(doc => {
                        this.tasks.push(doc.data());
                    });

                    if (this.tasks.length > 0) {
                        this.loading = false;
                    } else {
                        this.tasks = null;
                    }
                })
                .catch(err => {
                    this.errorMessage = 'Error getting documents: ' + err;
                    this.errored = true;
                });
        },
        markCompleted (key) {
            if (key == undefined) return;
        }
    }
}
</script>