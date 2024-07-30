<script>
  import SectionWrapper from "./SectionWrapper.svelte";
</script>

<SectionWrapper id="bistrot">
  <div
    class="flex flex-col gap-8 sm:gap10 md:gap-15 flex-1 items-center justify-center pb-10 md:pb-14 px-3"
  >
    <h2
      class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-[1200px] mx-auto w-full text-center font-semibold text-white typewriter"
    >
      Il <span class="text-[#9fae99] typewriter">Bistrot</span>
    </h2>
    <h2
      class="text-2xl sm:text-2xl md:text-5xl lg:text-6xl max-w-[1200px] mx-auto w-full text-center font-semibold text-white typewriter"
    >
      <span class="text-[#9fae99] typewriter">Creatività</span> e raffinatezza, ogni
      giorno
    </h2>
    <p
      class="text-lg sm:text-lg md:text-3xl text-center font-light max-w-[1000px] mx-auto w-full text-white"
    >
      Nel nostro bistrot, la cucina innovativa incontra un'atmosfera accogliente
      e raffinata. Offriamo piatti creativi e sorprendenti, perfetti per ogni
      occasione, dal pranzo veloce ai momenti speciali. In un ambiente elegante
      ma informale, curato in ogni dettaglio, vi sentirete subito a casa.
      Scoprite come la nostra cucina può trasformare ogni pasto in un'esperienza
      unica e memorabile.
    </p>

    <a
      href="/menu/bistrot"
      class="inline-block px-6 py-3 bg-[#9fae99] text-[#4b4d4c] font-semibold shadow-lg hover:bg-[#9fae99] transition ease-in-out duration-300 typewriter w-60 text-center text-2xl md:text-3xl"
    >
      Menù
    </a>
  </div>
</SectionWrapper>
