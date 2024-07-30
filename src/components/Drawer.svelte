<script>
  import { onMount } from "svelte";
  import { cubicOut } from "svelte/easing";
  import { fade, slide } from "svelte/transition";
  export let isOpen = true;
  export let placement = "left-0";

  let mounted = false;
  // scrolllock for content underneath drawer
  // @ts-ignore
  function scrollLock(isOpen) {
    if (mounted) {
      const body = document.querySelector("body");
      // @ts-ignore
      body.style.overflow = isOpen ? "hidden" : "auto";
    }
  }
  $: scrollLock(isOpen);

  onMount(() => {
    mounted = true;
    scrollLock(isOpen);
  });
</script>

<aside>
  <div
    class="fixed inset-0 w-full overflow-hidden {isOpen
      ? 'visible'
      : 'invisible'}"
  >
    <div
      class="w-screen h-full bg-[#9fae99] cursor-pointer duration-500 transition-opacity overflow-hidden z-10"
      transition:fade={{ duration: 300, easing: cubicOut }}
      style="opacity: {isOpen ? 0.5 : 0};"
    />
    <div
      class="absolute {placement} top-11 shadow-xl overflow-y-auto bg-[#9fae99d4] transition-all duration-300 h-full w-full md:w-2/4"
      transition:slide={{ duration: 300, easing: cubicOut }}
      style="{!isOpen ? 'width: 0%' : ''};"
    >
      <slot />
    </div>
  </div>
</aside>
