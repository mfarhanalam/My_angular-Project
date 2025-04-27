import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {


  basic = [
    { header: 'Basic Questions', question: '1. Nisi ut ut exercitationem voluptatem esse sunt rerum?', text: 'Saepe perspiciatis ea. Incidunt blanditiis enim mollitia qui voluptates. Id rem nulla tenetur nihil in unde rerum. Quae consequatur placeat qui cumque earum eius omnis quos.' },
    { question: '2. Reiciendis dolores repudiandae?', text: 'Id ipsam non ut. Placeat doloremque deserunt quia tenetur inventore laboriosam dolores totam odio. Aperiam incidunt et. Totam ut quos sunt atque modi molestiae dolorem.' },
    { question: '3. Qui qui reprehenderit ut est illo numquam voluptatem?', text: 'Enim inventore in consequuntur ipsam voluptatem consequatur beatae. Nostrum consequuntur voluptates et blanditiis.' },
  ]

  currentAnswerIndex: number | null = null;

  clickToShow(index: number) {
    if (this.currentAnswerIndex === index) {
      this.currentAnswerIndex = null;

      // Clicking again hides the answer
    } else {
      this.currentAnswerIndex = index;
    }
  }

  accordList = [
    {
      id: 1,
      question: 'Cumque voluptatem recusandae blanditiis?',
      answer: 'Ut quasi odit odio totam accusamus vero eius. Nostrum asperiores voluptatem eos nulla ab dolores est asperiores iure. Quo est quis praesentium aut maiores. Corrupti sed aut expedita fugit vero dolorem. Nemo rerum sapiente. A quaerat dignissimos.'
    },
    {
      id: 2,
      question: 'Provident beatae eveniet placeat est aperiam repellat adipisci?',
      answer: 'In minus quia impedit est quas deserunt deserunt et. Nulla non quo dolores minima fugiat aut saepe aut inventore. Qui nesciunt odio officia beatae iusto sed voluptatem possimus quas. Officia vitae sit voluptatem nostrum a.'
    },
    {
      id: 3,
      question: 'Minus aliquam modi id reprehenderit nihil?',
      answer: 'Voluptates magni amet enim perspiciatis atque excepturi itaque est. Sit beatae animi incidunt eum repellat sequi ea saepe inventore. Id et vel et et. Nesciunt itaque corrupti quia ducimus. Consequatur maiores voluptatum fuga quod ut non fuga.'
    },
    {
      id: 4,
      question: 'Quaerat qui est iusto asperiores qui est reiciendis eos et?',
      answer: 'Numquam ut reiciendis aliquid. Quia veritatis quasi ipsam sed quo ut eligendi et non. Doloremque sed voluptatem at in voluptas aliquid dolorum.'
    },
    {
      id: 5,
      question: 'Laboriosam asperiores eum?',
      answer: 'Aut necessitatibus maxime quis dolor et. Nihil laboriosam molestiae qui molestias placeat corrupti non quo accusamus. Nemo qui quis harum enim sed. Aliquam molestias pariatur delectus voluptas quidem qui rerum id quisquam. Perspiciatis voluptatem voluptatem eos. Vel aut minus labore at rerum eos.'
    },
  ]

}
