const cafehtml = document.getElementById("cafe-list");
const form = document.getElementById("add-cafe-form");

function render(element){
    let li=document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');
    let cross=document.createElement('div');

    li.setAttribute('row-id',element.id);
    name.textContent=element.data().name;
    city.textContent = element.data().city;
    cross.textContent='X';
    console.log(element.data().city);
    li.appendChild(name);
    li.appendChild(city);
    li.appendChild(cross);
    cafehtml.appendChild(li);
    

cross.addEventListener('click',(e)=>{
    let id=e.target.parentElement.getAttribute('row-id');
    db.collection('cafes').doc(id).delete();
})






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


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    db.collection('cafes').add({
        name:form.name.value,
        city:form.city.value
    });
    form.name.value='';
    form.city.value='';
    //this is just to save data
//data saved is not rerendered
})
