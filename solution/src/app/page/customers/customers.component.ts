import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule, CurrencyPipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Customer } from '../../model/customer';
import { RouterModule } from '@angular/router';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
})
export class CustomersComponent {
  customerService = inject(CustomerService);

  list!: Customer[];

}
