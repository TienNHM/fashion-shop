import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  imports: [CommonModule]
})
export class ProductDetailComponent {
  productId: number;

  constructor(private route: ActivatedRoute) {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
  }
}
