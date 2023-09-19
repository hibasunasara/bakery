<script>
//		let sections= documents.querySelectorAll('section');
//	    let navLinks=documents.querySelectorAll('body nav li a');
//			
//			window.onscroll = () => {
//				sections.forEach(sec => {
//					let top=window.scrollY;
//					let offset=sec.offsetTop - 150;
//					let height=sec.offsetHeight;
//					let id=sec.getAttribute('id');
//					
//					if(top >= offset && top < offset + hight){
//						navLinks.forEach(links =>{
//							links.classList.remove('active');
//							document.querySelector('body nav li a
//												  [href*='+ id +']').classList.add('active');
//							
//						});
//					};
//					
//					
//				});
//				
//			};
			
		var btncontainer = document.getElementById("menu");
        var btns = btncontainer.getElementByClassName("btnn");

         for(var i =0; i<btns.length; i++){
			 btns[i].addEventListner('click',function(){
				 var current = document.getElementByClassName("active");
				 current[0].className=current[0].className.replace("active");
				 this.className += "active";
			 })
		 }
		
		</script>