<div class="flex cursor-fancy h-full justify-center items-center w-full">
    <div class="grid justify-items-center justify-self-center w-full text-white items-end pb-[5px] mb-[5px] max-w-[840px] grid-cols-4 border-b-white border-2 border-transparent">
        <h2>Projects</h2>
        <h2>Resume</h2>
        <h2>Education</h2>
        <h2>Hobbies</h2>
    </div>
</div>


<style lang="css">
    @import '../../app.css';

    html, body {
        height: 100%;
        margin: 0;
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;
        background: radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);
        background-size: cover;
        min-height: 100vh;
    }

    .backs{
        background-image: url('../../media/Retrograde Home Page.PNG');
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

