export function objectToQs(queryParams: {[s: string]: string | number}): string {
  return Object.keys(queryParams)
    .map(key => {
      return `${key}=${encodeURIComponent(queryParams[key])}`;
    })
    .join('&');
}

export function formatDate(unixTimestamp: number): string {
  return new Date(unixTimestamp * 1000).toLocaleDateString();
}

export function getDayOfWeek(unixTimestamp: number): string {
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return dayNames[new Date(unixTimestamp * 1000).getDay()];
}

export function getAverage(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

export function formatNumber(n: number): number {
  return Math.round(n);
}

export function getMode(arr: string[]): string {
  arr = arr.slice().sort();

  let bestStreak = 1;
  let bestElem = arr[0];
  let currentStreak = 1;
  let currentElem = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] !== arr[i]) {
      if (currentStreak > bestStreak) {
        bestStreak = currentStreak;
        bestElem = currentElem;
      }

      currentStreak = 0;
      currentElem = arr[i];
    }

    currentStreak++;
  }

  return currentStreak > bestStreak ? currentElem : bestElem;
}
