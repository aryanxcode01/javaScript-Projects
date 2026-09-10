document.querySelector(".child").addEventListener
        ("click",(e)=>{
            e.stopPropagation()
            alert("child was clicked")
        })

        document.querySelector(".childContainer").addEventListener
        ("click",(e)=>{
            e.stopPropagation()
            alert("childcontainer was clicked")
        })

        document.querySelector(".container").addEventListener
        ("click",(e)=>{
            e.stopPropagation()
            alert("Container was clicked")
        })

        function getRandomColour(){
            let val1 = Math.ceil(0+Math.random()*255);
            let val2 = Math.ceil(0+Math.random()*255);
            let val3 = Math.ceil(0+Math.random()*255);
            return  `rgb(${val1} , ${val2} , ${val3})`
        }
        setInterval(()=>{
            document.querySelector(".childContainer").style.background= getRandomColour();
        }, 2000);

        setInterval(()=>{
            document.querySelector(".child").style.background= getRandomColour();
        }, 1000);

        setInterval(()=>{
            document.querySelector(".container").style.background= getRandomColour();
        }, 4000);