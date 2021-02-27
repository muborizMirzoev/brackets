module.exports = function check(str, bracketsConfig) {
    let brackets = bracketsConfig.map(elem => elem.join(""));
    for (let i = 0; i < brackets.length; i += 1) {
        if (str.includes(brackets[i])) {
            str = str.replace(brackets[i], "");
            i = -1;
        }
    }
    return (str) ? false : true;
}
