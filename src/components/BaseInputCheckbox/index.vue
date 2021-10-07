<template>
    <div class="input-checkbox">
        <input 
            type="checkbox" 
            :id="id"
            :name="name" 
            :checked="isChecked"
            :placeholder="placeholder" 
        >
        <label :for="id">{{label}}</label>
    </div>
</template>

<script>
export default {
    props: ['name', 'id', 'onchange', 'type', 'placeholder', 'label', 'isChecked'],
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