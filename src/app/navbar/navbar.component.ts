import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#openMenu').click(function(){
      if($(".menu").hasClass('menuWidth')){
          $(".menu").removeClass('menuWidth');
          $('.menu').addClass('active');
          $('.hamburguer').css("transform","rotate(45deg)");
          $('.hamburguer2').css("transform","rotate(-45deg)");
          $('.hamburguer3').css("width","1px");
      }
      else{
          $(".menu").removeClass('active');
          $('.menu').addClass('menuWidth');
          $('.hamburguer').css("transform","rotate(0deg)");
          $('.hamburguer2').css("transform","rotate(0deg)");
          $('.hamburguer3').css("width","30px");
      }
  });
  }

}
