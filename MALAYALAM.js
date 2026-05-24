let array = [ "M", "A" , "L" , "A" , "Y" , "A" ,"L" , "A" , "M"];

for (let i = 0; i<9; i++)
{
    let result = "";
    for (j = 0; j <= i; j++)
    {
        result += array[j];
    }
    console.log(result);
}