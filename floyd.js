let space = " ";
num = 1;

for (let i = 1; i <= 5; i++)
{
    let result = "";
    for (let j = 1; j <= i; j++)
    {
        result += num + " ";
        num++;
    }
    console.log(result);
    
}