/**
 * Created by ram on 17-Jul-17.
 */
export default function printMe() {
    let div = document.createElement('div');
    div.innerHTML = 'I get called from print.js!';
    // console.log('I get called from print.js!');
    document.body.appendChild(div);
    throw Error ('ThrownError');
}