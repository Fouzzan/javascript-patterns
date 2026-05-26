let n = 9;
let star = "*";
let space = " ";

for( let i = 1; i <= n; i++)
{

    for (let j= 1; j <= n; j++){
        if(i<= (n+1)/2)
        {
            if (j <= (((n+1)/2)-i)){
            process.stdout.write(space);
        }
        else if (j <= (((n+1)/2)-i) + (2*i - 1)){
            process.stdout.write(star);
        }
        }

        else{
            
            if(j <= (i -((n+1)/2)))
            {
                process.stdout.write(space);
            }
            else if(j <= (i -((n+1)/2)) + (((n-i)*2)+ 1))
            {
                process.stdout.write(star);
            }


        }

        }
        console.log("");
}
        
    

   