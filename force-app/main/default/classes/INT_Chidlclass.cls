@RestResource(urlMapping='/AccountsData/')
global class INT_Chidlclass {
    @HttpGet
    global static List<Account> getAccounts() {
        return [SELECT Id, Name FROM Account  where CreatedDate = This_Month LIMIT 20];
    }
}
