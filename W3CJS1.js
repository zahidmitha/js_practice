<script>

document.write("<h1>This is a heading</h1>");

document.write("<p>This is a paragraph</p>");

</script>

<button type="button" onclick="alert('Welcome!')">Click me!</button>

<p id="demo">
This content will change
</p>

<script>
function myFunction()
{
	x = document.getElementById("demo"); //Find the element
	x.innerHTML = "Hello Javascript!"; //Change the content

}

</script>

<button type="button" onclick="myFunction()">Click Me!</button>

<script>

alert("My First JS");

</script>

 	

