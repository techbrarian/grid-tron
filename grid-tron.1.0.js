//GRID-TRON
//Bengtson-Fu 13 3 |\| ( ][ 5 () |\| - |= |_|!!!!!!

/*created by Jason Bengtson, MLIS, MA */
/*built by me, for me*/
/*Bengtson-Fu is the best Kung Fu!!!*/
/*The Grid-tron library creates a dynamic grid layout inside of a specified div
works as a schwing alternative to old fashioned image maps
or all kinds of other stuff
available for use under the MIT open source license, although I always appreciate a shout-out
jQuery dependency (anybody shocked?) block id convention== divid_GRID_rownumber_columnnumber  all have class gridBlock*/

jQuery.fn.extend({  //extend the jQuery object
////////////////////////////
////////////////////////////
	gridify: function(dacolumns, darows) { //method for adding a grid to a div
//begin the functions and swim the crocodiles!

	function divMeasure(daid, dacolumns, darows) { //accepts a div id, number of columns and number of rows as the arguments. gets div sizes and grid numbers
			
				
			var dawidth=jQuery("#"+daid).width()-2; // . . . eliminates weird scaling problem
			var daheight=jQuery("#"+daid).height();
			var bwid=dawidth/dacolumns; //get the width of each block
			var bhi=daheight/darows; //get the height of each block
			
			gridAppend(daid, bwid, bhi, dacolumns, darows);
			
		}

		function gridAppend(daid, gridx, gridy, dacolumns, darows) { //generates the actual grid. Accepts as arguments the div name and x and y block sizes and nos
			
			for(x=0;x<darows;x++) {
				
				for(t=0;t<dacolumns;t++) {
					jQuery("#"+daid).append("<div class='gridBlock x"+(t+1)+" y"+(x+1)+"' id='"+daid+"_GRID_"+(t+1)+"_"+(x+1)+"'></div>");
				
				}
				
			}
			jQuery(".gridBlock").css({ 
				"display": "block",
				"float": "left",
				"margin": "0px",
				"padding": "0px",
				"border": "none",
				"width": gridx+"px",
				"height": gridy+"px"
				});

				
		}
		var daid=jQuery(this).attr("id");
		
		//deal with undefined
		if(daid===undefined) {
			
			throw "Grid-Tron Error: No element ID found for grid creation";
		}
		if(dacolumns===undefined) {
			
			dacolumns=50;
			
						}
		if(darows===undefined) {
			
			
			darows=50;
			
		}
		
		divMeasure(daid, dacolumns, darows);
		
		
		return this;
		
		
		
		/////////////////////////////
		/////////////////////////////
//end gridify method
	},
	getSquareGrid: function(one, two, three, four, five) { //create a square or rect grid with an assigned class accepts x1, x2, y1, y2 and a class name
		//enter top left coordinates first, then bottom right
		//set some vars
		var x1=0;
		var y1=0;
		var x2=0;
		var y2=0;
		var daclass="";
		var id1="";
		var id2="";
		
		if(four!=undefined) {
			x1=one;
			y1=two;
			x2=three;
			y2=four;
			daclass=five+"";
			
		}
		else {
			
				id1=one;
				id2=two;
				daclass=three+"";
				
		}
		//loop through the blocks to assign the new class
		if(four!=undefined) {//check to see if columns/rows are entered
			x=x1;
			do	{
				t=y1;
				do {
					
					jQuery(".x"+x+".y"+t).addClass(daclass);
					t++;
				}while(t<y2);
				x++;
			}while(x<x2);
		}
		else { //otherwise loop for ids
			
				
			}
		
		
		
		
		var daid=jQuery(this).attr("id");
		
		return this;
	},
	makeSizeGrid: function(callback) { // a simple method to obtain make an image div retain the background image ratio
		var daimg = new Image();
		var passthis=jQuery(this).attr("id");
		thisguy = jQuery(this).css('background-image');
		thisguy=thisguy.substr(5);
		thisguy=thisguy.substr(0, thisguy.length-2);
		daimg.src = thisguy;
			daimg.onload = function()
						{
								dax=daimg.naturalWidth;
								day=daimg.naturalHeight;
								daratio=day/dax;
								var currentWidth=Math.floor(jQuery("#"+passthis).width());
								jQuery("#"+passthis).height(Math.floor(jQuery("#"+passthis).width()*daratio));
								jQuery.globalEval(callback());
						}
		
	},
	
	getLocationsGrid: function(daclass) { // a method to obtain an array of locations for a block or collection of blocks--accepts one class as argument
	//set vars
		
		var xmost=0;
		var ymost=0;
		var xleast=1000000;
		var yleast=1000000;
		
		var daheight=0;
		var dawidth=0;
		if(jQuery("."+daclass).length<1){return;}
		jQuery("."+daclass).each(function() { //cycle through each member of the class until we get the top and left that are highest and lowest
			
			thepos=jQuery(this).position();
			if(thepos.left>xmost) {
				xmost=thepos.left;
			}
			if(thepos.left<xleast) {
				xleast=thepos.left;
			}
			if(thepos.top>ymost) {
				ymost=thepos.top;
			}
			if(thepos.top<yleast) {
				yleast=thepos.top;
			}
			
		});
		//get height and width; each block is identical 
		
		dawidth=jQuery("."+daclass).filter(":first").width();
		daheight=jQuery("."+daclass).filter(":first").height();
		//now we fix our high numbers (getting bottom right coordinates) by adding height and width
		xmost=xmost+dawidth;
		ymost=ymost+daheight;
		//calculate for center coordinates
		wideo=xmost-xleast;
		higho=ymost-yleast;
		centerx=Math.floor(xleast+(wideo/2));
		centery=Math.floor(yleast+(higho/2));
		
	var totaler=[Math.floor(xleast),Math.floor(yleast),Math.floor(xmost),Math.floor(ymost),centerx, centery];//set a single array containing all values
	
	return totaler;
	},
	
	getRhombusGrid: function(one, two, three, four, five, six, seven, eight, nine) { //create a roughly rhombus grid with an assigned class accepts four corner coords and a class name
		//coordinates must be entered as: top left corner, top right corner, bottom  left corner, bottom right corner
		//set some vars
		var x1=one;
		var y1=two;
		var x2=three;
		var y2=four;
		var x3=five;
		var y3=six;
		var x4=seven;
		var y4=eight;
		daclass=nine+"";
		var xstart=Math.min(x1,x2,x3,x4);
		var ystart=Math.min(y1,y2,y3,y4);
		var xend=Math.max(x1,x2,x3,x4);
		var yend=Math.max(y1,y2,y3,y4);
		//get line slopes
		topSlope=(y2-y1)/(x2-x1);
		bottomSlope=(y4-y3)/(x4-x3);
		leftSlope=(y3-y1)/(x3-x1);
		rightSlope=(y2-y1)/(x2-x1);
		
		
		
		//loop through the blocks to assign the new class
		
			x=xstart;
			do	{
				t=ystart;
				do {
					
					//here we put our tests. We check to see if each location is on the correct side of all four lines
					//this is my solution to the rhombus problem and it seems to work
					// . . . because I'm awesome, is the end of that sentence
					//test left
					lefto=(x3-x1)*(t-y1)-(x-x1)*(y3-y1);
					var isleft=lefto<=0;
					
					//test right
					righto=(x4-x2)*(t-y2)-(x-x2)*(y4-y2);
					var isright=righto>=0;
					//test top
					toppo=(x2-x1)*(t-y1)-(x-x1)*(y2-y1);
					if(topSlope>0)//test for positive or negative slope
					{
						var istop=toppo<=0;
					}
					else if(topSlope<0) { //we never have to worry about a slope of zero . . . the loop conditions take care of that
						
						var istop=toppo>=0;	
						
					}
					else {
						
						var istop=true;
					}
					
					//test bottom
					bottomo=(x4-x3)*(t-y3)-(x-x3)*(y4-y3);
					if(bottomSlope>0)//test for positive or negative slope
					{
						var isbottom=bottomo>=0;
					}
					else if(bottomSlope<0) {  //we never have to worry about a slope of zero . . . the loop conditions take care of that
						
						var isbottom=bottomo<=0;
						
					}
					else {
						var isbottom=true;
					}
					//alert(x+"bbb"+t+"top:"+toppo+"ppp"+istop+"bottom:"+bottomo+"pppp"+isbottom+"right:"+righto+"ppppp"+isright+"left:"+lefto+"ppppp"+isleft);
					if(istop === true && isbottom === true && isleft === true && isright === true) { //test all of our conditions
							//alert("okaytoo");
							jQuery(".x"+x+".y"+t).addClass(daclass);
							jQuery(".x"+x+".y"+t).addClass("mappedLocation");
						}
					
					t++;
					
				}while(t<yend+1);
				x++;
			}while(x<xend+1);
		
		
		
		
		
		
		
		return this;
	},
	makeSizeGrid: function(callback) { // a simple method to obtain make an image div retain the background image ratio
		var daimg = new Image();
		var passthis=jQuery(this).attr("id");
		thisguy = jQuery(this).css('background-image');
		thisguy=thisguy.substr(5);
		thisguy=thisguy.substr(0, thisguy.length-2);
		daimg.src = thisguy;
			daimg.onload = function()
						{
								dax=daimg.naturalWidth;
								day=daimg.naturalHeight;
								daratio=day/dax;
								var currentWidth=Math.floor(jQuery("#"+passthis).width());
								jQuery("#"+passthis).height(Math.floor(jQuery("#"+passthis).width()*daratio));
								jQuery.globalEval(callback());
						}
		
	},

});
