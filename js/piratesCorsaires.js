import Pirate from "./pirate.js";
import Header from "./header.js";

export default {
  components: {
    Pirate,
    Header,
  },

  props: {
    url: String,
  },

  data() {
    return {
      pirates: [],
    };
  },

  methods: {
  },

  async created() {
    const resp = await fetch(this.url);
    console.log(resp);
    const data = await resp.json();
    console.log(data);
    this.pirates = data.records;

    this.logo = data.informations.meta.icone;
    this.theme = data.informations.meta.theme;

    this.update = data.informations.meta.update;
    this.source = data.informations.meta.sources;

  },

  template: `
  <Header :logo="this.logo" :theme="this.theme" />
  
  <main class="grid">
    <Pirate v-for="pirate in pirates" :name="pirate.nom" :image="pirate.img" :othersName="pirate.autres_noms" :detail= "pirate.id" /> 
  </main>

  <footer class="footer">
    <div class="row">
      <div class="divUptdate col-12">
        <h2 class="h2 update">Mise à Jour: {{ this.update }}</h2>
      </div>  

      <div class="divSource col-12">
        <h2 class="h2">Sources :</h2>
          <ul class="source" v-for="source in this.source">
            <li class="item">{{ source }}</li>
          </ul>
      </div> 
    </div>
  </footer>
  `,

  computed: {
  },
};