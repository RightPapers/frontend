import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function dateFormatter(dateString: string) {
  const articleDate = new Date(dateString);
  const now = new Date();

  const diff = now.getTime() - articleDate.getTime();
  const diffMinutes = Math.floor(diff / (1000 * 60));
  const diffHours = Math.floor(diff / (1000 * 60 * 60));
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (diffDays >= 1) {
    // 하루가 지났으면 'YYYY.MM.DD HH:mm'
    const year = articleDate.getFullYear();
    const month = String(articleDate.getMonth() + 1).padStart(2, '0');
    const day = String(articleDate.getDate()).padStart(2, '0');
    const hours = String(articleDate.getHours()).padStart(2, '0');
    const minutes = String(articleDate.getMinutes()).padStart(2, '0');
    return `${year}.${month}.${day} ${hours}:${minutes}`;
  } else if (diffHours >= 1) {
    // 1시간 이상이면 'X시간 전'
    return `${diffHours}시간 전`;
  } else if (diffMinutes >= 1) {
    // 1시간 미만이면 'X분 전'
    return `${diffMinutes}분 전`;
  } else {
    // 그 외 (현재와의 차이가 1분 미만)인 경우 '방금 전'
    return '방금 전';
  }
}
