public class main_post {
   public static void SendReq(){
   HttpRequest req = new HttpRequest();
   req.setMethod('POST');
   req.setEndpoint('callout:GetChildDataNC/services/apexrest/Accounts/'); 
   req.setHeader('content-type','application/json');
   req.setbody('{"name":"firstpost"}');
   Http proto = new Http();
   HttpResponse res = proto.send(req);
   map<string,string> resMap = (map<string,string>)JSON.deserialize(res.getBody(),map<string,string>.class);
   system.debug(resMap);  
   }
}