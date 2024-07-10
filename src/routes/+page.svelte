<svelte:head>
  
</svelte:head>


<div class="w-screen h-full flex flex-col justify-center items-center cursor-fancy overflow-x-hidden">
    <h1 class="text-5xl text-center mb-5">Ahmad Choudhary</h1>
    <hr class="w-[30svh] h-0.5 mx-auto bg-white border-0 rounded my-4">
    <div class="max-w-[450px] px-5 text-justify text-white text-lg">
        <p>Hi! On this website, you’ll get to know everything relevant you need to know about me. From my highschool projects where it all began to my current explorations in ML to even my hobbies, I have attempted to include a portfolio in which you can fully understand my character. Admittedly, the website still isn’t completely finished although I will be constantly updating it and improving it as time allows. If you have further questions or recommendations please feel free to message me. Other than that, let’s check it out!</p>
    </div>
    <hr class="w-[30svh] h-0.5 mx-auto bg-white border-0 rounded my-4">
    <a href="/projects" class="cursor-fancy w-[20svh] h-[6svh] flex justify-center items-center border-2 text-[#a5a4a3] border-white rounded-3xl mt-5 gap-2 hover:bg-white hover:text-black group">
        <div>
            <h2 class="transition-opacity duration-300 ease-in-out">Lets Go</h2>
        </div>
        <div class="transition-transform duration-300 ease-in-out transform">
            <i class="fa-solid fa-angles-right"></i>
        </div>
      </a>
      <div class="w-full h-[5vh] mt-[2vh] bg-[#333333] absolute left-0 bottom-0 flex justify-center items-center">
        <div class="text-[1vh] md:text-sm w-full max-w-[40vw] min-w-[350px] grid grid-cols-4 items-center absolute bottom-0">
          <a href="https://www.linkedin.com/in/ahmad-choudhary" class="text-white mb-[1.5vh] justify-self-center">Linkedin</a>
          <a href="https://www.instagram.com/ahmad.s.choudhary/" class="text-white mb-[1.5vh] justify-self-center">Instagram</a>
          <a href= "mailto: asc113@duke.edu" class="text-white mb-[1.5vh] justify-self-center">Email</a>
          <a href="https://github.com/2Ahmad5" class="text-white mb-[1.5vh] justify-self-center">Github</a>
        </div>
    </div>
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
    /* opacity: 0;
     */
     display: none;
  }
  
  i{
    transition: all .2s ease-in-out;
  }

  .group:hover i {
    /* position: relative; */
    /* transform: translateX(-50%); */
    font-size: 3svh;
  }
  
</style>
