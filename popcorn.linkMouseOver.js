// Pattern 1 from popcorn js API
(function (Popcorn)
{  
	Popcorn.plugin( "linkMouseOver" , function(options)
	{
		var $link, $daddy, $overHtml;
		
		// create link element
		$link = document.createElement('a');
		$link.href = options.href;
		$link.innerText = options.text;
		
		// create hidden element displayed when the mouse over the link
		$overHtml = document.createElement('div');
		$overHtml.innerHTML = options.html;
		
		// retrieve tag to inject code
		$daddy = document.querySelector(options.targetTag);
		
		/**
		 * Called when the link get overed 
		 */
		var overLink = function ()
		{
			$overHtml.style.display = 'block';
		};
		
		/**
		 * called when mouse leaves the link 
		 */
		var outLink = function ()
		{
			$overHtml.style.display = 'none';
		};
		
		return {
			start: function()
			{
				// add the link and the html to the parent element
				$daddy.appendChild($link);
				$overHtml.style.display = 'none';
				$daddy.appendChild($overHtml);
				// add listener to the link
				$link.addEventListener('mouseover', overLink, false);
				$link.addEventListener('mouseout', outLink, false);
			},
			end: function()
			{
				// make the parent element empty
				$daddy.innerHTML = '';
				// remove listener
				$link.removeEventListener('mouseover', overLink, false);
				$link.addEventListener('mouseout', outLink, false);
			}
		};
	});
})(Popcorn);