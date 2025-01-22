<script lang="ts">
  import "bootstrap/dist/css/bootstrap.min.css";
  import LetterCasing from "./LetterCasing.svelte";
  import Navbar from "../components/Navbar.svelte";
  import { Modus, modus, set_menu_easy } from "../ts/store";
  import { setModus } from "../ts/menu";
  import Home from "./Home.svelte";
  let menu: number = 1;
</script>

{#if $modus === null}
  <div
    class="modal show d-block"
    tabindex="-1"
    style="background-color: rgba(0, 0, 0, 0.5);"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content text-center">
        <div class="modal-body">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <br />
          <button on:click={() => setModus(Modus.Easy)}>easy</button>
          <button on:click={() => setModus(Modus.Medium)}>medium</button>
          <button on:click={() => setModus(Modus.Advanced)}>advanced</button>
          <p class="mt-3">Choose your expercence starting...</p>
        </div>
      </div>
    </div>
  </div>
{:else if $modus === Modus.Easy}
  <Navbar navItems={set_menu_easy()} bind:menu />
  {#if menu === 1}
    <Home />
  {:else if menu === 3}
    <LetterCasing />
  {/if}
{:else if $modus === Modus.Medium}
  <Navbar navItems={set_menu_easy()} bind:menu />
  {#if menu === 1}
    <Home />
  {/if}
{:else if $modus === Modus.Advanced}
  <Navbar navItems={set_menu_easy()} bind:menu />
  {#if menu === 1}
    <Home />
  {/if}
{/if}
