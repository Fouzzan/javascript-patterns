let space = " ";
let star = "*";
let midspace = "  ";


for (let i = 0; i < 2; i ++)
{

    let result = space.repeat(i) + star + midspace.repeat(3 - i) + star;
    console.log(result);
}

for (let j = 3; j > 0; j --)
{
    if (j == 3)
    {
        console.log(space.repeat(3) + star);
    }
    else
    {
        let result = space.repeat(j) + star + midspace.repeat(3 - j) + star;
    console.log(result);
    }
    
}