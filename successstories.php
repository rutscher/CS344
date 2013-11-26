<html>
   <head>
      <title>WRC - Women's Resource Center</title>
      <link rel="stylesheet" type="text/css" href="stylesheet.css">
      <script src="javascript.js" type="text/javascript"></script>
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
	  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script></script>
      <script src="jquery.zrssfeed.min.js" type="text/javascript"></script>   
   </head>
    <div id="header">
      <div id="title">
         <h1 id="title1">Women's Resource Center of Winona</h1>
         <p id="contact">      
            <strong>Office Phone:</strong> 507-452-4440</br>
            <strong>Toll Free Helpline:</strong> 877-972-7353</br>
         </p>
      </div>
      <button type="button" id="donatebutton">Donate!</button>
   </div>
   
   <div id="esc">
      <button type="button" id="escbutton">ESCAPE!</button>
      <a id="linkescape" href="weather.com"> ? </a>
   </div>
   <div class="menu_div">
           <ul>
         <li><a href="index.html">Home</a></li>
         <li><a href="gethelp.html">Get Help!</a></li>
         <li><a href="getinvolved.php">Get Involved</a></li>
         <li><a href="programs.html">Programs/Events</a></li>
          <li><a href="faq.html">Who are we?</a></li>
         <li><a href="successstories.php">Success Stories</a></li>
         <li><a href="faq2.html">FAQ</a></li>
         <li><a href="contact.html">Contact</a></li>
      </ul>
   </div>
   <body>
   <div id="button">
         <button onclick="increaseSize();">Increase Text Size</button>
         </div>
         <div id="button1">
         <button onclick="decreaseSize();">Decrease Text Size</button>
         </div>
   <div id="main">
	  <h1>Success Stories</h1>
		<?php for ($i=0;$i<5;$i++){
			if ($i / 2 == 0){
				$myClass = "evenImage";
			}
			else {
				$myClass = "oddImage";
			}
			?>
         <div id='successStory'.'<?php print $i?>' class="<?php print myClass?>">
			<img src="emptyProfilePic.png" alt="Secret Profile Picture">
			<p class="ss">
				<!--<h5>Story <?php print $i?></h5>-->
				User : Guest <?php print $i +1?><br>
				Date Joined: XX/XX/XXXX <br>
				What helped me: <br>
				sdfklasdfasjdifjiojwefiojiowsjfiajsi<br>
				sdfklasdfasjdifjiojwefiojiowsjfiajsi<br>
				sdfklasdfasjdifjiojwefiojiowsjfiajsi<br>
				sdfklasdfasjdifjiojwefiojiowsjfiajsi<br>
			</p>
		 </div>
		 <?php }?>
		
         
      </div>
   </body>
   <div id="footer">
      <div id="footercontact">
         Women's Resource Center of Winona
         <br>77 East 5th Street
         <br>Winona, MN 55987-3517
      </div>
      <div id="footerhours">
         Email Address: wrc@wrcofwinona.org
         <br>Hours Open: M-F 8:00-4:30
      </div>
   </div>
</html>