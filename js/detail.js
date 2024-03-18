import Header from "./header.js";

export default {
  components: {
    Header,
  },

  props: {
    url: String,
    pirate: Object,
  },

  data() {
    return {
      logo: '',
      theme: '',
      update: '',
      source: [],
    };
  },

  async created() {
    const resp = await fetch(this.url);
    console.log(resp);
    const data = await resp.json();
    console.log(data);

    this.logo = data.informations.meta.icone;
    this.theme = data.informations.meta.theme;

    this.update = data.informations.meta.update;
    this.source = data.informations.meta.sources;


    console.log(this.pirate.id);

  },

  template: `
      <Header :logo="this.logo" :theme="this.theme" />
      <main class="container main">
        <div class="row">
          <div class="divImg col-md-6 p-0">
            <img class="img img-fluid"  :src="'../img/ship' + this.pirate.id + '.jpeg'" alt="pirate.name" />
        </div>
        <div class="divText col-md-6">
          <h1 class="h1 text-start"> {{   pirate.nom }} </h1>
          <p class="otherNames"> {{ pirate. autres_noms }} </p>
          <p class ="bio" v-html="pirate.bio"></p>
          <a class="btn" href="index.html">Retour</a>
        </div>
        </div>
      </main>
      <footer class="footer">
        <div class="row">
          <div class="divUptdate col-12">
            <h2 class="h2 update">Mise à    Jour: {{ this.update }}</h2>
          </div>
    
          <div class="divSource col-12">
            <h2 class="h2">Sources :</h2>
              <ul class="source"    v-for="source in this.source">
                <li class="item">{{ source }}   </li>
              </ul>
          </div>
        </div>
      </footer>
  `,
};
