<script lang="ts">
  import "bootstrap/dist/css/bootstrap.min.css";
  import { invoke } from "@tauri-apps/api/core";
  import LetterCasing from "./LetterCasing.svelte";
  import Navbar from "../components/Navbar.svelte";
  import { modus, set_menu_easy } from "../ts/store";
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
          <button on:click={() => setModus(1)}>easy</button>
          <button on:click={() => setModus(2)}>medium</button>
          <button on:click={() => setModus(3)}>advanced</button>
          <p class="mt-3">Choose your expercence starting...</p>
        </div>
      </div>
    </div>
  </div>
{:else if $modus === 1}
  <Navbar navItems={set_menu_easy} bind:menu />
  {#if menu === 1}
    <Home />
  {/if}
{/if}
