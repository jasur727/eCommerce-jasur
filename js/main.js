var elSiteFormSection = document.querySelector(".form");
var elSiteFormToggle = elSiteFormSection.querySelector(".form-wrapper__toggler");

if( elSiteFormToggle){
  elSiteFormToggle.addEventListener("click", function(){
    elSiteFormSection.classList.toggle("form-open");
  });
}
