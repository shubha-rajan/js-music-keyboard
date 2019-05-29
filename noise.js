$(document).ready( function() {

  $('.instrument').on('click', 'button', async function(event) {
    classArray = $(this).attr("class").split(' ');
    const note = _.last(classArray)
    $(`#${note}Audio`).get(0).pause();
    $(`#${note}Audio`).get(0).load();
    $(`#${note}Audio`).get(0).play();
  });
  $('body').keyup(async function(event) {
    note = event.key;
    const notes = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
    if (notes.includes(event.key)) {
      $(`#${note}Audio`).get(0).pause();
      $(`#${note}Audio`).get(0).load();
      $(`#${note}Audio`).get(0).play();
    }
  });
});
