for (let i = 1; i <= 5; i++)
{
    let result = "";
    for (let j=1; j<= i; j++)
    {
        if( (i + j) %2 == 0)
        {
            result += "1";
        }
        else
        {
            result += "0";
        }
        
    }
    console.log(result);
}