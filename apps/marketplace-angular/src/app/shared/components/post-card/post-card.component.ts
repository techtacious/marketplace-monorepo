import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../definitions';
import * as moment from 'moment';

const DATE_FORMAT = 'YYYY-MM-DD';

interface DisplayDate {
  month: string;
  dayOfMonth: string;
}

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {
  @Input('post') post!: Post;

  date!: DisplayDate | null;
  startDate!: DisplayDate | null;
  endDate!: DisplayDate | null;

  constructor() {}

  ngOnInit(): void {
    this.setDisplayDates();
  }

  setDisplayDates(): void {
    if (this.post.date) {
      const momentDate = moment(this.post.date, DATE_FORMAT);
      this.date = this.getDisplayDate(momentDate);
    } else if (this.post.startDate && this.post.endDate) {
      const startDate = moment(this.post.startDate, DATE_FORMAT);
      const endDate = moment(this.post.endDate, DATE_FORMAT);
      this.startDate = this.getDisplayDate(startDate);
      this.endDate = this.getDisplayDate(endDate);
    }
  }

  private getDisplayDate(date: moment.Moment): DisplayDate | null {
    if (!date.isValid()) {
      return null;
    }

    return {
      month: date.format('MMM'),
      dayOfMonth: date.format('DD'),
    };
  }
}
