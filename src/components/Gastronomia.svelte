<script>
  import SectionWrapper from "./SectionWrapper.svelte";
</script>

<SectionWrapper id="gastronomia">
  <div
    class="flex flex-col gap-8 sm:gap10 md:gap-15 flex-1 items-center justify-center pb-10 md:pb-14 px-3"
  >
    <h2
      class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-[1200px] mx-auto w-full text-center font-semibold text-white typewriter"
    >
      La <span class="text-[#9fae99] typewriter">Gastronomia</span>
    </h2>
    <h2
      class="text-2xl sm:text-2xl md:text-5xl lg:text-6xl max-w-[1200px] mx-auto w-full text-center font-semibold text-white typewriter"
    >
      <span class="text-[#9fae99] typewriter">Tradizione</span> e semplicità, in
      ogni morso
    </h2>
    <p
      class="text-lg sm:text-lg md:text-3xl text-center font-light max-w-[1000px] mx-auto w-full text-white"
    >
      Scoprite la nostra gastronomia, dove la tradizione si fonde con la
      semplicità. Offriamo piatti classici e confortanti, preparati con
      ingredienti freschi e di qualità. Ogni ricetta è pensata per offrire
      un’esperienza autentica e gustosa, perfetta per ogni occasione. Venite a
      gustare la genuinità dei sapori che evocano la tradizione culinaria in
      ogni morso.
    </p>

    <a
      href="/menu/gastronomia"
      class="inline-block px-6 py-3 bg-[#9fae99] text-[#4b4d4c] font-semibold shadow-lg hover:bg-[#9fae99] transition ease-in-out duration-300 typewriter w-60 text-center text-2xl md:text-3xl"
    >
      Menù
    </a>
  </div>
</SectionWrapper>
