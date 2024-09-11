const input = document.querySelector("#phone");
        if(input) {
        window.intlTelInput(input, {
          utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.10/build/js/utils.js",
          initialCountry : "ru",
          separateDialCode: true,
        });
      }
      
        const input_modal = document.querySelector("#phone_modal");
        if(input_modal) {
        window.intlTelInput(input_modal, {
          utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.10/build/js/utils.js",
          initialCountry : "ru",
          separateDialCode: true,
         
        });
      }