const cafehtml = document.getElementById("cafe-list");
function render(element){
    let li=document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');

    li.setAttribute('row-id',element.id);
    name.textContent=element.data().name;
    city.textContent = element.data().city;
    console.log(element.data().city);
    li.appendChild(name);
    li.appendChild(city);

    cafehtml.appendChild(li);
    }

//our data is in collection called cafe
//use get method to fetch data
//get is asynchronous
//our data(values) is in the form of array in docs property of fetched data 
//we cycle through the array and

db.collection('cafes').get().then((snapshot) => {

    snapshot.docs.forEach(doc => {
        // console.log(doc.data());
        render(doc);
    })
})
