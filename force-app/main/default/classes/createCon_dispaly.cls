public with sharing class createCon_dispaly {
   @AuraEnabled 
   public static void creaData(Map<string,object>jsdata){
    system.debug(jsdata);
    list<contact> conlist = new list<contact>();
     contact con = new contact();
     con.FirstName = (string)jsdata.get('pfname');
     con.LastName = (string)jsdata.get('plname');
     con.MailingState = (string)jsdata.get('pcity');
     conlist.add(con);
     if(!conlist.isEmpty()){
        insert conlist;
     }
     system.debug('contact is created'+con.id);
   }
}