<template>
  <div>
      <nav class="navbar navbar-dark navbar-expand-lg bg-primary">
          <a href="#" class="navbar-brand"><img src="../assets/logo.png" alt="">Todo Application</a>
          <button class="navbar-toggler" data-toggle="collapse" data-target="#nav">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="nav">
              <ul class="navbar-nav ml-auto">
                  <li class="navbar-item">
                      <a href="#" class="nav-link active">Home</a>
                  </li>
                  <li class="navbar-item">
                      <a href="#" class="nav-link">About</a>
                  </li>
                  <li class="navbar-item">
                      <a href="" class="nav-link">How it works</a>
                  </li>
              </ul>
          </div>
      </nav>
  </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
    .navbar-brand img{
        border: 2px solid #8d8d8d;
        border-radius: 50%;
        padding:10px;
        width:80px;
        height: 80px;
        background:#fff;
    }
</style>