import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  navigationLink = [
    {display: 'Laptop', path: '/data', id: 'b62cc957-67c4-4805-b2c9-8290c912a58b'},
    {display: 'Phone', path: '/data', id: '0cb0e9c8-125c-11ee-be56-0242ac120002'},
    {display: 'Tablet', path: '/data', id: '6716adae-09e5-4f9c-84ae-bfb6e7b8830d'},
   ]
}
