import { Component } from '@angular/core';
import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [QuestionComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  questionList: string[] = ["Comment fonctionne la plateforme HeartLink? ",
    "Puis-je modifier mes préférences de don après l'inscription ? ",
    "Comment puis-je sûr que mes dons sont utilisés de manière transparente ?",
    "Quels types d'associations sont disponibles sur HeartLink ?",
    "Comment puis-je contacter le support client en cas de problème ?"
  ]
  derniere_question: string = "Quels mode de paiement sont acceptés sur HeartLink ?";

}
