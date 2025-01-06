<script lang="ts">
  export let navItems = [];
  export let menu;
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">My App</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        {#each navItems as item, i}
          <li class="nav-item">
            <a
              class="nav-link {menu === i + 1 ? 'active' : ''}"
              href="#"
              on:click={() => (menu = i + 1)}
            >
              {item}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</nav>
