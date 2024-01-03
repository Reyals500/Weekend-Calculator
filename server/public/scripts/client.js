    let operator;

    console.log('client.js is sourced!');
    
    function handlerGetCalculations(){
        axios({
            method: "GET",
            url: '/calculations'
        }).then((response) => {
            //add in rendering latest answer and rendering history
            renderHistory(response.data);
            renderLastAnswer(response.data);
            console.log("Success", response.data);
        })
        .catch((error) => {
            console.log("Server Error", error);
        })
    }
    handlerGetCalculations()


    function handlePostRequest(event) {
        console.log("handlePostSubmit has been clicked")
        event.preventDefault()
        
        let numOne = document.getElementById('numOne').value
        let numTwo = document.getElementById('numTwo').value
        
        axios.post("/calculations", {
                numOne: numOne,
                numTwo: numTwo,
                operator: operator
        })
      .then((response) =>{
        console.log('successfully submitted', response )
        //add Get history and handlerClear
        handleClear(event);
        handlerGetCalculations();
      })
      .catch((error) =>{
        alert("Ya goofed")
        console.log('error', error)
      });
      
      }
      function operatorEvent(event){
        event.preventDefault()
        operator = event.target.textContent;
        console.log("This is the new operator", operator);
      }
      function handleClear(event) {
        event.preventDefault();
        document.getElementById("numOne").value = '';
        document.getElementById("numTwo").value = '';
        operator = undefined;
      }
      function renderLastAnswer(history) {
        console.log("Rendering Answer");
        const lastHistory = history[history.length - 1];
        console.log("Last item:", lastHistory);
        document.getElementById("recentResult").innerText = lastHistory.result;
      }

      // function renderHistory(history) {
      //   console.log("Rendering History...");
      //   let placeToRender = document.getElementById("resultHistory");
      //   placeToRender.innerHTML = '';
      //   history.forEach(item => {
      //   placeToRender.innerHTML += `
      //   <li>${item.numOne} ${item.operator} ${item.numTwo} = ${item.result}</li>`;
      //   });
      // }
      function renderHistory(history) {
        console.log("Rendering History...", history);
        let placeToRender = document.getElementById("resultHistory");
        placeToRender.innerHTML = '';
        for(let item of history){
        placeToRender.innerHTML += `
        <li>${item.numOne} ${item.operator} ${item.numTwo} = ${item.result}</li>`;
        };
      }