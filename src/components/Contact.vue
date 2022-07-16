<template>
  <div
    class="modal fade"
    id="contactModal"
    tabindex="-1"
    aria-labelledby="contactModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="contactModalLabel">Contacto</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="col-12">
            <a
              class="stretched-link"
              target="_blank"
              href="https://www.linkedin.com/in/daniel-felipe-luis-valencia/"
            >
              <div class="row">
                <figure class="col-2 img-contact">
                  <img src="img/linkedin.png" alt="email" />
                </figure>
                <p class="col-10 text-contact">LinkendIn</p>
              </div>
            </a>
            <a
              class="stretched-link"
              href="mailto:danielfelipeluis@outlook.com"
            >
              <div class="row">
                <figure class="col-2 img-contact">
                  <img src="img/email.png" alt="email" />
                </figure>
                <p class="col-10 text-contact">danielfelipeluis@outlook.com</p>
              </div>
            </a>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img-contact > img {
  width: 2rem;
}
.text-contact {
  font-size: 17px;
  margin-top: 3px;
}
</style>