document.addEventListener('DOMContentLoaded', function() {
    const btn_open_modal_phone = document.querySelector('#js-modal-phone-open');
    const elemModal_phone = document.querySelector('#modal-tel');
    let modal_phone;
    if(elemModal_phone){
     modal_phone =  new bootstrap.Modal(elemModal_phone);
    btn_open_modal_phone.addEventListener('click', function() {
      modal_phone.show(); 
    })
}
    const elemModal_notification = document.querySelector('#modal-notification');
    let modal_notification;
    if(elemModal_notification) {
        modal_notification = new bootstrap.Modal(elemModal_notification);
    }
     
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/;
        
        function serializeForm(formNode) {
           
           
          const { elements } = formNode
          const data = Array.from(elements)
            .filter((item) => !!item.name)
            .map((element) => {
              const { name, value } = element
        
              return { name, value }
            })
          data.forEach((el) =>{
            if(el.name == "phone"){
              if(el.value.match(phoneno)){
               
                if(modal_phone != undefined){
                    modal_phone.hide()
                }
                modal_notification.show();
              }
              else {
                alert("Не корректно введенный номер")
              }
            }
          })
          
        }
        
       
        const headerForm = document.getElementById('number_tel_header');
        const applicationForm = document.getElementById('application-form');
        const catalogForm = document.getElementById('catalog-form');
        const modalForm =  document.getElementById('modal-form');
        if(headerForm){
        headerForm.addEventListener('submit', (event)=> {
            event.preventDefault();
            serializeForm(headerForm);
            })
        }
        if(applicationForm){
            applicationForm.addEventListener('submit', (event)=> {
                event.preventDefault();
                serializeForm(applicationForm);
            })
        }
        if(catalogForm) {
            catalogForm.addEventListener('submit', (event)=> {
                event.preventDefault();
                serializeForm(catalogForm);
            })
        }
        if(modalForm) {
            modalForm.addEventListener('submit', (event)=> {
                event.preventDefault();
                serializeForm(modalForm);
            })
        }
})