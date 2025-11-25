public with sharing class caseRecordClass {
   @AuraEnabled(cacheable=true)
   public static list<case> getCaseData(id caseId){
       return [SELECT Id,AccountId , ContactId FROM Case where id=:caseId];
   }
}