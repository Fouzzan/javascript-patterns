let n = 10;
let star = "*";
let space = " ";

for (let i = 1; i <= 5; i++)
{
    let result = star.repeat(i) + space.repeat(10 - 2*i) + star.repeat(i);
    console.log(result);
}