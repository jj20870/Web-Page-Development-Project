/*
	Assignment 5
	Jaedon's Birthday Bash
	Author: Jaedon Johnson
	Date: 03/31/2021
	Due Date: 04/15/2021
	
	Filename: johnson_script.js
	
*/
function favEvents() {
	document.write("<ol>");
	document.write("<li>The 13th Amendment, adopted on December 18, 1865, officially abolished slavery</li>");
	document.write("<li>In 1965, the Voting Rights Act directed the Attorney General to enforce the right to vote for African Americans</li>");
	document.write("<li>Martin Luther King, Jr., delivered this iconic 'I Have a Dream' speech at the March on Washington on August 28, 1963.</li>");
	document.write("</ol>")
}

function activities(Jaedon) {
	alert(Jaedon);
}

function rsvp(e) {
	var name = document.getElementById("custFname");
	var name = document.getElementById("custLname");
	var email = document.getElementById("custEmail");
	var phone = document.getElementById("custPhone");
	var age = document.getElementById("a");
	var birthday = document.getElementById("bd");
	var favColor = document.getElementById("fc");
	var favPartyGame = document.getElementById("FPG");
	if(name.value && email.value && phone.value && age.value && birthday.value && favColor.value && favPartyGame.value) {
		alert("Thank you!"); 
	}else {
		alert("Please fill in all fields");
		e.preventDefault();
	}
}

function wishlist() {
	document.write("<table>");
	document.write("<caption>This table is a list of all the gifts i want</caption>");
	document.write("<tr>")
	document.write("<th>ItemName</th>");
	document.write("<th>PriceRange</th>");
	document.write("<th>AdditionalInfo</th>");
	document.write("<th>Links</th>");
	document.write("</tr>");
	var ItemName = ["PS5", "Vapor Max", "Iphone 12", "Manga Books", "A Hellcat REDEYE", "A Gaming Desk","Ghost of Tsushima"
	];
	var PriceRange = ["$399-$499", "$200-$220", "$699-$1099", "$8.79-$14.00", "$28,095-$78,595", "$79.00-$130", "$59.99"
	];
	var AdditionalInfo = ["There is a digital and disc version", "There are different versions of this shoe", "Version 1 is very tiny and has only 2 cameras. Version 2 is bigger then the iphone 12 pro this one also has 2 cameras. The iphone 12 pro has three cameras and has is smaller then the iphone 12 and iphone 12 pro. The iphone 12 pro has 3 cameras and is the biggest iphone to date which is at a 6.7 OLED Screen", "There are a different variety of manga to choose from all  based on Anime shows", "There are multiple verisions of this car but the most sold are the SCAT PACK CHALLENGER/CHARGER, HELLCAT CHALLENGER/CHARGER, and the HELLCAT REDEYE CHALLENGER/CHARGER.", "Gaming desk are good for pro gammers which helps them have a set up to stream gaming cotent", "This game came in second place after the last of us part 2, as the best game at the game awards"
	];
	var Links = ['<a href="https://direct.playstation.com/en-us/hardware/ps5">Sony Shop Website</a>', '<a href="https://www.finishline.com/store/nike-air-vapormax?&rmatt=tsid:1044132%7ccid:57765846%7cagid:46901865051%7ctid:kwd-307147763029%7ccrid:296492760126%7cnw:g%7crnd:2739650531517958642%7cdvc:c%7cadp:%7cmt:e%7cloc:9010995&gclid=EAIaIQobChMIgOCrmMWS7wIVFcDICh0lDg66EAAYASAAEgJxdvD_BwE&gclsrc=aw.ds">Finish Line</a>', '<a href="https://www.apple.com/iphone/compare/">Apple Store</a>', '<a href="https://www.booksamillion.com/manga#">Books A Million</a>', '<a href="https://www.dodge.com/bmo.challenger.2020.html#/models/2020/challenger?app=bmo&brand=dodge&pageName=landing&pageTemplate=include-page&pageType=vehiclepage&pageVersion=1&textResizeFactor=1&vehicle=challenger&vehiclePage=challenger&year=2020">Dodge car store</a>', '<a href="https://www.amazon.com/gaming-desk/s?k=gaming+desk">Gaming Desk</a>', '<a href="https://www.playstation.com/en-us/games/ghost-of-tsushima/">Ghoust of Tsushima</a>'
	];
	for(var i = 0; i < ItemName.length; i++) {
		document.write("<tr>");
		document.write("<th>" + ItemName[i] + "</th>");
		document.write("<td>" + PriceRange[i]);
		document.write("<td>" + AdditionalInfo[i]);
		document.write("<td>" + Links[i]);
		document.write("</tr>");
	}
	document.write("</table>");
}