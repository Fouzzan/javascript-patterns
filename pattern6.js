let fstr = "* ";
let bstr = " *";
let space = "  ";
let n = 9;

for (let i = 1; i <= 5; i++)
{
    let result = fstr.repeat(i) + space.repeat(n - (i*2 - 1)) + bstr.repeat(i);
    console.log(result);
}
for (let j = 4; j >= 1; j--)
{
    let next = fstr.repeat(j) + space.repeat(n - (j*2 - 1)) + bstr.repeat(j);
    console.log(next);
}