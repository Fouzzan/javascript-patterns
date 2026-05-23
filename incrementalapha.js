let array = [ "A" , "B" , "C" , "D" , "E"];

for (let i = 0; i<5; i++)
{
    let result = "";
    for (j = 5; j > i; j--)
    {
        result += array[5 - j]
    }
    console.log(result);
}


