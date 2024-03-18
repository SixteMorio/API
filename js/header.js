export default {
  props: {
    logo: String,
    theme: String,
  },

  template: `
  <header class="header">
    <nav class="navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">
          <img :src="logo" alt="Logo" width="120" height="96">
          <h1 class="title">{{ theme }}</h1>
        </a>
      </div>
    </nav>
  </header>
  `
}

