let baidu = "./www.baidu.com";
let regExp = new RegExp("^http(s?)://(.*)$|^/[^/]\\s*(.*)$");
regExp = new RegExp("^./(.*)$");
let res = baidu.match(regExp);
console.log(regExp.test(baidu), "res", res);