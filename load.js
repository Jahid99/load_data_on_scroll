$(document).ready(function(){

			var flag = 0;

			$.ajax({

				type: "GET",
				url: "data.php",
				data: {
					'offset' : 0,
					'limit' : 3
				},
				success:function (data){
					$('body').append(data);
					flag += 3;
				}

			});

			$(window).scroll(function(){

				//alert($(window).scrollTop());

				if($(window).scrollTop() >= $(document).height() - $(window).height()){
					
					// console.log($(window).scrollTop());
					// console.log($(document).height());
					// console.log($(window).height());
					// console.log($(document).height() - $(window).height());
					

					$.ajax({

				type: "GET",
				url: "data.php",
				data: {
					'offset' : flag,
					'limit' : 3
				},
				success:function (data){
					$('body').append(data);
					flag+=3;
				}

			});

				}

			})



		});
