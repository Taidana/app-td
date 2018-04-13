import { Component, OnInit } from '@angular/core';
import { Player } from '../../model/Player';
import { PlayerService } from '../player.service';
import { COUNTRIES } from '../datasources';
@Component({
  selector: 'players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: Player[] = [];
  playersFiltered;
  countrySelected;
  countries: string[] = [];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
    this.countries = COUNTRIES;
  }

    filterPlayer() {
      if (this.countrySelected == '0') {
        // l'utilisateur n'a pas choisi de pays => afficher toutes les équipes
        this.playersFiltered = this.players;
      } else {
        this.playersFiltered =
          this.players.filter((player: Player) => player.country == this.countrySelected);
      }
}
}
