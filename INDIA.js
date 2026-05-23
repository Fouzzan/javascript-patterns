let array = [ "I" , "N" , "D" , "I" , "A"];

for (let i = 0; i<5; i++)
{
    let result = "";
    for (j = 0; j <= i; j++)
    {
        result += array[j];
    }
    console.log(result);
}