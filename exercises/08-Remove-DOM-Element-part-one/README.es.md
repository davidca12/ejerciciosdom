# `08` Remove DOM Element Part One


Si deseas eliminar un elemento del DOM, debes usar la función removeChild.
El desafío detrás de esta función es que debe llamarse desde el padre del elemento que desea eliminar. Por ejemplo, en este código:
```html
    <ul>
        <li>First element</li>
        <li>Second element</li>
        <li>Third element</li>
    </ul>
```
Para eliminar el segundo elemento, necesito la función removeChild desde el padre UL, pero pasando, como parámetro, el `<li>` que quiero eliminar.

Algo como esto:
```js
    let element = document.querySelector("#element-id");
    element.parentNode.removeChild(element);
```
## 📝 Instrucciones:

Elimine el `#secondItem` de la UL que forma parte del HTML de este sitio web.