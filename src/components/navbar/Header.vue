<template>
<nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #4169E1">  
    <div class="collapse navbar-collapse">
    <ul class="navbar-nav mr-auto"> 
        <router-link   
                to='/'
                tag='li'
                class='nav-item'>
              <a class="nav-link">Ürün İslemleri</a>   
            </router-link>
            <router-link   
                to='/urun-ekle'
                tag='li'
                class='nav-item'>
              <a class="nav-link">Ürün Ekle</a>   
            </router-link> 
            <router-link   
                to='/urun-satisi'
                tag='li'
                class='nav-item'>
              <a class="nav-link">Ürün Satışı</a>   
            </router-link>    
            <router-link   
                to='/kategori-ekle'
                tag='li'
                class='nav-item'>
              <a class="nav-link">Kategori Oluştur</a>   
            </router-link>                      
    </ul>	
    </div>	
</nav>
</template>