<script>
  import Header from "./Header.svelte";
  import SectionWrapper from "./SectionWrapper.svelte";
</script>

<SectionWrapper id="home">
  <Header></Header>
  <div
    class="relative w-screen h-dvh bg-cover bg-center bg-[url('/img/bancone.jpg')] z-0 bg-blend-darken"
  >
    <div class="absolute inset-0 bg-black bg-opacity-70"></div>

    <div
      class="absolute inset-0 flex items-center justify-center flex-col px-3"
    >
      <h2
        class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-[1200px] mx-auto w-full text-center font-semibold text-white typewriter"
      >
        L'arte della <span class="text-[#9fae99] typewriter">cucina</span> a Poggio
        Rusco
      </h2>
      <br />
      <p
        class="text-xl sm:text-2xl md:text-3xl text-center font-light max-w-[1000px] mx-auto w-full text-white"
      >
        Benvenuti a Mancino, la nuova avventura di Stefano Roversi. Nel nostro
        bistrot, grandi classici e proposte innovative si incontrano, realizzati
        con materie prime eccellenti. Per un pranzo veloce o una serata
        speciale, vi accoglieremo in un ambiente elegante ma informale. Scoprite
        il gusto della passione e dell’esperienza di Stefano.
      </p>
    </div>
  </div>
</SectionWrapper>
