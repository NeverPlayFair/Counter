let start = 0;


const number = document.querySelector('#value');
const btns = document.querySelectorAll(".button");

btns.forEach(function (button) {
    button.addEventListener('click', function(e){
    const styles = e.currentTarget.classList;
    if (styles.contains('reduce')) {
        start--;
    }
    else if (styles.contains("raise")) {
        start++;
    }
    else{
        start = 0;
    }
    if (start > 0) {
        number.style.color = "green";
      }
      if (start < 0) {
        number.style.color = "red";
      }
      if (start === 0) {
        number.style.color = "#222";
      }
      
    number.textContent = start;
    });

});
