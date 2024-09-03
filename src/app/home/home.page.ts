import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonModal, IonItem, IonAvatar, IonImg, IonLabel, IonSearchbar, IonList
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonModal,  IonItem, IonAvatar, IonImg, IonLabel, IonSearchbar, IonList],
})
export class HomePage {
  constructor() {}
}
