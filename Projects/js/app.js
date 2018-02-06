// the "onload" event is triggered when the window object has fully loaded all the elements on the page. (or at least, when it thinks it has).
window.onload = init();

function init() {
    var selColorList = document.getElementById('sel_color_list');

    // EventTarget.addEventListener() takes an event keyword, and a function representing the action to take when
    // the event is triggered.
    selColorList.addEventListener('select', function() {
        var divColorBox = document.getElementById('div_color_box');
        divColorBox.style.backgroundColor = selColorList.selection;
    });

}
