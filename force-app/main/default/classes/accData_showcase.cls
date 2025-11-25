public with sharing class accData_showcase {
@AuraEnabled(cacheable=true)    
public static list<contact> conData(){
 list<contact> conDetails = [SELECT lastName ,Email FROM Contact where Email != null limit 20];
 return conDetails;
} 
}