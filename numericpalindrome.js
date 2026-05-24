

let n = 5;

for (let i = 1; i <= 5; i++)
{
    let result= "";

    for (let j = 1; j <= 2 * n-1; j++)
    {
        let start = (n - i + 1);
        let end = (n + i - 1);
        if (j < start || j > end) 
        {
            result += " ";
        }
        else if( j <= n )
        {
            result += (n - j );
        }
        else
        {
            result += ( j - n );
        }
    }
    console.log(result);
   
   
}