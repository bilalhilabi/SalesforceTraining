public class Exam_Q2_Handler {
    //  
    public static void checkEmail(list<contact>conList){
      set<id> accids = new set<id>();
        for(contact con : conList){
            if (Con.Email!=NUll){
          accids.add(con.AccountId);  
        }
        }
      list<contact> conData = [SELECT Id,AccountId ,Email FROM contact WHERE AccountId IN:accids];
       map<id,set<string>> exisEmail = new map<id,set<string>>(); 
        for(contact cc : conData){
            if(!exisEmail.containskey(cc.AccountId) ){
             	exisEmail.put(cc.AccountId,new set<string>());   
            }
            exisEmail.get(cc.AccountId).add(cc.Email);
        }
        for(contact conCheck : conList){
            if(exisEmail.containskey(conCheck.AccountId)){
                if(exisEmail.get(conCheck.AccountId).contains(conCheck.Email)){
                	  conCheck.addError('Question Paper is very Tough Bro');     
                }   
            } 
        }  
    }
}