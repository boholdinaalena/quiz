<script setup>
import Questions from './components/Questions.vue';
import Result from './components/Result.vue';
import questionsData from './assets/questions.json';
</script>

<template>
  <div class="opacity" v-if="isVisiable"></div>
  <div class="font-decor">
    <h1 class="text-center text-4xl mb-4 mt-16">Тест по английскому языку </h1>
    <h1 class="text-center text-5xl font-black mb-16 mt-2">{{ title }}</h1>
    <div>
      <Questions v-for="(question, i) in questions" :key="questions.index" :index="i" :questions_data="question"
        @viewAnswer="viewAnswer">
      </Questions>
      <center><button class="button" id="main" @click="checkAnswer">Check answer</button></center>
    </div>
  </div>
  <Result :result="count" :amount="numberOfQuestions" :percent="percent" :isVisiable="isVisiable" @close="update">
  </Result>
</template>

<script>
export default {
  data() {
    return {
      title: '"Passive Voice"',
      questions: questionsData,
      count: '',
      numberOfQuestions: '',
      percent: '',
      isVisiable: false
    }
  },
  components: {
    Questions: Questions,
    Result: Result,
  },
  methods: {
    //Add selected answer in questions
    viewAnswer(answer, index) {
      this.questions[index].selectedAnswer = answer;
    },

    //Check answer, return percent right answers and amount right answers
    checkAnswer() {
      this.count = 0;
      this.numberOfQuestions = this.questions.length;
      var i = 0;
      while (i < this.numberOfQuestions) {
        if (this.questions[i].rightAnswer == this.questions[i].selectedAnswer) {
          this.count++;
        }
        i++;
      }
      this.percent = Math.round((this.count / this.numberOfQuestions) * 1000) / 10;
      this.isVisiable = true;

    },

    //Close popup and reload page
    update() {
      this.isVisiable = false;
      window.location.reload();
      window.scrollTo(0, 0);
    }

  }
}
</script>