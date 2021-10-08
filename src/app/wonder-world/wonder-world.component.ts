import { Component, OnInit } from '@angular/core';
import { WonderWorldObject } from '../WonderWorldObject';

@Component({
  selector: 'app-wonder-world',
  templateUrl: './wonder-world.component.html',
  styleUrls: ['./wonder-world.component.css']
})
export class WonderWorldComponent implements OnInit {
  Active:number = 0;
  SevenWondersWorld:Array<WonderWorldObject>=[];
  constructor() { 
    this.SevenWondersWorld = new Array<WonderWorldObject>(); 
    this.AddWonderWorld("Пирамиды Хеопса","комплекс древних памятников на плато Гиза в пригороде Каира, современной столицы Египта. Находится на расстоянии около 8 км по направлению в центр Ливийской пустыни от старого города Гиза на реке Нил, примерно в 25 км к юго-западу от центра Каира");
    this.AddWonderWorld("Висячие сады Семирамиды","одно из Семи чудес античного мира, которое представляло собой инженерное сооружение в Вавилоне с каскадом многоуровневых садов, где росли многочисленные породы деревьев, кустарников и виноградных лоз");
    this.AddWonderWorld("Статуя Зевса в Олимпии","единственное из Семи чудес света, которое располагалось в материковой части Европы. Статуя Зевса в Олимпии — третье чудо света Древнего мира. Была воздвигнута в V веке до нашей эры");
    this.AddWonderWorld("Храм Артемиды в Эфесе","греческий храм, посвящённый местному культу богини Артемиды[⇨] (соответствует римской богине Диане). Находился в греческом городе Эфесе на побережье Малой Азии");
    this.AddWonderWorld("Мавзолей в Галикарнасе","гробница карийского сатрапа Мавсола, сооружённая в середине IV века до н. э. по приказу его супруги Артемисии II в Галикарнасе, одно из Семи античных чудес света. Проект был разработан греческими архитекторами Сатиросом и Пифеем Приенским");
    this.AddWonderWorld("Колосс Родосский","гигантская статуя древнегреческого бога Солнца — Гелиоса, которая стояла в портовом городе Родосе, расположенном на одноимённом острове в Эгейском море, в Греции");
    this.AddWonderWorld("Александрийский маяк"," маяк на острове Фарос около египетского города Александрии, одно из семи чудес света. Был построен во время правления Птолемея II Филадельфа, высота маяка составляла порядка 120—150 метров");
  }

  AddWonderWorld(Title:string, Description:string){
    this.SevenWondersWorld.push(new WonderWorldObject(Title, Description))
  }

  InfoWonderWorld(Title:string){
    for (let i = 0; i < this.SevenWondersWorld.length; i++) {
      if(this.SevenWondersWorld[i].Title == Title)
        this.Active = i;
    }
  }

  ngOnInit(): void {
  }

}
