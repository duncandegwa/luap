const apiKey = 'YOUR_API_KEY';
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

const newsContainer = document.querySelector('.news');

fetch(apiUrl)
	.then(response => response.json())
	.then(data => {
		const articles = data.articles;
		articles.forEach(article => {
			const card = document.createElement('div');
			card.classList.add('card');
			card.addEventListener('click', () => window.open(article.url, '_blank'));
			card.innerHTML = `
				<img src="${article.urlToImage}" alt="${article.title}">
				<h2>${article.title}</h2>
				<p>${article.description}</p>
			`;
			newsContainer.appendChild(card);
		});
	})
	.catch(error => console.log(error));