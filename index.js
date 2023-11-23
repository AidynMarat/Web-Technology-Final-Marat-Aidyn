$(document).ready(function() {
    $('#scrollButton').on('click', function() {
        var targetOffset = $('#T1').offset().top;
        $('html, body').animate({
            scrollTop: targetOffset
        }, 300);
    });
});
$(document).ready(function() {
    $('#scrollButton2').on('click', function() {
        var targetOffset = $('#T2').offset().top;
        $('html, body').animate({
            scrollTop: targetOffset
        }, 300);
    });
});
$(document).ready(function() {
    $('#scrollButton3').on('click', function() {
        var targetOffset = $('#T3').offset().top;
        $('html, body').animate({
            scrollTop: targetOffset
        }, 300);
    });
});



$(document).ready(function() {
    const toggleButton = $('#dess');
    const myDiv = $('#myDiv1');
    const myAudio = $('#myAudio');

    toggleButton.on('click', function() {
        myAudio.trigger('play');
        myDiv.fadeToggle(1000, function() {
            myAudio.trigger('pause');
            myAudio[0].currentTime = 0;
        });
    });
});

$(document).ready(function() {
    const toggleButton = $('#dish');
    const myDiv = $('#myDiv2');
    const myAudio = $('#myAudio1');

    toggleButton.on('click', function() {
        myAudio.trigger('play');
        myDiv.fadeToggle(2000, function() {
            myAudio.trigger('pause');
            myAudio[0].currentTime = 0;
        });
    });
});

$(document).ready(function() {
    const toggleButton = $('#drink');
    const myDiv = $('#myDiv3');
    const myAudio = $('#myAudio2');

    toggleButton.on('click', function() {
        myAudio.trigger('play');
        myDiv.fadeToggle(2000, function() {
            myAudio.trigger('pause');
            myAudio[0].currentTime = 0;
        });
    });
});

$(document).ready(function() {
    $('#myImage').on('click', function() {
        const mDiv = $('#mDiv');
        const mAudio = $('#mAudio');
        mAudio.trigger('play');
        mDiv.fadeToggle(2000, function() {
            myAudio.trigger('pause');
            myAudio[0].currentTime = 0;
        })
        var $this = $(this);
        var originalSrc = $this.attr('src');
        var newSrc = 'https://effects1.ru/gallery/Klipart/Dizajn/bliki/blik-17-0.png';
        $this.attr('src', newSrc);
        setTimeout(function() {
            $this.attr('src', originalSrc);
        }, 70);
    });
});




const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

const ticketQuantity = document.getElementById("ticketQuantity");
const incrementButton = document.getElementById("incrementTickets");
const decrementButton = document.getElementById("decrementTickets");

let count = 0;

incrementButton.addEventListener("click", () => {
    count++;
    updateTicketCount();
});

decrementButton.addEventListener("click", () => {
    if (count > 0) {
        count--;
        updateTicketCount();
    }
});

function updateTicketCount() {
    ticketQuantity.value = count;
}



function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
