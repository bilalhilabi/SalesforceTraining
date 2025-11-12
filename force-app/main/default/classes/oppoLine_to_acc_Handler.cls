public class oppoLine_to_acc_Handler {

    public static void counter(list<OpportunityLineItem> oppLInelist){
      set<id> accids = new set<id>();
       for(OpportunityLineItem op : oppLInelist){
        if(op.OpportunityId != null && op.Opportunity.AccountId != null && op.totalPrice > 50000){
         accids.add(op.Opportunity.AccountId);
        }
       }
       list<Account> accUpdateList = new list<Account>();
      list<AggregateResult> aggRes = [SELECT COUNT(id)totalCount,opportunity.AccountId acId FROM OpportunityLineItem WHERE Opportunity.AccountId IN : accids Group by opportunity.AccountId];
      for(AggregateResult ag : aggRes){
        Account acc = new Account();
        acc.id = (id)ag.get('acId');
       // acc.Total_Opportunity_Amount__c = (integer)ag.get('totalCount');
        acc.Total_Opportunity_Amount__c = (Decimal)ag.get('totalCount');
        accUpdateList.add(acc);
      }
      if(!accUpdateList.isEmpty()){
        update accUpdateList;
    }
 } 

}