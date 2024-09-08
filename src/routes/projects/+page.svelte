<script>

  import { fly } from 'svelte/transition';
  import IntersectionObserver from "svelte-intersection-observer";
  import { fade } from "svelte/transition";
  import { onMount } from 'svelte';
  import inView from '../../components/inView';

onMount(() => {
  if (!window.location.hash) {
    window.location.hash = 'loaded';
    window.location.reload();
  }
});

let cardElements;
  let isVisible1 = false;
  let isVisible2 = false;
  let isVisible3 = false;

  const showCard1 = () => {
    isVisible1 = true;
  };

  const hideCard1 = () => {
    isVisible1 = false;
  };

  const showCard2 = () => {
    isVisible2 = true;
  };

  const hideCard2 = () => {
    isVisible2 = false;
  };

  const showCard3 = () => {
    isVisible3 = true;
  };

  const hideCard3 = () => {
    isVisible3 = false;
  };

  onMount(() => {
    cardElements = document.querySelectorAll('.cards');
  });

  function rotateRight() {
    // Rotate positions: left -> center -> right -> back to left
    let leftElement = cardElements[0];
    let centerElement = cardElements[1];
    let rightElement = cardElements[2];

    leftElement.classList.remove('lefter');
    leftElement.classList.add('center');
    centerElement.classList.remove('center');
    centerElement.classList.add('righter');
    rightElement.classList.remove('righter');
    rightElement.classList.add('lefter');

    let leftUniemElements = leftElement.getElementsByClassName('uniem');
    if (leftUniemElements.length > 0) {
      leftUniemElements[0].classList.add('mid');
    }
    let centerUniemElements = centerElement.getElementsByClassName('uniem');
    if (centerUniemElements.length > 0) {
      centerUniemElements[0].classList.remove('mid');
    }

    let leftReseElements = leftElement.getElementsByClassName('rese');
    if (leftReseElements.length > 0) {
      leftReseElements[0].classList.remove('mid');
      leftReseElements[0].classList.add('try');
    }
    let centerReseElements = centerElement.getElementsByClassName('rese');
    if (centerReseElements.length > 0) {
      centerReseElements[0].classList.add('mid');
    }

    cardElements = [rightElement, leftElement, centerElement];
  }

  function rotateLeft() {
    // Rotate positions: right -> center -> left -> back to right
    let leftElement = cardElements[0];
    let centerElement = cardElements[1];
    let rightElement = cardElements[2];

    leftElement.classList.remove('lefter');
    leftElement.classList.add('righter');
    centerElement.classList.remove('center');
    centerElement.classList.add('lefter');
    rightElement.classList.remove('righter');
    rightElement.classList.add('center');

    let centerUniemElements = centerElement.getElementsByClassName('uniem');
    if (centerUniemElements.length > 0) {
      centerUniemElements[0].classList.remove('mid');
    }
    let rightUniemElements = rightElement.getElementsByClassName('uniem');
    if (rightUniemElements.length > 0) {
      rightUniemElements[0].classList.add('mid');
    }

    let centerReseElements = centerElement.getElementsByClassName('rese');
    if (centerReseElements.length > 0) {
      centerReseElements[0].classList.add('mid');
      centerReseElements[0].classList.remove('try');
    }
    let rightReseElements = rightElement.getElementsByClassName('rese');
    if (rightReseElements.length > 0) {
      rightReseElements[0].classList.remove('mid');
    }

    cardElements = [centerElement, rightElement, leftElement];
  }

  function handleKeydown(event, direction) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      direction === 'right' ? rotateRight() : rotateLeft();
    }
  }
  
let visible1 = false;
  let visible2 = false;
  let visible3 = false;

  const handleEnter1 = () => {
    visible1 = true;
  };

  const handleExit1 = () => {
    visible1 = false;
  };

  const handleEnter2 = () => {
    visible2 = true;
  };

  const handleExit2 = () => {
    visible2 = false;
  };

  const handleEnter3 = () => {
    visible3 = true;
  };

  const handleExit3 = () => {
    visible3 = false;
  };


  let resume_hidden = false;
  let proj = true;
  let res = false;
  let edu = false;
  let abt = false;

  function projectClick() {
    proj = true;
    res = false;
    edu = false;
    abt = false;
  }

  function resumeClick() {
    proj = false;
    res = true;
    edu = false;
    abt = false;
  }

  function educationClick() {
    proj = false;
    res = false;
    edu = true;
    abt = false;
  }

  function aboutClick() {
    proj = false;
    res = false;
    edu = false;
    abt = true;
  }

  let isExpanded = false;
  let showChoices = false;

  function toggleMenu() {
    if (isExpanded) {
      showChoices = false;
      setTimeout(() => {
        isExpanded = false;
      }, 500); // Matches the animation duration for closing
    } else {
      isExpanded = true;
      setTimeout(() => {
        showChoices = true;
      }, 1000); // Matches the total animation duration for opening
    }
  }

  function scrollToEducation() {
    document.getElementById('education').scrollIntoView({ behavior: 'smooth' });
  }
  function scrollToResume() {
    document.getElementById('resume').scrollIntoView({ behavior: 'smooth' });
  }function scrollToAbout() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  }
  function scrollToTop(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<svelte:head>
  <script
    src="https://kit.fontawesome.com/467e545fea.js"
    crossorigin="anonymous"
  ></script>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>
<div class="flex flex-col w-[100vw] gap-[0px]">
    <button on:click={scrollToTop} class="bigonly cursor-fancy hover:bg-white hover:text-black fixed bg-transparent rounded-full border-2 border-white w-[6vh] h-[6vh] top-[88%] xl:left-[95%] left-[85%] z-50 flex items-center justify-center">
        <i class="fa-solid fa-chevron-up"></i>
    </button>
  <div
    class="flex cursor-fancy items-center w-full min-h-[100vh] mb-[0px] flex-col"
  >
  <!-- <button class="mens smallonly text-base fixed left-[50%] top-[88%] z-50 rounded-full px-[5vh] py-[1.5vh] bg-[#0c0c0c] border-2 border-[#a3a3a3] text-white">
    <h2>menu</h2>
  </button> -->
  <button
  id="menuButton"
  class="menu-button mens smallonly hidden text-base z-50 rounded-full px-[5vh] py-[1.5vh] bg-[#0c0c0c] border-2 border-[#a3a3a3] text-white"
  on:click={toggleMenu}
  class:expanded={isExpanded}
>
  <h2>menu</h2>
  <div class="choices" class:visible={showChoices}>
    <div class="choice" on:click={projectClick} on:click={scrollToTop} style="animation-delay: 0.1s;">projects</div>
    <div class="choice" on:click={resumeClick} on:click={scrollToResume} style="animation-delay: 0.3s;">resume</div>
    <div class="choice" on:click={scrollToEducation} on:click={educationClick} style="animation-delay: 0.5s;">education</div>
    <div class="choice" on:click={aboutClick} on:click={scrollToAbout} style="animation-delay: 0.7s;">contact</div>
  </div>
</button>
    <div
      class="bigonly flex w-full text-[1vh] md:text-sm text-white gap-[6vh] max-w-[25vw] min-w-[360px] mt-[10vh] mb-[15vh]"
    >
      <button
        class="hover:cursor-fancy text-2xl {proj
          ? 'yes-click'
          : 'no-click'}"
        on:click={projectClick}><h2>projects</h2></button
      >
      <button
        class="hover:cursor-fancy text-2xl {res
          ? 'yes-click'
          : 'no-click'}"
        on:click={resumeClick} on:click={scrollToResume}><h2>resume</h2></button
      >
      <button
        class=" hover:cursor-fancy text-2xl  {edu
          ? 'yes-click'
          : 'no-click'}"
        on:click={scrollToEducation} on:click={educationClick}><h2>education</h2></button
      >
      <button
        class="hover:cursor-fancy text-2xl {abt
          ? 'yes-click'
          : 'no-click'}"
        on:click={aboutClick} on:click={scrollToAbout}><h2>contact</h2></button
      >
    </div>

    <div
      class="flex gap-[2vh] flex-col items-center"
    >
      <h1 class="text-5xl mt-[5vh] mb-[2vh] text-center relative">
        software design and web dev
      </h1>
      <div class="smallonly hidden">
        <div class="w-[85vw] h-[20vh] retro rounded-xl"></div>
        <div
          class="max-w-[85vw] bg-[#404040] p-[15px] rounded-xl text-justify text-sm mt-[2vh]"
        >
          <p>
            Retrograde was my second and last website I made in high school. With no frameworks used and barebones HTML, JS, and CSS, I learned a lot on how web design works from the ground up. The backend was especially difficult teaching me a lot about frameworks and how they function if used. In addition, the website used to be hosted using AWS which completed off the development process teaching me immensely about the cloud and how to get a project up and running for use. The project itself focuses on a space tourism company adapting to the new world. Click on it to find out more!

          </p>
        </div>
        <div class="w-[85vw] h-[20vh] nuwrld rounded-xl mt-[2vh]"></div>
        <div
          class="max-w-[85vw] bg-[#404040] p-[15px] rounded-xl text-justify text-sm mt-[2vh]"
        >
          <p>
            The Stock Investment Portfolio Project is something I am currently working on with an Economics Professor at Duke. The entirety of the frontend/backend is done by me using Svelte for the framework in a combination with the Flask API for python backend scripting. So far I have been able to run the algorithm efficiently and display its contents for the user to see but the full project is still a work in progress as I add more features. The plan is to use Vercel to host it sometime soon so if you are interested, be on the lookout.

          </p>
        </div>
      </div>
      
        <div class="flex gap-[2vw] bigonly mt-[10vh]">
          <a
            href="https://sivepanda.github.io/tsawebmaster23/"
            class="rot hover:shadow-[-4px_6px_10px_0_rgba(0,0,0,0.6)] retro w-[35vw] h-[30vh] rounded-xl max-w-[600px] cursor-fancy hover:-translate-y-3 ease-in-out duration-200"
          ></a>
          <div
            class="lroty max-w-[600px] w-[35vw] bg-[#404040] p-[15px] h-[30vh] rounded-xl text-justify text-base"
          >
            <p>
              Retrograde was my second and last website I made in high school. With no frameworks used and barebones HTML, JS, and CSS, I learned a lot on how web design works from the ground up. The backend was especially difficult teaching me a lot about frameworks and how they function if used. In addition, the website used to be hosted using AWS which completed off the development process teaching me immensely about the cloud and how to get a project up and running for use. The project itself focuses on a space tourism company adapting to the new world. Click on it to find out more!
            </p>
          </div>
        </div>
        <div class="flex gap-[2vw] bigonly mt-[15vh]">
          <div
            class="troty max-w-[600px] w-[35vw] bg-[#404040] p-[15px] rounded-xl text-justify text-base ease-in-out duration-200"
          >
            <p>
              The Stock Investment Portfolio Project is something I am currently working on with an Economics Professor at Duke. The entirety of the frontend/backend is done by me using Svelte for the framework in a combination with the Flask API for python backend scripting. So far I have been able to run the algorithm efficiently and display its contents for the user to see but the full project is still a work in progress as I add more features. The plan is to use Vercel to host it sometime soon so if you are interested, be on the lookout.
            </p>
          </div>
          <a
            
            class="roty hover:shadow-[4px_6px_10px_0_rgba(0,0,0,0.6)] nuwrld w-[35vw] h-[30vh] rounded-xl max-w-[600px] cursor-fancy ease-in-out duration-200"
          ></a>
        </div>
      
      <h1 class="text-5xl mt-[30vh] mb-[15vh] text-center">machine learning</h1>
      <div
        class="flex xl:flex-row flex-col items-center justify-center mb-[30px] gap-[2vw]"
      >
      <div
      use:inView
      on:enter={handleEnter1}
      on:exit={handleExit1}
      class="w-[90vw] h-[36vh] card-back border-2 rounded-xl xl:w-[23vw] flex flex-col p-[20px] gap-[2vh] transition-transform"
      class:visible={visible1}
      class:invisible={!visible1}
    >
      <i class="fa-solid fa-basketball text-4xl pt-[10%]" style="color: #ffffff;"></i>
      <h3 class="text-[white] text-base">NBA Gambling Model</h3>
        <p class="text-sm">
          Current project I am currently exploring that decides how best to spread money when sports betting in the NBA. Taking in data from PBPStats and building a neural network to determine how a player fares against another group of players, it will output accurate over-unders. </p>
     
    </div>
    
    <div
      use:inView
      on:enter={handleEnter2}
      on:exit={handleExit2}
      class="w-[90vw] h-[36vh] card-back border-2 rounded-xl xl:w-[23vw] flex flex-col p-[20px] gap-[2vh] transition-transform"
      class:visible={visible2}
      class:invisible={!visible2}
      style="transition-delay: 0.15s;"
    >
      <i class="fa-solid fa-network-wired text-4xl pt-[10%]" style="color: #ffffff;"></i>
      <h3 class="text-[white] text-base">Robotics Match Predictor</h3>
      <p class="text-sm">
        Win Predictor for FIRST Robotics with 85% accuracy; Using Sci-kit Learn, I coded cross validation (feature importance) by way of Random Forest Classifiers. In addition, ran a binary classification to train the data on accuracy. Data utilized from Statbotics API.
      </p>
    </div>
    
    <div
      use:inView
      on:enter={handleEnter3}
      on:exit={handleExit3}
      class="w-[90vw] h-[36vh] card-back border-2 rounded-xl xl:w-[23vw] flex flex-col p-[20px] gap-[2vh] transition-transform"
      class:visible={visible3}
      class:invisible={!visible3}
      style="transition-delay: 0.3s;"
    >
      <i class="fa-solid fa-diagram-project text-4xl pt-[10%]" style="color: #ffffff;"></i>
      <h3 class="text-[white] text-base">K-Means Clustering</h3>
      <p class="text-sm">
        By way of unsupervised learning, I used the techniques for K-means clustering to find the similarities between a group of students in order to improve teaching techniques. Done for the Duke ASA DataFest Competition - Finalist.
      </p>
    </div>

    </div>

    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#070707" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
      <div
      id="resume" class="bg-[#070707] grid grid-cols-2 arranged min-h-[100vh] pb-[15vh] w-[100vw] items-center justify-items-center"
    >
      <div class="flex flex-col">
        <h1 class="text-5xl mt-[5vh] text-center">resume</h1>
        <a
          href='../Resume (Ahmad Choudhary) (3).pdf'
          download
          
          class="resume-contain rounded-xl mt-[2vh] relative"
        >
          <div
            class="{
              'opacity-100'
             } convert resume-bkg w-[461px] h-[564px] rounded-xl"
          ></div>
        </a>
      </div>
      <div>
        <h1 class="text-5xl convert-top mt-[5vh] text-center">skillset</h1>
        <div
          class="text-white mt-[2vh] text-5xl text-center bg-[#404040] rounded-xl p-[10px] convert-skills w-[45vw]"
        >
          <h3 class="text-base">Programming</h3>
          <p class="text-xs">*Not all shown</p>
          <i class="fa-brands fa-python"></i>
          <i class="fa-brands fa-java"></i>
          <i class="fa-brands fa-js"></i>
          <i class="fa-brands fa-html5"></i>
          <i class="fa-brands fa-css3-alt"></i>
          <i class="fa-brands fa-aws"></i>
          <i class="fa-brands fa-react"></i>
          <i class="fa-brands fa-node"></i>
          <i class="fa-brands fa-cloudflare"></i>
          <i class="fa-brands fa-linux"></i>
        </div>
        <div
          class=" mt-[2vh] text-center bg-[#404040] rounded-xl p-[10px] convert-skills w-[45vw]"
        >
          <h3 class="text-base text-white">Courses</h3>
          <p>
            Data Structures and Algorithms, Discrete Math, Linear Algebra,
            Advanced Multivariable Calculus, Design and Analysis of Algorithms,
            Computer Architecture, Probability, Database Systems, Machine
            Learning
          </p>
        </div>
        <div
          class="mt-[2vh] text-center bg-[#404040] rounded-xl p-[10px] convert-skills w-[45vw]"
        >
          <h3 class="text-base text-white">Achievments</h3>
          <p>
            Finalist in Duke DataFest - Utilized techniques of ML to find the
            optimal study plan for students
          </p>
          <br />
          <p>
            Honarable Mention in Math Modeling - Used Data Science to find the
            most negatively affected areas in NC
          </p>
          <br />
          <p>
            FIRST Robotics International Competitor - All forms of engineering
            used to qualify out of over 9000 teams
          </p>
        </div>
      </div>
    </div>
    
    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#000000" fill-opacity="1" d="M0,288L48,277.3C96,267,192,245,288,218.7C384,192,480,160,576,170.7C672,181,768,235,864,234.7C960,235,1056,181,1152,160C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg> -->
    <div
      id="education" class="overflow-hidden okla w-[100vw] pb-[5vh] items-center"
    >
      <div class="grid grid-cols-2 w-[100vw] min-h-[90vh] arranged items-center justify-items-center">
        <div class="wraps min-h-[70vh] max-w-[70vw]">
          <div class="scene">
            <div class="banner">
              <div class="panel"></div>
              <div class="panel"></div>
              <div class="panel"></div>
              <div class="panel"></div>
              <div class="panel"></div>
              <div class="panel"></div>
              <div class="panel"></div>
              <div class="panel"></div>
              <div class="panel"></div>
              <div class="panel"></div>
              <div class="panel"></div>
              <div class="panel"></div>
              <div class="panel"></div>
              <div class="panel"></div>
              <div class="panel"></div>
              <div class="panel"></div>
              <div class="panel"></div>
              <div class="panel"></div>
              <div class="panel"></div>
              <div class="panel"></div>
              <div class="panel"></div>
              <div class="panel"></div>
              <div class="panel"></div>
              <div class="panel"></div>
            </div>
            <div class="screen"></div>
          </div>
        </div>
        <div class="w-[60vh] convert-skills min-h-[60vh] glass flex flex-col justify-center">
            <ul class="list-none w-full px-[25px]">
                <li class="flex max-w-full border-b-neutral-600 border-b-2 pb-[2vh] pt-[2vh]">
                    <p class="w-full text-white">Degree</p>
                    
                    <p class="whitespace-nowrap text-white text-sm align-text-bottom">Computer Science <span class="bigonly text-[#a5a4a3]">/ Conc. AI</span></p>
                </li>
                <li class="flex max-w-full border-b-neutral-600 border-b-2 pb-[2vh] pt-[2vh]">
                    <p class="w-full text-white">Minor</p>
                    
                    <p class="whitespace-nowrap text-white text-sm align-text-bottom">Finance <span class="text-[#a5a4a3]">/ Math</span></p>
                </li>
                <li class="flex max-w-full border-b-neutral-600 border-b-2 pb-[2vh] pt-[2vh]">
                    <p class="w-full text-white">Year</p>
                    
                    <p class="whitespace-nowrap text-white text-sm align-text-bottom">Sophmore <span class="text-[#a5a4a3]"></span></p>
                </li>
                <li class="flex max-w-full border-b-neutral-600 border-b-2 pb-[2vh] pt-[2vh]">
                    <p class="w-full text-white">Graduation</p>
                    
                    <p class="whitespace-nowrap text-white text-sm align-text-bottom">2027 <span class="text-[#a5a4a3]"></span></p>
                </li>
                <li class="flex max-w-full border-b-neutral-600 border-b-2 pb-[2vh] pt-[2vh]">
                    <p class="w-full text-white">GPA</p>
                    
                    <p class="whitespace-nowrap text-white text-sm align-text-bottom">3.75 <span class="text-[#a5a4a3]"></span></p>
                </li>
                <li class="flex max-w-full border-b-neutral-600 border-b-2 pb-[2vh] pt-[2vh]">
                    <p class="w-full text-white">Courses Taken</p>
                    
                    <p class="whitespace-nowrap text-white text-sm align-text-bottom">14.5 <span class="text-[#a5a4a3]"></span></p>
                </li>
                <li class="flex max-w-full border-b-neutral-600 border-b-2 pb-[2vh] pt-[2vh]">
                    <p class="w-full text-white">Research Labs</p>
                    
                    <p class="whitespace-nowrap text-white text-sm align-text-bottom">2 <span class="text-[#a5a4a3]"></span></p>
                </li>
            </ul>
        </div>
      </div>
    
      <div class="education bigonly text-xs" id="dchap">
        <div class="temp">
          <div class="dinfo">
            <button class="cards lefter" on:click={rotateRight} on:keydown={(event) => handleKeydown(event, 'right')}>
              <div class="uniem"></div>
              <h2>Hobbies</h2>
              <div class="rese mid">
                <div class="lab">
                  <p><span>Sports</span></p>
                  <p>Thoroughly keep up with the NBA and Formula 1. In the NBA I support the Warriors (Curry is my favorite player) and OKC Thunder (where I'm from). King Lewis for F1</p>
                </div>
                <div class="lab">
                  <p><span>Film</span></p>
                  <p>Love analyzing film making techniques and especially story-telling. TDK is my favorite movie. Hot Take: Slow movies like Blade Runner 2049 are overrated (Dune gets a pass for now).</p>
                </div>
                <div class="lab">
                  <p><span>Coding</span></p>
                  <p>Yep, I genuinely like programming. Always down to do a project</p>
                </div>
              </div>
            </button>
      
            <button class="cards center" on:click={rotateRight} on:keydown={(event) => handleKeydown(event, 'right')}>
              <div class="uniem mid"></div>
              <h2>Research</h2>
              <div class="rese">
                <div class="lab">
                  <p><span>Dark Matter Particle Research AI</span></p>
                  <p>
                    Learning unsupervised AI integration to train models to accurately
                    predict decaying particle’s paths and movements.
                    <br /><br />
                    Coding in C/C++ to convert code into physical microchips while
                    maintaining efficiency in runtime and costs for the optimal
                    production.
                  </p>
                </div>
                <div class="lab">
                  <p><span>Quantitative Improvement of CT Imaging for Lung Diseases</span></p>
                  <p>
                    Utilizing software programs such as FEBio to model realistic lung
                    designs in order to detect virus movements given different
                    pressure loads.
                    <br /><br />
                    C++ program written in order to debug and create the tools
                    necessary for testing.
                  </p>
                </div>
              </div>
            </button>
      
            <button class="cards righter" on:click={rotateRight} on:keydown={(event) => handleKeydown(event, 'right')}>
              <div class="uniem"></div>
              <h2>Work Experience</h2>
              <div class="rese mid">
                <div class="lab">
                  <p><span>NUSTIAN USA</span></p>
                  <p>
                    Non-profit that helps Pakistani students who went to NUST University settle in and find oppurtunities. Also assists the school and upcoming students directly.
                    <br /><br />
                    Assisted with strategy for the Pakistani flood reliefs during Covid and web development on WordPress. 
                  </p>
                </div>
                <div class="lab">
                  <p><span>Duke ASA DataFest Strategist</span></p>
                  <p>
                    Utilized Photoshop and Illustrator to create effective flyers as well as handling email marketing.
                    <br /><br />
                    Updated the website and minor improvements on some features.
                  </p>
                </div>
              </div>
            </button>
          </div>
          <div class="arrows">
            <div 
              class="fa-solid fa-arrow-left" 
              style="color: #ffffff;" 
              on:click={rotateLeft} 
              on:keydown={(event) => handleKeydown(event, 'left')}
              tabindex="0"
              role="button"
              aria-label="Rotate left"
            ></div>
            <div 
              class="fa-solid fa-arrow-right" 
              style="color: #ffffff;" 
              on:click={rotateRight} 
              on:keydown={(event) => handleKeydown(event, 'right')}
              tabindex="0"
              role="button"
              aria-label="Rotate right"
            ></div>
          </div>
        </div>
      </div>
    </div>

  <div id="about" class="w-[100vw] h-[100vh] text-white flex flex-col items-center text-5xl">
    <h1 class="mt-[5vh]">contact me</h1>
    <div class="mt-[10vh]">
      <form action="https://api.web3forms.com/submit" method="POST" class="text-[#a3a3a3] text-2xl flex flex-col items-start min-w-[300px] w-[20vw]">
        <input type="hidden" name="access_key" value="25fbf50d-b461-4093-afee-de809d5bd079">
        <label class="mt-[3vh] mb-[2vh]" for="fname"><h3>First & Last Name</h3></label>
        <input class="no-focus-border text-sm w-full bg-inherit border-b-2 border-b-neutral-600 pb-[1vh]" type="text" id="fname" name="fullname" placeholder="Your name.." required>
        <label class="mt-[3vh] mb-[2vh]" for="email"><h3>Email</h3></label>
        <input class="no-focus-border text-sm w-full bg-inherit border-b-2 border-b-neutral-600 pb-[1vh]" type="text" id="email" name="email_address" placeholder="Your email.." required>
        <label class="mt-[3vh] mb-[2vh]" for="message"><h3>Your Message</h3></label>
        <textarea class="no-focus-bord text-sm w-full bg-inherit border-2 border-neutral-600 rounded-lg h-[15vh] min-h-[15vh] max-h-[25vh] p-[1vh]" id="message" name="message" placeholder="Your Message.." required></textarea>
        <input class="hover:bg-white hover:text-black text-[#a3a3a3] transition cursor-fancy mt-[3vh] py-[1vh] px-[5vh] border-2 border-neutral-600 rounded-md" type="submit" value="Submit">
      </form>
    </div>
  </div>

  </div>
  <div
    class="w-full h-[5vh] bg-[#333333] flex justify-center items-center sticky bottom-0"
  >
    <div
      class="text-[1vh] md:text-sm w-full max-w-[40vw] min-w-[350px] grid grid-cols-4 items-center absolute bottom-0"
    >
      <a href="https://www.linkedin.com/in/ahmad-choudhary" class="text-white mb-[1.5vh] justify-self-center">Linkedin</a>
      <a href="https://www.instagram.com/ahmad.s.choudhary/" class="text-white mb-[1.5vh] justify-self-center">Instagram</a>
      <a href= "mailto: asc113@duke.edu" class="text-white mb-[1.5vh] justify-self-center">Email</a>
      <a href="https://github.com/2Ahmad5" class="text-white mb-[1.5vh] justify-self-center">Github</a>
    </div>
  </div>
</div>

<style lang="css">
  @import "../../app.css";


.temp{
    position: relative;
}

.dinfo {
    position: relative;
    left: 30%;
    margin: 0px;
    width: 75vw; /* Adjust as needed, or set a specific width */
    perspective: 1000px;
    display: grid;
    margin-top: 10vh;
    height: 50vh;
    justify-content: center;
    align-items: center;
  }
  
  .cards {
    background: rgba( 0, 83, 155, 0.2);
    border-radius: 16px;
    box-shadow: 3px 4px 30px rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    height: 40vh; 
    width: 25vw; 
    /* margin-left: 15vw; */
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    transition: 1s ease;
    position: absolute;
    /* top: 25%; */
    transform-style: preserve-3d;
    row-gap: 3vh;
  }

  .cards h2{
    align-self: center;
  }

  .cards p{
    margin-left: 2vw;
  }
  
  /* The starting positions for the cards */
  .lefter { 
    left: 0%; 
    transform: translateX(-80%) perspective(1000px) rotate3d(-1, -14, 0, 10deg);
}
  .center { 
    left: 45%;
    transform: translateX(-105%) rotateY(0deg) translateY(-20%);
    height: 60vh;

}
  .righter {
    left: 65%; transform: translateX(-54%) perspective(1000px) rotate3d(0, 1, 0, 10deg); 
}

.uniem{
    height: 60%;
    width: 100%;
    background-image: url("../../media/Duke Emblem.png");
    background-repeat: no-repeat;
    background-size:50%;
    background-position: center;
}

.cards h2{
    font-size: 3rem;
}

.mid{
    display: none !important;
    opacity: 0;
}

.try{
    opacity: 0;
    animation-name: come;
    animation-duration: .8s;
    animation-delay: .8s;
    animation-fill-mode: forwards;
}

@keyframes come {
    0%{
        opacity: 0;
    }

    100%{
        opacity: 1;
    }
}

.rese{
    display: flex;
    flex-direction: column;
    /* grid-template-rows: 1fr 1fr 1fr; */
    grid-gap: 2vh;
}

.rese span{
    opacity: .7;
}


.lab{
    display: grid;
    grid-gap: 2vh;
    max-width: 90%;
}

.arrows{
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    /* height: 15vh; */
    font-size: 3rem;
    grid-gap: 5vw;
}

  .transition-transform {
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  }

  .visible {
    opacity: 1;
    transform: translateX(0);
  }

  .invisible {
    opacity: 0;
    transform: translateX(100px);
  }

@keyframes widen {
  from {
    max-width: 0; /* You can start from 0 or any small value */
  }
  to {
    width: 100%;
    max-width: 70vw; /* Final width */
  }
}

@keyframes semiCircle {
  0% {
    max-height: 0;
    border-radius: 50%; /* Initial border-radius for a circle */
  }
  100% {
    height: 100%;
    max-height: 15vh;
    border-radius: 50% 50% 0 0 / 100% 100% 0 0; /* Final border-radius for a semi-circle */
    top: 80%;
  }
}

.menu-button {
  transition: all 0.5s ease;
  overflow: hidden;
  position: fixed;
  top: 88%;
  left: 50%;
  text-align: center;
  
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-button h2 {
  transition: opacity 0s ease;
}

.menu-button .choices {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}

.menu-button.expanded {
  animation: widen .4s forwards, semiCircle .3s .3s forwards;
}

.menu-button.expanded h2 {
  opacity: 0;
}

.menu-button.expanded .choices.visible {
  display: flex;
}

.choice {
  background: black;
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation: fadeIn 0.5s forwards;
  font-family: "Roboto", sans-serif;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}




  .mens{
    transform: translateX(-50%);
    display: none;
  }
  .no-focus-border:focus {
    outline: none;
    border-bottom-color: #525252;
  }
  .no-focus-bord:focus {
    outline: none;
    border-color: #525252;
  }

  input, textarea{
    font-family: "Exo 2", sans-serif;
    color: white;
  }

  #about{
    background: radial-gradient(
  circle at 50% 100%,
  rgb(50, 50, 50) 0%,
  rgb(0, 0, 0) 80% 
);

  }

  .okla{
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('../../media/greyOK.png');
    background-attachment: fixed;
    background-size: cover;
  }

  .wraps {
  color: #fff;
  display: grid;
  place-items: center;
  perspective: 500px;
  perspective-origin: 50% calc(50% - 150px);
}

.scene {
  position: relative;
  transform-style: preserve-3d;
}

.banner {
  display: flex;
  transform-style: preserve-3d;
  animation: rotate 24s infinite linear;
}

@keyframes rotate {
  to { transform: rotateY(-360deg); }
}

.panel {
  position: absolute;
  transform: translate(-50%, -50%) rotateY(var(--angle)) translateZ(190px); 
  width: 50px;
  height: 160px;
  overflow: hidden;
}

.panel::before {
  position: absolute;
  left: var(--left);
  font-family: 'Lora', serif; 
  -webkit-text-stroke: 2px white;
  content: "Duke University";
  font-size: 110px;
  width: max-content;
  color: #676767;
}

/* Manually resolving the SCSS loop */
.panel:nth-child(1) {
  --left: 0px;
  --hue: 0;
  --angle: 0deg;
}

.panel:nth-child(2) {
  --left: -50px;
  --hue: 15;
  --angle: 15deg;
}

.panel:nth-child(3) {
  --left: -100px;
  --hue: 30;
  --angle: 30deg;
}

.panel:nth-child(4) {
  --left: -150px;
  --hue: 45;
  --angle: 45deg;
}

.panel:nth-child(5) {
  --left: -200px;
  --hue: 60;
  --angle: 60deg;
}

.panel:nth-child(6) {
  --left: -250px;
  --hue: 75;
  --angle: 75deg;
}

.panel:nth-child(7) {
  --left: -300px;
  --hue: 90;
  --angle: 90deg;
}

.panel:nth-child(8) {
  --left: -350px;
  --hue: 105;
  --angle: 105deg;
}

.panel:nth-child(9) {
  --left: -400px;
  --hue: 120;
  --angle: 120deg;
}

.panel:nth-child(10) {
  --left: -450px;
  --hue: 135;
  --angle: 135deg;
}

.panel:nth-child(11) {
  --left: -500px;
  --hue: 150;
  --angle: 150deg;
}

.panel:nth-child(12) {
  --left: -550px;
  --hue: 165;
  --angle: 165deg;
}

.panel:nth-child(13) {
  --left: -600px;
  --hue: 180;
  --angle: 180deg;
}

.panel:nth-child(14) {
  --left: -650px;
  --hue: 195;
  --angle: 195deg;
}

.panel:nth-child(15) {
  --left: -700px;
  --hue: 210;
  --angle: 210deg;
}

.panel:nth-child(16) {
  --left: -750px;
  --hue: 225;
  --angle: 225deg;
}

.panel:nth-child(17) {
  --left: -800px;
  --hue: 240;
  --angle: 240deg;
}

.panel:nth-child(18) {
  --left: -850px;
  --hue: 255;
  --angle: 255deg;
}

.panel:nth-child(19) {
  --left: -900px;
  --hue: 270;
  --angle: 270deg;
}

.panel:nth-child(20) {
  --left: -950px;
  --hue: 285;
  --angle: 285deg;
}

.panel:nth-child(21) {
  --left: -1000px;
  --hue: 300;
  --angle: 300deg;
}

.panel:nth-child(22) {
  --left: -1050px;
  --hue: 315;
  --angle: 315deg;
}

.panel:nth-child(23) {
  --left: -1100px;
  --hue: 330;
  --angle: 330deg;
}

.panel:nth-child(24) {
  --left: -1150px;
  --hue: 345;
  --angle: 345deg;
}

.screen {
  position: absolute;
  background: url("../../media/Duke Emblem.png") center;
  background-size: cover;
  width: 60vh;
  height: 60vh;
  /* background-image: linear-gradient(90deg, #000a, #0004, #000a); */
  transform: translate(-50%, -40%);
}

@media only screen and (max-width: 1200px) {
    .bigonly {
      display: none;
    }
    .smallonly {
      display: initial;
    }
    .arranged {
      grid-template-rows: 2;
      grid-template-columns: none;
    }
    .convert-skills {
      width: 90vw;
    }
    .convert-top {
      margin-top: 5vh;
    }
}

@media only screen and (max-width: 430px) {
  .convert {
    width: 90vw;
    height: 60vh;
  }
}


  .glass {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.4px);
    -webkit-backdrop-filter: blur(6.4px);
    border: 1px solid rgba(255, 255, 255, 0.4);
  }

  .emblem {
    background:
      url("../../media/Duke Emblem.png") no-repeat center,
      radial-gradient(
        circle at 24.1% 68.8%,
        rgb(50, 50, 50) 0%,
        rgb(0, 0, 0) 99.4%
      );
    background-size:
      80vh 80vh,
      cover;
    background-blend-mode: normal;
    background-color: rgba(0, 0, 0, 1), rgba(0, 0, 0, 0);
  }

  .resume-bkg {
    background: url("../../media/AhmadResume.png");
    background-position: center;
    background-size: cover;
  }

  .resume-contain {
    background: white;
    transition: all 0.3s ease-out;
  }

  /* .resume-contain:hover {
    transform: perspective(1000px) rotate3d(1, 0, 0, 45deg);
  } */

  .yes-click {
    color: white;
   
    /* border-left: white; */
  }

  .no-click {
    color: #a5a4a3;
  }

  .card-back {
    background-color: rgba(0, 0, 0, 0.3) !important;
    border-color: rgba(255, 255, 255, 0.1);
  }
  .card-back:hover {
    box-shadow: 4px 6px 10px rgba(0, 0, 0, 0.4);
  }
  html,
  body {
    /* height: 100%; */
    margin-left: 0;
  }

  @keyframes rots{
    from{
      opacity:0;
      transform: perspective(1000px) rotate3d(0, 0, 0, 0deg);
    }
    to{
      opacity: 1;
      transform: perspective(1000px) rotate3d(0, 1, .25, 10deg);
    }
  }

  @keyframes lrots{
    from{
      opacity:0;
      transform: perspective(1000px) rotate3d(0, 0, 0, 0deg);
    }
    to{
      opacity: 1;
      transform: perspective(1000px) rotate3d(0, -1, -.25, 10deg);
    }
  }

  @keyframes rotsy{
    from{
      opacity:0;
      transform: perspective(1000px) rotate3d(0, 0, 0, 0deg);
    }
    to{
      opacity: 1;
      transform: perspective(1000px) rotate3d(0, -14, 0, 10deg);
    }
  }

  @keyframes trotsy{
    from{
      opacity:0;
      transform: perspective(1000px) rotate3d(0, 0, 0, 0deg);
    }
    to{
      opacity: 1;
      transform: perspective(1000px) rotate3d(0, 14, 0, 10deg);
    }
  }


  .rot {
    animation-name: rots;
    animation-duration: 1.3s;
    animation-fill-mode: forwards;
  }
  .rot:hover {
    transform: perspective(1000px) rotate3d(-0.4, 1, .25, 10deg) translateY(-10px) !important;
  }
  .roty {
    animation-name: rotsy;
    animation-duration: 1.3s;
    animation-fill-mode: forwards;
 
  }
  .roty:hover {
    transform:perspective(1000px) rotate3d(-0.4, -14, 0, 10deg)
      translateY(-10px) !important;
  }

  .lroty {
    animation-name: lrots;
    animation-duration: 1.3s;
    animation-fill-mode: forwards;
  }

  .troty {
    animation-name: trotsy;
    animation-duration: 1.3s;
    animation-fill-mode: forwards;

  }

  :global(body) {
    cursor: url("../../media/white_dot.png"), pointer;
    overflow-x: hidden;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    margin-top: 0px;
    padding-top: 0px;
    align-items: center;
    /* background: radial-gradient(
      circle at 24.1% 68.8%,
      rgb(50, 50, 50) 0%,
      rgb(0, 0, 0) 99.4%
    ); */
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('../../media/black bkg.jpg');
    background-size: auto auto;
    background-attachment: fixed;
  }

  .retro {
    background-image: url("../../media/Retrograde Home Page.PNG");
    background-position: center;
    background-size: cover;
  }

  .nuwrld {
    background-image: url("../../media/Stock Website.png");
    background-position: center;
    background-size: cover;
  }

  button {
    font-size: 140%;
    color: #a5a4a3;
    transition: color.2s ease-in-out;
  }

  button:hover {
    color: white;
  }

  h1 {
    /* background: linear-gradient(90deg, #333 0%, #fff 40%, #333 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent; */
    color: white;
    font-size: 6vh !important;
    padding-bottom: .5vh;
    letter-spacing: -3px;
  }

  p {
    color: #a5a4a3;
  }
</style>
