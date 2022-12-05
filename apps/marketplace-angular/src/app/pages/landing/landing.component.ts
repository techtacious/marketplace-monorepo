import { Component, OnInit } from '@angular/core';
import { Category, Post } from '../../shared/definitions';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  categories: Category[] = [];

  posts!: Post[];

  constructor() {}

  ngOnInit(): void {
    this.populateMockPosts();
    this.populateCategories();
  }

  populateMockPosts(): void {
    this.posts = [
      {
        _id: 'bikePost',
        title: 'Road Bike',
        caption: `Selling this product in excellent condition`,
        description: `Selling this product in excellent condition`,
        date: '2022-01-08',
        location: {
          lat: 45,
          lng: 45,
          city: 'Vancouver',
          country: 'Canada',
          postal: 'K2G N8T',
        },
      },
      {
        _id: 'tennisPost',
        title: 'iPhone 12 Pro Max',
        caption: `Selling this product in excellent condition`,
        description: `Selling this product in excellent condition`,
        date: '2022-01-12',
        location: {
          lat: 45,
          lng: 45,
          city: 'Vancouver',
          country: 'Canada',
          postal: 'K1Y H3R',
        },
      },
      {
        _id: 'tennisPost',
        title: 'Graphic Card nVIDIA RTX 3080',
        caption: `Selling this product in excellent condition`,
        description: `Selling this product in excellent condition`,
        date: '2022-01-12',
        location: {
          lat: 45,
          lng: 45,
          city: 'Vancouver',
          country: 'Canada',
          postal: 'K1Y H3R',
        },
      },
      {
        _id: 'tennisPost',
        title: 'Msi 144Hz Monitor',
        caption: `Selling this product in excellent condition`,
        description: `Selling this product in excellent condition`,
        date: '2022-01-12',
        location: {
          lat: 45,
          lng: 45,
          city: 'Vancouver',
          country: 'Canada',
          postal: 'K1Y H3R',
        },
      },
      {
        _id: 'tennisPost',
        title: 'Blue Yeti Microphone',
        caption: `Selling this product in excellent condition`,
        description: `Selling this product in excellent condition`,
        date: '2022-01-12',
        location: {
          lat: 45,
          lng: 45,
          city: 'Vancouver',
          country: 'Canada',
          postal: 'K1Y H3R',
        },
      },
    ];
  }

  populateCategories(): void {
    this.categories = [
      {
        _id: '1',
        name: 'Miscellaneous',
        posts: this.posts,
      },
      {
        _id: '2',
        name: 'Sports',
        posts: this.posts,
      },
      {
        _id: '3',
        name: 'Home Decor',
        posts: this.posts,
      },
      {
        _id: '4',
        name: 'Fitness',
        posts: this.posts,
      },
      {
        _id: '5',
        name: 'Gaming',
        posts: this.posts,
      },
    ];
  }
}
