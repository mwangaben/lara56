<template>
    <div>
        <!-- Viewing the question -->
        <section v-if="!editting">
            <p v-if="feedback" id="feedback">Your question has been updated</p>
            <h2 id="title" v-text="question.title"></h2>
    
            <p id="body" v-text="question.body"></p>
            <button @click="editting = true" id="edit">Edit</button>
        </section>
    
        <!-- Editing the question -->
        <section v-if="editting">
            <input type="text" name="title" id="title" v-model="form.title">
    
            <textarea name="body" id="body" v-text="form.body"></textarea>
    
            <button @click="update" id="update">Save</button>
            <button @click="cancel" id="cancel">Cancel</button>
        </section>
    </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["dataQuestion"],
  data() {
    return {
      editting: false,
      feedback: false,
      question: this.dataQuestion,

      form: {
        title: this.dataQuestion,
        body : this.dataQuestion
      }
    };
  },

  methods: {
    update() {
        axios
        .post("/questions/1", this.form)
        .then(response => {
        this.question = this.form;
        this.feedback = true;
        })

        .catch(error => {
          console.log(error);
        });

      this.editting = false;
    },

    cancel() {
      this.editting = false;
    }
  }
};
</script>
