<script>
export default {
  data() {
    return {
      title: "OYE",
    };
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <figure>
          <img src="img/logo.png" alt="Logo" />
        </figure>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              to="/"
              class="nav-link active"
              aria-current="page"
              id="title"
              >{{ title }}</router-link
            >
          </li>
        </ul>
        <router-link to="/" class="nav-link">Inicio </router-link>
        <router-link to="/songs" class="nav-link">Canciones </router-link>
        <router-link to="/register" class="nav-link">Registrar </router-link>
        <router-link to="/auth" class="nav-link">Ingresar </router-link>
        <div class="nav-link">
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#contactModal"
          >
            Contacto
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
#title {
  color: #1b75bb;
  font-weight: bold;
  font-size: 2rem;
  text-shadow: 1px 1px 2px white;
}
figure {
  margin: 0px;
}
.nav-link {
  color: white;
}
</style>
