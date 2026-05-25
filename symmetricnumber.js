let n = 5;

for (let i = 1; i <= n; i++)
{
    let result = "";
    let total = (2* (n-i) + 1)

    for(let j = 1; j <= total; j++)
    {
        if(j <= total/2)
        {
            result += (j + i - 1 );
        }
        else
        {
            result += (i + total - j );
        }
    }

    console.log(result);




}