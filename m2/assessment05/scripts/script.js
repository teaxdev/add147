months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


i = 1;
while (i < months.length) {
    document.getElementById(`month${i}`).innerHTML += m;
    i++;
}

