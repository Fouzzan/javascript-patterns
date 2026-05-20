let n = 9;
let star = "* ";
let space = "  ";
for ( let i = 1; i < 5; i++)
{
   let result = space.repeat((n-i)) + star.repeat(2*i - 1);
   console.log(result);
}