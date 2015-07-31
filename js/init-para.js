(function($){
  $(function(){

    $('.button-collapse').sideNav();


    var $container = $('#masonry-grid');
    // initialize
    $container.masonry({
      columnWidth: '.col',
      itemSelector: '.col',
    });

    $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });

    $('.dropdown-button').dropdown({
      constrain_width: true, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true // Displays dropdown below the button
    }
  );

    $(document).ready(function(){
      $('.parallax').parallax();
    });

    var options = [
    {selector: '#project-list', offset: 400, callback: 'Materialize.showStaggeredList("#project-list")' },
  ];
  Materialize.scrollFire(options);


  }); // end of document ready
})(jQuery); // end of jQuery name space