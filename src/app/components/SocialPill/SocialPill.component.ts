import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-pill',
  template: `<a
    class="
  bg-white/5
    border dark:border-white/10 border-gray-400 rounded-full
    flex justify-center items-center gap-x-2
    py-1 px-2 md:py-2 md:px-4
    text-xs md:text-base
    text-black/70 dark:text-white/50
    transition
    hover:scale-110 hover:bg-white/10
  "
    [href]="link"
    target="_blank"
    rel="noopener noreferrer">
    <fa-icon [icon]="icon"></fa-icon>
    {{ nameSocial }}
  </a>`,
  styleUrl: './SocialPill.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialPillComponent {
  @Input() nameSocial: string | undefined;
  @Input() link: string | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() icon: any;

  constructor() {}
}
