trigger Acc_to_con_Desc on Account (after update) {

    Acc_to_con_Desc_Handler.accMethod(Trigger.new,Trigger.oldMap);
}