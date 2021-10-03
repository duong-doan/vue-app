<template>
    <div class="input-text">
        <label v-if="label" for="">{{label}}</label>
        <input 
            :type="type ? type: 'text'" 
            :name="name" 
            :value="value" 
            :placeholder="placeholder" 
            @change="handleChange"
        >
    </div>
</template>

<script>
export default {
    props: ['name', 'value', 'onchange', 'type', 'placeholder', 'label'],
    methods: {
        handleChange(e) {
            this.onchange(e.target.value)
        }
    }
}
</script>

<style lang="scss" scoped>
    .input-text {
        display: flex;
        flex-direction: column;
        input {
            padding: 1rem;
            font-size: 1.4rem;
            color: #888;
        }
    }
</style>