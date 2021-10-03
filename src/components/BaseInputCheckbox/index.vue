<template>
    <div class="input-checkbox">
        <input 
            type="checkbox" 
            :id="id"
            :name="name" 
            :value="isChecked" 
            :placeholder="placeholder" 
            @change="handleChange"
        >
        <label :for="id">{{label}}</label>
    </div>
</template>

<script>
export default {
    props: ['name', 'id', 'onchange', 'type', 'placeholder', 'label'],
    data() {
        return {
            isChecked: false
        }
    },
    methods: {
        handleChange(e) {
            console.log(e.target.checked)
            this.isChecked = !this.isChecked
        }
    }
}
</script>

<style lang="scss" scoped>
    .input-checkbox {
        display: flex;
        align-items: center;
        input {
            padding: 1rem;
            font-size: 1.4rem;
            color: #888;
        }
    }
</style>