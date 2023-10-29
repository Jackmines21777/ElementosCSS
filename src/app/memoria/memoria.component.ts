import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memoria',
  templateUrl: './memoria.component.html',
  styleUrls: ['./memoria.component.css']
})
export class MemoriaComponent implements OnInit {

  emojis: any[] = ["🥵", "🥵", "🥶", "🥶", "😡", "😡", "🤯", "🤯", "🥑", "🥑",
    "🐸", "🐸", "😍", "😍", "👻", "👻"];

  shuf_emojis = this.emojis.sort(() => (Math.random() > .5) ? 2 : -1);

  ngOnInit(): void {
    for (let i: number = 0; i < this.emojis.length; i++) {
      let box = document.createElement('div')
      box.className = 'item';
      box.innerHTML = this.shuf_emojis[i];
      box.addEventListener('click', () => {
        box.classList.add('boxOpen');
        setTimeout(function () {
          if (document.querySelectorAll('.boxOpen').length > 1) {//si encuentra a auno que tenga la clase .boxOpen

            //si el  contenido coincide con el anterior
            if (document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML) {

              //se le da al calse match a los elementos <=> coinciden en contenido.
              document.getElementsByClassName('boxOpen')[0].classList.add('boxMatch')
              document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch')

              //quitas la clase .boxOpen de los elementos que hicieron match
              document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
              document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')

              if (document.querySelectorAll('.boxMatch').length > 0) {
                alert('Hiciste un match')
              }
            } else {
              document.querySelectorAll('.boxOpen')[1].classList.remove
                ('boxOpen')
              document.querySelectorAll('.boxOpen')[0].classList.remove
                ('boxOpen')

              alert('toda la vida escogiendo mal')

            }

          }
        }, 500)
      });
      document.querySelector('.game')!.appendChild(box);
    }
  }


  clickEmoji() {


  }


}
