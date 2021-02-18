
/**
 * Longest ConsecutiveCharacter
 * 'AAAABBBCCCCCCCAAA' = > 'C'
 * 'FooBarBaa' => 'o'
 * '' => ''
 */

let a='AAAABBBCCCCCCCAAA'
let b ='FooBarBaa'
let c = ''

function maxStr(x){
    let result = ['', 0]; // pair of character and count
    for (let i = 0; i < x.length; '') {
        let start = i++;
        console.log('i1',i)
        while (i < x.length && x[i] === x[start]) i++; // Find end of series
        console.log('i22',i)
        if (i - start > result[1]) result = [x[start], i - start]; 
        console.log('i333',i)
    }
    return result;
}
console.log(maxStr(a));
// console.log(maxStr(b));
// console.log(maxStr(c));

