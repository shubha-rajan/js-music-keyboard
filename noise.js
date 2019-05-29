$(document).ready( function() {
  $('.instrument').on('click', 'button', function(event) {
    classArray = $(this).attr("class").split(' ');
    const note = _.last(classArray)
    $(`#${note}Audio`).get(0).play();
  });
  $('.instrument').on('click', 'button', function(event) {
    classArray = $(this).attr("class").split(' ');
    const note = _.last(classArray)
    $(`#${note}Audio`).get(0).play();
  });
  $('body').keypress((event) => {
    note = event.key;
    const notes = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
    if (notes.includes(event.key)) {
      $(`#${note}Audio`).get(0).play();
    }
  });
});
