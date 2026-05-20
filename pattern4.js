let str = " * "

for (let i = 1; i <= 5; i++)
{
    let result = str.repeat(i);
    console.log(result);
}
for (let j = 4; j >= 1; j--)
{
    let next = str.repeat(j);
    console.log(next);
}