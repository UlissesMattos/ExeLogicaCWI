
var valor = 8678677;

if (valor < 1024) {
    return console.log(`${valor.toFixed(2)} B`);

} else if (valor >= 1024 && valor < 1048576) {
    valor/=1024;
    return console.log(`${valor.toFixed(2)} KB`);

} else if (valor >= 1048576 && valor < 1073741824) {
    valor/=1024;
    valor/=1024;
    return console.log(`${valor.toFixed(2)} MB`);

} else if (valor >= 1073741824 && valor < 1099511627776) {
    valor/=1024;
    valor/=1024;
    valor/=1024;
    return console.log(`${valor.toFixed(2)} GB`);

} else if (valor >= 1099511627776 && valor < 1125899906842624) {
    valor/=1024;
    valor/=1024;
    valor/=1024;
    valor/=1024;
    return console.log(`${valor.toFixed(2)} TB`);

} else if (valor >= 1125899906842624 && valor < 1152921504606846976){
    valor/=1024;
    valor/=1024;
    valor/=1024;
    valor/=1024;
    valor/=1024;
    return console.log(`${valor.toFixed(2)} PB`);

} else if (valor >= 1152921504606846976 && valor < 1180591620717411203424) {
    valor/=1024;
    valor/=1024;
    valor/=1024;
    valor/=1024;
    valor/=1024;
    valor/=1024;
    return console.log(`${valor.toFixed(2)} EB`);

} else if (valor >= 1180591620717411203424 && valor < 1208925819614629174706176) {
    valor/=1024;
    valor/=1024;
    valor/=1024;
    valor/=1024;
    valor/=1024;
    valor/=1024;
    valor/=1024;
    return console.log(`${valor.toFixed(2)} ZB`);

} else if (valor >= 1208925819614629174706176 && valor < 1237940039285380274899124224) {
    valor/=1024;
    valor/=1024;
    valor/=1024;
    valor/=1024;
    valor/=1024;
    valor/=1024;
    valor/=1024;
    valor/=1024;
    return console.log(`${valor.toFixed(2)} YB`);

} else {
    return console.log('Digite um número válido!');
}