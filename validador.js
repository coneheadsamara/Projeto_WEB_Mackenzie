<script type = "text/javascript">
   <!--
      // Form validation code will come here.
      function validate() {
        var x = document.getElementById("formNome").value;
         if( x == "" ) {
            alert( "Please provide your name!" );
            document.formPrincipal.formularioNome.focus() ;
            return false;
         }
         // if( document.myForm.EMail.value == "" ) {
         //    alert( "Please provide your Email!" );
         //    document.myForm.EMail.focus() ;
         //    return false;
         // }
         // if( document.myForm.Zip.value == "" || isNaN( document.myForm.Zip.value ) ||
         //    document.myForm.Zip.value.length != 5 ) {
         //
         //    alert( "Please provide a zip in the format #####." );
         //    document.myForm.Zip.focus() ;
         //    return false;
         // }
         // if( document.myForm.Country.value == "-1" ) {
         //    alert( "Please provide your country!" );
         //    return false;
         }
         return( true );
       }
   //-->
</script>
