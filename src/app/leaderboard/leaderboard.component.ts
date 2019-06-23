import {Component, Input, OnInit} from '@angular/core';

export interface RepoContributors {
  name: string;
  points: number;
}

const REPOS: RepoContributors[] = [
  {name: 'MGF', points: 34},
  {name: 'MGF-logs', points: 34},
  {name: 'Polaris', points: 34}
];


@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.less']
})
export class LeaderboardComponent implements OnInit {
  @Input() title: string;
  @Input() theme: string;
  @Input() criteria: string;

  reposData = REPOS;

  constructor() {
  }

  ngOnInit() {
  }

}
