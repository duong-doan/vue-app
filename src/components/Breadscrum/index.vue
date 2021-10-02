<template>
    <ul>
        <template v-for="(bread, index) in breadcrumb" >
            <li v-if="index !== breadcrumb.length - 1" :key="bread.id">
                <div>
                    <router-link :to="bread.to">{{bread.text}}</router-link>
                </div>
                <span>/</span>
            </li>
            <li v-else :key="bread.id">
                <div>{{bread.text}}</div>
            </li>
        </template>
    </ul>
</template>

<script>
export default {
    props: ['breadcrumb']
    // example: breadcrumb = [
    //              {
    //                  text: 'home',
    //                  to: '/:endpoint'
    //              }
    //         ]
}
</script>

<style lang="scss" scoped>
    ul {
        display: flex;
        li {
            display: flex;
            span {
                margin: 0 0.5rem;
            }
        }
    }
</style>