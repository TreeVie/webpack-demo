/**
 *  1. 无法立即体现，脚本的执行依赖于外部扩展库(external library)。
 *  2. 如果依赖不存在，或者引入顺序错误，应用程序将无法正常运行。
 *  3. 如果依赖被引入但是并没有使用，浏览器将被迫下载无用代码。


function component(){
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello','World'],' ');

    return element;
}

document.body.appendChild(component());

 */

import _ from 'lodash'
import './assets/style.css'

function component(){
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello','Webpack'],' ');
    element.classList.add('hello')

    return element;
}

document.body.appendChild(component());