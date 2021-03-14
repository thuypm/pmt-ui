export function trimNameFile(name) {
    if (name.length <= 20) return name;
    else return name.slice(0, 20) + "...";
}