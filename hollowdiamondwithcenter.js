let n = 5;
let star = "* ";
let space = " ";
for ( let i = 1; i < 5; i++)
{
 
    if (i == 1)
    {
        console.log(space.repeat(n) + star);
    }
    let result = space.repeat((n-i)) + star + space.repeat(2*(i-1)) + star;
   console.log(result);
   

  
}
console.log(star.repeat(6))
for (let j = 5; j >= 1; j--)
{
    if (j == 1)
    {
        console.log(space.repeat(n) + star);
        break;
    }
    let result = space.repeat((n-j)) + star + space.repeat(2*(j-1)) + star;
   console.log(result);
}