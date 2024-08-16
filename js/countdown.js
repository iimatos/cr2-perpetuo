export class Countdown {
  constructor(loteDate, loteNumber = null, lotePrices = []) {
    this.dateToday = new Date();
    this.loteDate = new Date(loteDate);
    this.loteNumber = loteNumber;
    this.lotePrices = lotePrices;
  }

  get today() {
    return this.dateToday;
  }

  get updateTime() {
    return (this.dateToday = new Date());
  }

  getTime() {
    return this.loteDate.getTime();
  }

  compareDate() {
    const difference = this.loteDate.getTime() - this.updateTime.getTime();

    return difference;
  }

  get daysLeft() {
    return Math.floor(this.compareDate() / 1000 / 60 / 60 / 24);
  }

  get hoursLeft() {
    return Math.floor((this.compareDate() / 1000 / 60 / 60) % 24);
  }

  get minutesLeft() {
    return Math.floor((this.compareDate() / 1000 / 60) % 60);
  }

  get secondsLeft() {
    return Math.floor((this.compareDate() / 1000) % 60);
  }

  display() {
    document.querySelector('#days').querySelector('.number').innerText =
      this.daysLeft < 10 ? `0${this.daysLeft}` : this.daysLeft;
    document.querySelector('#hours').querySelector('.number').innerText =
      this.hoursLeft < 10 ? `0${this.hoursLeft} ` : this.hoursLeft;
    document.querySelector('#mins').querySelector('.number').innerText =
      this.minutesLeft < 10 ? `0${this.minutesLeft}` : this.minutesLeft;
    document.querySelector('#secs').querySelector('.number').innerText =
      this.secondsLeft < 10 ? `0${this.secondsLeft}` : this.secondsLeft;
  }
}

export function counter() {
  const countdown = new Countdown('17 August 2024');

  setInterval(() => {
    countdown.display();
  }, 1000);

  console.log(countdown);
}
