<script lang="ts">
  import "bootstrap/dist/css/bootstrap.min.css";
  import LetterCasing from "./LetterCasing.svelte";
  import Navbar from "../components/Navbar.svelte";
  import { Modus, modus, set_menu_easy } from "../ts/store";
  import { setModus } from "../ts/menu";
  import Home from "./Home.svelte";
  let menu: number = 1;
</script>

<LetterCasing />
