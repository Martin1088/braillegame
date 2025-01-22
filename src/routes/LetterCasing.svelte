<script lang="ts">
  import { onMount } from "svelte";
  import { randomLetter } from "../ts/store";
  import { checkLetter, updateContent } from "../ts/easy";

  let inputValue: string;
  let counterInstance: number = 10;
  let interval: number;
  // Set up the interval to update content every 10 seconds
  onMount(() => {
    interval = setInterval(updateContent, 1000);
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
          on:input={(event) => checkLetter(event, counterInstance, interval)}
          aria-describedby="inputHelp"
          autofocus
        />
      </div>
      <div aria-live="assertive" role="alert" class="visually-hidden">
        <p>Your random letter is ready:</p>
        <pre>${randomLetter}</pre>
      </div>
    </div>
  </div>
</div>
