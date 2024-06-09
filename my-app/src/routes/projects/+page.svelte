<script>
 
</script>


<head>
    <script src="https://kit.fontawesome.com/467e545fea.js" crossorigin="anonymous"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<div class="flex cursor-fancy justify-center items-center w-full flex-col gap-[30px]">
    <div class="grid justify-items-center justify-self-center w-full text-[1vh] md:text-sm text-white items-end pb-[5px] max-w-[50vw] min-w-[400px] grid-cols-4 border-b-white border-2 border-transparent mt-[10vh]">
        <h2>Projects</h2>
        <h2>Resume</h2>
        <h2>Education</h2>
        <h2>About Me</h2>
    </div>
    <div class="smallonly">

    </div>
    <h1 class="text-5xl mt-[5vh] mb-[2vh] text-center">Software Design and Web Dev</h1>
    <div class="flex gap-[2vw] bigonly">
        <a href="https://sivepanda.github.io/tsawebmaster23/" class="hover:shadow-[-4px_6px_10px_0_rgba(0,0,0,0.6)] retro w-[35vw] h-[30vh] rounded-xl max-w-[600px] cursor-fancy hover:-translate-y-3 ease-in-out duration-200"></a>
        <div class="max-w-[35vw] bg-[#404040] p-[15px] rounded-xl text-justify text-sm">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </div>
    <div class="flex gap-[2vw] bigonly">
        <div class="max-w-[35vw] bg-[#404040] p-[15px] rounded-xl text-justify text-sm">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <a href="https://sivepanda.github.io/tsawebmaster22/public_html/" class="hover:shadow-[4px_6px_10px_0_rgba(0,0,0,0.6)] nuwrld w-[35vw] h-[30vh] rounded-xl max-w-[600px] cursor-fancy hover:-translate-y-3 ease-in-out duration-200"></a>
        
    </div>
    <h1 class="text-5xl mt-[5vh] mb-[2vh] text-center">Machine Learning</h1>
    <div class="flex  xl:flex-row flex-col items-center justify-center">
        <div class="w-[40vh] h-[32vh] card-back border-2 rounded-xl xl:w-[23vw] flex flex-col p-[20px] gap-[2vh]">

            <i class="fa-solid fa-basketball text-4xl pt-[10%]" style="color: #ffffff;"></i>
            
            <h3 class="text-[white] text-sm">NBA Gambling Model</h3>
            <p class="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div class="xl:w-[2px] xl:h-[25vh] w-[40vw] h-[2px] rounded-lg bg-white my-[1vh] mx-[1vw]"></div>
        <div class="w-[40vh] h-[32vh] card-back border-2 rounded-xl xl:w-[23vw] flex flex-col p-[20px] gap-[2vh]">

            <i class="fa-solid fa-network-wired text-4xl pt-[10%]" style="color: #ffffff;"></i>
            
            <h3 class="text-[white] text-sm">Robotics Match Predictor</h3>
            <p class="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div class="xl:w-[2px] xl:h-[25vh] w-[40vw] h-[2px] rounded-lg bg-white my-[1vh] mx-[1vw]"></div>

        <div class="w-[40vh] h-[32vh] card-back border-2 rounded-xl xl:w-[23vw] flex flex-col p-[20px] gap-[2vh]">

            <i class="fa-solid fa-diagram-project text-4xl pt-[10%]" style="color: #ffffff;"></i>
            
            <h3 class="text-[white] text-sm">K-Means Clustering</h3>
            <p class="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>
    
    <div class="w-full h-[5vh] mt-[2vh] bg-[#333333] flex justify-center items-center">
        <div class="text-[1vh] md:text-sm w-full max-w-[40vw] min-w-[350px] grid grid-cols-4 items-center">
            <p class="text-white justify-self-center">Linkedin</p>
            <p class="text-white justify-self-center">Instagram</p>
            <p class="text-white justify-self-center">Email</p>
            <p class="text-white justify-self-center">Discord</p>
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

    body {
        display: flex;
        justify-content: center;
        align-items: center;
        background: radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);
        background-size: cover;
        min-height: 100vh;
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

    h2{
        font-size: 140%;
        color: #a5a4a3;
        transition: color.2s ease-in-out;
    }

    h2:hover{
        color:white;
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
</style>

