<template>
    <main>
        <div class="container-fluid c-section">
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-6">
                    <div class="a-spacing-top-medium"></div>
                    <h2>Add a new owner</h2>

                    <form>
                        <div class="a-spacing-top-medium">
                            <label>Name</label>
                            <input class="w-100 a-input-text" type="text" v-model="name" >
                        </div>

                        <div class="a-spacing-top-medium">
                            <label>About</label>
                            <input class="w-100 a-input-text" type="text" v-model="about" >
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
                        <div @click="onAddOwner" class="a-spacing-top-large">
                            <span class="a-button-register">
                                <span class="a-button-inner">
                                    <span class="a-button-text">
                                        Add owner
                                    </span>
                                </span>
                            </span>
                        </div>
                    </form>
                    
                    <div class="a-spacing-top-large pt-2">
                        <ul class="list-group-item">
                            <li v-for="owner in owners"
                                :key="owner._id"
                            >
                                {{ owner.name }}   
                            </li>
                        </ul>
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
            let resp = await $axios.$get("/owners");
            return {
                owners: resp
            }
        } catch (error) {
            console.log(error);
        }
    },

    data() {
        return {
            name: "",
            about: "",
            selectedFile: null,
            fileName: ""
        }
    },

    methods:{
        onFileSelected(event) {
            this.selectedFile = event.target.files[0];
            this.fileName = event.target.files[0].name;
        },

        async onAddOwner(){
             try {
                let data = new FormData();
                data.append("name", this.name);
                data.append("about", this.about);
                data.append("photo", this.selectedFile, this.fileName);

                let result = await this.$axios.$post("/owners", data);
                this.owners.push({ name: this.name });
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style>
</style>
