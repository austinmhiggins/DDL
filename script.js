function randomDay() { 

	eatDay = [
		'<a href="http://www.ironcactus.com" target="_new">Iron Cactus</a>',
		'<a href="http://www.ellenssouthernkitchen.com" target="_new">Ellens Southern Kitchen</a>',
		'<a href="http://www.americanodallas.com" target="_new">Americano</a>',
		'<a href="http://www.wildsalsarestaurant" target="_new">Wild Salsa</a>',
		'<a href="http://www.thewoolworthdallas.com" target="_new">The Woolworth</a>',
		'<a href="http://www.campisis.us/downtown-dallas" target="_new">Campsisis</a>',
		'<a href="http://www.facebook.com/Sushiya-on-Elm-216466248389240/" target="_new">Sushi Ya</a>',
		'<a href="http://www.neimanmarcus.com/restaurants/dallas/tx/the%20zodiac/dallas%20-%20downtown" target="_new">The Zodiac</a>',
		'<a href="http://www.cafemomentum.org" target="_new">Cafe Momentum</a>',
		'<a href="http://www.pressboxgrill.com" target="_new">Press Box Grill</a>',
		'<a href="http://www.canerosso.com/deepellum" target="_new">Cane Rosso</a>',
		'<a href="http://www.twistedrootburgerco.com/deepellum" target="_new">Twisted Root</a>',
		'<a href="http://www.seriouspizza.com" target="_new">Serious Pizza</a>',
		'<a href="http://www.flyinghorsecafe.com" target="_new">Flying Horse Cafe</a>',
		'<a href="http://www.serjbooks.com" target="_new">Serj</a>',
		'<a href="http://www.ahhweeekend.com" target="_new">Weekend Coffee</a>',
		'<a href="http://www.emporiumpies.com" target="_new">Emporium Pies</a>',
		'<a href="http://www.braindeadbrewing.com" target="_new">Braindead Brewing</a>',
		'<a href="http://www.dallasfarmersmarket.org" target="_new">Dallas Farmers Market</a>'];

	eatDayReview = [
		"Iron Cactus has fantastic lunch fajitas.",
		"If you go to Ellen's, make sure you consider the chicken and waffles.",
		"My favorite thing about Americano is the wine on tap. Try to sit on the patio if the weather is nice.",
		"When it is cold outside, the fire by the window provides plenty of warmth. Get the guacamole appetizer. You won't be disappointed.",
		"Woolworth's brunch is one of the best in Dallas. They added a second story patio in 2015 and it changed the whole vibe.",
		"Campisi's lunch special is worth it.",
		"The owner's of Sushi Ya are so kind. If it is baseball season, you will find the game on. Sit at the bar and order fried ice cream for dessert.",
		"The Zodiac in Neiman Marcus has a world class holiday buffet. Make reservations and go hungry.",
		"Cafe Momentum is a unique dining experience. The owner runs it as a non profit to help at risk youth.",
		"Home of LSU football watch parties. There's always a game on and plenty of beer and hamburgers.",
		"If you know Deep Ellum, you know the Red Dog. Order a Mista, Fococcia and then the Special K. Trust me.",
		"Every possible hamburger combination known to man.",
		"If you need a 36 inch pizza there is only one place to go.",
		"Dallas's best cold brew coffee. The owner, Matt, has created the perfect neighborhood coffee shop.",
		"Bookstore. BBQ. Coffee. Art. Its unique, just like the neighborhood.",
		"Two words: homemade pop tarts. Plus, Nick Jonas hangs out there.",
		"Newly opened in Deep Ellum, just in time for literally the best pie you will ever have.",
		"Craft brew. Good food. Huge patio. Sounds like Deep Ellum.",
		"A dozen or so restaurants and more produce than you will ever need. Tacos, seafood, Afghan fusion, cajun, Vietnamese... the list goes on"];
		
	activityDay = [
		'<a href="https://klydewarrenpark.org/Things-To-Do/index.html" target="_new">Klyde Warren Park</a>',
		'<a href="http://www.americanairlinescenter.com/events-tickets/calendar" target="_new">American Airlines Center</a>',
		'<a href="https://www.jfk.org" target="_new">Sixth Floor Museum</a>',
		'<a href="https://www.dwazoo.com" target="_new">Dallas World Aquarium</a>',
		'<a href="https://www.reuniontower.com" target="_new">Reunion Tower</a>',
		'<a href="https://www.jfk.org" target="_new">Dealey Plaza</a>',
		'<a href="https://www.nashersculpturecenter.org" target="_new">Nasher Sculpture Center</a>',
		'<a href="https://www.dcsymphony.org/Season_Schedule‎" target="_new">Meyerson Symphony</a>',
		'<a href="https://www.crowcollection.org‎" target="_new">Crow Collection of Asian Art</a>',
		'<a href="https://www.dallasculture.org/majestictheatre/eventCalendar.asp" target="_new">Majestic Theater</a>',
		'<a href="https://www.drafthouse.com/dfw" target="_new">Alamo Drafthouse</a>',
		'<a href="https://www.dallasparks.org/384/Main-Street-Garden" target="_new">Main Street Garden Park</a>',
		'<a href="https://www.dma.org" target="_new">Dallas Museum of Art</a>',
		'<a href="https://www.thejouledallas.com" target="_new">the Joule Dallas</a>',
		'<a href="https://www.neimanmarcus.com/stores/dallas/tx/dallas%20-%20downtown" target="_new">Neiman Marcus</a>',
		'<a href="https://www.fortyfiveten.com/" target="_new">Fortyfive Ten</a>'];
	
	activityDayReview = [
		"Its a giant park. With kids area, dog run, bars, restaurants, food trucks, games and music. Plus, its on top of a highway.",
		"Home of the Dallas Stars, Dallas Mavericks and every concert you can imagine. ",
		"A museum dedicated to President John F. Kennedy.",
		"Go for the famous sloth, stay for the indoor jungle, acquarium and hundres of species.",
		"See one of the highest rated skylines in the country from the observation deck of Reunion Tower.",
		"Where one of the dark days of American history happened. RIP JFK.",
		"Part of the growing Arts District of Dallas. Stroll through the two story gallery and garden out back.",
		"Home of the Dallas Symphony Orchestra. They are world class. Especially if Dallas is your world. Pro tip: the seats on the side are more comfortable than those in the middle.",
		"A smaller museum with free entry. Stop by the gift shop for interesting books and art. ",
		"An old grandious theater turned in to an event venue for music and performances.",
		"Alamo Drafthouse, in the Cedars neighborhood, is a movie theater designed by movie fans. Watch your favorite film and dine on surprisingly good food. Get their early for custom pre-shows and order the warm chocolate chip cookies. ",
		"Our friendly neighborhood park with a café, dog run, playground and a few acres of greenery.",
		"The premier museum of Dallas. General entry is free but they have special exhibits for a small fee. They recently renovated the café, so stop for a snack in between browsing the museum.",
		"The best hotel in all of Dallas. In the lobby there are restaurants, shopping, coffee, Taschen book store and more. The lobby is dog friendly, so bring your four legged friend along. 3 legged dogs also allowed. If you have a 2 legged dog please send me an email I must meet it.",
		"The flag ship store of one of the most iconic fashion stores in the country.",
		"The newest high fashion addition to Downtown Dallas. Plus, they have a champagne bar."];		


	drinkDay = [
		'<a href="https://www.midnightramblerbar.com" target="_new">Midnight Rambler</a>',
		'<a href="https://www.thecraftyirishman.com" target="_new">The Crafty Irishman</a>',
		'<a href="https://www.dallas.frankiesbar.com" target="_new">Frankies</a>',
		'<a href="https://www.facebook.com/OEP-One-Eyed-Penguin-480010715406737/" target="_new">One Eyed Penguin</a>',
		'<a href="https://www.vettedwell.com" target="_new">Vetted Well</a>',
		'<a href="https://www.citytaverndowntowndallas.com" target="_new">City Taver</a>',
		'<a href="https://www.themitchelldallas.com" target="_new">The Mitchell</a>',
		'<a href="https://www.unionparkdallas.com" target="_new">Union Park</a>',
		'<a href="https://www.thewoolworthdallas.com" target="_new">The Woolworth</a>',
		'<a href="https://www.omnihotels.com/hotels/dallas/dining/the-owners-box" target="_new">The Owners Box</a>',
		'<a href="http://www.hoteladolphus.com/dining/the-rodeo-bar-and-grill" target="_new">Rodeo Bar & Grill</a>',
		'<a href="http://www.aloftdallasdowntown.com/wxyz-bar" target="_new">WXYZ Bar</a>',
		'<a href="http://www.nylohotels.com/dallas" target="_new">NYLO Southside</a>'];

	drinkDayReview = [
		"Downtown Dallas' very own speakeasy in the basement of the Joule Hotel. I saw Dirk there one night. He is twice as tall as you think he is.",
		"The best Irish pub in Dallas. Alan, the owner, has the friendliest staff and amazing pub food. Look for Jimmy & Adam, my favorite bartenders in Dallas",
		"Frankies is a sports bar with an underground lounge. Its always packed full of sports fans. Which can be amazing or terrifying, depending on your sports preference.",
		"A second floor dive bar. The sign says 'OEPN' instead of 'OPEN'. Clever.",
		"Amazing views of Downtown Dallas. Private and public karaoke rooms. Delicious chips and queso. Hang out on the patio in the back, its more of a lounge area but outside.",
		"Everyone's local hole in the wall bar.",
		"Live music a few nights a week. Jazz on Thursdays. They specialize in pre-prohibition era drinks. I still don't know what that means. Gin?",
		"I've never been but I'm sure they have alcohol. Food, too?",
		"Order a drink and sit in the library. Getting drunk with books is slightly more refined.",
		"A high end sports bar in the lobby of the Omni hotel. You may stumble upon a Dallas Stars watch party. They have at least one gigantic screen.",
		"Stereotypical Texas bar. I guess every neighborhood needs one. ",
		"I've never been but Jessie is a bartender there and she is really cool.",
		"Enjoy breathtaking views of Downtown Dallas from the rooftop pool and bar."];

	var rand4 = [Math.floor ( Math.random() * eatDay.length )]; 
	var rand5 = [Math.floor ( Math.random() * activityDay.length )]; 
	var rand6 = [Math.floor ( Math.random() * drinkDay.length )];  

	document.getElementById("eat").innerHTML = "You should eat at " + eatDay[rand4] + ".";
		document.getElementById("activity").innerHTML = "Then, you should go to " + activityDay[rand5] + ".";
		document.getElementById("drink").innerHTML = "Afterwards, you should stop by " + drinkDay[rand6] + " for a drink.";
	document.getElementById("eatReview").innerHTML = eatDayReview[rand4];
		document.getElementById("activityReview").innerHTML = activityDayReview[rand5];
		document.getElementById("drinkReview").innerHTML = drinkDayReview[rand6];
	}


function randomNight() { 

	eatNight = [
		'<a href="http://www.ironcactus.com" target="_new">Iron Cactus</a>',
		'<a href="http://www.dakotasrestaurant.com" target="_new">Dakotas</a>',
		'<a href="http://www.dallasfishmarket.com" target="_new">Dallas Fish Market</a>',
		'<a href="http://www.ellenssouthernkitchen.com" target="_new">Ellens Southern Kitchen</a>',
		'<a href="http://www.cbdprovisions.com" target="_new">Dallas Fish Market</a>',
		'<a href="http://www.americanodallas.com" target="_new">Americano</a>',
		'<a href="http://www.wildsalsarestaurant" target="_new">Wild Salsa</a>',
		'<a href="http://www.thewoolworthdallas.com" target="_new">The Woolworth</a>',
		'<a href="http://www.campisis.us/downtown-dallas" target="_new">Campsisis</a>',
		'<a href="http://www.facebook.com/Sushiya-on-Elm-216466248389240/" target="_new">Sushi Ya</a>',
		'<a href="http://www.neimanmarcus.com/restaurants/dallas/tx/the%20zodiac/dallas%20-%20downtown" target="_new">The Zodiac</a>',
		'<a href="http://www.cafemomentum.org" target="_new">Cafe Momentum</a>',
		'<a href="http://www.pressboxgrill.com" target="_new">Press Box Grill</a>',
		'<a href="http://www.canerosso.com/deepellum" target="_new">Cane Rosso</a>',
		'<a href="http://www.twistedrootburgerco.com/deepellum" target="_new">Twisted Root</a>',
		'<a href="http://www.seriouspizza.com" target="_new">Serious Pizza</a>',];

	eatNightReview  = [ 
		"Iron Cactus has fantastic lunch fajitas.",
		"Look for a lone valet in front of an elevator on the side of the road. Sounds strange, right? ",
		"Fresh fish flown in every day. They have a unique take on traditional fish dishes. The only fish and chips I've ever had served on a wooden plate. ",
		"If you go to Ellen's, make sure you consider the chicken and waffles.",
		"CBD Provisions, named for the Central Business District, is one of two restaurants in the Joule hotel. Some of the best service in Dallas.",
		"My favorite thing about Americano is the wine on tap. Try to sit on the patio if the weather is nice.",
		"When it is cold outside, the fire by the window provides plenty of warmth. Get the guacamole appetizer. You won't be disappointed.",
		"Woolworth's brunch is one of the best in Dallas. They added a second story patio in 2015 and it changed the whole vibe.",
		"Campisi's lunch special is worth it.",
		"The owner's of Sushi Ya are so kind. If it is baseball season, you will find the game on. Sit at the bar and order fried ice cream for dessert.",
		"The Zodiac in Neiman Marcus has a world class holiday buffet. Make reservations and go hungry.",
		"Cafe Momentum is a unique dining experience. The owner runs it as a non profit to help at risk youth.",
		"Home of LSU football watch parties. There's always a game on and plenty of beer and hamburgers.",
		"If you know Deep Ellum, you know the Red Dog. Order a Mista, Fococcia and then the Special K. Trust me.",
		"Every possible hamburger combination known to man.",
		"If you need a 36 inch pizza there is only one place to go."];

	activityNight = [
		'<a href="https://klydewarrenpark.org/Things-To-Do/index.html" target="_new">Klyde Warren Park</a>',
		'<a href="https://www.reuniontower.com" target="_new">Reunion Tower</a>',
		'<a href="https://www.jfk.org" target="_new">Dealey Plaza</a>',
		'<a href="https://www.dcsymphony.org/Season_Schedule‎" target="_new">Meyerson Symphony</a>',
		'<a href="https://www.dallasparks.org/384/Main-Street-Garden" target="_new">Main Street Garden Park</a>',
		'<a href="https://www.drafthouse.com/dfw" target="_new">Alamo Drafthouse</a>',
		'<a href="https://www.dallasculture.org/majestictheatre/eventCalendar.asp" target="_new">Majestic Theater</a>',
		'<a href="https://www.dallascomedyhouse" target="_new">Dallas Comedy House</a>',
		'<a href="http://www.thebombfactory.com/calendar/" target="_new">the Bomb Factory</a>'];

	activityNightReview = [
		"Its a giant park. With kids area, dog run, bars, restaurants, food trucks, games and music. Plus, its on top of a highway.",
		"See one of the highest rated skylines in the country from the observation deck of Reunion Tower",
		"Where one of the dark days of American history happened. RIP JFK. ",
		"Home of the Dallas Symphony Orchestra. They are world class. Especially if Dallas is your world. ",
		"Our friendly neighborhood park with a café, dog run, playground and a few acres of greenery.",
		"Alamo Drafthouse, in the Cedars neighborhood, is a movie theater designed by movie fans. Watch your favorite film and dine on surprisingly good food. Get their early for custom pre-shows and order the warm chocolate chip cookies.",
		"An old grandious theater turned in to an event venue for music and performances.",
		"See some stand up, open mic and small comedy productions ",
		"Big names, small names, unheard of names all come through Deep Ellum's major concert venue"];

	drinkNight = [
		'<a href="https://www.midnightramblerbar.com" target="_new">Midnight Rambler</a>',
		'<a href="https://www.thecraftyirishman.com" target="_new">The Crafty Irishman</a>',
		'<a href="https://www.dallas.frankiesbar.com" target="_new">Frankies</a>',
		'<a href="https://www.facebook.com/OEP-One-Eyed-Penguin-480010715406737/" target="_new">One Eyed Penguin</a>',
		'<a href="https://www.vettedwell.com" target="_new">Vetted Well</a>',
		'<a href="https://www.citytaverndowntowndallas.com" target="_new">City Taver</a>',
		'<a href="https://www.themitchelldallas.com" target="_new">The Mitchell</a>',
		'<a href="https://www.unionparkdallas.com" target="_new">Union Park</a>',
		'<a href="https://www.thewoolworthdallas.com" target="_new">The Woolworth</a>',
		'<a href="https://www.omnihotels.com/hotels/dallas/dining/the-owners-box" target="_new">The Owners Box</a>',
		'<a href="http://www.hoteladolphus.com/dining/the-rodeo-bar-and-grill" target="_new">Rodeo Bar & Grill</a>',
		'<a href="http://www.aloftdallasdowntown.com/wxyz-bar" target="_new">WXYZ Bar</a>',
		'<a href="http://www.nylohotels.com/dallas" target="_new">NYLO Southside</a>']; 

	drinkNightReview  = [ 
		"Downtown Dallas' very own speakeasy in the basement of the Joule Hotel. I saw Dirk there one night. He is twice as tall as you think he is.",
		"The best Irish pub in Dallas. Alan, the owner, has the friendliest staff and amazing pub food. Look for Jimmy & Adam, my favorite bartenders in Dallas",
		"Frankies is a sports bar with an underground lounge. Its always packed full of sports fans. Which can be amazing or terrifying, depending on your sports preference.",
		"A second floor dive bar. The sign says 'OEPN' instead of 'OPEN'. Clever.",
		"Amazing views of Downtown Dallas. Private and public karaoke rooms. Delicious chips and queso. Hang out on the patio in the back, its more of a lounge area but outside.",
		"Everyone's local hole in the wall bar.",
		"Live music a few nights a week. Jazz on Thursdays. They specialize in pre-prohibition era drinks. I still don't know what that means. Gin?",
		"I've never been but I'm sure they have alcohol. Food, too?",
		"Order a drink and sit in the library. Getting drunk with books is slightly more refined.",
		"A high end sports bar in the lobby of the Omni hotel. You may stumble upon a Dallas Stars watch party. They have at least one gigantic screen.",
		"Stereotypical Texas bar. I guess every neighborhood needs one. ",
		"I've never been but Jessie is a bartender there and she is really cool.",
		"Enjoy breathtaking views of Downtown Dallas from the rooftop pool and bar."];

	var rand1 = [Math.floor ( Math.random() * eatNight.length )]; 
	var rand2 = [Math.floor ( Math.random() * activityNight.length )]; 
	var rand3 = [Math.floor ( Math.random() * drinkNight.length )];  

	document.getElementById("eat").innerHTML = "You should eat at " + eatNight[rand1] + ".";
		document.getElementById("activity").innerHTML = "Then, you should go to " + activityNight[rand2] + ".";
		document.getElementById("drink").innerHTML = "Afterwards, you should stop by " + drinkNight[rand3] + " for a drink.";
	document.getElementById("eatReview").innerHTML = eatNightReview[rand1];
		document.getElementById("activityReview").innerHTML = activityNightReview[rand2];
		document.getElementById("drinkReview").innerHTML = drinkNightReview[rand3];
	}
