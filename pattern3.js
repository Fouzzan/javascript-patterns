let n = 5;
let star = "* ";
let space = "  ";
for ( let i = 1; i < 5; i++)
{
   let result = space.repeat((n-i)) + star.repeat(2*i - 1);
   console.log(result);
}
for (let j = 5; j >= 1; j--)
{
   let next = space.repeat((n - j)) + star.repeat(2*j - 1);
   console.log(next);
}