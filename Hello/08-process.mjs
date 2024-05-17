import process from 'node:process'

// arguments du programme en ligne de commande
// à parser avec yargs, commander, minimist... :
console.log(process.argv);


// le current working dir (CWD)
// le dossier dans lequel se trouve le terminal
// les chemins relatifs sont relatifs au CWD (pas au fichier js)
console.log(process.cwd());
process.chdir('..');
console.log(process.cwd());

// variables d'environnement
console.log(process.env.PATH);

// entrées et sorties standard (clavier, terminal)
process.stdout.write('Hello\n'); // équivalent à console.log()

// informations sur le programme
console.log(process.platform); // win32, darwin (macos), linux...
console.log(process.arch); // arm, x64
console.log(process.version); // v20.11.0
console.log(process.versions); // toutes les libs
console.log(process.uptime()); // temps depuis le démarrage du programme
console.log(process.memoryUsage()); // mémoire consommé


// pour killer
process.exit(0); // pas d'erreur
process.exit(1); // erreur