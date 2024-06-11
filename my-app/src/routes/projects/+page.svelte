<script>
    
    let resume_hidden = false;
    let proj = true;
    let res = false;
    let edu = false;
    let abt = false;

    function projectClick(){
        proj = true;
        res = false;
        edu = false;
        abt = false;
    }

    function resumeClick(){
        proj = false;
        res = true;
        edu = false;
        abt = false;
    }

    function educationClick(){
        proj = false;
        res = false;
        edu = true;
        abt = false;
    }

    function aboutClick(){
        proj = false;
        res = false;
        edu = false;
        abt = true;
    }

</script>

<svelte:head>
    <script src="https://kit.fontawesome.com/467e545fea.js" crossorigin="anonymous"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>

<div class="flex cursor-fancy items-center w-full min-h-[100vh] flex-col gap-[30px]">
    <div class="grid w-full text-[1vh] md:text-sm text-white pb-[5px] max-w-[50vw] min-w-[400px] grid-cols-4 border-b-white border-2 border-transparent mt-[10vh] absolute top-0">
        <button class="hover:cursor-fancy {proj ? 'yes-click' : 'no-click'}" on:click={projectClick}>Projects</button>
        <button class="hover:cursor-fancy {res ? 'yes-click' : 'no-click'}" on:click={resumeClick}>Resume</button>
        <button class="hover:cursor-fancy {edu ? 'yes-click' : 'no-click'}" on:click={educationClick}>Education</button>
        <button class="hover:cursor-fancy {abt ? 'yes-click' : 'no-click'}" on:click={aboutClick}>About Me</button>
    </div>
    
    <div class="{proj ? 'initial' : 'hidden'} flex gap-[2vh] flex-col items-center">
    <h1 class="text-5xl mt-[25vh] mb-[2vh] text-center">Software Design and Web Dev</h1>
    <div class="smallonly hidden">
        <div class="w-[85vw] h-[20vh] retro rounded-xl"></div>
        <div class="max-w-[85vw] bg-[#404040] p-[15px] rounded-xl text-justify text-sm mt-[2vh]">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="w-[85vw] h-[20vh] nuwrld rounded-xl mt-[2vh]"></div>
        <div class="max-w-[85vw] bg-[#404040] p-[15px] rounded-xl text-justify text-sm mt-[2vh]">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </div>
    <div class="flex gap-[2vw] bigonly">
        <a href="https://sivepanda.github.io/tsawebmaster23/" class="rot hover:shadow-[-4px_6px_10px_0_rgba(0,0,0,0.6)] retro w-[35vw] h-[30vh] rounded-xl max-w-[600px] cursor-fancy hover:-translate-y-3 ease-in-out duration-200"></a>
        <div class="max-w-[35vw] bg-[#404040] p-[15px] rounded-xl text-justify text-sm">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </div>
    <div class="flex gap-[2vw] bigonly">
        <div class="max-w-[35vw] bg-[#404040] p-[15px] rounded-xl text-justify text-sm ease-in-out duration-200">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <a href="https://sivepanda.github.io/tsawebmaster22/public_html/" class="roty hover:shadow-[4px_6px_10px_0_rgba(0,0,0,0.6)] nuwrld w-[35vw] h-[30vh] rounded-xl max-w-[600px] cursor-fancy hover:-translate-y-3 ease-in-out duration-200"></a>
        
    </div>
    <h1 class="text-5xl mt-[5vh] mb-[2vh] text-center">Machine Learning</h1>
    <div class="flex  xl:flex-row flex-col items-center justify-center">
        <div class="w-[90vw] h-[32vh] card-back border-2 rounded-xl xl:w-[23vw] flex flex-col p-[20px] gap-[2vh]">

            <i class="fa-solid fa-basketball text-4xl pt-[10%]" style="color: #ffffff;"></i>
            
            <h3 class="text-[white] text-sm">NBA Gambling Model</h3>
            <p class="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div class="xl:w-[2px] xl:h-[25vh] w-[40vw] h-[2px] rounded-lg bg-white my-[1vh] mx-[1vw]"></div>
        <div class="w-[90vw] h-[32vh] card-back border-2 rounded-xl xl:w-[23vw] flex flex-col p-[20px] gap-[2vh]">

            <i class="fa-solid fa-network-wired text-4xl pt-[10%]" style="color: #ffffff;"></i>
            
            <h3 class="text-[white] text-sm">Robotics Match Predictor</h3>
            <p class="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div class="xl:w-[2px] xl:h-[25vh] w-[40vw] h-[2px] rounded-lg bg-white my-[1vh] mx-[1vw]"></div>

        <div class="w-[90vw] h-[32vh] card-back border-2 rounded-xl xl:w-[23vw] flex flex-col p-[20px] gap-[2vh]">

            <i class="fa-solid fa-diagram-project text-4xl pt-[10%]" style="color: #ffffff;"></i>
            
            <h3 class="text-[white] text-sm">K-Means Clustering</h3>
            <p class="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>
    </div>

    <div class="{res ? 'initial' : 'hidden'} grid grid-cols-2 h-full w-full justify-items-center">
        <div class="flex flex-col">
            <h1 class="text-5xl mt-[25vh] text-center">Resume</h1>
            <a href="../../media/Resume (Ahmad Choudhary) (1).pdf"download on:mouseenter={() => {resume_hidden = true;}} on:mouseleave={() => {resume_hidden = false;}} class="resume-contain rounded-xl mt-[2vh] relative">
                
                <div class="{!resume_hidden ? 'opacity-100' : 'opacity-0'} resume-bkg w-[25vw] h-[70vh] rounded-xl"></div>
                
            </a>
            
            
        </div>
        <div>
            <h1 class="text-5xl mt-[25vh] text-center">Skillset</h1>
        </div>
    </div>

    <div  class="{edu ? 'initial' : 'hidden'}">vbc</div>
    <div class="{abt ? 'initial' : 'hidden'}">asd</div>
    
    <div class="w-full h-[5vh] bg-[#333333] flex justify-center items-center relative">
        <div class="text-[1vh] md:text-sm w-full max-w-[40vw] min-w-[350px] grid grid-cols-4 items-center absolute bottom-0">
            <p class="text-white mb-[1.5vh] justify-self-center">Linkedin</p>
            <p class="text-white  mb-[1.5vh] justify-self-center">Instagram</p>
            <p class="text-white  mb-[1.5vh] justify-self-center">Email</p>
            <p class="text-white  mb-[1.5vh] justify-self-center">Discord</p>
        </div>
    </div>
</div>





<style lang="css">
    @import '../../app.css';
    @media only screen and (max-width: 1200px){
        .bigonly{
            display: none;
        }
        .smallonly{
            display: initial;
        }
    }

    .resume-bkg{
        background: url('../../media/AhmadResume.png');
        background-position: center;
        background-size:cover;
        /* transition: all .1s ease-out; */
    }

    .resume-contain{
        background: white;
        transition: all .3s ease-out;
    }

    .resume-contain:hover {
        transform: perspective(1000px) rotate3d(1, 0, 0, 45deg);
    }

    /* .resume-bkg:hover{
        opacity: 0;
        transform: perspective(1000px) rotate3d(1, 0, 0, 45deg);
    } */

    .yes-click{
        color: white;
    }
   
    .no-click{
        color: #a5a4a3;
    }

    .card-back{
        background-color: rgba(0,0,0, .3) !important;
        border-color: rgba(255, 255, 255, 0.1);
    }
    .card-back:hover{
        box-shadow: 4px 6px 10px rgba(0, 0, 0, 0.4);
    }
    html, body {
        /* height: 100%; */
        margin-left: 0;
    }

    .rot{
        transform: perspective(1000px) rotate3d(0, 1, 0, 10deg);
    }
    .rot:hover{
        transition: all .4s ease-in-out;
        transform: perspective(1000px) rotate3d(-.4, 1, 0, 10deg) translateY(-10px) !important;
    }
    .roty{
        transition: all .4s ease-in-out;
        transform: perspective(1000px) rotate3d(0, -14, 0, 10deg);
    }
    .roty:hover{
        transform: perspective(1000px) rotate3d(-.4, -14, 0, 10deg) translateY(-10px) !important;
    }

    :global(body) {
        cursor: url('../../media/white_dot.png'), pointer;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);
        background-size: cover;
    }

    .retro{
        background-image: url('../../media/Retrograde Home Page.PNG');
        background-position: center;
        background-size: cover;
    }

    .nuwrld{
        background-image: url('../../media/NuWrld Sound Page.png');
        background-position: center;
        background-size: cover;
    }

    button{
        font-size: 140%;
        color: #a5a4a3;
        transition: color.2s ease-in-out;
    }

    button:hover{
        color:white;
    }

  h1{    

    background: linear-gradient(90deg, #333 0%, #fff 40%, #333 100%);
    -webkit-background-clip: text;
            background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p{
    color: #a5a4a3;
  }
</style>


