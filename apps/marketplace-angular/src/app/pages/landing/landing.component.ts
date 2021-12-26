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
        caption: `Let's go biking in the beautiful trails of Vancouver!`,
        description: `Let's go biking in the beautiful trails of Vancouver!`,
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
        caption: `Looking for a buddy to play tennis with in North Vancouver.`,
        description: `Looking for a buddy to play tennis with in North Vancouver.`,
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
        caption: `Looking for a buddy to play tennis with in North Vancouver.`,
        description: `Looking for a buddy to play tennis with in North Vancouver.`,
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
        caption: `Looking for a buddy to play tennis with in North Vancouver.`,
        description: `Looking for a buddy to play tennis with in North Vancouver.`,
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
        caption: `Looking for a buddy to play tennis with in North Vancouver.`,
        description: `Looking for a buddy to play tennis with in North Vancouver.`,
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
