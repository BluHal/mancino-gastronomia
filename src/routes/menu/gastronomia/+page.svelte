<script>
  import Header from "../../../components/Header.svelte";
  import SectionWrapper from "../../../components/SectionWrapper.svelte";

  const menuItems = [
    {
      name: "Pasta Verdure Grigliate e Formaggi Manouri (Greco)",
      price: 13.0,
    },
    {
      name: "Cappelletti in Brodo",
      price: 18.0,
    },
    {
      name: "Roastbeef",
      price: 18.0,
    },
    {
      name: "Supreme di Pollo al Limone",
      price: 13.0,
    },
    {
      name: "Vitello Tonnato",
      price: 14.0,
    },
    {
      name: "Seppie con Piselli",
      price: 18.0,
    },
    {
      name: "Polpette al Sugo",
      price: 15.0,
    },
    {
      name: "Cosce di Faraona Ripiene di Champignon con salsa Castagne",
      price: 18.0,
    },
    {
      name: "Instalata di pollo Uva + Uvetta + Pane + Parmigiano + Formaggio Francese",
      price: 16.0,
    },
    {
      name: "Verdure al Vapore",
      price: 4.0,
    },
    {
      name: "Peperono del Piquillo ripieni di Baccalà Mantecato",
      price: 5.0,
    },
    {
      name: "Verdure al Forno",
      price: 4.0,
    },
    {
      name: "Patate Arrosto",
      price: 4.0,
    },
  ];
</script>

<SectionWrapper id="menu">
  <Header></Header>
  <div class="flex flex-col gap-8 sm:gap10 md:gap-15 flex-1 items-center pt-20">
    <h2
      class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-[1200px] mx-auto w-full text-center font-semibold text-white typewriter"
    >
      Menu <span class="text-[#9fae99] typewriter">Gastronomia</span>
    </h2>

    <ul
      class="list-none space-y-2 flex flex-col justify-center mx-auto w-11/12 md:w-10/12 lg:w-2/3 text-white text-lg md:text-2xl lg:text-3xl pb-4"
    >
      {#each menuItems as menuItem}
        <li class="border-b-2 border-[#9fae99] py-2 flex justify-between gap-2">
          <span>{menuItem.name}</span>

          <span>{menuItem.price.toFixed(2)}€</span>
        </li>
      {/each}
    </ul>
  </div>
</SectionWrapper>
