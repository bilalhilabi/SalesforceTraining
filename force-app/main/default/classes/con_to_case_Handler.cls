public class con_to_case_Handler{
//Whenever a Contact is created, automatically 
 //create a related Case and populate the ContactId and AccountId fields on the Case.

    public static void createCase(list<contact>conRec){
     list<case> caseList = new list<case>();   
     for(contact con : conRec){
       Case csRec = new Case();
       csRec.contactId = con.id;
       csRec.AccountId = con.AccountId;
       csRec.Status = 'New';
       csRec.origin = 'Web';
       caseList.add(csRec);
     }
     if(!caseList.isEmpty()){
     insert caseList;
    }
  } 
}