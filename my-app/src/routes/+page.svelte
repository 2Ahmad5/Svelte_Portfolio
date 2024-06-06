<svelte:head>
  <script src="https://kit.fontawesome.com/467e545fea.js" crossorigin="anonymous"></script>
</svelte:head>

<div class="w-screen h-full flex flex-col justify-center items-center cursor-fancy overflow-x-hidden">
    <h1 class="text-5xl text-center mb-5">Ahmad Choudhary</h1>
    <hr class="w-[30svh] h-0.5 mx-auto bg-white border-0 rounded my-4">
    <div class="max-w-[450px] px-5 text-justify text-white text-sm">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum djhfbv hjsbdv.</p>
    </div>
    <hr class="w-[30svh] h-0.5 mx-auto bg-white border-0 rounded my-4">
    <a href="/src/routes/projects/+page.svelte" class="cursor-fancy w-[20svh] h-[6svh] flex justify-center items-center border-2 text-[#a5a4a3] border-white rounded-3xl mt-5 gap-2 hover:bg-white hover:text-black group">
        <div>
            <h2 class="transition-opacity duration-300 ease-in-out">Lets Go</h2>
        </div>
        <div class="transition-transform duration-300 ease-in-out transform group-hover:translate-x-[-160%]">
            <i class="fa-solid fa-angles-right"></i>
        </div>
      </a>
</div>

<style lang="css">
    @import '../app.css';

  :global(html, body) {
        height: 100%;
        margin: 0;
    }

    :global(body) {
        display: flex;
        justify-content: center;
        align-items: center;
        background: radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);
        background-size: cover;
        min-height: 100vh;
    }

  /* border-b-gray-600 */
  h1{    

    background: linear-gradient(90deg, #333 0%, #fff 40%, #333 100%);
    -webkit-background-clip: text;
            background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p{
    color: #a5a4a3;
  }

  .group:hover h2 {
    opacity: 0;
  }

  .group:hover i {
    /* transform: translateX(-35%); */
    font-size: 2.7svh;
  }
  
</style>
