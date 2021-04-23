import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { MatDialog } from '@angular/material/dialog';
import { AddStockDialogComponent } from '../shared/add-stock-dialog/add-stock-dialog.component';
import { StockDataService } from 'src/app/core/services/stock-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  public breadcumData = [
    { name: 'Home', url: '/', active: true, location: null, branch: null }];
  displayedColumns
  dataSource
  totalCount
  Interval
  subscriptionList: Subscription[] = []

  constructor(private Router: Router, public dialog: MatDialog, private server: StockDataService) { }

  ngOnInit() {
    clearInterval(this.Interval)
    this.getStockMarketData({ start: '0', length: '30' })
    this.callApi({ start: 0, length: 30 })
  }

  paginationChange(event) {
    clearInterval(this.Interval)
    this.getStockMarketData(event)
    this.callApi(event)
  }

  openUpdateStockPopup() {
    const dialogRef = this.dialog.open(AddStockDialogComponent, {
      height: '360px',
      width: '400px',
      disableClose: true,
      data: [],
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        let sub1 = this.server.insertStockData(res).
          subscribe((res) => {
            console.log(res)
          })
        this.subscriptionList.push(sub1)
      }
    });
  }

  public getStockMarketData(data) {
    let sub1 = this.server.getStockData(data).
      subscribe((res) => {
        this.totalCount = res[0]['totalCount'][0]['totalCount']
        this.dataSource = res[0]['result'];
        this.displayedColumns = Object.keys(res[0]['result'][0])

      })
    this.subscriptionList.push(sub1)
  }

  public callApi(data) {
    this.Interval = setInterval(() => {
      let sub1 = this.server.getStockData(data).
        subscribe((res) => {
          this.totalCount = res[0]['totalCount'][0]['totalCount']
          this.dataSource = res[0]['result'];
          this.displayedColumns = Object.keys(res[0]['result'][0])

        })
      this.subscriptionList.push(sub1)
    }, 10000)
  }

  ngOnDestroy() {
    for (let subscription of this.subscriptionList) {
      subscription.unsubscribe()
    }
    clearInterval(this.Interval)
  }

}
