import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { Product, ProductService } from '../../service/product.service';

@Component({
  standalone: true,
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  imports: [CommonModule, CardModule, ButtonModule, CarouselModule, TagModule]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  responsiveOptions: any[] | undefined;

  constructor(private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.getProductsSmall().then((products) => {
        this.products = products;
    });

   this.responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ]
}

  viewDetail(id: number) {
    this.router.navigate(['/products', id]);
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warn';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return undefined;
    }
  }
}
