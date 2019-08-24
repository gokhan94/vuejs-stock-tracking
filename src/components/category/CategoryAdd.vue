<template>
<div class="container">
    <div class="row">
        <div class="col-6 offset-3 pt-3 card mt-5 shadow">
            <div class="card-body">
                <h3>Kategori Ekle</h3>
                <hr>
                <div class="form-group">
                    <label>Kategori Adı</label>
                    <input v-model="category.categoryName"  type="text" class="form-control" placeholder="Kategori adını giriniz..">
                </div> 
                <button @click="categorySave" class="btn btn-primary">Kaydet</button>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return {
           category : {
            categoryName : null
           }
        }
    },
    methods : {
        categorySave(){
           this.$store.dispatch("categoryAdd", this.category)
        }
    },
}
</script>