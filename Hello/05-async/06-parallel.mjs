import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

// TOP LEVEL AWAIT seulement si module ESM
try {

  // Promise.all quand toutes les promesses sont résolues, l'ensemble est résolu
  // use case : build (lire plusieurs fichiers en même temps)
  // composant React qui doit afficher des données de plusieurs sources
  const files = await Promise.all([
    readFile(resolve(import.meta.dirname, '../.prettierrc'), { encoding: 'utf-8' }),
    readFile(resolve(import.meta.dirname, '../.editorconfig'), { encoding: 'utf-8' })
  ])

  const prettierrc = files[0];
  const editorconfig = files[1];

  // Promise.race quand la première est résolue, l'ensemble est résolu
  // use case : une opération async avec un timeout (donc si le timeout se termine d'abord on s'arrete)

  // avec Promise.all si une erreur se produit l'ensemble est en erreur
  // avec Promise.race si la première est en erreur, l'ensemble est en erreur

  // avec Promise.allSettled on récupère l'ensemble avec pour chaque promesse si elle est en erreur ou pas
  // use case : une page React (type Dashboard) qui envoit plusieurs requete mais qui affiche les données partielles)
  // avec Promise.any on récupère la première qui n'est pas en erreur, si tout est en erreur l'ensemble est en erreur
  // use case : ping
 
} catch (err) {
  console.log('Erreur : ' + err.message);
}

