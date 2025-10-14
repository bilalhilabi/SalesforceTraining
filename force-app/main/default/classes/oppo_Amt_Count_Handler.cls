public  class oppo_Amt_Count_Handler {
    public static void counter(list<opportunity> oppList) {
     set<id> oppAccIds = new set<id>();
       for(opportunity opp : oppList){
        if(opp.AccountId != null && opp.Amount != null){
          oppAccIds.add(opp.AccountId);
        }
       }
       list<AggregateResult> oppAccData = [SELECT MAX(Amount)maxAmt ,MIN(Amount)minAmt ,AccountId FROM Opportunity  WHERE AccountId IN : oppAccIds Group by AccountId];
       list<Account> accList = new list<Account>();
       for(AggregateResult agg : oppAccData){
        Account acc = new Account();
        acc.id = (id)agg.get('AccountId');
        acc.Min_Opp_Amount__c = (decimal)agg.get('minAmt');
        acc.Max_Opp_Amount__c = (decimal)agg.get('maxAmt');
        accList.add(acc);
       }
       if(!accList.isEmpty()){
        update accList;
       }
    }
}