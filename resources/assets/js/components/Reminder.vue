<template>
    <div>
        <div v-if="reminders.length" id="reminders">
            <ul v-for="reminder in reminders">
                <li>
                    {{ reminder }}
                    <button @click="remove(reminder)" id="remove">Delete</button>
                </li>
            </ul>
        </div>
        <div>

            <input type="text" id="new-reminder" v-model="newReminder">
            <button @click="add" id="reminder">Submit</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newReminder: '',
                reminders  : []
            }
        },

        methods: {
            add() {
                return this.reminders.push(this.newReminder);
            }, 
            remove(reminder) {
                return this.reminders.splice(reminder, 1);
            }
        }
    }

</script>
