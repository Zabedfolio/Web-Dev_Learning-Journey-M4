console.log('external file');
function makeYellow(){
            document.body.style.backgroundColor = 'yellow'
        }


const btnMakeBlue = document.getElementById('btn-make-blue');
        // console.log(btnMakeBlue);
        btnMakeBlue.onclick = function makeBlue(){
            document.body.style.backgroundColor = 'blue'
        }


const btnMakeP = document.getElementById('btn-purple');
        btnMakeP.onclick = makeP;

        function makeP(){
            document.body.style.backgroundColor = 'purple';
        }