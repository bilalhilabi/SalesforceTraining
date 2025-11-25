import { LightningElement,track } from 'lwc';

export default class Dynamically_details extends LightningElement {
@track  name = '';
@track messa = "Hello Welcome";
@track hasName = false;

handleName(event){
this.name = event.target.value;
}
handleAll(){
  if(this.name.trim() !== ''){
    this.hasName = true;
  }
  else{
    this.hasName = false;
  }  
}

}