/**
 * Prints the integers from 1 to 100
 * But:
 *  - for multipes of three, print Fizz (insted of the number)
 *  - for multipes of five, print Buzz (insted of the number)
 *  - for multipes of both three and five, FizzBuzz (instead of the number)
 */

// for( x = 1 ; x < 101 ;  x++ ){
//     let result = '';
//     if( x % 3 == 0 ) result = 'Fizz'
//     if( x % 5 == 0 ) result = 'Buzz'
//     if( x % 3 == 0 && x % 5 == 0 ) result = 'FizzBuzz'
//     if( result == '' ) result = x.toString();
//     console.log(result);
// }

for( x = 1 ; x < 101 ;  x++ ){
    let result = '';
    if( x % 3 == 0 ) result += 'Fizz'
    if( x % 5 == 0 ) result += 'Buzz'
    if( result == '' ) result = x.toString();
    console.log(result);
}