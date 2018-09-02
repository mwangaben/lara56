<template>
    <div class="col-md-12">
        <!-- Open all tasks -->
        <div id="all-tasks">
            <h2>All Tasks</h2>
            <ul v-for="task in tasks" class="list-group">
                <li v-text="task.description" class="list-group-item"></li>
            </ul>
        </div>
        <!-- End all tasks -->
    
        <!-- Open completed tasks -->
        <div id="completed-tasks">
            <h2>Completed Tasks</h2>
            <ul v-for="task in completedTasks" class="list-group">
                <li v-text="task.description" class="list-group-item"></li>
            </ul>
        </div>
        <!-- End completed tasks  -->
    
        <!-- Open incompleted tasks -->
        <div id="incompleted-tasks">
            <h2>Incompleted Tasks</h2>
            <ul v-for="task in incompletedTasks" class="list-group">
                <li v-text="task.description" class="list-group-item"></li>
            </ul>
        </div>
        <!-- End incompleted tasks -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tasks: [{
                        description: 'Go to the store',
                        completed  : true
                    },
                    {
                        description: 'Go to the bank',
                        completed  : false
                    },
                    {
                        description: 'Go to work',
                        completed  : true
                    },
                ]
            }
        },
        computed: {
            completedTasks() {
                return this.tasks.filter(task => task.completed);
            },
    
            incompletedTasks() {
                return this.tasks.filter(task => !task.completed);
            }
        }
    }
</script>

