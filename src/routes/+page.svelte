<script lang="ts">
  import "bootstrap/dist/css/bootstrap.min.css";
  import { invoke } from "@tauri-apps/api/core";
  import LetterCasing from "./LetterCasing.svelte";
  import Navbar from "../components/Navbar.svelte";

  let config: number | null = null;
</script>

{#if config === null}
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
          <button>easy</button>
          <button>medium</button>
          <button>advanced</button>
          <p class="mt-3">Choose your expercence starting...</p>
        </div>
      </div>
    </div>
  </div>
{:else}
  <Navbar />
{/if}
