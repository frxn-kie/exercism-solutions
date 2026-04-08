export function decodedValue(searchColors: string) {
return parseInt(colors.indexOf(searchColors[0]).toString() + colors.indexOf(searchColors[1]).toString());
}

export const colors: string[] = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]
