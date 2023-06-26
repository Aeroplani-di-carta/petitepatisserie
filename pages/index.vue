<template>
  <main>
    <AppHero />
    <StickyMenu />
    <PageWrapper container> Ciao </PageWrapper>
    <PageWrapper container> Wafer </PageWrapper>
    <PageWrapper container> Dalla Puglia </PageWrapper>
    <div class="grid grid-cols-2 gap-4 py-12 my-20 text-white bg-primary-950">
      <div class="">
        <img
          src="https://dummyimage.com/640x460/cf0/aaa"
          alt=""
          class="object-cover shadow-2xl max-w-[20rem] rounded-xl scale-150 translate-x-20 -rotate-12"
        />
      </div>
      <div class="flex flex-col justify-center w-2/3">
        <h3>Ciao</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
          consectetur repellendus suscipit quam dolore inventore debitis
          laudantium tempore facilis omnis, id nostrum, cumque incidunt libero
          voluptas labore doloribus ab molestiae?
        </p>
      </div>
    </div>
    <PageWrapper container> Ingredienti </PageWrapper>
    <PageWrapper class="text-white bg-primary-900"> Top </PageWrapper>
  </main>
</template>
