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
                            <select class="a-select-option">
                                <option value="1">1</option>
                                <option value="2">1</option>
                                <option value="3">1</option>
                            </select>
                        </div>
                        <div class="a-spacing-top-medium">
                            <label>Owner</label>
                            <select class="a-select-option">
                                <option value="1">1</option>
                                <option value="2">1</option>
                                <option value="3">1</option>
                            </select>
                        </div>
                        <div class="a-spacing-top-medium">
                            <label>Title</label>
                            <input type="text" class="a-input-text w-100">
                        </div>
                        <div class="a-spacing-top-medium">
                            <label>Price</label>
                            <input type="text" class="a-input-text w-100">
                        </div>
                        <div class="a-spacing-top-medium">
                            <label>Description</label>
                            <textarea class="w-100" placeholder="Product description"></textarea>
                        </div>
                        <label class="a-spacing-top-medium">Add Photo</label>
                        <div>
                            <label class="choosefile-button">
                                <i class="fal fa-plus"></i>
                                <input type="file">
                            </label>
                        </div>

                        <hr>
                        <div class="a-spacing-top-large">
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
}
</script>

<style scoped>
    label{
        margin-bottom: 0px;
    }
</style>
