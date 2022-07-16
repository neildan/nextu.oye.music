<script>
import axios from "axios";
export default {
  data() {
    return {
      songs: [],
      errorLoad: "",
    };
  },
  methods: {
    searchSongs() {
      let search = document.getElementById("search-songs").value.toLowerCase();
      this.songs.forEach(function (elem) {
        if (elem.name.toLowerCase().indexOf(search) == -1) {
          elem.className = "hide";
        } else {
          elem.className = "col-md-4 col-sm-12";
        }
      });
    },
  },

  created() {
    axios
      .get("http://localhost:3000/data.json")
      .then((response) => {
        let songs = response.data.API_SONGS;
        let fixSongs = [];
        songs.forEach(function (song) {
          fixSongs.push({
            className: "col-md-4 col-sm-12",
            name: song.name,
            song: "songs/" + song.route,
            img: `img/icon_${song.img}.svg`,
            reproductions: song.reproductions,
          });
        });
        this.songs = fixSongs;
      })
      .catch((error) => {
        this.errorLoad = "Hubo un error al cargar la data";
      });
  },
};
</script>


<template>
  <h2 class="text-center mt-4">Canciones</h2>
  <input
    class="form-control me-2 mt-4"
    type="search"
    placeholder="Buscar"
    @input="searchSongs"
    id="search-songs"
    aria-label="Search"
  />
  <hr />

  <div class="col-12 mt-4 mb-4">
    <div class="row">
      <h3 v-if="errorLoad.length > 0" v-text="errorLoad"></h3>
      <span v-for="item in songs" :key="item" :class="item.className">
        <div class="card text-dark bg-light p-3 ml-3 mb-3">
          <img :src="item.img" class="card-img-top center-img" alt="Img" />
          <div class="card-body text-center">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">{{ item.description }}</p>
            <audio controls>
              <source :src="item.song" type="audio/mp3" />
            </audio>
          </div>
        </div>
      </span>
    </div>
  </div>
</template>

<style scoped>
.hide {
  display: none !important;
}
.card:hover {
  margin: 10px;
  box-shadow: 0px 0px 10px 2px #363636;
}
</style>