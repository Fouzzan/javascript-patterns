let star = "*";
let space = " ";
let k = 0;
n = 10;

for (let i = 1; i <= 5; i++)
{
    for(let j = 1; j <= 10 ; j++)
    {
     if (j <= 5)
    {
      if(j <= i)
      {
        process.stdout.write(star);
      }
      else
      {
        process.stdout.write(space);
      }
    }
    else
    {
        if(j > n - i)
      {
        process.stdout.write(star);
      }
      else
      {
        process.stdout.write(space);
      }

    }
   
}
 console.log("");
}