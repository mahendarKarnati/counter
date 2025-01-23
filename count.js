let displayValue=document.getElementById("counterValue");
            function onIncrement(){
                let previousValue=displayValue.textContent;
                let updatedValue=parseInt(previousValue)+1;
                if(updatedValue>0){
                    displayValue.style.color="green";
                }
                else if(updatedValue==0){
                    displayValue.style.color="black";
                }
                else{
                    displayValue.style.color="red";
                }
                displayValue.textContent=updatedValue;
            }
            function reset(){
                displayValue.textContent=0;
                displayValue.style.color="black";
            }
            function onDecrement(){
                let previousValue=displayValue.textContent;
                let updatedValue=parseInt(previousValue)-1;
                if(updatedValue<0){
                    displayValue.style.color="red";
                }
                else if(updatedValue==0){
                    displayValue.style.color="black";
                }
                else{
                    displayValue.style.color="green";
                }
                displayValue.textContent=updatedValue;
            }