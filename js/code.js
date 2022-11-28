// Sending Request to Server // 
fetch("../data/data.json")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    //  console.log(data);
     console.table(data.eventualities);
});
