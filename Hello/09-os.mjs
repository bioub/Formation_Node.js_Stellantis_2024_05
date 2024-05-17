import os from 'node:os'

// informations sur le programme
console.log(os.platform()); // win32, darwin (macos), linux...
console.log(os.arch); // arm, x64
console.log(os.version); // v20.11.0
console.log(os.uptime()); // temps depuis le démarrage de l'os
console.log(os.freemem()); // mémoire disponible


console.log(os.cpus()); // infos CPU
console.log(os.availableParallelism()); // nombre de coeurs
