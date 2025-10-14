trigger oppo_Amt_Count on opportunity (after insert, after update , after delete, after undelete) {
  if(trigger.isAfter && (trigger.isInsert  || trigger.isUpdate || trigger.isUndelete)){
   oppo_Amt_Count_Handler.counter(trigger.new);
  }
  if(trigger.isAfter && trigger.isDelete){
   oppo_Amt_Count_Handler.counter(trigger.old);
  }
}