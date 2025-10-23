function jourtravaille(date) {
  // const jourdelasemaine = [
  //   "lundi",
  //   "mardi",
  //   "mercredi",
  //   "jeudi",
  //   "vendredi",
  //   "samedi",
  //   "dimanche",
  // ];
  // const mois = [
  //   "janvier",
  //   "fevrier",
  //   "mars",
  //   "avril",
  //   "mai",
  //   "juin",
  //   "juillet",
  //   "août",
  //   "septembre",
  //   "octobre",
  //   "novembre",
  //   "décembre",
  // ];

  // on veut utiliser la fonction new Date() pour afficher les jours en format jj/mm/aaaa
  // on veut utiliser la fonction getDay() pour afficher le jour de la semaine
  // on veut utiliser la fonction getMonth() pour afficher le mois
  // on veut utiliser la fonction getFullYear() pour afficher l'année

  const JourFerie = [
    newDate(1 / 0 / 2020),
    newDate(13 / 3 / 2020),
    newDate(1 / 4 / 2020),
    newDate(8 / 4 / 2020),
    newDate(21 / 4 / 2020),
    newDate(1 / 5 / 2020),
    newDate(14 / 6 / 2020),
    newDate(15 / 7 / 2020),
    newDate(1 / 10 / 2020),
    newDate(11 / 10 / 2020),
    newDate(25 / 11 / 2020),
  ];

  jourtravaille();
  console.log(travaille());

  const date = new Date().getDay();

  if (JourFerie) {
    console.log();
  } else if (date === 0 || date === 6) {
    console.log();
  } else {
    console.log();
  }
}
console.log();
// exemple
// const day = new Date
// day.getDay()
// const isWeekEnd = () => {
//     if (day = 0 || day = 6) {
//         console.log(day "is a week-end")
//     } else {
//         console.log(day "is a weekday")
//     }
// }
// }
//
// toDay.getDay();
// toDay.getMonth();
// toDay.getFullYear();
// console.log(
//   "nous sommes le" +
//     toDay +
//     " " +
//     "jourdelasemaine"[toDay.getDay()] +
//     " " +
//     "mois"[toDay.getMonth()] +
//     " " +
//     toDay.getFullYear()
// );

// si le jour est un samedi ou un dimanche alors c'est un jour de repos
// sinon c'est un jour de travail
//si le jour est un jour ferié alors c'est un jour non travaillé
