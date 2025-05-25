import { AfterViewInit, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { KeypressRecordableComponent } from '../../../base/RecordableComponent.base';
import { DiaryPageState } from '../../../store/diary-feature';

@Component({
    selector: 'atmah-diary',
    templateUrl: './diary.component.html',
    styleUrl: './diary.component.scss',
    imports: [ReactiveFormsModule]
})
export class DiaryComponent
  extends KeypressRecordableComponent<DiaryPageState>
  implements AfterViewInit
{
  constructor() {
    super();
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
  }

  onFocus(): void {
    this.componentSelected();
  }
}

const loremIpsum =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdamrecusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni deleniti quod quam consequuntur! Commodi minima excepturi repudiandae velit hic maximedoloremque. Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic Sed quibusdamrecusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni deleniti quod quam consequuntur! Commodi minima excepturi repudiandae velit hic maximedoloremque. Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic';
