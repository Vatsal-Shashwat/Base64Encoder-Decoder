document.querySelector("encode").addEventListener("cick", (e) => {
    e.preventDefault();
});
document.querySelector("decode").addEventListener("cick", (e) => {
    e.preventDefault();
});


function encode() {
    data = document.getElementById('data').value;
    result = btoa(data);
    document.getElementById('result').value = result;
}
function decode() {
    data = document.getElementById('data').value;
    result = atob(data);
    document.getElementById('result').value = result;
}