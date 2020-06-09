
      function validate() {
        var x = document.getElementById("formNome").value;
         if( x == "" ) {
            alert( "Please provide your name!" );
            document.formPrincipal.formularioNome.focus() ;
            return false;
         }
       }
