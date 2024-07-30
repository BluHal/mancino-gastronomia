<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  export let isActive = false;

  function toggleActive() {
    isActive = !isActive;
    dispatch("statusChanged", isActive);
  }
</script>

<button
  class={"hamburger hamburger--collapse scale-90 " +
    (isActive ? "is-active" : "")}
  type="button"
  on:click={toggleActive}
>
  <span class="hamburger-box top-1">
    <span class="hamburger-inner"></span>
  </span>
</button>
