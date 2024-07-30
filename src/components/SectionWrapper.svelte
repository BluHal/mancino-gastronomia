<script>
  export let id;
</script>

<section {id} class={"min-h-dvh flex flex-col"}>
  <div class="flex flex-col flex-1 w-full">
    <slot />
  </div>
</section>
