$(document).ready(function () {


    //----------------Part 1 ---------------------

    //Create a button with a pop up alert
    $('body').append('<button id="btnMe"> Click Me!</button>');

    $('#btnMe').click(function () {
        alert('Hi. Thank you for clicking me!');
    });

    //------------------Part 2 ---------------------

    //Creates a pop up alert with a message from a text box
    $('#btnSubmit').click(function () {
        alert($('input').val()); //why its not working with ---- alert($('#id').val()); 
    })

    //---------------- Part 3 -------------------------

    //Mousing over an empty <div> in order for its background to change color
    $('#divColor').on('mouseover', function () {
        $('#divColor').css({
            'background-color': 'red',
        });
    });
    $('#divColor').on('mouseout', function () {
        $('#divColor').css({
            'background-color': 'white',
        });
    });

    //---------------------Part 4 ------------------------

    //Creates a paragraph with a text and when clicked - changes the color of the text to a random color
    $('body').append('<p>This is a text that changes colors!</p>')
    $('p').on('click', function () {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        $('p').css({ color: 'rgb(' + r + ', ' + g + ', ' + b + ')' });
    });

    //------------------Part 5 --------------------------------

    //Creates a button which when clicked it will display 'name' warapped in 'span' inside a 'div'
    $('body').append('<button id="btnName">Click for my name!</button>');
    $('body').append('<div id="nameDiv"></div>');
    $('#btnName').one('click', function () {
        $('#nameDiv').append('<span>Pawel Jaskolski</span>')

    });

    //----------------- Part 6 -------------------------------

    //Displays a list of names nested inside a 'ul', each name is wrapped with 'li'.
    
    let friends = ['Olivia', 'George', 'Isla', 'Noah', 'Emily', 'Charlie', 'Grace', 'Jacob', 'Ava', 'Ella'];
    let i = 0;
    $('#btnFriend').on('click', function(){
        if(i < friends.length) {
            $('ul').append('<li>' + friends[i] + '</li>');
            i++;
        };
    });

    // $('#btnFriend').on('click', function () {
    //     for (let i = 0; i < friends.length; i++) {
    //         $('ul').append('<li>' + friends[i] + '</li>')
    //     }
    // });
});
