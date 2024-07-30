<script>
  import "@beyonk/gdpr-cookie-consent-banner/banner.css";
  import Bistrot from "../components/Bistrot.svelte";
  import Gastronomia from "../components/Gastronomia.svelte";
  import Hero from "../components/Hero.svelte";
  // @ts-ignore
  import GdprBanner from "@beyonk/gdpr-cookie-consent-banner";

  function initAnalytics() {}
</script>

<main class="flex flex-col">
  <Hero />
  <Gastronomia />
  <Bistrot />
</main>
