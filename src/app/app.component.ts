import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import {OrderDetails} from './data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularproject';

  @ViewChild("spreadsheet")
  public ssObj: SpreadsheetComponent|undefined;

  public data:object = OrderDetails;

  public btnClick(){
    // this.ssObj?.insertSheet(0,2);
    // this.ssObj?.moveSheet(0,[1]);
    // this.ssObj?.delete();
    // this.ssObj?.duplicateSheet();
    // this.ssObj?.refresh();
    // this.ssObj?.startEdit();
    // this.ssObj?.endEdit();
    this.ssObj?.closeEdit();
  }

  public onEdit(args:any){
    if(args.address.includes("E")){
      args.cancel = true;
    }
  }

  public onCreate(){
    //Uncomment to bind data through insertSheet method
    // this.ssObj?.insertSheet([{
    //   index: 1,
    //   name: "Order Details",
    //   ranges: [{dataSource: OrderDetails}],
    //   columns: [{ width: 150 }, { width: 110 }, { width: 110 }, { width: 110 }, { width: 110 }, { width: 110 },]
    // }])
  }
}
