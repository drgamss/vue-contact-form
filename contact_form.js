(function(){

  new Vue({
    el: '#root',
    data: {
      clickedSubmit: false,
      contactInfo: {name: '', email: '', message: ''}          
    },
    methods: {
      SubmitForm: function(){
        this.clickedSubmit = true;
        if(this.allIsValid()){
          alert('All is valid! Pass data to server!')
        }        
      },
      allIsValid: function(){
        return (this.contactInfo.name.length > 2 && this.contactInfo.email.length > 0 && this.contactInfo.message.length > 0 && this.emailValid && this.containsOnlyEnLetters)
      }
    },
    computed: {
      emailValid: function(){
        var re = /\S+@\S+\.\S+/;
        return (this.contactInfo.email && re.test(this.contactInfo.email));
      },
      containsOnlyEnLetters: function(){
          var nameWithoutSpaces = this.contactInfo.name.replace(/ /g,'');
          return (nameWithoutSpaces.replace(/[^A-Za-z]/g, "").length) === nameWithoutSpaces.split('').length
      }  
    }
  })


}());


