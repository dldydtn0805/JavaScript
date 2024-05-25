const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
target = String(Number(input[0])*Number(input[1]*Number(input[2])))
object = {'0':0, '1': 0,'2': 0,'3': 0,'4': 0,'5': 0,'6': 0,'7': 0,'8':0, '9': 0}

for (i=0; i < target.length; i++ ) {
  for (j=0; j < 10; j++) {
    if (target[i] == j) {
      object[`${j}`] ++
    }
  } 
}
for (o in object) {
  console.log(object[o])
}