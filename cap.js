let char = ['mario','yoshi','dk']


for (let i = 0; i < char.length; i++) {
    if (typeof char[i] === 'string') {
        char[i] = char[i].toUpperCase();
        console.log(char[i])
    }
}
<!DOCTYPE html>
<html>
<head>
	<title>jQuery Crash Course | DOM Manipulation</title>
	<script src="https://code.jquery.com/jquery-3.1.0.min.js"></script>
	<style>
		body{
			font-size: 17px;
			font-family: arial;
			background: #f4f4f4;
			line-height: 1.5em;
		}
		header{
			background:#333;
			color:#fff;
			padding:20px;
			text-align: center;
			border-bottom: 4px #000 solid;
			margin-bottom: 10px;
		}
		#container{
			width:90%;
			margin:auto;
			padding:10px;
		}
		.myClass {
			color:blue;
			background:black;
		}
	</style>
</head>
<body>
	<header>
		<h1>jQuery Crash Course | DOM Manipulation</h1>
	</header>
	<div id="container">
	<button id="btn1">Button 1</button>
	<p class="para1">This is a paragraph</p>
	<p class="para2">This is another paragraph</p>
	<div id="myDiv"></div>
	<input type="text" id="newItem">
	<ul id="list">
		<li>List Item 1</li>
		<li>List Item 2</li>
		<li>List Item 3</li>
		<li>List Item 4</li>
	</ul>
	<a href="http://google.com">Google</a>
	<ul id="users"></ul>
	</div>

	<script>
		$(document).ready(function(){
			//$('p.para1').css('color', 'red');
			//$('p.para1').css({color:'red',background:'#ccc'});
			//$('p.para2').addClass('myClass');
			//$('p.para2').removeClass('myClass');
			//$('#btn1').click(function(){
				//$('p.para2').toggleClass('myClass');
			//});

			
			$('#myDiv').text('Hello World');
			$('#myDiv').html('<h3>Hello World</h3>');
			alert($('#myDiv').text());
			$('ul').append('<li>Append List Item</li>');
			$('ul').prepend('<li>Prepend List Item</li>');
			$('.para1').appendTo('.para2');
			$('.para1').prependTo('.para2');
			$('ul').before('<h4>Hello</h4>');
			$('ul').after('<h4>World</h4>');
			$('ul').empty();
			$('ul').detach();
			$('a').attr('target', '_blank');
			alert($('a').attr('href'));
			$('a').removeAttr('target');
			
			//$('p').wrap('<h1>');
			//$('p').wrapAll('<h1>');

			$('#newItem').keyup(function(e){
				var code = e.which;
				if(code == 13){
					e.preventDefault();
					$('ul').append('<li>'+e.target.value+'</li>');
				}
			});

			/*
			var myArr = ['Brad', 'Kelley', 'Nate', 'Jose'];
			$.each(myArr, function(i, val){
				$('#users').append('<li>'+val+'</li>');
			});
			*/

			var newArr = $('ul#list li').toArray();
			$.each(newArr, function(i, val){
				console.log(val.innerHTML);
			});
		});
	</script>
</body>
</html>