<script lang="ts">
  import Hamburger from "../components/Hamburger.svelte";
  import { navigateToSection } from "../lib/navigation";
  import Drawer from "./Drawer.svelte";
  let isOpen = false;

  function handleStatusChange(event: { detail: boolean }) {
    isOpen = event.detail;
  }

  function handleNavigation(
    event: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement },
    sectionId: string
  ) {
    isOpen = false;
    event.preventDefault();
    navigateToSection(sectionId);
  }
</script>

<header class="flex flex-col w-full fixed bg-[#9fae99] z-50">
  <div class="w-full flex py-2 px-3 z-50 gap-6">
    <Hamburger on:statusChanged={handleStatusChange} isActive={isOpen} />
    <a
      href="/"
      class="text-lg md:text-2xl lg:text-3xl font-bold typewriter text-[#4b4d4c] ml-3"
    >
      Mancino Gastronomia Bistrot
    </a>
  </div>

  <Drawer {isOpen}>
    <div class="flex flex-col h-full w-full pl-10 pt-20">
      <ul class="list-none space-y-2 my-5">
        <li>
          <a
            href="#gastronomia"
            on:click={(event) => handleNavigation(event, "gastronomia")}
            class="text-3xl md:text-3xl lg:text:4xl uppercase font-black text-[#4b4d4c] tracking-wide"
            >La Gastronomia</a
          >
        </li>
        <li>
          <a
            href="#bistrot"
            on:click={(event) => handleNavigation(event, "bistrot")}
            class="text-3xl md:text-3xl lg:text:4xl uppercase font-black text-[#4b4d4c] tracking-wide"
            >Il Bistrot</a
          >
        </li>
        <!-- <li>
          <a
            href=""
            class="text-3xl md:text-3xl lg:text:4xl uppercase font-black text-[#4b4d4c] tracking-wide"
            >Prenotazioni</a
          >
        </li> -->
      </ul>

      <hr class="h-0.5 w-2/3 border-t-0 bg-neutral-100 dark:bg-white/10" />

      <ul class="list-none space-y-2 my-5">
        <!-- <li>
          <a
            href=""
            class="text-xl md:text-xl lg:text:2xl uppercase font-black text-[#4b4d4c] tracking-wide"
            >Info</a
          >
        </li> -->
        <li>
          <a
            href="#footer"
            on:click={(event) => handleNavigation(event, "footer")}
            class="text-xl md:text-xl lg:text:2xl uppercase font-black text-[#4b4d4c] tracking-wide"
            >Contatti</a
          >
        </li>
      </ul>
    </div>
  </Drawer>
</header>
