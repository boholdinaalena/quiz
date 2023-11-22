<template>
    <div class="questions-div">
        <P class="text-grey font-bold mt-8">ЗАДАНИЕ |
            <p class="text-darkpink inline"> ОДИН ВАРИАНТ ОТВЕТА </p> 
            | ID - {{ index + 1 }}</P>
            <h3 class="inline-block">{{ questions_data.Question1 }} &nbsp;</h3>
            <p class="text-darkpink inline">{{ selected }}</p>
            <h3 class="inline-block">&nbsp;  {{ questions_data.Question2 }}</h3>
        <div v-for="answer in questions_data.Answers">
            <input :checked="false" class="option-input" checked type="radio" :name="questions_data.id"
                @click="isSelect(answer)" /><label>{{ answer }}</label>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        questions_data: {
            type: Object,
            required: true,
        },

        index: {
            type: Number
        }
    },
    
    data() {
        return {
            selected: '______',
        }
    },

    methods: {
        //Return selected answers in app
        isSelect(arg) {
            this.selected = arg;
            this.$emit("viewAnswer", this.selected, this.index);
        }
    }
}
</script>