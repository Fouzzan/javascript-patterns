let n = 9;
let star = "* ";
let space = "  ";

for (let j = 4; j >= 1; j--)
{
    let first = space.repeat((n-j)) + star.repeat(2*j - 1);
   console.log(first);
}



for ( let i = 1; i < 5; i++)
{
   let result = space.repeat((n-i)) + star.repeat(2*i - 1);
   console.log(result);
}