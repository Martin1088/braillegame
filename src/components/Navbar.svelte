<script lang="ts">
  export let navItems = [{ label: "logo", id: 0 }];
  export let menu: number;

  function setActiveItem(id: number) {
    menu = id;
  }
</script>

<ul class="nav flex-column bg-dark navbar-dark">
  {#each navItems as item}
    <li class="nav-item">
      <a
        class="nav-link {menu === item.id ? 'active' : ''}"
        href="/"
        on:click={() => setActiveItem(item.id)}
      >
        {item.label}
      </a>
    </li>
  {/each}
</ul>
