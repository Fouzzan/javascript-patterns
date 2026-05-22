let space = " ";
num = 1;

for (let i = 1; i <= 5; i++)
{
    let result = "";
   
    for(j=1; j <= i; j++)
    {
        result += i;
        if (j != i)
        {
             result += "*";
        }
       
    }

    console.log(result);
   
    
    
    
    

    num++;
    
}