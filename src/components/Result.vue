<template>
    <div v-if="isVisiable" class="backdrop" >
        <div id="popup" class="font-decor" >
            <p class="top-[35%] right-[44%] text-[28px]">Ваш результат:</p>
            <p class="top-[41%] right-[49%] text-[30px] font-black text-lightpink">{{ percent }}%</p>
            <p class="top-[48%] right-[41.5%] text-[28px]">Правильных ответов:</p>
            <p class="top-[54%] right-[48.5%] text-[30px] font-black text-lightpink">{{ result }} из {{ amount }}</p>
            <div class="wrap">
                <button class="button" @click="$emit('close')" >Пройти заново</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: {
        result: {
            type: Number
        },
        amount: {
            type: Number
        },
        percent: {
            type: Number
        },
        isVisiable: {
            type: Boolean
        }
    },

    emits: {
        close: null
    },

}
</script> 