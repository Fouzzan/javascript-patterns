let star = "*";
let space = " ";

n = 9;
for (let i = 1; i <= n; i++)
{
    
    for(let j = 1; j <= 10; j++)
    {
        if(i<= 5){
            if(j <= i){
                process.stdout.write(star);
            }
            else if(j <= (n-i) + 1){
                process.stdout.write(space);
            }
            else{
                process.stdout.write(star);
            }
            
        }
        else{

             if(j <= (n+1) - i){
                process.stdout.write(star);
            }
            else if(j <= ((n+1) - i)+(i - ((n+1)/2))*2){
                process.stdout.write(space);
            }
            else{
                process.stdout.write(star);
            }
        }
        }
         console.log("");

        
    }

  
