function getTutorials()
{
    fetch('http://localhost:8080/api/adel/fetouni/all')
      .then(response => response.json())
      .then(json => {
        json.forEach(element => {
            let option = document.createElement('option')
            option.value=element._id;
            option.innerHTML=element.title
            document.getElementById("ddl_tutorial").appendChild(option)
            
        });
      })

}

getTutorials();