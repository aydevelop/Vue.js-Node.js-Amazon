<template>
<main>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-6">
                <div class="a-section">
                    <div class="a-spacing-top-medium"></div>
                    <h2 class="text-center">Add a new Product</h2>
                    <form>
                        <div class="a-spacing-top-medium">
                            <label>Category</label>
                            <select v-model="categoryID" class="a-select-option">
                                <option v-for="category in categories"
                                    :value="category._id"
                                    :key="category._id"
                                >
                                    {{ category.title }}
                                </option>
                            </select>
                        </div>
                        <div class="a-spacing-top-medium">
                            <label>Owner</label>
                            <select v-model="ownerID" class="a-select-option">
                                <option v-for="owner in owners"
                                    :value="owner._id"
                                    :key="owner._id"
                                >
                                    {{ owner.name }}
                                </option>
                            </select>
                        </div>
                        <div class="a-spacing-top-medium">
                            <label>Title</label>
                            <input v-model="title" type="text" class="a-input-text w-100">
                        </div>
                        <div class="a-spacing-top-medium">
                            <label>Price</label>
                            <input v-model="price" type="text" class="a-input-text w-100">
                        </div>
                        <div class="a-spacing-top-medium">
                            <label>Stock quantity</label>
                            <input min="1" v-model="stockQuantity" type="number" class="a-input-text w-100">
                        </div>
                        <div class="a-spacing-top-medium">
                            <label>Description</label>
                            <textarea v-model="description" class="w-100" placeholder="Product description"></textarea>
                        </div>
                        <label class="a-spacing-top-medium">Add Photo</label>
                        <div>
                            <label class="choosefile-button">
                                <i class="fal fa-plus"></i>
                                <input type="file" @change="onFileSelected">
                            </label>
                            <p>{{ fileName }}</p>
                        </div>

                        <hr>
                        <div @click="onAddProduct" class="a-spacing-top-large">
                            <span class="a-button-register">
                                <span class="a-button-inner">
                                    <span class="a-button-text">
                                        Add product
                                    </span>
                                </span>
                            </span>
                        </div>
                    </form>
                </div>
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
            let categories = $axios.$get("/categories");
            let owners = $axios.$get("/owners");

            const [catResp, ownerResp] = await Promise.all([
                categories,
                owners
            ]);

            return {
                categories: catResp,
                owners: ownerResp
            }    
        } catch (error) {
            console.log(error);
        }
    },

    data(){
        return {
            categoryID: null,
            ownerID: null,
            title: "",
            price: 0,
            description: "",
            selectedFile: null,
            stockQuantity: 1,
            fileName: ""
        }
    },

    methods: {
        onFileSelected(event) {
            this.selectedFile = event.target.files[0];
            this.fileName = event.target.files[0].name;
        },

        async onAddProduct(){
            try {
                let data = new FormData();
                data.append("title", this.title);
                data.append("price", this.price);
                data.append("description", this.description);
                data.append("stockQuantity", this.stockQuantity);
                data.append("ownerID", this.ownerID);
                data.append("categoryID", this.categoryID);
                data.append("photo", this.selectedFile, this.fileName);

                let result = await this.$axios.$post("/products", data);
                this.$router.push("/");
            } catch (error) {
                console.log(error);
            }
        }
    }

}
</script>

<style scoped>
    label{
        margin-bottom: 0px;
    }
</style>
