$(function () {
    console.log('working');
    function userName() {

        var keyword = document.getElementById('reply').value;
        var show = document.getElementById('showme').innerHTML = ' ';
        var submit = document.getElementById('submit');

        if (keyword != "" && keyword != null) {
            $('#showme').text(" " + keyword);

        } else {
            $('#showme').text(" " + "Guest");
        };
    }
    document.getElementById('submit').addEventListener('click', userName, false);
})
