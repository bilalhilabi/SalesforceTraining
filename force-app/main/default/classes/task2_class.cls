public class task2_class {
   @AuraEnabled 
   public static list<Account> createAccount(string acName , string acNo , string biladd , string acDes){
   list<Account> exisAccount = [SELECT Id,Name FROM Account where name=:acName];
    list<Account> acclist = new list<Account>(); 
    Account acc = new Account();
    if(!exisAccount.isEmpty()) {
        acc.Id = exisAccount[0].Id;
    }
     acc.name = acName;
     acc.AccountNumber = acno;
     acc.Description = acDes;
     acc.BillingCity = biladd;
     acclist.add(acc); 

     if(!acclist.isEmpty()){
       upsert accList; 
     }
    
  return acclist;
 }
}