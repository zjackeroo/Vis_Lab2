// TODO: load the dataset 
// let disney;
// fetch('../data/attractions.json')
//   .then(response => response.json())
//   .then(data => {
// 		disney = data;
// 		console.log('disney - (a)', disney);
// 	});

// console.log('disney - (b)', disney);  

let disney = [
        {
          "Location": "MAGIC KINGDOM at Walt Disney World, Lake Buena Vista, FL",
          "Category": "Theme Park",
          "Visitors": 18588000,
          "Entry": "Paid"
        },
        {
          "Location": "TOKYO DISNEYLAND, Tokyo, Japan",
          "Category": "Theme Park",
          "Visitors": 17214000,
          "Entry": "Paid"
        },
        {
          "Location": "DISNEYLAND, Anaheim, CA",
          "Category": "Theme Park",
          "Visitors": 16202000,
          "Entry": "Paid"
        },
        {
          "Location": "TOKYO DISNEY SEA, Tokyo, Japan",
          "Category": "Theme Park",
          "Visitors": 14084000,
          "Entry": "Paid"
        },
        {
          "Location": "EPCOT at Walt Disney World, Lake Buena Vista, FL",
          "Category": "Theme Park",
          "Visitors": 11229000,
          "Entry": "Paid"
        },
        {
          "Location": "DISNEYLAND PARK AT DISNEYLAND PARIS, Marne-La-Vallee, France",
          "Category": "Theme Park",
          "Visitors": 10430000,
          "Entry": "Paid"
        }
];

function filterData(category) {

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

    // Filter by visitor count
    function sortByProperty(property){  
        return function(a,b){
           if(a[property] > b[property])  
              return -1;
           else if(a[property] < b[property])  
              return 1;
           return 0;
        }
    }
    disney.sort(sortByProperty('Visitors'));
    // console.log('sorted disney ', disney);

    // Filter top 5
    let disney5 = disney.slice(0,5);
    // console.log('filtered disney ', disney5);

    // Render bar chart
    renderBarChart(disney5);
}

// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category

console.log(document.querySelector('#attraction-category'));

document.querySelector('#attraction-category').addEventListener('change', filterData());