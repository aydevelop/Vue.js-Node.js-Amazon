<template>
    <main>
        <div class="container-fluid c-section">
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-6">
                    <div class="a-spacing-top-medium"></div>
                    <h2>Add a new category</h2>

                    <form>
                        <div class="a-spacing-top-medium">
                            <label>Title</label>
                            <input class="w-100 a-input-text" type="text" v-model="title" >
                        </div>

                        <hr>
                        <div @click="onAddCategory" class="a-spacing-top-large">
                            <span class="a-button-register">
                                <span class="a-button-inner">
                                    <span class="a-button-text">
                                        Add category
                                    </span>
                                </span>
                            </span>
                        </div>
                    </form>

                    <br>
                    <ul class="list-group-item">
                        <li v-for="category in categories"
                            :key="category._id"
                         >
                            {{ category.title }}   
                         </li>
                    </ul>

                </div>
                <div class="col-sm-3"></div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    async asyncData({ $axios }){
        try {
            let resp = await $axios.$get("/categories");
            return {
                categories: resp
            }
        } catch (error) {
            console.log(error);
        }
    },

    data() {
        return {
            title: ""
        }
    },

    methods:{
        async onAddCategory(){
            try {
                let data = { title: this.title };
                let result = await this.$axios.$post("/categories", data);
                this.categories.push({ title: this.title });
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style>
</style>
