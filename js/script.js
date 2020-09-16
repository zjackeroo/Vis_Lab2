// TODO: load the dataset 
let disney;
fetch('./data/attractions.json')
  .then(response => response.json())
  .then(data => {
		disney = data;
        console.log('disney - (a)', disney);
        filterData("all");
	});
console.log('disney - (b)', disney);  

function filterData(category) {

    console.log('current category is ', category);

    // category = "Visitors";

	/* **************************************************
	 *
	 * TODO: filter attractions by the selected category
	 * TODO: filter top 5 attractions
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/

    // Filter by category
    var disney_cat;
    if (category === 'all') {
        disney_cat = disney;
    } else {
        disney_cat = disney.filter(d => d.Category === category);
    }
    console.log('categorized disney ', disney_cat);

    // Filter by visitor count
    property = "Visitors";
    function sortByProperty(property){  
        return function(a,b){
           if(a[property] > b[property])  
              return -1;
           else if(a[property] < b[property])  
              return 1;
           return 0;
        }
    }
    disney_cat.sort(sortByProperty(property));
    console.log('sorted disney ', disney_cat);

    // Filter top 5
    const disney5 = disney_cat.slice(0,5);
    console.log('filtered disney ', disney5);

    // Render bar chart
    renderBarChart(disney5);
}

// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category
let sc = document.querySelector('#attraction-category');
sc.addEventListener('change', (event)=>{
    console.log('Current event.target.value is: ', event.target.value);
    filterData(event.target.value);
});
// sc.addEventListener('change', filterData(event.target.value));