export const cssString = (css) => {
    let result = '';
    for (const selector in css) {
        let cssProps = '';
        for (const property in css[selector]) {
            if (css[selector][property] && css[selector][property].length > 0) {
                cssProps += property + ':' + css[selector][property] + ';';
            }
        }
        result += '' !== cssProps ? selector + '{' + cssProps + '}' : '';
    }
    return result;
}