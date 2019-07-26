//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (RNA) => {
  let codons, proteins;
  if (!RNA) return [];
  codons = getCodons(RNA);
  proteins = getProtein(codons);
  return proteins;
};


function getCodons(RNA) {
  let codons, i;
  codons = [];
  i = 0;
  while (i < RNA.length) {
    let code = RNA.slice(i, i + 3);
    codons.push(code);
    i += 3;
  }
  return codons;
}


function getProtein(codons) {
  let result = [];
  const proteins = {
    Methionine: ["AUG"],
    Phenylalanine: ["UUU", "UUC"],
    Leucine: ["UUA", "UUG"],
    Serine: ["UCU", "UCC", "UCA", "UCG"],
    Tyrosine: ["UAU", "UAC"],
    Cysteine: ["UGU", "UGC"],
    Tryptophan: ["UGG"],
    STOP: ["UAA", "UAG", "UGA"]
  };
  
  for (let codon of codons) {
    let prot = Object.keys(proteins).find(key => proteins[key].includes(codon));
    if (!prot)  throw "Invalid codon";
    if (prot !== "STOP") { 
      result.push(prot); 
    } else { 
      break; 
    }
  }
  return result;
}
