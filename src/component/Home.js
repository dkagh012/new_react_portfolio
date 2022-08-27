import './Home.css';

function Home(){
    return (
       
<body>
<div class="home">
<title>Hello, 2022</title>
    <div class ="center">
        <div class="cow">
            <div class="horn"></div>
            <div class="eyebrow"></div>   
            <div class="eyes"></div>
            <div class="nose"></div>
            <div class= " mouth"></div>
        </div>
            <h1 class="title">Hello<br/>
            <strong>2022</strong>
            </h1>
            <div class="icon">
        <a class= "facebook" href="https://www.facebook.com/profile.php?id=100004531120609">icons</a>
        <a class= "git" href="https://github.com/dkagh012">icons</a>
        <a class= "instargram" href="https://www.instagram.com/jungtae0421/">icons</a>  
      </div>     
    </div>

    <div class="menu" >
      <nav class="clearfix">
        <ul class="clearfix">
          <li class = "menu_fix"><a class ="menu_li"href="http://localhost:3000/">Home</a></li>  
          <li class = "menu_fix"><a class ="menu_li" href="http://localhost:3000/Wrapper">About</a></li>
          <li class = "menu_fix"><a class ="menu_li" href="http://localhost:3000/Skils">Skils</a></li>
          <li class = "menu_fix"><a class ="menu_li" href="http://www._____.com/Travel">Travel</a></li>
          <li class = "menu_fix"><a class ="menu_li" href="http://www._____.com/Contact">Contact</a></li>
      </ul>
    </nav>
      <div class = "jung">
        <div class="name">  
    
     <a>I'm a </a> 
     <div class="name-job">
        <ul class="name-job-list">
          <li> Designer</li>
          <li> developer</li>
          <li> Tutor</li>
          <li> Creator</li>
          <li> Designer</li>
      </ul>
    </div>


     <h1 class="name-title">Jung Tae</h1>
        </div>   
      </div>
    </div>
    </div>
</body>

    );
}

export default Home;