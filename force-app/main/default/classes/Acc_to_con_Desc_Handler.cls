public  class Acc_to_con_Desc_Handler {
   // Whenever the Description field on an Account is updated, I want the Description field of all related Contacts to 
   //be updated with the same value as the Account’s Description.
    public static void accMethod(list<Account> accList ,map<id,Account> accOldMap){
      map<id,Account> accDesc = new map<id,Account>();  
       for(Account acc : accList){        
        Account oldDesc = accOldMap.get(acc.id);
     if(acc.Description != null && acc.Description != oldDesc.Description){
        accDesc.put(acc.id,acc);
        }       
      }
List<Contact> conData = [SELECT AccountId, Description FROM Contact WHERE AccountId IN :accDesc.keySet()];
    list<contact> conList = new list<contact>(); 
     for(Contact con : conData){
     if(accDesc.containsKey(con.AccountId)){
       con.Description = accDesc.get(con.AccountId).Description;
       conList.add(con); 
      }
     }
    if(!conList.isEmpty()){
    update conList;
    }
  }
}