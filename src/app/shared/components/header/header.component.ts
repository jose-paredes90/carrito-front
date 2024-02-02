import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { SigninComponent } from 'src/app/auth/signin/signin.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() cartLength: number;
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;
  isLoggedIn: boolean = false;

  constructor(private router: Router, public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(SigninComponent, {
      restoreFocus: false,
    });
    dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }
}
