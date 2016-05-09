(function(){
   
   angular.module('reg-form', [])
    .component('registrationForm', {
        templateUrl: 'reg-form.html',
        controller: RegistrationController
    })
    
    function RegistrationController (){
        var rc = this;
        rc.test = 'Hello rc'
        rc.members = []
        
        rc.addMember = function(member){
            rc.members.push(member)
            console.log(rc.members)
            rc.newMember = {}
        }
        
        rc.addDependent = function(dependent){
            rc.newMember.dependents = rc.newMember.dependents || [] 
            rc.newMember.dependents.push(dependent)
            rc.newDependent = {}
        }
        
    }
    
    
}())