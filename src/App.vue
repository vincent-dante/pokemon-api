<script setup>
import { RouterView } from 'vue-router'
import SearchInput from './components/SearchInput.vue'
</script>

<template>
  <header class="container mx-auto px-5 py-10 lg:px-10 xl:px-40">
    <div class="text-center">
      <a href="/" class="inline-block">
        <img
          src="./assets/pokemon-logo.png"
          alt=""
          srcset=""
          width="200"
          height="200"
          class="pokemon-logo"
        />
      </a>
    </div>
    <SearchInput />
  </header>

  <main class="container mx-auto px-5 py-5 lg:px-10 xl:px-40">
    <RouterView />
  </main>

  <footer class="text-gray-400 text-sm text-center py-10">Data provided by PokeApi</footer>
</template>

<style lang="scss">
.pokemon-logo {
  position: relative;
  bottom: 0;
  animation: bounce 1.2s linear infinite;
}

@keyframes bounce {
  0%,
  100% {
    bottom: 0;
  }
  50% {
    bottom: 10px;
  }
}

.type-normal {
  svg {
    fill: #b5b5b5;
  }
  .gradient-background {
    background-image: linear-gradient(to bottom right, #e6e6e6, #b5b5b5);
  }
  .pokemon-type {
    background: #b5b5b5;
  }
  .back-button {
    color: #fff;
  }
}
.type-fire {
  svg {
    fill: #ff8351;
  }
  .gradient-background {
    background-image: linear-gradient(to bottom right, #ffba8b, #ff7f27);
  }
  .pokemon-type {
    background: #ff6427;
    color: #fff;
  }
  .back-button {
    color: #fff;
  }
}
.type-fighting {
  svg {
    fill: #d56723;
  }
  .gradient-background {
    background-image: linear-gradient(to bottom right, #f4ac80, #d56723);
  }
  .pokemon-type {
    background: #d56723;
  }
  .back-button {
    color: #fff;
  }
}
.type-flying {
  .pokemon-type {
    background: #72cece;
    color: #222;
  }
}
.type-fairy {
  svg {
    fill: #fdb9e9;
  }
  .gradient-background {
    background-image: linear-gradient(to bottom right, #ffe0f6, #e384c7);
  }
  .pokemon-type {
    background: #fdb9e9;
    color: #222;
  }
}
.type-water {
  svg {
    fill: #4592c4;
  }
  .gradient-background {
    background-image: linear-gradient(to bottom right, #9bd6fd, #4592c4);
  }
  .pokemon-type {
    background: #4592c4;
    color: #fff;
  }
  .back-button {
    color: #fff;
  }
}
.type-grass {
  svg {
    fill: #9ed78e;
  }
  .gradient-background {
    background-image: linear-gradient(to bottom right, #b8df7d, #80a843);
  }
  .pokemon-type {
    background: #548a45;
    color: #fff;
  }
  .back-button {
    color: #fff;
  }
}
.type-poison {
  svg {
    fill: #975aa8;
  }
  .gradient-background {
    background-image: linear-gradient(to bottom right, #eab0fb, #975aa8);
  }
  .pokemon-type {
    background: #975aa8;
  }
  .back-button {
    color: #fff;
  }
}
.type-bug {
  svg {
    fill: #699339;
  }
  .gradient-background {
    background-image: linear-gradient(to bottom right, #b8e386, #699339);
  }
  .pokemon-type {
    background: #699339;
    color: #fff;
  }
  .back-button {
    color: #fff;
  }
}
.type-electric {
  .content-value {
    color: #fd0;
  }
  svg {
    fill: #ffe53c;
  }
  .gradient-background {
    background-image: linear-gradient(to bottom right, #ffe88c, #ff8f00);
  }
  .pokemon-type {
    background: #ffe53c;
    color: #222;
  }
}
.type-ground {
  svg {
    fill: #cca04b;
  }
  .gradient-background {
    background-image: linear-gradient(to bottom right, #f9d48d, #cca04b);
  }
  .pokemon-type {
    background: #cca04b;
    color: #fff;
  }
  .back-button {
    color: #fff;
  }
}
.type-psychic {
  svg {
    fill: #b9607d;
  }
  .gradient-background {
    background-image: linear-gradient(to bottom right, #f2aac1, #b9607d);
  }
  .pokemon-type {
    background: #b9607d;
    color: #fff;
  }
  .back-button {
    color: #fff;
  }
}
.type-ghost {
  svg {
    fill: #6a5093;
  }
  .gradient-background {
    background-image: linear-gradient(to bottom right, #ba9de8, #6a5093);
  }
  .pokemon-type {
    background: #6a5093;
    color: #fff;
  }
  .back-button {
    color: #fff;
  }
}
.type-ice {
  svg {
    fill: #51c4e7;
  }
  .gradient-background {
    background-image: linear-gradient(to bottom right, #a6eaff, #51c4e7);
  }
  .pokemon-type {
    background: #51c4e7;
    color: #fff;
  }
  .back-button {
    color: #fff;
  }
}
.type-rock {
  svg {
    fill: #8f7a18;
  }
  .gradient-background {
    background-image: linear-gradient(to bottom right, #dbc55f, #8f7a18);
  }
  .pokemon-type {
    background: #8f7a18;
    color: #fff;
  }
  .back-button {
    color: #fff;
  }
}
.type-steel {
  svg {
    fill: #9eb7b8;
  }
  .gradient-background {
    background-image: linear-gradient(to bottom right, #d2e9ea, #9eb7b8);
  }
  .pokemon-type {
    background: #9eb7b8;
    color: #fff;
  }
  .back-button {
    color: #fff;
  }
}
.type-dragon {
  svg {
    fill: #d90a0a;
  }
  .gradient-background {
    background-image: linear-gradient(to bottom right, #f48585, #d90a0a);
  }
  .pokemon-type {
    background: #d90a0a;
    color: #fff;
  }
  .back-button {
    color: #fff;
  }
}
.type-dark {
  svg {
    fill: #3e3d3d;
  }
  .gradient-background {
    background-image: linear-gradient(to bottom right, #606060, #3e3d3d);

    .pokemon-name {
      color: #fff;
    }
  }
  .pokemon-type {
    background: #3e3d3d;
    color: #fff;
  }
  .back-button {
    color: #fff;
  }
}
</style>
