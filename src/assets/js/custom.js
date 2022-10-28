// Change body background to primary color, page specific
switch (window.location.pathname) {
  case '/':
    $('#page-top').addClass('bg-primary');
    break;
  default:
  // code block
}

// Hide alerts after 5 seconds
 $(document).ready(function () {          

            setTimeout(function() {
                $('.alert').slideUp("slow");
            }, 5000);
});