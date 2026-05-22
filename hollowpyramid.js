let n = 5;
let star = "* ";
let space = " ";
for ( let i = 1; i < 5; i++)
{
    if( i == 4)
   {
    console.log(space +  star.repeat(n));
    break;
   }
    if (i == 1)
    {
        console.log(space.repeat(n) + star);
    }
    let result = space.repeat((n-i)) + star + space.repeat(2*(i-1)) + star;
   console.log(result);
   

  
}