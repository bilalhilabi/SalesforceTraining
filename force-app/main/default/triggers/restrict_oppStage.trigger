trigger restrict_oppStage on Opportunity (before update) {
 restrict_oppStage_Handler.restrictUsers(Trigger.new,Trigger.oldMap);   

}