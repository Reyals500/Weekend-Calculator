
    console.log('client.js is sourced!');
    handlerGetCalculations()
    
    function handlerGetCalculations(){
        axios({
            method: "GET",
            url: "/calculations"
        }).then((response) => {
            console.log("Sucess", response.data);
            document.getElementById('recentResult').innerHTML = `
                <section>${JSON.stringify(response.data)}</section>
            `
        })
        .catch((error) => {
            console.log("Server Error", error);
        })
    }
    function handlePostRequest(event) {
        console.log("handlePostSubmit has been clicked")
        event.preventDefault()
        
        //
        let numOne = document.getElementById('numOne').value
        let numTwo = document.getElementById('numTwo').value
        let result = numOne + numTwo
        
        axios({
        method: 'POST',
        url: '/calculations',
        data: {
            calcualtion: 
            {
                NumberOne: numOne,
                NumberTwo: numTwo,
                operator: '+',
                result: result
            },
        }
      })
      .then((response) =>{
        console.log('successfully submitted', response )
        
      })
      .catch((error) =>{
        console.log('error', error)
        
      })
      
      }
