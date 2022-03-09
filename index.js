all = document.getElementById('all')

fetch('https://gnews.io/api/v4/search?q=example&token=3e3bfb752857325d619f8186d84d3b2d')
    .then(function (response) {
        return response.json();
    }) 
    .then(function (data) {
		const	news = data.articles
		news.forEach(element => {
		all.innerHTML += `    
		<div class="container">
		<div class="col-12 justify-content-center align-items-center shadow-lg p-3">
          <img class="w-100" src="${element.image}" alt="" />
					<a href="" >	<h5 class="text-center text-primary text-uppercase w-100"
					style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;"> ${element.title} </h5> </a>
					<div class="">
					<p class=""> ${element.description}</p>
						<p class=""> ${element.content}</p>
						<div class="me-auto">
						<a href="${element.url}" class="btn btn-primary"> Read more</a>
					 </div>
				</div>	`

				})
				});
