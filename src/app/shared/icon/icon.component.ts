import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

const NAME_REGEXP = /[-_](\d{2})$/;

@Component({
	selector: 'shared-icon',
	templateUrl: './icon.component.html',
	styleUrls: ['./icon.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
	icon = '';
	@Input()
	set name(name: string) {
		this.icon = `assets/icons/${name}.svg`;

		if (this.classNameSize === '') {
			this.size = this.getSizeFromName(name);
		}
	}

	classNameSize = '';
	@Input()
	set size(size: number) {
		this.classNameSize = this.getSizeClass(size);
	}

	private getSizeFromName(name: string): number {
		return +(NAME_REGEXP.exec(name) || [])[1];
	}

	private getSizeClass(size: number): string {
		return isNaN(size) ? '' : `size-${size}`;
	}
}
