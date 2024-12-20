<script lang="ts">
  import { invoke } from "@tauri-apps/api/core";
  import { onMount } from "svelte";

  let inputValue: string;
  let message: string;
  async function updateContent() {
    try {
      // Call the Tauri command to get a random character
      message = await invoke<string>("dynamic");
    } catch (error) {
      console.error("Error updating content:", error);
    }
  }

  // Set up the interval to update content every 10 seconds
  onMount(() => {
    const interval = setInterval(updateContent, 10000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  });
</script>

<div class="d-flex flex-row">
  <div class="card mx-auto">
    <div class="card-body">
      <h3 class="card-title">type the anouced letter</h3>
      <div class="mb-3">
        <label for="inputField" class="form-label">Enter your text:</label>
        <input
          id="inputField"
          type="text"
          class="form-control"
          bind:value={inputValue}
          aria-describedby="inputHelp"
          autofocus
        />
      </div>
      <div aria-live="assertive" role="alert" class="visually-hidden">
        <p>Your random letter is ready:</p>
        <pre>{message}</pre>
      </div>
    </div>
  </div>
</div>
