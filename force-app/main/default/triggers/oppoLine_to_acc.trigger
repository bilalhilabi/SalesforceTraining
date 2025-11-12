trigger oppoLine_to_acc on OpportunityLineItem (after insert,after update , after delete,after undelete) {
if(trigger.isAfter && (trigger.isInsert || trigger.isUpdate || trigger.isUndelete)){
    oppoLine_to_acc_Handler.counter(trigger.new);
}
if(trigger.isAfter && trigger.isDelete){
    oppoLine_to_acc_Handler.counter(trigger.old);
}
}