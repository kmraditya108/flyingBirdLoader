# flyingBirdLoader

To use this bird fly loader, You have to follow such a simple steps as mentioned below:-

Important Notes :-

  1) keep the folder inside to the root js folder.
  2) To change the bird you can follow the below steps :
    
    a)in your index.js file define 2 global variable with blank value:
      var bird_loader_img_fly = ""; (This variable is to define flying bird)
      var bird_loader_img_standing = "";	(This variable is to show the standing bird)
    b) in ready function initiate the value for these both variable.
    
==================In HTML Page=========================
1) add jQuery library as a CDN or offline library.
    like:<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>

2) add a script after your index.js script to load this plugin
    <script src="js/flying_bird_loader/js/birdLoader.js"></script>

3) add an div element with id="loaderElement", 
   To link your page with the plugin, 
   eg :- div id="loaderElement"
		
4) add onload method to the body element for the page where you want this loader,
      
      eg:- body onload="addLoader(a,b,c,d,e)"
      
      Here :
      
			  
        a = animation delay, How long the bird will fly.
        b = after fly set the bird top position.(it will take the value in %).
        c = after fly set the bird left position.(it will take the value in %).
        d = define the bird size in height.(by default 66).
        e = define the bird size in width.(by default 85)
        
5) To make the bird fly, call the mentioned below function with defined arguments :

		flyTheBird(a, b);
			Here : 
				a = flying duration.
				b = While bird will sit, the sitting movement(birds are jumping here and there for that this value is.).
		
==================In JS Page==============================

1) No need to do anything	


==================In CSS Page==============================

1) add:-  @keyframes animtion_name{
			to{your_style} 
			from{your_style}
		}
		
		Like:
		
		@keyframes example{
			0%   {left:0px; bottom:0px; position:fixed;}
			100% {left:622px; bottom:518px;}
		}
