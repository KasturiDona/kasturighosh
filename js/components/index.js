var NavHeader = React.createClass({
	render: function() {
		return (
			<header>
				<nav>
          <i className="fa fa-bars media-responsive"></i>
					<ul className="headerList">
						<li className="nav-li"><a href="#/">Home</a></li>
						<li className="nav-li"><a href="#/about">About</a></li>
						<li className="nav-li"><a href="#/projects">Projects</a></li>
						<li className="nav-li"><a href="#/blog">Blog</a></li>
						<li className="nav-li"><a href="#/resume">Resume</a></li>
					</ul>
				</nav>
			</header>
		);
	}
});

var Home = React.createClass({
	render: function() {
		return (
			<div className="home">
				<div className="home-info">
					<h1><span className="place"> Hi, I&#39;m </span><span className="designation">Kasturi</span></h1>
					<h3><span className="place">A Sydney based </span><span className="designation">Web Developer</span><span className="place"></span></h3>
					<hr></hr>
					<div className="skillblock animated swing">
						<p>JavaScript</p>
						<p>jQuery</p>
						<p>React</p>
						<p>HTML 5</p>
						<p>CSS 3</p>
						<p>Bootstrap</p>
						<p>Data Visualisation</p>
						<p>Ruby</p>
						<p>Responsive</p>
						<p>Agile</p>
						<p>Team Player</p>
					</div>
					<hr></hr>
				</div>
				<div>
				<a href="https://github.com/KasturiDona" className="fa fa-github social-icons" aria-hidden="true"></a>
				<a href="https://twitter.com/DonaKasturi" className="fa fa-twitter social-icons" aria-hidden="true"></a>
				<a href="https://au.linkedin.com/in/kasturi-ghosh-das-870726b7" className="fa fa-linkedin social-icons" aria-hidden="true"></a>
				<a href="mailto:kasturi.dona@gmail.com" className="fa fa-envelope-o social-icons" aria-hidden="true"></a>
				<a className="social-icons" href="#/resume">CV</a>
				</div>
			</div>
		);
	}
});

var Projects = React.createClass({
  render: function() {
    return (
      <div className="container projects">
        <div className="row">
          <div className="col-md-6 project greatreads">
            <h3 className="visible-content">GREAT READS</h3>
            <span className="project-content">GREAT READS<hr></hr>
            A website which allows users to create their Greatreads account, rate and review books as well as create reading lists of books added by the admin.<hr></hr>
          GoodReads API | Ruby on Rails | HTML/CSS | Javascript | jQuery | Bootstrap | Cloudinary<hr></hr>
        <a href="https://github.com/KasturiDona/GreatReads" className="project-link code">View Code </a><a href="https://greatreads.herokuapp.com/" className="project-link website">View Website</a></span>
          </div>
          <div className="col-md-6 project abp">
            <h3 className="visible-content">ANYTHING BUT PIZZA</h3>
            <span className="project-content">ANYTHING BUT PIZZA<hr></hr>
            A website which allows users to sell and buy food from various localities using shopping carts, payment gateway and google maps.<hr></hr>
          Geocoder | Ruby on Rails | HTML/CSS | Stripe | SVG | JAvascript | jQuery | Bootstrap | Cloudinary<hr></hr>
        <a href="https://github.com/KasturiDona/AnythingButPizza" className="project-link code">View Code </a><a href="https://afternoon-basin-3766.herokuapp.com/" className="project-link website">View Website</a></span>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 project tictactoe">
            <h3 className="visible-content">TIC-TAC-TOE</h3>
            <span className="project-content">TIC-TAC-TOE<hr></hr>
            My very first game of tic-tac-toe using vanilla javascript. There are opitions to play both 1 and 2 player games. The single player game uses the concept of AI.<hr></hr>
          HTML/CSS | Javascript <hr></hr>
        <a href="https://github.com/KasturiDona/tic-tac-toe" className="project-link code">View Code </a><a href="http://kasturidona.github.io/tic-tac-toe/html/gamepage.html" className="project-link website">Play Game</a></span>
          </div>
          <div className="col-md-6 project greenify">
            <h3 className="visible-content">GREENIFY</h3>
            <span className="project-content">GREENIFY<hr></hr>
             This is my first project using Three.js and Blender. You can plant seeds and watch them grow when it rains. The birds and sun appear when it is not raining.<hr></hr>
          Three.js | Blender | HTML/CSS | Javascript | jQuery<hr></hr>
        <a href="https://github.com/KasturiDona/Greenify" className="project-link code">View Code </a><a href="http://kasturidona.github.io/Greenify/" className="project-link website">View Website</a></span>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 project weather">
            <h3 className="visible-content">WEATHER APP</h3>
            <span className="project-content">WEATHER APP<hr></hr>
            A website that allows users to view the current weather conditions (temperature and humidity) for their current location alongwith the date and time.<hr></hr>
          Openweather API | HTML/CSS | Javascript | jQuery | moment.js<hr></hr>
        <a href="https://github.com/KasturiDona/weather-app" className="project-link code">View Code </a><a href="http://kasturidona.github.io/weather-app/" className="project-link website">View Website</a></span>
          </div>
          <div className="col-md-6 project cloudchecker">
            <h3 className="visible-content">CLOUDCHECKER</h3>
            <span className="project-content">CLOUDCHECKER<hr></hr>
            I built the homepage for the Cloudchecker website while I was an intern.<hr></hr>
          HTML/CSS | Javascript | jQuery | Bootstrap | Photoshop<hr></hr>
        <a href="https://github.com/KasturiDona/Cloudchecker" className="project-link code">View Code </a><a href="http://kasturidona.github.io/Cloudchecker/" className="project-link website">View Website</a></span>
          </div>
        </div>
      </div>
    );
  }
});

var About = React.createClass({
  render: function () {
    var settings = {
      dots: true,
      fade: true
    };
    return (
			<div className="container">
      <Slider {...settings}>
        <div><img src="images/himalayas.jpg" className="slider-image img-responsive" />
        <div className="about">
          <h3>
            I&#39;M FROM INDIA<br /><hr></hr>
          I grew up in the serene hill stations of India, on the foothills of the Himalayas where I attended boarding school at <a href="http://www.sthelenskurseong.com/" className="about-link" target="_blank">St.Helen&#39;s School, Kurseong.</a>
          </h3>
        </div></div>
        <div><img src="images/bangalore.png" className="slider-image img-responsive" />
        <div className="about">
          <h3>
            WHAT I USED TO DO<br /><hr></hr>
          I moved to Bangalore where I graduated with a Bachelors in Electronics & Communication Engineering from <a href="http://www.bit-bangalore.org/" className="about-link" target="_blank">Bangalore Institute of Technology.</a><br /><hr className="no-border"></hr>
        My first job was a Systems Analyst role at <a href="https://www.infosys.com/" className="about-link" target="_blank">Infosys</a> where I worked on the .NET framework.
          </h3>
        </div></div>
        <div><img src="images/iim.jpg" className="slider-image img-responsive" />
        <div className="about">
          <h3>
            AFTER COLLEGE<br /><hr></hr>
          I was selected for the Global Executive Management course from <a href="https://www.iimcal.ac.in/" className="about-link" target="_blank">Indian Institute of Management, Kolkata.</a> (I really like studying).<br /><hr className="no-border"></hr>
        My first role post-MBA was as a Technical Writer at <a href="http://www.aptean.com/" className="about-link" target="_blank">Aptean</a> where I worked very closely with the Development and QA teams.<br /><hr className="no-border"></hr>
            This is where I realized my true calling as a developer!
          </h3>
        </div></div>
        <div><img src="images/sydney.png" className="slider-image img-responsive" />
        <div className="about">
          <h3>
            I MOVED DOWN UNDER<br /><hr></hr>
          2015 was big! I got married and moved to Sydney.<br /><hr className="no-border"></hr>
        I focused on full stack Web Development by enrolling into <a href="https://generalassemb.ly/education/web-development-immersive/sydney" className="about-link" target="_blank">General Assembly&#39;s Week Web Development Immersive Course</a> (it literally changed my life).<br /><hr className="no-border"></hr>
      I enjoyed every moment of the 12 weeks I spent there and I loved learning about the wonderful new technologies being developed on the front and back ends.
          </h3>
        </div></div>
        <div><img src="images/coding2.jpg" className="slider-image img-responsive" />
        <div className="about">
          <h3>
            WEB DEVELOPMENT EXPERIENCE<br /><hr></hr>
            Since graduating from General Assembly&#39;s WDI 10 batch, I have been working on short-term contract roles for different companies.<br /><hr className="no-border"></hr>
            I did a 2 month internship at a startup, worked as a Teaching Assistant for WDI 13, contracted as a Graduate developer at Rozetta Technology and now I&#39;m completing a Junior front-end developer role at a FinTech, working closely with React.
          </h3>
        </div></div>
        <div><img src="images/coding1.jpg" className="slider-image img-responsive" />
        <div className="about">
          <h3>
            WHAT I&#39;D LIKE TO DO NEXT<br /><hr></hr>
            I look forward to more permanent or long-term contract roles as a Junior Developer for an organization that will mentor me and help me transition into a more full-stack role.
          </h3>
        </div></div>
        <div><img src="images/hackathon.jpg" className="slider-image img-responsive" />
        <div className="about">
          <h3>
            I&#39;M SOCIAL<br /><hr></hr>
          You&#39;ll often run into me at<br />
            <a href="http://www.sydjs.com/">
              <img src="images/sydjs.png" className="meetup-logos img-responsive" target="_blank" /> </a>
            <a href="http://ruby.org.au/meetups/syd.html">
              <img src="images/roro.png" className="meetup-logos img-responsive" target="_blank" /> </a>
            <a href="http://www.girlgeeksydney.com/">
              <img src="images/girl-geek.jpg" className="meetup-logos img-responsive" target="_blank" /> </a>
            <a href="http://www.meetup.com/SydCSS/?chapter_analytics_code=UA-43179276-1">
              <img src="images/sydcss.jpeg" className="meetup-logos img-responsive" target="_blank" /> </a>
            <a href="https://www.womenwhocode.com/sydney-australia">
              <img src="images/women-who-code.jpg" className="meetup-logos img-responsive" target="_blank" /></a>
              <br /><hr className="no-border"></hr>
              I have participated in both Freelancer and NAB Hackathons. I organised a Hackathon at Rozetta Technology too!
          </h3>
        </div></div>
      </Slider>
			</div>
    );
  }
});

var Blog = React.createClass({
  render: function() {
    return (
      <div className="blog">
        <h1>HOW TO BECOME A WEB DEVELOPER THROUGH SELF STUDY</h1><hr></hr>
        <p>Becoming a Web Developer is no cake walk. You&#39;ll need to dive into coding and conduct a lot of research. Thankfully, the development community is welcoming and hosts many <a href="http://www.meetup.com/">meetups</a> that talk about technology, web development and help build networks. They are open to all and graduates / juniors can make use of this platform to enter into the development industry.</p>
        <p>I&#39;ve been coding full time since last August with <a href="https://generalassemb.ly/">General Assembly</a>, and apart from the Web Development Immersive Course that I attended, Google has been my best friend.</p>
        <p>I found these websites and tutorials to be extremely handy in multiple occasions -</p>
        <ul>
          <li><a href="http://stackoverflow.com/">Stackoverflow</a></li>
          <li><a href="https://www.hackerrank.com/">Hackerrank</a></li>
          <li><a href="https://www.codeschool.com/">Codeschool</a></li>
          <li><a href="https://www.udemy.com/">Udemy</a></li>
          <li><a href="https://www.udacity.com/">Udacity</a></li>
          <li><a href="https://www.khanacademy.org/">Khan Academy</a></li>
          <li><a href="https://egghead.io/">Egghead</a></li>
          <li><a href="https://teamtreehouse.com/">Treehouse</a></li>
          <li><a href="https://www.lynda.com/">Lynda</a></li>
          <li><a href="http://www.tutorialspoint.com/index.htm">TutorialsPoint</a></li>
          <li><a href="http://www.codecamp.com.au/">Codecamp</a></li>
          <li>Many youtube tutorials</li>
        </ul>
        <p>There are countless more and I recommend you subscribe to online training programs where they teach you the basics of web development. With a lot of time and effort you&#39;ll get there.</p>
        <p>There are two parts to web development: <a href="https://teamtreehouse.com/tracks/front-end-web-development">Front-End</a> and <a href="https://www.techopedia.com/definition/29568/back-end-developer">Back-End</a>. <a href="https://www.bloc.io/web-development-bootcamp">Full-Stack web development</a> is the combination of the two, and where I hope to eventually end up.</p><hr></hr>
        <h2>FRONT-END WEB DEVELOPMENT</h2><hr></hr>
        <p>Its all about the GUI ( Graphic User Interface ). The front-end deals with the flow of information on your website or app, form submissions, making charts and graphs dynamic ( real time data ), connecting various modules of the website or app. Basically everything visual that you see in an app or a website is the work of a front-end developer.</p>
        <p>Making your website responsive i.e compatible with mobile, tablets and desktop is very important too. <a href="http://blog.teamtreehouse.com/beginners-guide-to-responsive-web-design">Here</a> is an article that I found useful.</p>
        <p>Learn these technologies and languages for front-end development -</p>
        <p><span className="bold">JavaScript</span> - It is absolutely necessary to learn this language. The entire web runs on JavaScript. Period. Learn it!</p>
        <ul>
          <li><a href="http://eloquentjavascript.net/Eloquent_JavaScript.pdf">Eloquent JavaScript ( PDF )</a>. You can buy it from amazon too.</li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript MDN</a>.</li>
        </ul>
        <hr></hr>
        <p className="note">Note : MDN is the Mozilla Developer Network. JavaScript was developed by Netscape which then became Mozilla so it has all the original dev tools.</p>
        <hr></hr>
        <p><span className="bold">jQuery</span> - a JavaScript library. You will find everything you need about jQuery <a href="https://jquery.com/">here</a>.</p>
        <p><span className="bold">HTML / CSS</span> - the main design and page layout is done by HTML and CSS. Here are some useful links - </p>
        <ul>
          <li><a href="http://www.wufai.edu.tw/information_technology_center/datasheet/HTML%20and%20CSS%20design%20and%20build%20websites.pdf">HTML and CSS by Jon Duckett</a></li>
          <li><a href="http://www.tutorialspoint.com/css/css_tutorial.pdf">CSS Tutorial</a></li>
          <li><a href="https://css-tricks.com/">CSS Tricks</a></li>
        </ul>
        <hr></hr>
        <p className="note">Note : Check out these CSS Preprocessors - <a href="http://sass-lang.com/">SASS</a> and <a href="http://lesscss.org/">LESS</a>.</p>
        <hr></hr>
        <p><span className="bold">Bootstrap</span> - makes your website and app responsive. <a href="http://getbootstrap.com/">Bootstrap</a> has inbuilt features ( classes, themes, icons ) that gives a ready-made structure to your forms, buttons, images, tables, headers, footers, navbars etc. It is a good library to use. It was designed and developed by Twitter. Linkedin uses Bootstrap too!</p>
        <p><span className="bold">Atleast one JavaScript framework</span> - JavaScript was built in 10 days and there are many aspects to  improve upon. Using a framework makes your life a lot easier. I would suggest learning <a href="https://facebook.github.io/react/">React.js</a>. Others you may wish to explore include <a href="https://angularjs.org/">Angular.js</a> and <a href="http://backbonejs.org/">Backbone.js</a> but React to me, seems to be the most flexible. It was designed by Facebook to be dynamic and load faster. </p>
        <hr></hr>
        <h2>BACK-END WEB DEVELOPMENT</h2>
        <hr></hr>
        <p>This is the server side of things. It consists of a server, an application and a database to store all the data.</p>
        <p>Learn at least one server-side language. Here is a list you could look at -</p>
        <ul>
          <li><a href="http://php.net/manual/en/">PHP</a></li>
          <li>Java ( <a href="https://en.wikipedia.org/wiki/Android_software_development">Android development</a> )</li>
          <li>Objective C ( <a href="https://developer.apple.com/ios/">iOS development</a> )</li>
          <li><a href="https://www.python.org/">Python</a></li>
          <li><a href="https://www.microsoft.com/net">.Net ( C# / VB )</a></li>
          <li><a href="https://www.ruby-lang.org/en/">Ruby</a></li>
          <li><a href="https://www.perl.org/">Perl</a></li>
          <li>Node.js - JavaScrip&#39;s server side language. Node.js helps in binding client side to the server side technologies. Check out <a href="https://nodejs.org/en/">Nodejs.org/en/</a> and <a href="http://www.tutorialspoint.com/nodejs/">www.tutorialspoint.com/nodejs/</a>.</li>
        </ul>
        <p><span className="bold">Database tools</span> - If you&#39;re looking to build an app, you need a database to find, save, or change data and return it back to the user via front-end code.</p>
        <ul>
          <li>Databases used by Android or iOS platforms include <a href="http://couchdb.apache.org/">Couchdb</a>.</li>
          <li>The most widely used commercial database is <a href="https://info.microsoft.com/Introducing-SQL-Server-2016-eBook.html">Microsoft SQL Server</a>.</li>
          <li>The most popular open-source database is <a href="http://dev.mysql.com/">MySQL</a>.</li>
          <li>Other notable databases are - Oracle, <a href="https://www.postgresql.org/">PostgreSQL</a> and <a href="https://eggerapps.at/postico/">Postico</a> which is a PostgreSQL for Mac.</li>
        </ul>
        <p>Learn the 4 basic operations under database operations, which is <a href="https://en.wikipedia.org/wiki/Create,_read,_update_and_delete">C.R.U.D</a> (Create - Read - Update - Delete ).</p>
        <p>Read about Web Services and APIs ( Application Programming Interfaces ) - both REST ( REpresentational State Transfer ) and SOAP ( Simple Object Access Protocol ). Here are a few articles I found to be useful -</p>
        <ul>
          <li><a href="https://developer.spotify.com/web-api/tutorial/">Web API Tutorial</a></li>
          <li><a href="http://www.restapitutorial.com/">REST API Tutorial</a></li>
          <li><a href="https://developer.atlassian.com/jiradev/jira-apis/jira-rest-apis/jira-rest-api-tutorials">REST API Tutorial by Atlassian</a></li>
          <li><a href="http://www.tutorialspoint.com/soap/">SOAP API Tutorial</a></li>
          <li><a href="http://spf13.com/post/soap-vs-rest">Difference between SOAP and REST Web Services</a></li>
        </ul>
        <p>With some knowledge of the front-end and back-end, you will be able to develop websites and apps.</p>
        <p>But better still, full-stack development does both for you.</p>
        <hr></hr>
        <h2>FULL-STACK WEB DEVELOPMENT</h2>
        <hr></hr>
        <p>I learnt full stack web development using <a href="http://rubyonrails.org/">Ruby-on-Rails</a>. It gives you an inbuilt boilerplate having sections for both front-end and back-end tools. Its dependencies are:</p>
        <ul>
          <li><a href="http://guides.rubyonrails.org/active_record_basics.html">ActiveRecord</a> is the <a href="http://www.tutorialspoint.com/struts_2/basic_mvc_architecture.htm">MVC</a> used. It deals with how the data is processed, controlled and made available to the various pages of a website. Active record comes inbuilt with Rails.</li>
          <li>The default database is <a href="https://www.postgresql.org/">PostgreSQL</a>. It is open source and you will have to download and install it on your machine.</li>
          <li>You will need to host your website on a server. This can be done on <a href="https://www.heroku.com/">heroku</a>. It is again free and open source. You will need to create your account with heroku.</li>
        </ul>
        <p>The default language is Ruby, but you can write your code using JavaScript or jQuery. You will not need to download anything. If you want to use a JavaScript framework or another dependency ( say Cloudinary - that helps you upload photos, files ) then you will need to go to the gemfile and add the dependency there. The tutorial explains everything in detail.</p>
        <hr></hr>
        <h2>WEB DEVELOPER TOOLS</h2>
        <hr></hr>
        <p>This section talks about the tools you will be using to code.</p>
        <p><a href="https://www.terminal.com/">Terminal</a> - you will need to use a terminal to code. If you own a Mac, the Terminal is included in the OS. I use <a href="https://www.iterm2.com/">iTerm2</a>. This tool is used for writing shell scripts in <a href="http://www.ee.surrey.ac.uk/Teaching/Unix/">UNIX</a>.</p>
        <hr></hr>
        <p className="note">Note : If you are using a windows PC, you may have to use <a href="https://msdn.microsoft.com/en-us/powershell/mt173057.aspx">PowerShell</a>.</p>
        <hr></hr>
        <p><a href="https://github.com/">Github</a> - your code repository. Github is free and open source and you can create your account here. It is in the web and you can access it anytime from anywhere. You can also look into other developers code, and make contributions to open source projects. Learn the basic commands such as git add, git commit, git push, git pull, git stash, git merge, etc. <a href="https://guides.github.com/activities/hello-world/">Here</a> is a good starting point to read more about github.</p>
        <p>Text Editor - to write your code you will need to install a text editor. Usually developers use either <a href="https://www.sublimetext.com/3">Sublime</a> or <a href="https://atom.io/">Atom</a>. I currently use Atom, although I worked on Sublime for a long time. Both are very similar and equally good so you can choose either of them.</p>
        <p><a href="http://webpack.github.io/docs/">Webpack</a> and <a href="https://www.npmjs.com/">NPM (Node Package Manager)</a> - Webpack is a module builder and npm helps install all your webpack config modules.</p>
        <p>Here are some important links and tutorials which may be good to look at.</p>
        <ul>
          <li><a href="http://stackshare.io/pepperoni">A framework to build apps faster, powered by React Native</a></li>
          <li><a href="https://www.codementor.io/learn-programming/how-to-build-app-from-scratch-beginner-programmer">Android and iOS development</a></li>
          <li><a href="http://www.infoworld.com/article/2887754/mobile-technology/how-to-choose-a-database-for-your-mobile-apps.html">How to choose a database for your mobile apps</a></li>
          <li><a href="http://blog.udacity.com/2014/12/front-end-vs-back-end-vs-full-stack-web-developers.html">Front-end vs back-end vs full-stack web developers</a></li>
          <li><a href="https://www.quora.com/How-do-you-build-the-backend-server-for-mobile-apps">How do you build the backend server for mobile apps</a></li>
          <li><a href="https://www.quora.com/How-do-I-learn-Back-End-Development-from-scratch-I-am-not-from-a-computer-science-background-but-I-want-to-pursue-my-career-as-a-developer-Please-guide-me-What-should-I-do">How-do-I-learn-Back-End-Development-from-scratch-I-am-not-from-a-computer-science-background-but-I-want-to-pursue-my-career-as-a-developer-Please-guide-me-What-should-I-do</a></li>
        </ul>
      </div>
    );
  }
});

var Resume = React.createClass({
  render: function() {
    return (
			<div className="resume row">
				<div className="col-xs-4 sidebar">
					<ul className="resume-contact">
						<li><a href="https://github.com/KasturiDona" className="fa fa-github" aria-hidden="true"></a></li>
						<li><a href="https://twitter.com/DonaKasturi" className="fa fa-twitter" aria-hidden="true"></a></li>
						<li><a href="https://au.linkedin.com/in/kasturi-ghosh-das-870726b7" className="fa fa-linkedin" aria-hidden="true"></a></li>
						<li><a href="mailto:kasturi.dona@gmail.com" className="fa fa-envelope-o" aria-hidden="true"></a></li>
					</ul>
					<h2>SKILLS</h2>
					<hr></hr>
					<h3>Programming</h3>
					<ul className="skills">
						<li>JavaScript | jQuery</li>
						<li>Ruby | Ruby-on-Rails</li>
						<li>HTML/CSS | Bootstrap</li>
						<li>React | Angular</li>
						<li>Highcharts | Underscore</li>
						<li>D3.js | Three.js</li>
						<li>AJAX | C# | SQL | .NET</li>
						<li>RESTful APIs</li>
						<li>Github | SVN</li>
						<li>Heroku | AWS</li>
					</ul>
					<hr></hr>
					<h3>Others</h3>
					<ul className="skills">
						<li>Confluence | JIRA</li>
						<li>MadCap Flare 9.12 </li>
						<li>Adobe FrameMaker 7.0</li>
						<li>TFS | Managerial skills</li>
						<li>Enterprise Resource Planning</li>
						<li>Lean | Agile | Kanban | Scrum</li>
					</ul>
					<hr></hr>
					<h2>EDUCATION</h2>
					<h3>Web Development Immersive</h3>
					<p className="edu">General Assembly<br />
					Sydney, Australia | 2015</p>
					<hr></hr>
					<h3>Global Executive M.B.A</h3>
					<p className="edu">Indian Institute of Management<br />
					Kolkata, India | 2012 - 2013</p>
					<hr></hr>
					<h3>Electronics and Communication Engineering (B.E)</h3>
					<p className="edu">Bangalore Institute of Technology<br />
					Bangalore, India | 2005 - 2009</p>
					<hr></hr>
					<h3>ACHIEVEMENTS</h3>
					<p className="edu">School valedictorian</p>
					<p className="edu">Winner of the IEEE Tech Quest</p>
					<p className="edu">President of the Striver&#39;s club</p>
					<hr></hr>
					<h3>INTERESTS</h3>
					<p className="edu">Boardgames</p>
					<p className="edu">Hackathons</p>
					<p className="edu">Reading</p>
					<p className="edu">Sketching</p>
				</div>
				<div className="col-xs-8">
					<h1>KASTURI GHOSH DAS</h1>
					<h3>Web Developer</h3>
					<hr></hr>
					<p className="role">With a background in Engineering and Management, I love to code and de- sign. I am passionate about learning and developing new technologies. I am committed to meeting client milestones on schedule and under budget. I look for projects that challenge me.</p>
					<h2>Work Experience</h2>
					<hr></hr>
					<div className="row">
						<div className="col-xs-6">
							<h3>REPUBLIC CAPITAL MANAGEMENT</h3>
						</div>
						<div className="col-xs-3 time">
							<p>May 2016 - Present</p>
						</div>
					</div>
					<p className="title">Junior Front End Engineer | Sydney</p>
					<p className="role">As a front-end engineer I am working on various React based projects.</p>
					<hr></hr>
					<div className="row">
						<div className="col-xs-6">
							<h3>ROZETTA TECHNOLOGY - SIRCA</h3>
						</div>
						<div className="col-xs-3 time">
							<p>Mar 2016 - May 2016</p>
						</div>
					</div>
					<p className="title">Junior Web Developer | Sydney</p>
					<p className="role">As a front-end web developer, I have designed a prototype Stock Market Visualisation tool for the ASX using D3.js, Hicharts.js and AWS.</p>
					<hr></hr>
						<div className="row">
							<div className="col-xs-6">
								<h3>GENERAL ASSEMBLY - WEB DEVELOPMENT</h3>
							</div>
							<div className="col-xs-3 time">
								<p>Feb 2016 - Mar 2016</p>
							</div>
						</div>
					<p className="title">Teaching Assistant | Sydney</p>
					<p className="role">As a Teaching Assistant, I helped lecturers co-ordinate the Web Development Immersive class with a focus on full-stack web development technologies: HTML/CSS, Javascript, jQuery, Ruby, Ruby-on-Rails and Github.</p>
					<hr></hr>
						<div className="row">
							<div className="col-xs-6">
								<h3>CLOUD CHECKER</h3>
							</div>
							<div className="col-xs-3 time">
								<p>Jan 2016 - Feb 2016</p>
							</div>
						</div>
					<p className="title">Web Developer Intern | Sydney</p>
					<p className="role">As an intern I designed and built the Cloudchecker and Cloudster websites using Javascript, jQuery, HTML/CSS, Bootstrap and Photoshop.</p>
					<hr></hr>
						<div className="row">
							<div className="col-xs-6">
								<h3>APTEAN</h3>
							</div>
							<div className="col-xs-3 time">
								<p>Jan 2014 - Feb 2015</p>
							</div>
						</div>
					<p className="title">Associate Technical Writer | Bangalore</p>
					<p className="role">As a Technical writer, I have written, reviewed and published documents for the ERP, CRM and MES products pertaining to new releases, service packs and bug fixes by collaborating with the Dev Ops and QA teams. These doc- uments are used by the Executive, Marketing and Sales teams.</p>
					<hr></hr>
						<div className="row">
							<div className="col-xs-6">
								<h3>INFOSYS TECHNOLOGIES LIMITED</h3>
							</div>
							<div className="col-xs-3 time">
								<p>Oct 2009 - Nov 2012</p>
							</div>
						</div>
					<p className="title">Senior System Engineer | Pune</p>
					<p className="role">As a Systems Analyst, I was trained on the .Net Framework. I worked for a Microsoft project (MSIT) where I played a key role in stabilising the project from the very root of it which involved flexibility, talent and soft skills.</p>
				</div>
      </div>
    );
  }
});

var Portfolio = React.createClass({
  getInitialState() {
      return {
        route: window.location.hash.substr(1)
      }
  },

  componentDidMount() {
    window.addEventListener("hashchange", () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  },

  render() {
    let Child
    switch (this.state.route) {
      case '/about': Child = About; break;
      case '/projects': Child = Projects; break;
      case '/blog': Child = Blog; break;
      case '/resume': Child = Resume; break;
      default:      Child = Home;
    }

    return (
      <div className="">
        <NavHeader />
        <div className="main-content">
          <Child/>
        </div>
      </div>
    )
  }
});

ReactDOM.render(
  <Portfolio />, document.getElementById('portfolio')
);

var showNavbarMenu = function(){
  $('nav ul').toggleClass('show-navbar-menu');
};

$('.media-responsive').on('click', showNavbarMenu);
