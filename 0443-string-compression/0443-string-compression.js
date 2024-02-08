/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let j = 0;
    let current = chars[0];
    let counter = 0;
    for(let i = 0; i <= chars.length ; i++){
        if(current === chars[i]){
            counter++;
        } else {
            chars[j] = current;
            if(counter > 1) {
                for (let digit of counter.toString()) {
                    chars[++j] = digit;
                }
            }
            j++;
            current = chars[i];
            counter = 1;
        }
    }
    return j;
};