// Trie

class Node {
  constructor() {
    this.characters = {};
    this.isWord = false;
  }
}
class Trie {
  constructor() {
    this.root = new Node();
  }
  insert(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      let charToInsert = word[i];
      if (!(charToInsert in curr.characters)) {
        curr.characters[charToInsert] = new Node();
      }
      curr = curr.characters[charToInsert];
    }
    curr.isWord = true;
  }
  contains(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      let charToFind = word[i];
      if (!(charToFind in curr.characters)) {
        return false;
      }
      curr = curr.characters[charToFind];
    }
    return curr.isWord;
  }
  startsWithPrefix(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      let charToFind = word[i];
      if (!(charToFind in curr.characters)) {
        return false;
      }
      curr = curr.characters[charToFind];
    }
    return true;
  }
  hasPrefix(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      let charToFind = word[i];
      if (!(charToFind in curr.characters)) {
        return false;
      }
      if (curr.characters[charToFind].isWord) {
        return true;
      }
      curr = curr.characters[charToFind];
    }
    return true;
  }
}

function noPrefix(words) {
  let trie = new Trie();
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (trie.hasPrefix(word)) {
      console.log("BAD SET");
      console.log(word);
      return;
    }
    trie.insert(word);
  }
  console.log("GOOD SET");
}

console.log(noPrefix(["aab", "aac", "aacghgh", "aabghgh"])); // BAD SET aacghgh

console.log(
  noPrefix([
    "aab",
    "defgab",
    "abcde",
    "aabcde",
    "cedaaa",
    "bbbbbbbbbb",
    "jabjjjad",
  ])
); // BAD SET aabcde

console.log(
  noPrefix([
    "hgiiccfchbeadgebc",
    "biiga",
    "edchgb",
    "ccfdbeajaeid",
    "ijgbeecjbj",
    "bcfbbacfbfcfbhcbfjafibfhffac",
    "ebechbfhfcijcjbcehbgbdgbh",
    "ijbfifdbfifaidje",
    "acgffegiihcddcdfjhhgadfjb",
    "ggbdfdhaffhghbdh",
    "dcjaichjejgheiaie",
    "d",
    "jeedfch",
    "ahabicdffbedcbdeceed",
    "fehgdfhdiffhegafaaaiijceijdgbb",
    "beieebbjdgdhfjhj",
    "ehg",
    "fdhiibhcbecddgijdb",
    "jgcgafgjjbg",
    "c",
    "fiedahb",
    "bhfhjgcdbjdcjjhaebejaecdheh",
    "gbfbbhdaecdjaebadcggbhbchfjg",
    "jdjejjg",
    "dbeedfdjaghbhgdhcedcj",
    "decjacchhaciafafdgha",
    "a",
    "hcfibighgfggefghjh",
    "ccgcgjgaghj",
    "bfhjgehecgjchcgj",
    "bjbhcjcbbhf",
    "daheaggjgfdcjehidfaedjfccdafg",
    "efejicdecgfieef",
    "ciidfbibegfca",
    "jfhcdhbagchjdadcfahdii",
    "i",
    "abjfjgaghbc",
    "bddeejeeedjdcfcjcieceieaei",
    "cijdgbddbceheaeececeeiebafgi",
    "haejgebjfcfgjfifhihdbddbacefd",
    "bhhjbhchdiffb",
    "jbbdhcbgdefifhafhf",
    "ajhdeahcjjfie",
    "idjajdjaebfhhaacecb",
    "bhiehhcggjai",
    "bjjfjhiice",
    "aif",
    "gbbfjedbhhhjfegeeieig",
    "fefdhdaiadefifjhedaieaefc",
    "hgaejbhdebaacbgbgfbbcad",
    "heghcb",
    "eggadagajjgjgaihjdigihfhfbijbh",
    "jadeehcciedcbjhdeca",
    "ghgbhhjjgghgie",
    "ibhihfaeeihdffjgddcj",
    "hiedaegjcdai",
    "bjcdcafgfjdejgiafdhfed",
    "fgdgjaihdjaeefejbbijdbfabeie",
    "aeefgiehgjbfgidcedjhfdaaeigj",
    "bhbiaeihhdafgaciecb",
    "igicjdajjdegbceibgebedghihihh",
    "baeeeehcbffd",
    "ajfbfhhecgaghgfdadbfbb",
    "ahgaccehbgajcdfjihicihhc",
    "bbjhih",
    "a",
    "cdfcdejacaicgibghgddd",
    "afeffehfcfiefhcagg",
    "ajhebffeh",
    "e",
    "hhahehjfgcj",
    "ageaccdcbbcfidjfc",
    "gfcjahbbhcbggadcaebae",
    "gi",
    "edheggceegiedghhdfgabgcd",
    "hejdjjbfacggdccgahiai",
    "ffgeiadgjfgecdbaebagij",
    "dgaiahge",
    "hdbaifh",
    "gbhccajcdebcig",
    "ejdcbbeiiebjcagfhjfdahbif",
    "g",
    "ededbjaaigdhb",
    "ahhhcibdjhidbgefggdjebfcf",
    "bdigjaehfchebiedajcjdh",
    "fjehjgbdbaiifi",
    "fbgigbdcbcgffdicfcidfdafghajc",
    "ccajeeijhhb",
    "gaaagfacgiddfahejhbgdfcfbfeedh",
    "gdajaigfbjcdegeidgaccjfi",
    "fghechfchjbaebcghfcfbdicgaic",
    "cfhigaciaehacdjhfcgajgbhhgj",
    "edhjdbdjccbfihiaddij",
    "cbbhagjbcadegicgifgghai",
    "hgdcdhieji",
    "fbifgbhdhagch",
    "cbgcdjea",
    "dggjafcajhbbbaja",
    "bejihed",
    "eeahhcggaaidifdigcfjbficcfhjj",
  ])
); // BAD SET d
