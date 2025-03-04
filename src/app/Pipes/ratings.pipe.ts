import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'ratingStars'
})
export class RatingStarsPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
let score: number = 0;
if (value.includes('/')) {
      const parts = value.split('/');
      const numerator = parseFloat(parts[0]);
      const denominator = parseFloat(parts[1]);
      if (denominator) {
        score = (numerator / denominator) * 10;
      }
    } else if (value.includes('%')) {
      score = parseFloat(value.replace('%', '')) / 10;
    } else {
      score = parseFloat(value);
      if (score > 10) {
        score = score / 10;
      }
    }
const starCount = Math.round(score / 2);
    const stars = '⭐'.repeat(starCount);
    return `${stars} (${score.toFixed(1)}/10)`;
  }
}
