export function parseIndex (year) {
    let [num, era] = year.split(' ');
    num = parseInt(num);
    if (era == "BC") num = -num;
    return num;
}

export function getIndex (year) {
    let index = parseIndex(year);
    let margin = index - window.previousIndex;
    if (margin < 5) margin = 5;
    else if (margin > 750) margin = 750;

    window.previousIndex = index;
    return Math.ceil(margin * 1.25);
}