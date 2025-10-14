public  class restrict_oppStage_Handler {
    public static void restrictUsers(list<opportunity>oppList,map<id,opportunity>oppOldMap) {
     set<id> managerIdsData = new set<id>();   
     for(opportunity oppRec : oppList){
        managerIdsData.add(oppRec.ownerId);
     }
     map<id,user> managerMap = new map<id,user>([SELECT managerId FROM User WHERE Id IN :managerIdsData]);   
    Id currUserid = UserInfo.getUserId();   
     set<id> adminId = new map<id,user>([SELECT Id FROM User WHERE Profile.Name = 'System Administrator']).keyset();   
     for(opportunity op : oppList){
      Id oppManagerIds = managerMap.get(op.ownerId).managerId;  
      opportunity oldStage = oppOldMap.get(op.id);  
      if(oldStage.stageName == 'Closed Won' && op.StageName != oldStage.StageName  && currUserid != oppManagerIds  && !adminId.contains(currUserid)){
         op.addError('Only Opportunity Owner Manager & System Admin can change the Stage');
      }
     }

    }
}