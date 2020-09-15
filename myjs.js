   AOS.init();
   setTimeout(function(){
     $(".eapp-whatsapp-chat-root-layout-component a").remove();
     $(".eapps-widget-toolbar-panel-wrapper").remove();
     $("eapps-widget-toolbar-panel-wrapper").remove();
     $(".yottie-widget-inner a").removeAttr("style");
     $(".yottie-widget-inner a").removeAttr("href");
     $(".yottie-widget-inner a").value(" ");
 }, 10000);
  $(document).ready(function() {
    $('#teamS1').on('click', function () {
       $(".showDesc").slideToggle('slow');
      });
  });
  window.onload = function() {
    Particles.init
  ({      	selector: '.background',
  color: ['#DA0463', '#404B69', '#DBEDF3'],
  connectParticles: true   });
  };
