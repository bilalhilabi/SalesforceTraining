public class wire_prac1_cls {
  @AuraEnabled(cacheable=true)  
  public static list<Case> sendCaseList(Id accid){
   list<case> cslist = [SELECT Id,CaseNumber , Subject ,AccountId, ContactId FROM Case where AccountId=:accid];
   return cslist;
  }  
}