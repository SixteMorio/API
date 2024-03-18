export default {
  props: {
    image: String,
    name: String,
    othersName: String,
    detail: String,

  },

  template: `
    <figure class="card">
      <a class="link" :href="'details.html?id=' + detail">
        <img class="img-fluid img" :src="image" :alt="title" />
        <figcaption>
          <p class="name">{{ name }}</p>
          <p class="othersName">{{ othersName }}</p>
        </figcaption>
      </a>
    </figure>
  `
}