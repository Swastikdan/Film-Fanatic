const movietitle = "Dungeons & Dragons: Honor Among Thieves jlnvjknvjsnvsj" 
const maxChars = 20;
const truncatedTitle = result.title.length > maxChars ? result.title.substring(0, maxChars) + ".." : result.title;

document.getElementById("title").textContent = truncatedTitle;


console.log(displayTitle);