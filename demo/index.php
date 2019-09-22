<?php session_start(); ?>
<!DOCTYPE html>
<!--[if lt IE 8 ]><html class="no-js ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="no-js ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 8)|!(IE)]><!-->
<html class="no-js" lang="en">
<!--<![endif]-->

<head>
    <meta charset="utf-8">
    <title>Tom Daniel - Portfolio</title>
    <meta name="description" content="Portfolio of Tom Daniel">
    <meta name="author" content="Tom Daniel">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="stylesheet" href="css/default.css">
    <link rel="stylesheet" href="css/layout.css">
    <link rel="stylesheet" href="css/media-queries.css">
    <link rel="stylesheet" href="css/magnific-popup.css">
	<link rel="stylesheet" href="css/bootstrap-modal.css">
    <script src="js/modernizr.js"></script>
    <script src="js/message.js"></script>
    <link rel="shortcut icon" href="favicon.png">
</head>

<body>
    <header id="home">
        <nav id="nav-wrap">
            <a class="mobile-btn" title="Toggle navigation">Toggle navigation</a>
            <ul id="nav" class="nav">
                <li class="current"><a class="smoothscroll" href="#home"><lang-en>Home</lang-en><lang-nl>Home</lang-nl></a></li>
                <li><a class="smoothscroll" href="#about"><lang-en>About me</lang-en><lang-nl>Over mij</lang-nl></a></li>
                <li><a class="smoothscroll" href="#resume"><lang-en>Resume</lang-en><lang-nl>CV</lang-nl></a></li>
                <li><a class="smoothscroll" href="#portfolio"><lang-en>Work</lang-en><lang-nl>Ervaring</lang-nl></a></li>
                <!--<li><a class="smoothscroll" href="#testimonials"><lang-en>Testimonials</lang-en><lang-nl>Testimonials</lang-nl></a></li>-->
                <li><a class="smoothscroll" href="#contact"><lang-en>Contact</lang-en><lang-nl>Contact</lang-nl></a></li>
            </ul>
            <ul style="position: absolute;right: 15px;top: 15px;">
                <li style="display: inline-block;cursor:pointer;"><a id="langNL">NL</a></li>
                <li style="display: inline-block;cursor:pointer;"><a id="langEN">EN</a></li>
            </ul>
        </nav>
        <div class="row banner">
            <div class="banner-text">
                <h1 class="responsive-headline">Tom Daniel</h1>
                <h3>
                <lang-en>
                    I'm a motivated IT student, specialized in <span>Full Stack Web Development</span> creating innovative and new applications. Let's <a class="smoothscroll" href="#about">start scrolling</a> and learn more <a class="smoothscroll" href="#about">about me</a>.
                </lang-en>
                <lang-nl>
                    Ik ben een gemotiveerde IT student, gespecialiseerd in <span>Full Stack Web Development</span>, die innovatieve en nieuwe applicaties creëert. <a class="smoothscroll" href="#about">Scroll verder</a> en ontdek meer <a class="smoothscroll" href="#about">over mij</a>.
                </lang-nl>
                </h3>
                <hr />
                <ul class="social">
                    <li><a href="https://www.facebook.com/tom.daniel4" target="_blank"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/tom-daniel-3a40bb118/" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                    <li><a href="https://github.com/tomdaniel-it" target="_blank"><i class="fa fa-github"></i></a></li>
                </ul>
            </div>
        </div>
        <p class="scrolldown">
            <a class="smoothscroll" href="#about"><i class="icon-down-circle"></i></a>
        </p>
    </header>
    <section id="about">
        <div class="row">
            <div class="three columns">
                <img class="profile-pic" src="images/profilepic.jpg" alt="Profile Picture" />
            </div>
            <div class="nine columns main-col">
                <h2><lang-en>About me</lang-en><lang-nl>Over mij</lang-nl></h2>
                <p>
                <lang-en>
                    I'm a motivated IT student. I enjoy creating web applications as a job and as a hobby. Learning new technologies is a daily activity for me.<br/>
                    I plan on studying for a masters degree in Informatics after I finish my bachelors degree in Informatics.<br/>
                    I've mastered JavaScript (& Node), which I use to create and specialise websites and create other applications.<br/>
                </lang-en>
                <lang-nl>
                    Ik ben een gemotiveerde IT student. Web applicaties developen doe ik als job, maar ook als hobby. Nieuwe technologieën ontdekken is een dagelijkse activiteit voor mij.<br/>
                    Na het behalen van een professionele bachelor in Toegepaste Informatica zal ik verder studeren voor een master. <br/>
                    Ik heb een grote kennis van JavaScript (& Node), wat ik gebruik om websites te ontwikkelen en vervolledigen, maar ook voor het maken van andere applicaties.<br/>
                </lang-nl>
                </p>
                <div class="row">
                    <div class="columns contact-details">
                        <h2><lang-en>Contact Details</lang-en><lang-nl>Contact Details</lang-nl></h2>
                        <p class="address">
                            <span>Tom Daniel</span><br>
                            <span>Haasrode 3053<br>
						         Belgi&euml;
                     </span><br>
                            <span>(+32) 474 07 71 02</span><br>
                            <span>tomdaniel-it.github.io</span>
                        </p>
                    </div>
                    <div class="columns download">
                        <p>
                            <a href="CV.pdf" class="button" target="_blank"><i class="fa fa-download"></i><lang-en>Download Resume</lang-en><lang-nl>Download CV</lang-nl></a>
						</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="resume">
        <div class="row education">
            <div class="three columns header-col">
                <h1><span><lang-en>Education</lang-en><lang-nl>Opleiding</lang-nl></span></h1>
            </div>
            <div class="nine columns main-col">
                <div class="row item">
                    <div class="twelve columns">
                        <h3><lang-en>UCLL - Leuven</lang-en><lang-nl>UCLL - Leuven</lang-nl></h3>
                        <p class="info"><lang-en>Informatics</lang-en><lang-nl>Toegepaste informatica</lang-nl> <span>&bull;</span> <em class="date"><lang-en>2016 - 2019</lang-en><lang-nl>2016 - 2019</lang-nl></em></p>
                        <p>
                            <lang-en>
                                I started my studies Informatics in UCLL because I was sure that software development was going to be my future. This school has made me discover many new technologies, but has also given me the opportunity to work on many real life projects.
                            </lang-en>
                            <lang-nl>
                                Ik ben aan mijn studies Toegepaste Informatica in UCLL begonnen omdat ik er zeker van was dat software development mijn toekomst ging zijn. Deze school heeft mij vele nieuwe technologieën laten ontdekken, maar gaf mij ook de mogelijkheid om aan vele praktische projecten te werken.
                            </lang-nl>
                        </p>
                    </div>
                </div>
                <div class="row item">
                    <div class="twelve columns">
                        <h3><lang-en>Miniemeninstituut - Leuven</lang-en><lang-nl>Miniemeninstituut - Leuven</lang-nl></h3>
                        <p class="info"><lang-en>IT Management (Technical)</lang-en><lang-nl>Informaticabeheer (TSO)</lang-nl> <span>&bull;</span> <em class="date"><lang-en>2014 - 2016</lang-en><lang-nl>2014 - 2016</lang-nl></em></p>
                        <p>
                        <lang-en>
                            For my last two years in high school I decided to prepare for college. I studied IT management because it looked very promising and interesting to me.
                        </lang-en>
                        <lang-nl>
                            Mijn laatste jaren van het secundair bracht ik door op het Miniemeninstituut. Ik volgde deze opleiding om mij voor te bereiden op de hogeschool UCLL. Ik studeerde Informaticabeheer omdat het er veelbelovend en zeer interessant uitzag.
                        </lang-nl>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row work">
            <div class="three columns header-col">
                <h1><span><lang-en>Work</lang-en><lang-nl>Ervaring</lang-nl></span></h1>
            </div>
            <div class="nine columns main-col">
                <div class="row item">
                    <div class="twelve columns">
                        <h3>UCLL App</h3>
                        <p class="info"><lang-en>App Developer</lang-en><lang-nl>App Developer</lang-nl> <span>&bull;</span> <em class="date"><lang-en>2018</lang-en><lang-nl>2018</lang-nl></em></p>
                        <p>
                        <lang-en>
                            Together with a developer of the UC Leuven, we (5 software development students) were responsible for the initial development of the mobile application used by the students and staff of the University College to access their schedule, the financial records and the official communication to students and staff. 
                            <br/><br/>
                            It has 10,000+ downloads and is rated 4.8/5 on the Play Store and 4.6/5 on the iOS App Store.
                        </lang-en>
                        <lang-nl>
                            Samen met een developer van UC Leuven, zijn we (5 software development studenten) verantwoordelijk voor de eerste ontwikkeling van de mobiele applicatie die de studenten en medewerkers van UCLL gebruiken om toegang te krijgen tot hun lessenrooster, financiële gegevens en de officiële communicatie naar studenten en medewerkers.
                            <br/><br/>
                            Het heeft 10.000+ downloads en scoort 4.8/5 in de Play Store en 4.6 in de iOS App Store.
                        </lang-nl>
                        <br/>
                        <a href="https://youtu.be/hiHs9xHcHQY" target="_blank">Video Demo</a>
                        </p>
                    </div>
                </div>
                <div class="row item">
                    <div class="twelve columns">
                        <h3><lang-en>Wineshop Dulst</lang-en><lang-nl>Wijnhandel Dulst</lang-nl></h3>
                        <p class="info"><lang-en>Web Developer</lang-en><lang-nl>Web Developer</lang-nl> <span>&bull;</span> <em class="date"><lang-en>2016 - 2017</lang-en><lang-nl>2016 - 2017</lang-nl></em></p>
                        <p>
                        <lang-en>
                            Together with my colleague, I created a website where customers can manage their wine purchases and let the website predict their wine taste preferences. There are a bunch of other useful features such as getting information about offered wines, giving scores, managing your own personal wines, a search engine, etc.<br/>
                            <br/>This website was created with the php framework Laravel.<br/>
                            <a href="www.mywineprofile.com">www.mywineprofile.com</a> of <a href="https://youtu.be/Fzv8Kztdies" target="_blank">Video Demo</a>
                        </lang-en>
                        <lang-nl>
                            Samen met een medewerker ontwikkelde ik een website waarmee klanten hun wijnaankopen kunnen beheren en ook hun smaakprofiel laten bepalen. Er zitten nog andere nuttige toepassingen in dat programma, zoals informatie over de aangeboden wijnen, het geven van quoteringen, een eigen wijnkelder bijhouden, een zoekmachine voor alle wijnen, etc. <br/>
                            <br/>Deze website werd ontwikkeld met behulp van het php framework Laravel. <br/>
                            <a href="www.wijnprofiel.be">www.wijnprofiel.be</a> of <a href="https://youtu.be/Fzv8Kztdies" target="_blank">Video Demo</a>
                        </lang-nl>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row skill">
            <div class="three columns header-col">
                <h1>
					<span>
						<lang-en>Skills</lang-en>
						<lang-nl>Programmeer</lang-nl>
					</span>
					<br/><br/>
					<span>
						<lang-en></lang-en>
						<lang-nl>Vaardigheden</lang-nl>
					</span>
				</h1>
            </div>
            <div class="nine columns main-col">
                <!--<p>
                    <lang-en>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                        quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    </lang-en>
                    <lang-nl>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                        quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    </lang-nl>
                </p>-->
                <div class="bars">
                    <ul class="skills">
                        <li><span class="bar-expand javascript"></span><em>JavaScript, Node</em></li>
                        <li><span class="bar-expand react"></span><em>React, React Native</em></li>
                        <li><span class="bar-expand html5"></span><em>HTML5</em></li>
                        <li><span class="bar-expand css"></span><em>CSS</em></li>
                        <li><span class="bar-expand java"></span><em>Java</em></li>
                        <li><span class="bar-expand php"></span><em>PHP (, Laravel)</em></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section id="portfolio">
        <div class="row">
            <div class="twelve columns collapsed">
                <h1><lang-en>Check Out Some of My Works</lang-en><lang-nl>Bekijk Mijn Projecten</lang-nl></h1>
                <div id="portfolio-wrapper" class="bgrid-quarters s-bgrid-thirds cf">
                    <div class="columns portfolio-item">
                        <div class="item-wrap openModal">
                            <a href="#modal-01">
                                <img alt="UCLL Logo" src="images/portfolio/ucll.jpg">
                                <div class="overlay">
                                    <div class="portfolio-item-meta">
                                        <h5>UCLL App</h5>
                                        <p>App Development</p>
                                    </div>
                                </div>
                                <div class="link-icon"><i class="icon-plus"></i></div>
                            </a>
                        </div>
                    </div>
                    <div class="columns portfolio-item">
                        <div class="item-wrap openModal">
                            <a href="#modal-02">
                                <img alt="Dulst Logo" src="images/portfolio/dulst.jpg">
                                <div class="overlay">
                                    <div class="portfolio-item-meta">
                                        <h5><lang-en>Dulst</lang-en><lang-nl>Dulst</lang-nl></h5>
                                        <p>Web Development</p>
                                    </div>
                                </div>
                                <div class="link-icon"><i class="icon-plus"></i></div>
                            </a>
                        </div>
                    </div>
                    <div class="columns portfolio-item">
                        <div class="item-wrap openModal">
                            <a href="#modal-03">
                                <img alt="Discordbot Logo" src="images/portfolio/discordbot.jpg">
                                <div class="overlay">
                                    <div class="portfolio-item-meta">
                                        <h5>Discord Bot</h5>
                                        <p>JavaScript (Node.js)</p>
                                    </div>
                                </div>
                                <div class="link-icon"><i class="icon-plus"></i></div>
                            </a>
                        </div>
                    </div>
                    <div class="columns portfolio-item">
                        <div class="item-wrap openModal">
                            <a href="#modal-04">
                                <img alt="Github Overview Game Logo" src="images/portfolio/overview_game.jpg">
                                <div class="overlay">
                                    <div class="portfolio-item-meta">
                                        <h5>GitHub Overview Game</h5>
                                        <p>JavaScript</p>
                                    </div>
                                </div>
                                <div class="link-icon"><i class="icon-plus"></i></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="modal-01" class="popup-modal mfp-hide">
                <img class="scale-with-grid" src="images/portfolio/modals/ucll.jpg" alt="UCLL Banner" />
                <div class="description-box">
                    <h4>UCLL App</h4>
                    <p>
                        <lang-en>
                            Together with a developer of the UC Leuven, we (5 software development students) were responsible for the initial development of the mobile application used by the students and staff of the University College to access their schedule, the financial records and the official communication to students and staff. 
                            <br/><br/>
                            It has 10,000+ downloads and is rated 4.8/5 on the Play Store and 4.6/5 on the iOS App Store.
                        </lang-en>
                        <lang-nl>
                            Samen met een developer van UC Leuven, zijn we (5 software development studenten) verantwoordelijk voor de eerste ontwikkeling van de mobiele applicatie die de studenten en medewerkers van UCLL gebruiken om toegang te krijgen tot hun lessenrooster, financiële gegevens en de officiële communicatie naar studenten en medewerkers.
                            <br/><br/>
                            Het heeft 10.000+ downloads en scoort 4.8/5 in de Play Store en 4.6 in de iOS App Store.
                        </lang-nl>
                        <br/><br/>
                        <a href="https://youtu.be/hiHs9xHcHQY" target="_blank">Video Demo</a>
                    </p>
                    <span class="categories"><i class="fa fa-tag"></i>App Development</span>
                </div>
                <div class="link-box">
                    <a class="popup-modal-dismiss"><lang-en>Close</lang-en><lang-nl>Sluit</lang-nl></a>
                </div>
            </div>
            <div id="modal-02" class="popup-modal mfp-hide">
                <img class="scale-with-grid" src="images/portfolio/modals/dulst.jpg" alt="Dulst Banner" />
                <div class="description-box">
                    <h4>Dulst</h4>
                    <p>
                        <lang-en>
                            Together with my colleague, I created a website where customers can manage their wine purchases and let the website predict their wine taste preferences. There are a bunch of other useful features such as getting information about offered wines, giving scores, managing your own personal wines, a search engine, etc.<br/>
                            This website was created with the php framework Laravel.<br/><br/>
                            <a href="https://www.mijnsmaakprofiel.be/" target="_blank">www.mywineprofile.com</a> of <a href="https://youtu.be/Fzv8Kztdies" target="_blank">Video Demo</a>
                        </lang-en>
                        <lang-nl>
                            Samen met een medewerker ontwikkelde ik een website, waarmee klanten hun wijnaankopen kunnen beheren en ook hun smaakprofiel laten bepalen. Er zitten nog andere nuttige toepassingen in dat programma, zoals informatie over de aangeboden wijnen, het geven van quoteringen, een eigen wijnkelder bijhouden, een zoekmachine voor alle wijnen, etc. <br/>
                            Deze website werd ontwikkeld met behulp van het php framework Laravel. <br/><br/>
                            <a href="https://www.mijnsmaakprofiel.be/" target="_blank">www.wijnprofiel.be</a> of <a href="https://youtu.be/Fzv8Kztdies" target="_blank">Video Demo</a>
                        </lang-nl>
                    </p>
                    <span class="categories"><i class="fa fa-tag"></i>Web Development</span>
                </div>
                <div class="link-box">
                    <a class="popup-modal-dismiss"><lang-en>Close</lang-en><lang-nl>Sluit</lang-nl></a>
                </div>
            </div>
            <div id="modal-03" class="popup-modal mfp-hide">
                <img class="scale-with-grid" src="images/portfolio/modals/discordbot.jpg" alt="Discordbot Banner" />
                <div class="description-box">
                    <h4>Discord Bot</h4>
                    <p>
                        <lang-en>
                            A discord bot which responds to user commands. The bot has various functionalities such as streaming youtube music, creating polls, permission management, etc.
                        </lang-en>
                        <lang-nl>
                            Een discord robot die reageert op instructies van gebruikers. De robot heeft verschillende functionaliteiten waaronder het streamen van youtube muziek, het maken van polls, beheren van rechten, etc.
                        </lang-nl>
                        <br/><br/>
                        <a href="https://youtu.be/t9eoyNOSKjM" target="_blank">Video Demo</a>
                    </p>
                    <span class="categories"><i class="fa fa-tag"></i>JavaScript (Node.js)</span>
                </div>
                <div class="link-box">
                    <a class="popup-modal-dismiss"><lang-en>Close</lang-en><lang-nl>Sluit</lang-nl></a>
                </div>
            </div>
            <div id="modal-04" class="popup-modal mfp-hide">
                <img class="scale-with-grid" src="images/portfolio/modals/overview_game.jpg" alt="Github Overview Game Banner" />
                <div class="description-box">
                    <h4>GitHub Overview Game</h4>
                    <p>
                        <lang-en>
                            A game where the GitHub projects of a chosen user are visualized in a fun, original way. As player, you have to jump to projects to see their information, which is retrieved dynamically using the GitHub API.<br/>
                        </lang-en>
                        <lang-nl>
                            Een spel waar de GitHub projecten van een gekozen gebruiker gevisualiseerd zijn in een toffe, originele manier. Als speler moet je springen naar projecten om hun informatie te zien, die dynamisch verkregen wordt via de GitHub API.<br/>
                        </lang-nl>
                        <br/>
                        <a href="https://overview.tomdaniel.be" target="_blank">overview.tomdaniel.be</a> of <a href="https://youtu.be/INnuOrrY_to" target="_blank">Video Demo</a>
                    </p>
                    <span class="categories"><i class="fa fa-tag"></i>JavaScript</span>
                </div>
                <div class="link-box">
                    <a class="popup-modal-dismiss"><lang-en>Close</lang-en><lang-nl>Sluit</lang-nl></a>
                </div>
            </div>
        </div>
    </section>
    <section id="contact">
        <div class="row section-head">
            <div class="two columns header-col">
                <h1><span></span></h1>
            </div>
            <div class="ten columns">
                <p class="lead">
                    <lang-en>  
                        <strong>You can contact me using this form, I am looking forward to your message.</strong>
                    </lang-en>
                    <lang-nl>
                        <strong>U kan mij contacteren via dit formulier, ik kijk uit naar uw bericht.</strong>
                    </lang-nl>
                </p>
            </div>
        </div>
        <div class="row">
            <div class="eight columns">
                <div id="contactForm" name="contactForm">
                    <fieldset>
                        <div>
                            <label for="contactName"><lang-en>Name</lang-en><lang-nl>Naam</lang-nl> <span class="required">*</span></label>
                            <input type="text" value="" size="35" maxlength="35" id="contactName" name="contactName">
                        </div>
                        <div>
                            <label for="contactEmail"><lang-en>Email</lang-en><lang-nl>Email</lang-nl> <span class="required">*</span></label>
                            <input type="text" value="" size="35" maxlength="70" id="contactEmail" name="contactEmail">
                        </div>
                        <div>
                            <label for="contactSubject"><lang-en>Subject</lang-en><lang-nl>Onderwerp</lang-nl></label>
                            <input type="text" value="" size="35" maxlength="100" id="contactSubject" name="contactSubject">
                        </div>
                        <div>
                            <label for="contactMessage"><lang-en>Message</lang-en><lang-nl>Bericht</lang-nl> <span class="required">*</span></label>
                            <textarea cols="50" rows="15" maxlength="3000" id="contactMessage" name="contactMessage"></textarea>
                        </div>
                        <div>
                            <button id="submitMessage" class="submit"><lang-en>Submit</lang-en><lang-nl>Verstuur</lang-nl></button>
                            <span id="image-loader">
                        <img alt="Loader" src="images/loader.gif">
                     </span>
                        </div>
                    </fieldset>
					<div id="alert-container">
					</div>
                </div>
            </div>
            <aside class="four columns footer-widgets">
                <div class="widget widget_contact">
                    <h4><lang-en>Address and Phone</lang-en><lang-nl>Adres en GSM</lang-nl></h4>
                    <p class="address">
                        Tom Daniel<br> Haasrode 3053 <br> Belgi&euml;<br>
                        <span>(+32) 474 07 71 02</span>
                    </p>
                </div>
            </aside>
        </div>
    </section>
    <?php
        $type = "None";
        $typeNl = "";
        $messageEn = "";
        $messageNl = "";
        if (isset($_SESSION['errorEn']) && !empty($_SESSION['errorEn'])) {
            $type = "Error";
            $typeNl = "Error";
            $messageEn = $_SESSION['errorEn'];
            $messageNl = $_SESSION['errorNl'];
        } elseif (isset($_SESSION['successEn']) && !empty($_SESSION['successEn'])) {
            $type = "Success";
            $typeNl = "Succes";
            $messageEn = $_SESSION['successEn'];
            $messageNl = $_SESSION['successNl'];
        }
        if ($type != "None") {
    ?>
	<div id="<?php echo(strtolower($type)); ?>Modal" class="modal fade" role="dialog">
	  <div class="modal-dialog">
		<div class="modal-content">
		  <div class="modal-header">
			<button type="button" class="close" data-dismiss="modal">&times;</button>
			<h4 class="modal-title"><lang-en><?php echo($type); ?></lang-en><lang-nl><?php echo($typeNl); ?></lang-nl></h4>
		  </div>
		  <div class="modal-body">
			<p><lang-en><?php echo($messageEn); ?></lang-en><lang-nl><?php echo($messageNl); ?></lang-nl></p>
		  </div>
		  <div class="modal-footer">
			<button type="button" class="btn btn-default" data-dismiss="modal"><lang-en>Close</lang-en><lang-nl>Sluit</lang-nl></button>
		  </div>
		</div>
	  </div>
	</div>
    <?php } session_destroy(); $_SESSION = []; ?>
    <footer>
        <div class="row">
            <div class="twelve columns">
                <ul class="social-links">
                    <li><a href="https://www.facebook.com/tom.daniel4" target="_blank"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/tom-daniel-3a40bb118/" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                    <li><a href="https://github.com/tomdaniel-it" target="_blank"><i class="fa fa-github"></i></a></li>
                </ul>
                <ul class="copyright">
                    <li>&copy; Copyright 2014 CeeVee</li>
                    <li>Design by <a title="Styleshout" href="https://www.styleshout.com/">Styleshout</a></li>
                </ul>
            </div>
            <div id="go-top"><a class="smoothscroll" title="Back to Top" href="#home"><i class="icon-up-open"></i></a></div>
        </div>
    </footer>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script>
        window.jQuery || document.write('<script src="js/jquery-1.10.2.min.js"><\/script>')
    </script>
    <script type="text/javascript" src="js/jquery-migrate-1.2.1.min.js"></script>
    <script src="js/jquery.flexslider.js"></script>
    <script src="js/waypoints.js"></script>
    <script src="js/jquery.fittext.js"></script>
    <script src="js/magnific-popup.js"></script>
    <script src="js/init.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <?php if($type != "None") { echo("<script> $('#" . strtolower($type) . "Modal').modal('show'); </script>"); } ?>
</body>

</html>