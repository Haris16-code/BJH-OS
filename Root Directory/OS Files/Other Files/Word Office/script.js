/*******************************************
 JavaScript by zeankun.dev (c)
 Protected with Apache Licence v2.0 and the
 GNU General Public License
*******************************************/

const editor = document.getElementById('editor')
var btnBold = document.getElementById("btnBold");
var btnItalic = document.getElementById("btnItalic");
var btnUnderline = document.getElementById("btnUnderline");
var btnStrike = document.getElementById("btnStrike");
var btnSubscript = document.getElementById("btnSubscript");
var str1 = 'New Document 1';
var pageClone = editor.cloneNode(true);
var spaceLeftScrub = document.getElementById("space-left-range");
var spaceRightScrub = document.getElementById("space-right-range");
var btnRemoveFormat = document.getElementById("btnRemoveFormat");
var btnSuperscript = document.getElementById("btnSuperscript");
var btnSubscript = document.getElementById("btnSubscript");
var btnAddPage = document.getElementById("btnAddPage");
var btnSpacing = document.getElementById("btnSpacing");
var spacingModal = document.getElementById("adjust");
var btnclose = document.getElementsByClassName("close")[0];
var btnCenter = document.getElementById("btnCenter");
var btnRight = document.getElementById("btnRight");
var btnLeft = document.getElementById("btnLeft");
var btnUndo = document.getElementById("btnUndo");
var btnRedo = document.getElementById("btnRedo")
var btnSave = document.getElementById("btnSave")
var btnDelete = document.getElementById("btnDelete")
var btnCopy = document.getElementById("btnCopy")
var btnPaste = document.getElementById("btnPaste")
var Bold = document.getElementById("Bold");
var Italic = document.getElementById("Italic");
var Underline = document.getElementById("Underline");
var Strike = document.getElementById("Strike");

// all ordinary text formatting
function cut(){
    document.execCommand("cut");
    event.preventDefault()
}
btnStrike.addEventListener("mousedown", function(event){
     
    document.execCommand("strikethrough");
    console.log("Strikethrough successful from right click");
    event.preventDefault();
     
});
Bold.addEventListener("mousedown", function(event){
     
    document.execCommand("bold");
    console.log("Bold formatted successful from right click");
    event.preventDefault();
 
});
Italic.addEventListener("mousedown", function(event){
     
    document.execCommand("italic");
    console.log("Italic formatted successful from right click");
    event.preventDefault();
     
});
Underline.addEventListener("mousedown", function(event){
     
    document.execCommand("underline");
    console.log("Underline formatted successful from right click");
    event.preventDefault();
     
});
btnCopy.addEventListener("mousedown", function(event){
    document.execCommand("copy");
    event.preventDefault()
})
btnPaste.addEventListener("mousedown", function(event){
    document.execCommand("paste");
    event.preventDefault()
})
btnDelete.addEventListener("mousedown", function(event){
    document.execCommand("delete");
    console.log("Delete successful");
    event.preventDefault();
});
btnRedo.addEventListener("mousedown", function(event){
    document.execCommand("redo");
    console.log("Redo successful");
    event.preventDefault();
});    
btnUndo.addEventListener("mousedown", function(event){
    document.execCommand("undo");
    console.log("Undo successful");
    event.preventDefault();
});
btnLeft.addEventListener("mousedown", function(event){
    document.execCommand("justifyLeft");
    console.log("Justify to the left successful");
    event.preventDefault();
});
btnRight.addEventListener("mousedown", function(event){
    document.execCommand("justifyRight");
    console.log("Justify to the right successful");
    event.preventDefault();
});
btnCenter.addEventListener('mousedown', function(event){
    document.execCommand("justifyCenter");
    console.log("Justify to the center successful");
    event.preventDefault();
});
btnSubscript.addEventListener("mousedown", function(event){
    document.execCommand("subscript");
    console.log("Subscript successful");
    event.preventDefault();
});
btnSuperscript.addEventListener("mousedown", function(event){    
    document.execCommand("superscript");
        console.log("Superscript successful");
    event.preventDefault();
     
});
btnRemoveFormat.addEventListener("mousedown", function(event){
     
    document.execCommand("removeFormat");
    console.log("Format remove successful");
    event.preventDefault();
          
});
btnStrike.addEventListener("mousedown", function(event){
     
    document.execCommand("strikethrough");
    console.log("Strikethrough successful");
    event.preventDefault();
     
});
btnBold.addEventListener("mousedown", function(event){
     
    document.execCommand("bold");
    console.log("Bold formatted successful");
    event.preventDefault();
 
});
btnItalic.addEventListener("mousedown", function(event){
     
    document.execCommand("italic");
    console.log("Italic formatted successful");
    event.preventDefault();
     
});
btnUnderline.addEventListener("mousedown", function(event){
     
    document.execCommand("underline");
    console.log("Underline formatted successful");
    event.preventDefault();
     
});
btnAddPage.addEventListener("mousedown", function(event) {
    document.getElementById("page").appendChild(pageClone);
    getComputedStyle(editor, pageClone);
});


// some functions
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

spaceLeftScrub.oninput = function() {
    editor.style.paddingLeft = spaceLeftScrub.value + 'px';
    document.getElementById('spacing-left').innerHTML = 'Spacing left: ' + editor.style.paddingLeft;
    console.log('editor left: ' + spaceLeftScrub.value + 'px')
}

spaceRightScrub.oninput = function() {
    editor.style.paddingRight = spaceRightScrub.value + 'px';
    document.getElementById('spacing-right').innerHTML = 'Spacing left: ' + editor.style.paddingRight;
    console.log('editor right: ' + spaceRightScrub.value + 'px')
}

function myFunction() {
    str1 = document.getElementById("title").value;
    var str2 = " - Kasius Type";
    if (str1 !='') {
        var res = str1.concat(str2);
    }
    else {
        str1 = 'Untitled';
        var res = str1.concat(str2);
    }
    document.getElementById("pageTitle").innerHTML = res;
    
}

btnSpacing.onclick = function() {
    spacingModal.style.display = "block";
}

btnclose.onclick = function() {
    spacingModal.style.display = "none";
}

window.onlick = function(event) {
    if (event.target == spacingModal) {
        spacingModal.style.display = "none";
    }
}

function saveDoc() {
    var a = document.body.appendChild(
        document.createElement('a')
    );
    a.download = str1 + '.html';
    a.href = 'data:text/html,' + editor.innerHTML;
    a.click();
}


function color() {
    console.log("Changed color")
    let color = document.getElementById("colorInput").value
    document.getElementById("editor").style.color = document.getElementById("colorInput").value;

}

function font() {
    console.log("Font changed")
    let font = document.getElementById("fontInput").value;
    document.execCommand('fontName', false, font);
    document.getElementById("fontInput").style.fontFamily = document.getElementById("fontInput").value
}

function size() {
    console.log("Font size changed");
    let fontSize = document.getElementById("fontsizeInput");
    document.getElementById("editor").style.fontSize = document.getElementById("fontsizeInput").value+"px"
};
// Warning before leaving the page (back button, or outgoinglink)
window.onbeforeunload = function() {
   return "Do you really want to leave our brilliant application?";
   //if we return nothing here (just calling return;) then there will be no pop-up question at all
   //return;
};

  const menu = document.getElementById('menu')
  const outClick = document.getElementById('out-click')

  editor.addEventListener('contextmenu', e => {
    e.preventDefault()

    menu.style.top = `${e.clientY}px`
    menu.style.left = `${e.clientX}px`
    menu.classList.add('show')

    outClick.style.display = "block"
  })

  outClick.addEventListener('click', () => {
    menu.classList.remove('show')
    outClick.style.display = "none"
  })
  function speichern() {
    var str1 = document.getElementById("title").value;
    if (str1.value = "") {
        str1.value = "Neues Dokument 1"
    }
    var str2 = " - Kasius Type";
    var res = str1.concat(str2);
    doc.save(document.getElementById("pageTitle").innerHTML = res + ".pdf");
  }

  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function showAccess() {
  document.getElementById("allAccess").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.accessbtn')) {
    var dropdowns = document.getElementsByClassName("access");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
