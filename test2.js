const a = ["s", "o", "o", "s", "o", "o", "s", "o", "o", "s", "s"];
var index = 0;
function isCorrect() {
    if (a[index] === "s" && selectedSafe) {
        index++;
        return true;
    }
    else if (a[index] === "o" && selectedOut) {
        index++;
        return true;
    }
    index++;
    return false;
}
//safe, out, out,safe, out , out, safe, out, out, safe, safe