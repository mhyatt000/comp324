// handle user event for add button click


function travelNotes() {
    "use strict";

    let noteOutput = document.getElementById('note-output');
    let addNoteBtn = document.getElementById('add-note');
    let inputNote = document.getElementById('note-input');

    function createNote(input, output) {
        let p = document.createElement('p');
        let inputVal = inputNote.value;
        console.log(inputVal);
        let deleteButton = createButton('note-delete','x')

        if (inputVal !== ''){

            let noteText = document.createTextNode(inputVal);
            p.appendChild(noteText);
            noteOutput.appendChild(p);
            inputNote.value = '';

        }
    } // createNote

    addNoteBtn.addEventListener("click", () => {
        createNote();
    });

    inputNote.addEventListener("keypress", (e) => {
        if (e.keyCode === 13) createNote();
    });

} // travelNotes


let deleteAll = document.getElementById('notes-delete');

deleteAll.addEventListener("click", () => {

    deleteAll.parentNode.style.display = 'none';
    let notes = noteOutput.querySelectorAll('p');

    for (let note of notes) {
        note.remove();
    }

});

// style.visibility is different from style.display
// style.visibility == hidden ... cant see it but its still there
// style.display == none ... the element disappears

// function checkVisible(element) {
//     if (element.is(":hidden")) { element.fadeIn(); }
// }
// function checkVisible(node) {
//     if (node.style.display != 'block') {
//         node.style.display = 'block';
//         fadeIn(node);
//     }
// }

// let controls = document.getElementById('controls');
// checkVisible(controls)

function checkExist(element) {
    return element.length ? true : false ;
}

function createButton(buttonClass, buttonText) {
    return `<button class=${buttonClass} > ${buttonClass} </button>`
}

// load app
travelNotes();
