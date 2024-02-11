<div class="flex justify-center h-fit w-full">
  <span class="text-5xl text-primary-300 my-10">
    Check out my work!
  </span>
</div>
<div class="flex flex-wrap justify-around gap-6 mt-10 h-fit">
  <div class="flex justify-center items-center w-fit xl:w-1/3">
    <button class="text-left" on:click="{openPortfolioModal}">
      <div class="card card-hover rounded-xl h-fit w-96 xl:w-full">
        <header>
          <img src="/portfolioImg.JPG" alt="Portfolio" class="rounded-t-xl" />
        </header>
        <div class="p-4">
          <span class="text-xl text-primary-500">Svelte Portfolio!</span><br>
          <span class="text-md mt-2">This is the website you are looking at! The purpose of this project was to have a good way to showcase all the work that I do ( well at least the personal projects ).</span>
        </div>
      </div>
    </button>
  </div>
  <div class="flex justify-center items-center w-fit xl:w-1/3">
    <button class="text-left" on:click="{openReactPortfolioModal}">
      <div class="card card-hover rounded-xl h-fit w-96 xl:w-full">
        <header>
          <img src="/reactPortfolioImg.JPG" alt="Portfolio" class="rounded-t-xl" />
        </header>
        <div class="p-4">
          <span class="text-xl text-primary-500">React Portfolio!</span><br>
          <span class="text-md mt-2">This is the previous version of this website that was used as a portfolio, but it is 2 years old now, so it's about time to give it a refresh.</span>
        </div>
      </div>
    </button>
  </div>
</div>
<script lang="ts">
  import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';
  const modalStore = getModalStore();

  async function openPortfolioModal() {
    const meta: object = {
      title: 'Portfolio Project',
      body: `This is a web application made with Sveltekit, skeleton ui, and some other libraries. It is pretty minimal and honestly, not much thought was put into the design of it.
      The main focus was a functional website to showcase my work. The website will problably be deployed using Netlify like my old portfolio.`,
      liveLink: '/',
      technologiesUsed: ['SvelteKit', 'Sekeleton', 'Tailwind CSS', 'TypeScript', 'JavaScript'],
      sourceLink: 'https://github.com/michaelbrooks1234/svelte-portfolio'
    }
    return await openProjectModal(meta);
  }

  async function openReactPortfolioModal() {
    const meta: object = {
      title: 'React Portfolio project (old)',
      body: `This project had the same goal as the website you are currently on, except instead of Svelte, I was using React. Still used typescript though. <3 typescript. You can still view this website, but until further notice it will have an ugly domain since I no longer have the old one I was paying for :).`,
      liveLink:'https://symphonious-sunshine-86977d.netlify.app/',
      technologiesUsed: ['React', 'TypeScript', 'CSS', 'HTML'],
      sourceLink: 'https://github.com/michaelbrooks1234/Portfolio4.0'
    };
    return await openProjectModal(meta);
  }

  async function openProjectModal(meta: object) {
    await new Promise<boolean>((resolve) => {
      const modal: ModalSettings = {
        type: 'component',
        component: 'projectModalPopup',
        meta: meta,
        response: (r: boolean) => {
          resolve(r);
        }
      }
      modalStore.trigger(modal);
    });
    modalStore.clear();
    return;
  }
</script>