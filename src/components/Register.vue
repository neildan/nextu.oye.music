<script>
export default {
  data() {
    return {
      errorEmail: {
        show: false,
        message: "Obligatorio. No es un correo valido",
      },
      errorPassword: {
        show: false,
        message: "Obligatorio. Mínimo debe ser 8 caracteres",
      },
      errorPasswordDiferent: {
        show: false,
        message: "Obligatorio. No coincide las contraseñas",
      },
      errorSelect: {
        show: false,
        message: "Obligatorio. Seleccione un género válido",
      },
      errorTerms: {
        show: false,
        message: "Obligatorio. Debe aceptar los términos y condiciones",
      },
    };
  },
  methods: {
    submit() {
      const emailRegex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      let next = true;
      try {
        let errorEmail = document.getElementById("email").value;
        if (errorEmail.length <= 0 || !errorEmail.match(emailRegex)) {
          this.errorEmail.show = true;
          throw false;
        } else {
          this.errorEmail.show = false;
        }

        let pass1 = document.getElementById("password1").value;
        if (pass1.length < 8) {
          this.errorPassword.show = true;
          throw false;
        } else {
          this.errorPassword.show = false;
        }

        let pass2 = document.getElementById("password2").value;
        if (pass1 != pass2) {
          this.errorPasswordDiferent.show = true;
          throw false;
        } else {
          this.errorPasswordDiferent = false;
        }

        let genre = document.getElementById("genreMusic").value;
        if (genre == "0") {
          this.errorSelect.show = true;
          throw false;
        } else {
          this.errorSelect.show = false;
        }

        let check = document.getElementById("check").checked;
        if (!check) {
          this.errorTerms.show = true;
          throw false;
        } else {
          this.errorTerms.show = false;
        }
      } catch (error) {
        next = error;
      }
      if (next) {
        window.location.href = "http://localhost:3000";
      }
    },
  },
};
</script>

<template>
  <div class="row justify-content-md-center p-3">
    <div class="card text-white bg-dark col-md-6 col-sm-12">
      <h5 class="card-header">Registro</h5>
      <div class="card-body">
        <span class="card-text">
          <form>
            <div class="mb-3">
              <label for="email" class="form-label">Correo Electrónico *</label>
              <input type="email" class="form-control" id="email" required />
              <small class="error" v-show="this.errorEmail.show">{{
                this.errorEmail.message
              }}</small>
            </div>
            <div class="mb-3">
              <label for="password1" class="form-label">Contraseña *</label>
              <input
                type="password"
                class="form-control"
                id="password1"
                required
              />
              <small class="error" v-show="this.errorPassword.show">{{
                this.errorPassword.message
              }}</small>
            </div>

            <div class="mb-3">
              <label for="password2" class="form-label"
                >Repetir Contraseña *</label
              >
              <input
                type="password"
                class="form-control"
                id="password2"
                required
              />
              <small class="error" v-show="this.errorPasswordDiferent.show">{{
                this.errorPasswordDiferent.message
              }}</small>
            </div>

            <div class="mb-3">
              <label for="genreMusic" class="form-label"
                >Genero de música favorito *</label
              >
              <select id="genreMusic" class="form-select" required>
                <option selected value="0">Seleccione</option>
                <option value="1">Rock</option>
                <option value="2">Clasica</option>
                <option value="3">Salsa</option>
              </select>
              <small class="error" v-show="this.errorSelect.show">{{
                this.errorSelect.message
              }}</small>
            </div>

            <div class="mb-3">
              <label for="age" class="form-label">Edad</label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="age"
                  id="age1"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Menor a 20
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="age"
                  id="age2"
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  20 a 50
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="age"
                  id="age3"
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Mayor a 50
                </label>
              </div>
            </div>

            <div class="mb-3">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="check"
                  required
                />
                <label class="form-check-label" for="check">
                  Aceptar terminos y condiciones *
                </label>
              </div>
              <small class="error" v-show="this.errorTerms.show">{{
                this.errorTerms.message
              }}</small>
            </div>

            <p class="terms">* Campos obligatorios</p>

            <button @click="submit" type="button" class="btn btn-primary">
              Continuar
            </button>
          </form>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.error {
  color: red;
  font-weight: bold;
}
.terms {
  color: blue;
  font-weight: bold;
}
</style>